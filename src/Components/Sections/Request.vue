<template>
  <div v-form.row>
    <panel v-top-border:pink>
      <grid-div>
        <panel-title v-width>Personalization Requests</panel-title>
        <h6 v-width.m:1-3.s v-txt.primary v-margin:top class="uk-h6">
          It is important to remember that all special requests are not guaranteed.
          Our absolute guarantee is that your Molly Bear will match the weight you have provided us,
          and we promise the weight of your angel will be comforting in your arms.
        </h6>
        <div v-width.m:2-3.s v-margin:top>
          <info>
            <h6 class="uk-h6">
              We understand all too well that when our angels are no longer with us seemingly small details to some
              people can become big details to us. For this reason, we want to provide a personalized bear that is not
              only comforting but is also meaningful to you. Our team is all volunteers. Some of the requests that have
              been given to us are not possible for several reasons.
              Our team will do its best to match up to 2 of your requests.
            </h6>
          </info>

        </div>
        <div v-width v-margin:top>
          <hr>
          <form-checkbox
            @change="toggleRequests"
            name="Plain Bear"
            the-id="plainBear"
            v-model="$root.requests.plainBear"
            v-txt.primary
          >
            Plain Bear, NO DECORATIONS.
            Check this if you do NOT want our bear makers to add ANY decor or items to your bear.
            You will receive a PLAIN, weighted Molly Bear.
          </form-checkbox>
          <hr>
        </div>
        <div v-width.m:1-2.s v-show="!$root.requests.plainBear" v-margin:top>
          <form-input-text
            the-id="bearColor"
            name="Bear Color"
            v-model="$root.requests.bearColor"
            placeholder="Molly Bear Color or Pattern"
            @change="$root.updatePrevious($event.target.value, 'bearColor')"
          >
            <strong v-txt.primary>1.</strong> Please tell us what specific colors or patterns you associate with your
            angel.
            (I.E. Baby Blue, Purple, Royal Blue Chevron pattern, pastel polka dots, etc.)
          </form-input-text>
        </div>
        <div v-width.m:1-2.s v-show="!$root.requests.plainBear" v-margin:top>
          <form-input-text
            the-id="bearTheme"
            name="Bear Theme"
            v-model="$root.requests.bearTheme"
            placeholder="Molly Bear Theme"
            @change="$root.updatePrevious($event.target.value, 'bearTheme')"
          >
            <strong v-txt.primary>2.</strong> Please tell us if there was a specific theme you associate with your
            angel. (I.E. Butterflies, Zoo Animals, Nursery decorations, a Nickname, etc.)
          </form-input-text>
        </div>
        <div v-width.m:1-2.s v-show="!$root.requests.plainBear" v-margin:top>
          <form-input-text
            the-id="bearOmit"
            name="Bear Omit"
            v-model="$root.requests.bearOmit"
            placeholder="Molly Bear Omit Item(s)"
            @change="$root.updatePrevious($event.target.value, 'bearOmit')"
          >
            <strong v-txt.primary>3.</strong> Please share any items that you do NOT want on your bear.
            (I.E. Nothing Religious, Please do not use a white bear, I don't like baby animals, etc.)
          </form-input-text>
        </div>
        <div v-width.m:1-2.s v-show="!$root.requests.plainBear" v-margin:top>
          <form-textarea
            the-id="specialRequests"
            name="Special Requests"
            v-model="$root.requests.special"
            placeholder="Additional Special Requests or Notes (Limit 200 Characters)"
            @change="$root.updatePrevious($event.target.value, 'special')"
          >
            <strong v-txt.primary>4.</strong> If you have a specific request,
            have seen a decor item, bear style or detail that you love, please list that information here.
          </form-textarea>
        </div>
      </grid-div>
    </panel>
  </div>
</template>

<script>
  import Panel from "../UIKit/Panel/Panel.vue";
  import PanelTitle from "../UIKit/Panel/Title.vue";
  import GridDiv from "../UIKit/Grid/GridDiv";
  import Info from "../UIKit/Alert/Info";
  import FormCheckbox from "../Form/Input/Checkbox";
  import FormInputText from "../Form/Input/Text";
  import FormTextarea from "../Form/Input/Textarea";

  export default {
    name: "SectionRequest",
    components: {FormTextarea, FormInputText, FormCheckbox, Info, GridDiv, PanelTitle, Panel},
    methods: {
      toggleRequests() {
        let plain = this.$root.requests.plainBear !== this.submission['Plain Bear'];
        let color = this.$root.requests.bearColor !== '';
        let theme = this.$root.requests.bearTheme !== '';
        let omit = this.$root.requests.bearOmit !== '';
        let special = this.$root.requests.special !== '';

        if (plain && (color || theme || omit || special) && !this.$root.messages.confirm.requests) {
          let msg = `If you select this it will erase your already saved values for Colors, Themes, Omits, and Special Requests.`;
          let revert = [[this.$root, 'requests.plainBear', false]];
          let save = [
            [this.$root, 'requests.bearColor', ''],
            [this.$root, 'requests.bearTheme', ''],
            [this.$root, 'requests.bearOmit', ''],
            [this.$root, 'requests.special', ''],
          ];
          this.$root.confirmMessage(msg, revert, save);
        } else {
          this.$root.requests.bearColor = '';
          this.$root.requests.bearTheme = '';
          this.$root.requests.bearOmit = '';
          this.$root.requests.special = '';
        }
      }
    }
  }
</script>

<style>

</style>
