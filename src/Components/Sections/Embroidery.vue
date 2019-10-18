<template>
  <div v-form.row>
    <panel v-top-border:tan>
      <grid-div v-form>
        <panel-title v-width>Embroidery Options</panel-title>
        <div v-margin:top v-width>
          <h6 class="uk-h6">
            Some of our volunteers are able to create personalized patches that include your angels name,
            but not all of our Bear Artists are able to do this.
            We have seen an increase in the request for names to be added to Molly Bears.
            At this time we are implementing a $10 embroidery fee.
            This fee will provide the funds needed to continue to purchase the materials required to create
            personalized patches and allow us to purchase equipment so that all of our volunteers have this capability.
            Please note that until all of our Bear Artists have the capability to add names to our Molly Bears,
            production times can be delayed if there is an overwhelming demand for embroidered names.
          </h6>
          <h6 class="uk-h6" v-txt.bold.primary v-margin:top>
            For embroidery,
            you may enter your angel's full name below,
            but we can only guarantee that your angel's first name will appear on the bear.
            If your angel's first name is a two word name (Examples: Mary Beth, Emma Leigh)
            please be sure to note that in the special request section of this order form.
          </h6>
          <h6 v-margin:top v-txt.primary>
            Would you like your Molly Bear to include your angel's name?
          </h6>
        </div>
        <div v-width.m:1-2.s v-margin:top>
          <form-select
            :disabled="$root.embroidery.alreadyPurchased"
            name="Embroidery 1"
            :options="embroidery"
            v-model="$root.embroidery.selected"
          ></form-select>
        </div>
        <div v-width.m:1-2.s v-margin:top>
          <form-input-text
            v-show="$root.embroidery.selected === 'Yes, embroider my angel’s name'"
            name="Embroidery 1 Name"
            v-model="$root.embroidery.text"
            placeholder="Embroidery Name"
            @change="$root.updatePrevious($event.target.value, 'text')"
          ></form-input-text>
        </div>
      </grid-div>
    </panel>
  </div>
</template>

<script>
  import Panel from "../UIKit/Panel/Panel.vue";
  import PanelTitle from "../UIKit/Panel/Title.vue";
  import GridDiv from "../UIKit/Grid/GridDiv";
  import FormSelect from "../Form/Select";
  import FormInputText from "../Form/Input/Text";

  export default {
    name: "SectionEmbroidery",
    components: {FormInputText, FormSelect, GridDiv, PanelTitle, Panel},
    data() {
      return {
        embroidery: [
          {id: 0, value: 'Yes, embroider my angel’s name', text: 'Yes, embroider my angel’s name - $10.00'},
          {id: 1, value: 'No embroidery requested', text: 'No embroidery requested'}
        ]
      }
    }
  }
</script>

<style>

</style>
