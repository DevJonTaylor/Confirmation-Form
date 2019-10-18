<template>
  <div v-form.row>
    <panel v-top-border:tan>
      <grid-div>
        <panel-title v-width>Shipping Address</panel-title>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-input-text
            name="Address"
            placeholder="Shipping Address"
            v-model="$root.shipping.address"
            @change="$root.updatePrevious($event.target.value, 'address')"
          ></form-input-text>
        </div>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-input-text
            name="City"
            v-model="$root.shipping.city"
            @change="$root.updatePrevious($event.target.value, 'city')"
          ></form-input-text>
        </div>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-select
            :options="states"
            name="State or Province"
            v-model="$root.shipping.state"
            @change="$root.updatePrevious($event.target.value, 'state')"
          ></form-select>
        </div>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-input-text
            v-show="$root.shipping.state === 'Other/Non-USA'"
            name="Other State or Province"
            v-model="$root.shipping.other"
            @change="$root.updatePrevious($event.target.value, 'other')"
          ></form-input-text>
        </div>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-input-text
            name="Zip Code"
            placeholder="Zip or Postal Code"
            v-model="$root.shipping.postal"
            @change="$root.updatePrevious($event.target.value, 'postal')"
          ></form-input-text>
        </div>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-select
            :options="countries"
            name="Country"
            v-model="$root.shipping.country"
            @change="$root.updatePrevious($event.target.value, 'country')"
          ></form-select>
        </div>
      </grid-div>
    </panel>
  </div>
</template>

<script>
  import Panel from "../UIKit/Panel/Panel.vue";
  import PanelTitle from "../UIKit/Panel/Title.vue";
  import GridDiv from "../UIKit/Grid/GridDiv";
  import FormInputText from "../Form/Input/Text";
  import {forIn} from 'lodash';
  import {states, countries} from '../../Data/StatesAndCountries';
  import FormSelect from "../Form/Select";

  export default {
    name: "SectionShipping",
    components: {FormSelect, FormInputText, GridDiv, PanelTitle, Panel},
    data() {
      return {nextId: 0, states: [], countries: []}
    },
    methods: {
      newId() {
        let id = this.nextId;
        this.nextId += 1;

        return id;
      }
    },
    computed: {
      // make them data and add at mount.
    },
    created() {
      let preparedStates = [];
      let preparedCountries = [];
      forIn(states, option => {
        option.id = this.newId();
        preparedStates.push(option)
      });
      forIn(countries, option => {
        option.id = this.newId();
        preparedCountries.push(option)
      });
      this.states = preparedStates.concat();
      this.countries = preparedCountries;
    }
  }
</script>

<style>

</style>
