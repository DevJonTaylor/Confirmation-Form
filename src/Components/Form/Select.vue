<template>
  <div v-form.row>
    <div class="uk-form-controls">
      <uk-select
        :options="options"
        :name="theName"
        @input.native="updateValue($event.target.value)"
        @change.native="onChange"
        :value="value"
        :disabled="disabled"
      ></uk-select>
    </div>
  </div>
</template>

<script>
  import UkSelect from "../UIKit/Form/Select";

  export default {
    name: "FormSelect",
    components: {UkSelect},
    props: {
      name: {
        type: [String, Array],
        required: false,
        default: ''
      },
      options: {
        type: Array,
        required: true
      },
      value: {
        type: String,
        required: false,
        default: ''
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
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
      theName() {
        return Array.isArray(this.name) ? `form[${this.name[0]}][${this.name[1]}]` : `form[${this.name}][]`
      }
    }
  }
</script>

<style>

</style>
