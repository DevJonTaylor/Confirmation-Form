<template>
  <img :src="url" class="uk-responsive-height mb-bs-width-50px">
</template>

<script>
  export default {
    name: "UkImg",
    props: {
      url: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  img.uk-responsive-height.mb-bs-width-50px {
    width: 50px !important;
    cursor: pointer;
  }
</style>
