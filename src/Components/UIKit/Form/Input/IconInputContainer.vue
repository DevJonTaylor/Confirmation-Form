<template>
  <div :class="`uk-form-${!flip ? 'icon' : 'icon-flip'}`">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "IconInputContainer",
    props: {
      flip: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>
