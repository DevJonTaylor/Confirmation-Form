<template>
  <div class="uk-form-controls">
    <label :for="theId" v-if="theId !== ''">
      <h6 class="uk-h6">
        <slot></slot>
      </h6>
    </label>
    <uk-textarea
      :id="theId"
      :value="value"
      @input.native="updateValue($event.target.value)"
      @change="onChange"
      :placeholder="ph"
      :name="inputName"
      :disabled="disabled"
      :cols="cols"
      :rows="rows"
    >
    </uk-textarea>
  </div>
</template>

<script>
  import UkTextarea from '../../UIKit/Form/Textarea';

  export default {
    name: "FormTextarea",
    components: {UkTextarea},
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
        default: ''
      },
      cols: {
        type: [String, Number],
        required: false,
        default: 75
      },
      rows: {
        type: [String, Number],
        required: false,
        default: 3
      }
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
      onChange(event) {
        this.$emit('change', event);
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
