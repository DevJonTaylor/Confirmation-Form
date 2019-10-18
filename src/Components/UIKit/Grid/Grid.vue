<template>
  <ul class="uk-grid" :class="classes" :data-uk-grid-match="ukGrid">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: "Grid",
    props: {
      match: {
        required: false,
        default: '',
        type: String
      },
      child: {
        required: false,
        default: '',
        type: String
      }
    },
    computed: {
      ukGrid() {
        let grid = {};
        if (this.match === '') return '';

        grid.target = this.match;
        return JSON.stringify(grid);
      },
      classes() {
        return this.child === '' ? '' : `uk-grid-width-${this.child}`;
      }
    }
  }
</script>

<style scoped>

</style>
