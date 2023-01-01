<script>
export default {
  props: {
    todos: { type: Array, required: true },
    removeTodo: { type: Function },
  },
  emits: ['response'],
  created() {
    this.$emit('response', 'Hello from Child')
  }
}
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

  <slot>No slot passed</slot>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
