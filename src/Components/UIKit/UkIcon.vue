<template>
  <i :class="`uk-icon-${name} ${ukSize}`"></i>
</template>

<script>
  export default {
    name: "UkIcon",
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: false,
        default: ''
      }
    },
    computed: {
      ukSize() {
        return this.size === '' ? '' : `uk-icon-${this.size}`;
      }
    }
  }
</script>
