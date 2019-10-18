<template>
  <textarea
    :cols="cols"
    :rows="rows"
    :value="value"
    @input="inputListeners($event.target.value)"
    @change="onChange"
  ></textarea>
</template>

<script>
  export default {
    name: "UkTextarea",
    props: {
      cols: {
        type: [Number, String],
        required: false,
        default: 75
      },
      rows: {
        type: [Number, String],
        required: false,
        default: 3
      },
      value: {
        type: String,
        required: false,
        default: ''
      }
    },
    methods: {
      inputListeners(value) {
        this.$emit('input', value);
      },
      onChange(event) {
        this.$emit('change', event);
      }
    }
  }
</script>
