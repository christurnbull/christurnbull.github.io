import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// === START of GitHub Pages SPA Redirect Logic ===
const ghPagesSpaRedirect = sessionStorage.getItem('ghPagesSpaRedirect');
if (ghPagesSpaRedirect) {
  // Remove the item from sessionStorage to clean up
  sessionStorage.removeItem('ghPagesSpaRedirect');

  // Use history.replaceState to change the URL in the browser's address bar
  // back to the original requested path, WITHOUT causing another page load.
  // This makes the browser "think" it was always at the deep link,
  // and your Angular Router will then correctly pick it up.
  window.history.replaceState(null, '', ghPagesSpaRedirect);
}
// === END of GitHub Pages SPA Redirect Logic ===

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
