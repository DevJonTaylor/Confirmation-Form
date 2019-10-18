<template>
  <label>
    <slot name="front"></slot>
    {{label}}
    <input type="text" v-form.large v-bind:value="value" v-on="inputListeners">
    <slot name="back"></slot>
  </label>
</template>

<script>
  import VModelInput from "../../Mixins/VModelInput";

  export default {
    name: "LabelText",
    props: {
      label: {
        type: String,
        required: true
      }
    },
    mixins: [VModelInput],
    computed: {}
  }
</script>

<style>

</style>
