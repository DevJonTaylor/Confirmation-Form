<template>
  <input type="text" v-form.large v-bind:value="value" v-on="inputListeners" @change="onChange($event)">
</template>

<script>
  import VModelInput from "../../Mixins/VModelInput";

  export default {
    name: "InputText",
    mixins: [VModelInput],
    methods: {
      onChange(event) {
        this.$emit('change', event);
      }
    }
  }
</script>

<style>

</style>
