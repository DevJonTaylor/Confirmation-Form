export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    inputListeners() {
      let self = this;
      return Object.assign({}, this.$listeners, {
        input(event) {
          self.$emit('input', event.target.value);
        }
      })
    }
  }
}
