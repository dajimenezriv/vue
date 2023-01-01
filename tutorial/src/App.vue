<!-- this is a Vue Single-File Component (SFC) -->
<script>
import Todos from './components/Todos.vue'

let id = 0

export default {
  components: {
    Todos,
  },
  data() {
    return {
      awesome: false,
      newTodo: '',
      hideCompleted: false,
      todos: [],
      childMsg: 'No Child Message yet',
    }
  },
  // we can use this variables after the component is mounted
  mounted() {
    this.fetchData()
    this.$refs.h1.textContent = 'Changed by ref'
  },
  computed: {
    filteredTodos() {
      return (this.hideCompleted)
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  methods: {
    async fetchData() {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              { id: id++, text: 'Learn Vue', done: true },
              { id: id++, text: 'Learn Angular', done: true },
              { id: id++, text: 'Learn React', done: false },
            ]
          })
        }, 1000)
      })
      this.todos = res.data
    },
    onInput(e) { this.text = e.target.value },
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) { this.todos = this.todos.filter((t) => t.id !== todo.id) }
  },
  // we are listening to variable changes
  // it's like dependencies
  watch: {
    count(newCount) {
      console.log(`New count is ${newCount}`)
    }
  },
}
</script>

<template>
  <!-- this is called a mustache ({{ message }}), used for text interpolation -->
  <!-- v-bind:id === :id -->
  <!-- we can listen to DOM events, v-on:click === @click -->
  <!-- :value="text" @input="onInput" === v-model="text" -->

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 ref="h1" v-else>Oh no 😢</h1>

  <form @submit.prevent="addTodo">
    <input v-model="newTodo" placeholder="New Todo" />
    <button type="submit">Add Todo</button>
  </form>

  <Todos :todos="filteredTodos" :removeTodo="removeTodo" @response="(msg) => childMsg = msg">
    <p>Some Slot Content</p>
  </Todos>

  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show All' : 'Hide Completed' }}
  </button>

  <p>{{ childMsg }}</p>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
