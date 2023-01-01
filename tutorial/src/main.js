import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

// allows us to configure a few app-level options, for example, defining an app-level error handler that captures errors from all descendant components
// app.config.errorHandler = (err) => {
//   // handle error
// }

// registering app-scoped assets
// this makes the TodoDeleteButton available for use anywhere in our app
// app.component('TodoDeleteButton', TodoDeleteButton)

// let's say we have a container: <div id="app"></div>
// we need to mount our app (once it is available to mount) inside a container
// the container itself is not considered as part of the app
// The .mount() method should always be called after all app configurations and asset registrations are done
app.mount('#app')

// we can create multiple apps and mount them in different containers
