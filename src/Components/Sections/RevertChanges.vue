<template>
  <div class="changes-container">
    <grid-div>

    </grid-div>
  </div>
</template>

<script>
  import GridDiv from "../UIKit/Grid/GridDiv";
  import UkButton from "../UIKit/Buttons/Button";

  export default {
    name: "RevertChanges",
    components: {UkButton, GridDiv}
  }
</script>

<style lang="scss">
  .changes-container {
    position: fixed;
    top: 0;
    right: 50px;
    width: 200px;
    transition: all 250ms 0ms ease-in-out;
  }

  .mb-fade {
    opacity: 0;
  }
</style>
