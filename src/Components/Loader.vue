<template>
  <transition :duration="250" name="fade">
    <div v-show="loading" id="coverScreen" class="loading-container">
      <div v-flex:f.center.middle>
        <hollow-dots-spinner
          :animation-duration="1000"
          :dot-size="50"
          :dots-num="3"
          color="#a572b7"
        />
      </div>
    </div>
  </transition>
</template>

<script>
  import {HollowDotsSpinner} from 'epic-spinners'

  export default {
    name: "Loader",
    components: {HollowDotsSpinner},
    props: {
      loading: {
        type: Boolean,
        required: true,
      }
    }
  }
</script>

<style lang="scss">
  .fade-enter-active, .loading-leave-active {
    transition: opacity 250ms;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  #coverScreen {
    content: ' ';
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 10000;
    transition: all 250ms 0ms ease-in-out;

    div {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
</style>
