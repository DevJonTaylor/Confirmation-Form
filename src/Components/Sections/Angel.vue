<template>
  <div v-form.row>
    <panel v-top-border:purple>
      <grid-div>
        <panel-title v-width>Information About Your Angel Baby</panel-title>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-input-text
            name="Angels Name"
            placeholder="Angel's Name"
            v-model="$root.angel.name"
            @change="$root.updatePrevious($event.target.value, 'name')"
          ></form-input-text>
        </div>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-select
            v-width
            name="Angels Gender"
            :options="gender"
            v-model="$root.angel.gender"
            @change="$root.updatePrevious($event.target.value, 'gender')"
          ></form-select>
        </div>
        <div v-width.m:1-3.s:1-1 v-margin:top>
          <form-checkbox the-id="noWeight" name="No Weight" @change="trimesterValueChanges"
                         v-model="$root.angel.trimester">
            Check this box if you had a first trimester loss and/or the weight of your angel is unknown.
          </form-checkbox>
        </div>
        <div v-width.m:1-2.s:1-1 v-margin:top>
          <div v-form.row>
            <div class="uk-form-controls">
              <h6 class="uk-h6">
                Angel's Birthday:<br>
                <span v-txt.s>(Date of Birthday)</span>
              </h6>
              <uk-select
                v-margin.no:top
                name="form[Angels Birthday][m]"
                :options="months"
                v-form.large
                v-model="$root.angel.birthday.month"
                class="uk-hidden-small"
                @change="$root.updatePrevious($event.target.value, 'birthday')"
              ></uk-select>
              <uk-select
                v-width
                class="uk-visible-small"
                v-margin.no:top
                v-form.large
                name="form[Angels Birthday][m]"
                :options="months"
                v-model="$root.angel.birthday.month"
                @change="$root.updatePrevious($event.target.value, 'birthday')"
              ></uk-select>
              <span class="uk-hidden-small"> / </span>
              <span class="uk-visible-small" v-width>&nbsp;</span>
              <uk-select
                class="uk-hidden-small"
                v-margin.no:top
                v-form.large
                name="form[Angels Birthday][d]"
                :options="days"
                v-model="$root.angel.birthday.day"
                @change="$root.updatePrevious($event.target.value, 'birthday')"
              ></uk-select>
              <uk-select
                class="uk-visible-small"
                v-width
                v-margin.no:top
                v-form.large
                name="form[Angels Birthday][d]"
                :options="days"
                v-model="$root.angel.birthday.day"
                @change="$root.updatePrevious($event.target.value, 'birthday')"
              ></uk-select>
              <span class="uk-hidden-small"> / </span>
              <span class="uk-visible-small" v-width>&nbsp;</span>
              <uk-select
                class="uk-hidden-small"
                v-margin.no:top
                v-form.large
                name="form[Angels Birthday][y]"
                :options="years"
                v-model="$root.angel.birthday.year"
                @change="$root.updatePrevious($event.target.value, 'birthday')"
              ></uk-select>
              <uk-select
                class="uk-visible-small"
                v-width
                v-form.large
                v-margin.no:top
                name="form[Angels Birthday][y]"
                :options="years"
                v-model="$root.angel.birthday.year"
                @change="$root.updatePrevious($event.target.value, 'birthday')"
              ></uk-select>
            </div>
          </div>
        </div>
        <div v-width.m:1-2.s:1-1 v-margin:top>
          <div v-form.row>
            <div class="uk-form-controls">
              <h6 class="uk-h6">
                Angelversary Date:<br>
                <span v-txt.s>(Date of Passing)</span>
              </h6>
              <uk-select
                v-margin.no:top
                name="form[Angelversary Date][m]"
                :options="months"
                v-form.large
                v-model="$root.angel.angelversary.month"
                class="uk-hidden-small"
                @change="$root.updatePrevious($event.target.value, 'angelversary')"
              ></uk-select>
              <uk-select
                v-width
                class="uk-visible-small"
                v-margin.no:top
                v-form.large
                name="form[Angelversary Date][m]"
                :options="months"
                v-model="$root.angel.angelversary.month"
                @change="$root.updatePrevious($event.target.value, 'angelversary')"
              ></uk-select>
              <span class="uk-hidden-small"> / </span>
              <span class="uk-visible-small" v-width>&nbsp;</span>
              <uk-select
                class="uk-hidden-small"
                v-margin.no:top
                v-form.large
                name="form[Angelversary Date][d]"
                :options="days"
                v-model="$root.angel.angelversary.day"
                @change="$root.updatePrevious($event.target.value, 'angelversary')"
              ></uk-select>
              <uk-select
                class="uk-visible-small"
                v-width
                v-margin.no:top
                v-form.large
                name="form[Angelversary Date][d]"
                :options="days"
                v-model="$root.angel.angelversary.day"
                @change="$root.updatePrevious($event.target.value, 'angelversary')"
              ></uk-select>
              <span class="uk-hidden-small"> / </span>
              <span class="uk-visible-small" v-width>&nbsp;</span>
              <uk-select
                class="uk-hidden-small"
                v-margin.no:top
                v-form.large
                name="form[Angelversary Date][y]"
                :options="years"
                v-model="$root.angel.angelversary.year"
                @change="$root.updatePrevious($event.target.value, 'angelversary')"
              ></uk-select>
              <uk-select
                class="uk-visible-small"
                v-width
                v-form.large
                v-margin.no:top
                name="form[Angelversary Date][y]"
                :options="years"
                v-model="$root.angel.angelversary.year"
                @change="$root.updatePrevious($event.target.value, 'angelversary')"
              ></uk-select>
            </div>
          </div>
        </div>
        <div v-show="!$root.angel.trimester" v-width.m:1-2.s:1-1 v-margin:top>
          <div v-form.row>
            <div class="uk-form-controls">
              <h6 class="uk-h6">Angels Weight in Pounds</h6>
              <uk-select
                name="form[Angels Weight in Pounds][]"
                :options="pounds"
                v-model="$root.angel.pounds"
                @change="$root.updatePrevious($event.target.value, 'pounds')"
              ></uk-select>
            </div>
            <h6 v-txt.primary v-margin:top class="uk-h6">
              Please provide the weight of your angel in pounds and ounces.
              Please convert any fraction of pounds directly to ounces.
            </h6>
          </div>
        </div>
        <div v-show="!$root.angel.trimester" v-width.m:1-2.s:1-1 v-margin:top>
          <div v-form.row>
            <div class="uk-form-controls">
              <h6 class="uk-h6">Angels Weight in Ounces</h6>
              <uk-select
                name="form[Angels Weight in Ounces][]"
                :options="ounces"
                v-model="$root.angel.ounces"
                @change="$root.updatePrevious($event.target.value, 'ounces')"
              ></uk-select>
            </div>
            <h6 v-txt.primary v-margin:top class="uk-h6">
              For Example: 1.5 pounds DOES NOT equal 1 pound and 5 ounces, this equals 1 pound and 8 ounces.
              <br>
              <a
                href="https://www.calculateme.com/Weight/Pounds/ToOunces.htm"
                v-txt.bold
                target="_blank"
              >Click Here For a Weight Calculator</a>
            </h6>
          </div>
        </div>
        <div v-show="$root.angel.trimester" v-width v-margin:top>
          <div v-form.row>
            <div v-form.controls>
              <hr>
              <h6 class="uk-h6">
                If you had a miscarriage, have a weight of one pound or less, or didn't know the weight of your angel,
                we have Molly Bear styles that can match the weight of a baby as small as one-half ounce (0.5oz).
                While these Molly Bears styles are an excellent representation of the size of your angel, these Molly
                Bears are not the easiest to cuddle. You have the option to request a larger Molly Bear that can be
                cuddled. Please indicate which bear size you prefer.
              </h6>
              <grid-div>
                <br>
                <div v-width.m:1-2.s:1-1>
                  <label for="bearSize0">
                    <input
                      id="bearSize0"
                      type="radio"
                      name="form[Bear Size]"
                      value=" I would like a smaller Molly Bear that represents the size of my angel."
                      v-model="$root.angel.bearSize"
                    >
                    I would like a smaller Molly Bear that represents the size of my angel.
                  </label>
                </div>
                <div v-width.m:1-2.s:1-1>
                  <label for="bearSize1">
                    <input
                      id="bearSize1"
                      type="radio"
                      name="form[Bear Size]"
                      value=" I would like a Molly Bear big enough to cuddle and understand the weight may not necessarily match my angel."
                      v-model="$root.angel.bearSize"
                    >
                    I would like a Molly Bear big enough to cuddle and understand the weight may not necessarily match
                    my angel.
                  </label>
                </div>
              </grid-div>
            </div>
          </div>
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
  import FormSelect from "../Form/Select";
  import FormCheckbox from "../Form/Input/Checkbox";
  import UkSelect from "../UIKit/Form/Select";

  import {set} from 'lodash';

  export default {
    name: "SectionAngel",
    components: {UkSelect, FormCheckbox, FormSelect, FormInputText, GridDiv, PanelTitle, Panel},
    data() {
      return {
        nextId: 9,
        years: [{id: 4, value: '', text: 'Year'}],
        days: [{id: 5, value: '', text: 'Day'}],
        months: [{id: 6, value: '', text: 'Month'}],
        pounds: [{id: 7, value: '', text: 'Choose Angels Birth Weight (Pounds)'}],
        ounces: [{id: 8, value: '', text: 'Choose Angels Birth Weight (Ounces)'}],
        gender: [
          {id: 0, value: '', text: 'Angel\'s Gender'},
          {id: 1, value: 'Male', text: 'Male'},
          {id: 2, value: 'Female', text: 'Female'},
          {id: 3, value: 'Unknown', text: 'Unknown'}
        ]
      }
    },
    methods: {
      newId() {
        let id = this.nextId;
        this.nextId += 1;

        return id;
      },
      trimesterValueChanges() {
        if(this.$root.angel.trimester) {
          this.$root.angel.bearSize = '';
        } else {
          this.$root.angel.ounces = '';
          this.$root.angel.pounds = '';
        }
      }
    },
    created() {
      let maxPounds = 15;
      let maxOunces = 16;
      let earliestYear = 1923;
      let latestYear = new Date().getFullYear() + 1;
      for (earliestYear; earliestYear < latestYear; earliestYear++) {
        this.years.push({id: this.newId(), value: earliestYear, text: earliestYear})
      }
      for (let month = 1; month < 13; month++) {
        let monthText = month > 9 ? month : `0${month}`;
        this.months.push({id: this.newId(), value: monthText, text: monthText});
      }
      for (let day = 1; day < 32; day++) {
        let dayText = day > 9 ? day : `0${day}`;
        this.days.push({id: this.newId(), value: dayText, text: dayText});
      }
      for (let pounds = 0; pounds < maxPounds; pounds++)
        this.pounds.push({id: this.newId(), value: pounds, text: pounds});
      for (let ounces = 0; ounces < maxOunces; ounces += .5) {
        let oz = ounces < 1 ? `${ounces}` : `${ounces}`;
        this.ounces.push({id: this.newId(), value: oz, text: oz});
      }
    }
  }
</script>
