<template>
  <div v-form.row>
    <info>
      <p>
        <uk-icon name="info-circle" class="ic-blue uk-icon-large"></uk-icon>
        Your order information is listed in the fields below.
        If everything is correct, please scroll to the bottom and click save.
        Clicking “Save” will confirm the details of your order.
      </p>
      <p>
        If you need to make changes, please edit the information in the fields below.
        Once you are finished editing your order details, hit the save button at the bottom of this page.
        Clicking “Save” will confirm the details of your order.
      </p>
      <p>
        If shipping is owed on your order, it has been calculated below based on the weight and address provided on
        your order form.
        If you owe shipping and are changing your angel’s weight or your shipping address, please STOP and
        <a href="/contact/contact-us" target="_blank">Contact Us</a>
        first.
        We will calculate a new shipping total based on the correct
        information and resend this confirmation link to you.
      </p>
    </info>
  </div>
</template>

<script>
  import Info from "../UIKit/Alert/Info.vue";
  import UkIcon from "../UIKit/UkIcon.vue";

  export default {
    name: "SectionInfo",
    components: {UkIcon, Info}
  }
</script>

<style>

</style>
