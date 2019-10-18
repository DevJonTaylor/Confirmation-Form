<template>
  <div v-form.row>
    <panel v-top-border:purple>
      <grid-div>
        <div v-width.m:1-2.s:1-1 v-margin:top>
          <grid-div>
            <panel-title v-width>Additional Shipping Cost</panel-title>
            <div v-width v-margin:top>
              <info>
                <h6 v-width class="uk-h6" v-txt:center>
                  <uk-icon name="paw" class="uk-icon-large"></uk-icon>&nbsp;
                  Molly Bears Additional Total
                </h6>
                <p v-if="$root.baseCostNumber > 0">
                  <uk-icon name="info-circle" class="ic-blue uk-icon-large"></uk-icon>
                  This is the additional shipping amount you owe for your Molly Bears order.
                  It is calculated based on your location and the weight of your bear.
                  The shipping payment must be received in order to move your order to production.
                </p>
                <grid-div>
                  <div v-width v-margin:no v-if="$root.baseCostNumber > 0">
                    <span>Additional Shipping</span>
                    <span v-float:right>{{$root.baseCost}}</span>
                  </div>
                  <div v-width v-margin:no v-show="$root.embroideryCostNumber > 0">
                    <span>Embroidery</span>
                    <span v-float:right>{{$root.embroideryCost}}</span>
                  </div>
                  <div v-width v-margin:top>
                    <hr>
                    <span>Total</span>
                    <span v-float:right>{{$root.cost}}</span>
                  </div>
                </grid-div>
              </info>
            </div>
          </grid-div>
        </div>
        <div v-width.m:1-2.s:1-1 v-margin:top>
          <grid-div v-form.row>
            <panel-title v-width>Payment Information</panel-title>
            <credit-card-elements></credit-card-elements>
          </grid-div>
        </div>
      </grid-div>
    </panel>
  </div>
</template>

<script>
  import Panel from "../UIKit/Panel/Panel.vue";
  import PanelTitle from "../UIKit/Panel/Title.vue";
  import GridDiv from "../UIKit/Grid/GridDiv";
  import UkIcon from "../UIKit/UkIcon";
  import Info from "../UIKit/Alert/Info";
  import CreditCardElements from "../CreditCardElements";

  export default {
    name: "SectionCost",
    components: {CreditCardElements, Info, UkIcon, GridDiv, PanelTitle, Panel}
  }
</script>

<style>

</style>
