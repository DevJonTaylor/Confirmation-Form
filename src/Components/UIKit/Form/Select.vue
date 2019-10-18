<template>
  <select :value="value" @change="onChange" v-form.large @input="updateValue($event.target.value)">
    <option v-for="option of options" :value="option.value" :key="option.id">{{option.text}}</option>
  </select>
</template>

<script>
  export default {
    name: "UkSelect",
    props: {
      options: {
        type: Array,
        required: true
      },
      value: {
        type: String,
        required: false,
        default: ''
      }
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
      onChange(event) {
        this.$emit('change', event);
      }
    }
  }
</script>

<style>
  select.uk-form-large {
    height: 50px !important
  }
</style>
