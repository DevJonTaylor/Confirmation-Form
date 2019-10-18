<template>
  <div v-width>
    <div v-width v-form.row>
      <div class="uk-position-relative">
        <img class="uk-position-bottom-left uk-hidden-small" :src="cardImage" width="70px">
        <input-text
          id="card"
          v-width
          v-margin:top
          v-margin.no:bottom
          v-model="$root.payment.card"
          placeholder="1234 5678 9012 3456"
        ></input-text>
      </div>
    </div>
    <div v-width v-form.row>
      <div v-form.controls>
        <input-text
          id="exp"
          v-form.large
          v-float:left
          v-margin:bottom
          size="8"
          placeholder="MM / YY"
          v-model="$root.payment.exp"
        ></input-text>
        <input-text
          size="4"
          id="cvv"
          v-float:right
          v-margin:bottom
          placeholder="CVV"
          v-form.large
          v-model="$root.payment.cvv"
        ></input-text>
      </div>
    </div>
    <div v-width v-form.row>
      <div v-form.controls>
        <input-text
          v-width
          v-margin:bottom
          placeholder="First Name"
          v-model="$root.payment.firstName"
        ></input-text>
      </div>
    </div>
    <div v-width v-form.row>
      <div v-form.controls>
        <input-text
          v-width
          v-margin:bottom
          placeholder="Last Name"
          v-model="$root.payment.lastName"
        ></input-text>
      </div>
    </div>
  </div>
</template>

<script>
  import InputText from "./UIKit/Form/Input/Text";

  export default {
    name: "CreditCardElements",
    components: {InputText},
    computed: {
      cardImage() {
        return `/plugins/system/paypalpro/images/${this.$root.cardType}.svg`;
      }
    },
    mounted() {
      $('#card').payment('formatCardNumber');
      $('#exp').payment('formatCardExpiry');
      $('#cvv').payment('formatCardCVC');
    }
  }
</script>

<style lang="scss">
  @media only screen and (min-width: 767px) {
    #card {
      padding-left: 28% !important;
    }
  }

  @media only screen and (min-width: 1200px) {
    #card {
      padding-left: 20% !important;
    }
  }
</style>
