<template>
  <panel v-form.row v-top-border:pink>
    <grid-div>
      <panel-title v-width>Personal Information</panel-title>
      <div v-width v-margin:top class="uk-hidden-notouch">
        <h4 class="uk-h4" v-txt:center>Order Number #{{$root.personal.orderNumber}}</h4>
      </div>
      <div v-width.m:1-2.s:1-1 v-margin:top>
        <form-input-text
          name="First Name"
          @change="$root.updatePrevious($event.target.value, 'firstName')"
          v-model="$root.personal.firstName"
        ></form-input-text>
      </div>
      <div v-width.m:1-2.s:1-1 v-margin:top>
        <form-input-text
          name="Last Name"
          @change="$root.updatePrevious($event.target.value, 'lastName')"
          v-model="$root.personal.lastName"
        ></form-input-text>
      </div>
      <div v-width:1-3 v-margin:top class="uk-hidden-touch">
        <h4 class="uk-h4 mb-line-height-2" v-txt:center>Order Number #{{$root.personal.orderNumber}}</h4>
      </div>
      <div v-width.l:1-3.m:1-2.s:1-1 v-margin:top>
        <form-input-text
          name="Phone"
          @change="$root.updatePrevious($event.target.value, 'phone')"
          v-model="$root.personal.phone"
        ></form-input-text>
      </div>
      <div v-width.l:1-3.m:1-2.s:1-1 v-margin:top>
        <form-input-text
          name="Email"
          @change="$root.updatePrevious($event.target.value, 'email')"
          v-model="$root.personal.email"
        ></form-input-text>
      </div>
    </grid-div>
  </panel>
</template>

<script>
  import Panel from "../UIKit/Panel/Panel";
  import PanelTitle from "../UIKit/Panel/Title";
  import FormInputText from "../Form/Input/Text";
  import GridDiv from "../UIKit/Grid/GridDiv";

  export default {
    name: "SectionPersonal",
    components: {GridDiv, FormInputText, PanelTitle, Panel}
  }
</script>

<style>
  .mb-line-height-2 {
    line-height: 2em;
  }
</style>
