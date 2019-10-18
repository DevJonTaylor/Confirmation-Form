<template>
  <div v-form.row>
    <div class="uk-form-controls">
      <label :for="theId" v-if="theId !== ''">
        <checkbox
          :id="theId"
          :value="value"
          :name="name !== '' ? `form[${name}][]` : ''"
          @change="onCheckboxChange"
        ></checkbox>&nbsp;
        <slot></slot>
      </label>
      <checkbox
        :value="value"
        :name="name !== '' ? `form[${name}][]` : ''"
        @change="onCheckboxChange"
        v-else
      ></checkbox>
    </div>
  </div>
</template>

<script>
  import Checkbox from "../../UIKit/Form/Input/Checkbox";

  export default {
    name: "FormCheckbox",
    components: {Checkbox},
    props: {
      theId: {
        type: String,
        required: false,
        default: ''
      },
      value: {
        type: Boolean,
        required: false,
        default: false
      },
      name: {
        type: String,
        required: false,
        default: ''
      }
    },
    methods: {
      onCheckboxChange(value) {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  }
</script>

<style>

</style>
