<template>
  <input type="radio" :value="value" @change="onRadioChanged($event.target.checked)">
</template>

<script>
  export default {
    name: "UkRadio",
    props: {
      value: {
        type: String,
        required: true
      }
    },
    methods: {
      onRadioChanged(value) {
        if (value === true) this.$emit('changed', this.value);
      }
    }
  }
</script>

<style>

</style>
