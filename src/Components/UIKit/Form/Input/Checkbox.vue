<template>
  <input type="checkbox" :checked="value" @change="onCheckboxChanged($event.target.checked)">
</template>

<script>

  export default {
    name: "Checkbox",
    props: {
      value: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      onCheckboxChanged(checked) {
        this.$emit('change', checked);
      }
    }
  }
</script>
