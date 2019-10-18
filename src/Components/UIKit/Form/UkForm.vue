<template>
  <form class="uk-form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: "UkForm",
    methods: {
      onSubmit(event) {
        this.$emit('submit', event);
      }
    }
  }
</script>

<style>

</style>
