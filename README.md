# Vue
 
## Commands

```bash
npm init vue@latest # creates vue project
npm run dev # run in development
npm run build # creates a production-ready build
```

## Using &lt;script&gt;

We can use Vue without installing it via script.

```html
<!-- here we are using unpkg, but we can also use any CDN that serves npm packages -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

