<script>
export default {
  data() {
    return {
      visiblePages: [
        'Recibidos',
        'Enviados',
        'Borradores',
      ],
      hiddenPages: [
        'Destacados',
        'Pospuestos',
        'Importantes',
        'Chats',
        'Programados',
        'Todos',
        'Spam',
        'Papelera',
        'Recibidos',
        'Recibidos',
        'Recibidos',
      ],
      showHiddenPages: false,
    }
  }
}
</script>

<template>
  <div class="SidePanel">
    <ul class="Pages">
      <li v-for="page in visiblePages" :key="page">
        {{ page }}
      </li>

      <li class="Pointer" @click="showHiddenPages = !showHiddenPages">
        {{ showHiddenPages ? 'Less' : 'More' }}
      </li>

      <li v-if="showHiddenPages" v-for="page in hiddenPages">
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.Pointer {
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.SidePanel {
  height: 100vh;
  width: 225px;
  padding: 20px;
  -webkit-box-shadow: 3px 0px 3px 0px rgb(200, 200, 200);
  -moz-box-shadow: 3px 0px 3px 0px rgb(200, 200, 200);
  box-shadow: 3px 0px 3px 0px rgb(200, 200, 200);

  .Pages {
    -webkit-font-smoothing: antialiased;
    list-style-type: none;
    font-size: .875rem;
    letter-spacing: normal;
    color: #202124;
    text-shadow: none;

    li + li {
      margin-top: 10px;
    }
  }
}
</style>
