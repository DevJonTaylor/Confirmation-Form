<template>
  <div class="uk-form-controls">
    <label :for="theId" v-if="theId !== ''">
      <h6 class="uk-h6">
        <slot></slot>
      </h6>
    </label>
    <input-text
      :id="theId"
      :value="value"
      @input.native="updateValue($event.target.value)"
      @change="onTextChange($event)"
      size="30"
      :placeholder="ph"
      :name="inputName"
      :disabled="disabled"
    >
    </input-text>
  </div>
</template>

<script>
  import InputText from "../../UIKit/Form/Input/Text.vue";

  export default {
    name: "FormInputText",
    components: {InputText},
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: false,
        default: ''
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      },
      theId: {
        type: String,
        required: false,
        default: '',

      }
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
      onTextChange(event) {
        this.$emit('change', event)
      }
    },
    computed: {
      inputName() {
        return `form[${this.name}]`
      },
      ph() {
        return this.placeholder === '' ? this.name : this.placeholder;
      }
    }
  }
</script>

<style>

</style>
