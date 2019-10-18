<template>
  <div class="uk-grid" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GridDiv",
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

<style>

</style>
