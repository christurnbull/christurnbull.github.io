import { Injectable, OnDestroy } from '@angular/core';

/*
* Mimicks Web Storage API but keeps the data in memory and
* Uses localStorage to persist data when a tab is closed.
* The store is synchronized between tabs/windows using the Broadcast API
* All data is stored in a single Store object
*/
@Injectable({ providedIn: 'root' })
export class MemoryStorageService implements OnDestroy {

  constructor() {
    this.channel.addEventListener('message', this.#bindMessage)
    this.#onLoad()
    window.addEventListener('beforeunload', this.#bindBeforeUnload)
  }

  storeKey = '_memoryStorage'
  store: { [key: string]: any } = {}
  channel: BroadcastChannel = new BroadcastChannel(this.storeKey)

  ready: Promise<boolean> = new Promise((resolve) => { this.#resolveReady = resolve })
  #resolveReady!: (value: boolean | PromiseLike<boolean>) => void

  ngOnDestroy() {
    this.channel.removeEventListener('message', this.#bindMessage)
    window.removeEventListener('beforeunload', this.#bindBeforeUnload)
    this.channel.close()
  }

  setItem(key: string, value: any): void {
    this.store[key] = value
    this.#broadcastStore()
  }

  getItem(key: string): any {
    return this.store[key]
  }

  removeItem(key: string): void {
    delete this.store[key]
    this.#broadcastStore()
  }

  clear(): void {
    this.store = {}
    this.#broadcastStore()
  }

  #saveToLocalStorage() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.store))
  }
  #removeFromLocalStorage() {
    localStorage.removeItem(this.storeKey)
  }

  #broadcastStoreRequest() {
    this.channel.postMessage({ type: 'req' })
  }

  #broadcastStore() {
    this.channel.postMessage({ type: 'store', data: this.store })
  }

  #broadcastUnload() {
    this.channel.postMessage({ type: 'unload' })
  }

  #onLoad() {
    const mem = localStorage.getItem(this.storeKey)
    // console.log(mem)

    if (mem) {
      // this tab is the data from local storage

      // remove it from local starage
      localStorage.removeItem(this.storeKey)

      // add it to memory storage
      try { this.store = JSON.parse(mem) }
      catch (e) { console.error('Could not parse', this.storeKey) }

      // let dependents know this is ready
      this.#resolveReady(true)

      // broadcast it to other tabs
      this.#broadcastStore()
      // console.log(this.store)

    } else {
      // broadcast request for store
      this.#broadcastStoreRequest()

      // set ready after timeout in case there is no reply
      // from the broadcast (first time using the store)
      setTimeout(() => {
        this.#saveToLocalStorage()
        this.#resolveReady(true)
      }, 500)
    }
  }


  #message(event: MessageEvent): void {
    // console.log(event.data.type)
    if (event.data.type === 'store') {

      if (event.data.data) {
        this.store = event.data.data
      }
      // let dependents know this is ready
      this.#resolveReady(true)

    } else if (event.data.type === 'req') {
      // a tab does not the store, so broadcast it 
      this.#broadcastStore()

    } else if (event.data.type === 'unload') {
      // only the last open tab will persist the store in localstorage
      setTimeout(() => { this.#removeFromLocalStorage() }, 500)
    }
  }
  #bindMessage = (event: MessageEvent) => this.#message(event)


  #beforeUnload(event: BeforeUnloadEvent): void {
    this.#saveToLocalStorage()
    this.#broadcastUnload()
  }
  #bindBeforeUnload = (event: BeforeUnloadEvent) => this.#beforeUnload(event)
}
