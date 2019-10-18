<template>
  <div v-form.row>
    <panel v-top-border:purple>
      <grid-div>
        <panel-title v-width>Special Requests, Changes & Terms</panel-title>
        <div v-width v-margin:top>
          <form-textarea
            v-txt.primary
            name="Message1"
            v-model="$root.notes.message1"
            placeholder="Please list any special circumstances that apply to your order. For example, if you plan to move within the next 60 days, please let us know here."
            :cols=50
            :rows=5
          ></form-textarea>
        </div>
      </grid-div>
    </panel>
  </div>
</template>

<script>
  import Panel from "../UIKit/Panel/Panel.vue";
  import PanelTitle from "../UIKit/Panel/Title.vue";
  import GridDiv from "../UIKit/Grid/GridDiv";
  import FormTextarea from "../Form/Input/Textarea";
  import SectionCost from "./Cost";
  import FormCheckbox from "../Form/Input/Checkbox";

  export default {
    name: "SectionNotes",
    components: {FormTextarea, GridDiv, PanelTitle, Panel}
  }
</script>

<style>

</style>
