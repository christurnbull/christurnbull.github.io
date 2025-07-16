import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GtmService } from './services/gtm.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    public gtm: GtmService,
    private http: HttpClient,
  ) { }

  async ngOnInit() {
    // let s = await firstValueFrom(this.http.get('/assets/test.shard', { responseType: 'arraybuffer' }))
    // console.log(s);
    // console.log(new Uint8Array(s));
  }

  // async onFileSelected(evt: Event) {

  //   const inputEl = evt.target as HTMLInputElement
  //   if (!inputEl.files) { return }
  //   const selectedFile = inputEl.files.item(0)
  //   if (!selectedFile) { return }
  //   const shards = await this.shardFile(selectedFile)
  //   this.downloadShard('test.shard', shards[0])
  // }

  // async shardFile(file: File, shardSizeBytes = 10) {
  //   const buffer = await file.arrayBuffer()
  //   const shards = [
  //     new Uint8Array(buffer.slice(0, 10))
  //   ]
  //   // console.log();
  //   return shards
  // }

  // async downloadShard(filename: string, shard: Uint8Array) {
  //   return new Promise<void>((resolve, reject) => {
  //     const a = document.createElement('a')
  //     a.download = filename
  //     a.href = URL.createObjectURL(new Blob([shard]))
  //     a.onclick = () => {
  //       setTimeout(() => {
  //         URL.revokeObjectURL(a.href)
  //         resolve()
  //       })
  //     }
  //     a.onerror = (err) => reject(err)
  //     a.click()
  //   })
  // }
}
