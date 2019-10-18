<template>
  <button class="uk-button" :class="buttonClasses" :disabled="disabled" @click="emitEventClick($event)">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "UkButton",
    props: {
      type: {
        required: false,
        type: String,
        default: 'primary'
      },
      size: {
        required: false,
        type: String,
        default: ''
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      }
    },
    methods: {
      emitEventClick(event) {
        this.$emit('click', event);
      }
    },
    computed: {
      buttonClasses() {
        let buttonClasses = [];
        if (this.type !== '') buttonClasses.push(`uk-button-${this.type}`);
        if (this.size !== '') buttonClasses.push(`uk-button-${this.size}`);

        return buttonClasses.join(' ');
      }
    }
  }
</script>
