<template>
  <div v-container:self.center>
    <grid-div v-hidden.s id="pdf">
      <div style="text-align: center;" v-width v-flex.center>
        <a href="https://www.mollybears.org" rel="alternate" title="Molly Bears" target="_blank">
          <br/>
          <img src="https://www.mollybears.org/images/Logos/Molly-Bears-Logo-MD.png" alt="Molly Bears Logo" width="260"
               height="82"/>
        </a>
      </div>
      <div v-width>
        <grid-div v-container.center>
          <div v-width v-flex.center>
            <div v-width.l:2-3.m.s>
              <div style="text-align: center;">
                <div style="margin: 15px; padding: 15px; background: #f8f9fb; color: #555454;">
                  <strong>New Molly Bears order confirmation updated for order number:
                    <span>{{submission["Order Number"]}}</span>.
                    The details of the order is listed below.
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div v-width v-flex.center>
            <div v-width.l:2-3.m>
              <table cellpadding="8" cellspacing="0"
                     style="width: 100%; vertical-align: top; font-size: 13px; line-height: 13px;">
                <tbody>
                <tr>
                  <td :style="tdStyle1" colspan="2">
                    <p :style="tdHeaderStyle"><strong>ORDER &amp; CONTACT INFO</strong></p>
                    <p :style="paddingLeft"><strong>Order Number:</strong> {{submission["Order Number"]}}</p>
                    <p :style="paddingLeft"><strong>Order Status:</strong> {{submission.Status}}</p>
                    <p :style="paddingLeft"><strong>First Name:</strong> {{submission["First Name"]}}</p>
                    <p :style="paddingLeft"><strong>Last Name:</strong> {{submission["Last Name"]}}</p>
                    <p :style="paddingLeft"><strong>Email:</strong> {{submission.Email}}</p>
                    <p :style="paddingLeft" v-show="submission.Phone !== ''"><strong>Phone:</strong>
                      {{submission.Phone}}</p>
                  </td>
                  <td :style="tdStyle1" colspan="2">
                    <p :style="tdHeaderStyle"><strong>ANGEL INFO</strong></p>
                    <p :style="paddingLeft" v-if="submission['Angels Name'] !== ''"><strong>Angels Name:</strong>
                      {{submission["Angels Name"]}}</p>
                    <p :style="paddingLeft"><strong>Angels Gender:</strong> {{submission['Angels Gender']}}</p>
                    <p :style="paddingLeft" v-if="submission['No Weight'] !== ''">
                      <strong>Size:</strong> {{submission["Bear Size"]}}
                    </p>
                    <p :style="paddingLeft" v-if="submission['Bear Size'] === ''">
                      <strong>Angels Weight in Pounds:</strong> {{submission["Angels Weight in Pounds"]}}
                    </p>
                    <p :style="paddingLeft" v-if="submission['Bear Size'] === ''">
                      <strong>Angels Weight in Ounces:</strong> {{submission["Angels Weight in Ounces"]}}
                    </p>
                    <p :style="paddingLeft"><strong>Angels Birthday:</strong> {{submission["Angels Birthday"]}}</p>
                    <p :style="paddingLeft"><strong>Angelversary Date:</strong> {{submission["Angelversary Date"]}}</p>
                  </td>
                </tr>
                <tr>
                  <td :style="tdStyle2">
                    <p :style="tdHeaderStyle"><strong>SHIPPING ADDRESS</strong></p>
                    <p :style="paddingLeft"><strong>Address:</strong> {{submission.Address}}</p>
                    <p :style="paddingLeft"><strong>City:</strong> {{submission.City}}</p>
                    <p :style="paddingLeft">
                      <strong>State or Province:</strong>
                      {{submission["State or Province"]}} {{submission["Other State or Province"]}}
                    </p>
                    <p :style="paddingLeft"><strong>Zip Code:</strong> {{submission["Zip Code"]}}</p>
                    <p :style="paddingLeft"><strong>Country:</strong> {{submission.Country}}</p>
                  </td>
                  <td :style="tdStyle2" colspan="2">
                    <p :style="tdHeaderStyle"><strong>BEAR DETAILS</strong></p>
                    <p :style="paddingLeft" v-if="submission['Plain Bear'] === 'Yes'"><strong>Plain Bear
                      Wanted?:</strong> Yes</p>
                    <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
                      <strong>Color(s):</strong>
                      {{submission["Bear Color"]}}
                    </p>
                    <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
                      <strong>Theme(s):</strong>
                      {{submission["Bear Theme"]}}
                    </p>
                    <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
                      <strong>Omit Item(s):</strong>
                      {{submission["Bear Omit"]}}
                    </p>
                    <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
                      <strong>Special Requests:</strong>
                      {{submission["Special Requests"]}}
                    </p>
                    <p :style="paddingLeft"><strong>Embroidery Wanted:</strong> {{submission["Embroidery 1"]}}</p>
                    <p :style="paddingLeft" v-if="isEmbroidery"><strong>Embroidery Name:</strong>
                      {{submission["Embroidery 1 Name"]}}</p>
                  </td>
                  <td :style="tdStyle2">
                    <p :style="tdHeaderStyle"><strong>MISC INFO</strong></p>
                    <p :style="paddingLeft" v-if="submission.Username !== ''">
                      <strong>Username:</strong> {{submission.Username}}
                    </p>
                    <p :style="paddingLeft" v-if="showAdditionalShippingPaid">
                      <strong>Additional Shipping Amount Paid:</strong>
                      <span> ${{submission["Additional Shipping Paid"]}} (USD)</span>
                    </p>
                    <p :style="paddingLeft" v-if="showAdditionalShippingPaid">
                    <span>
                      <strong>Transaction Paid Via: </strong>
                    </span>{{$root.payment.cardType}} - {{$root.payment.transactionId}} - {{transactionDate}}</p>
                    <p :style="paddingLeft"><strong>Message/Note:</strong><span> {{submission.Message1}}</span></p>
                  </td>
                </tr>
                </tbody>
              </table>
              <div style="text-align: center;">
                <br/>
                Copyright © 2019 <a href="https://www.MollyBears.org" target="_blank" title="MollyBears.org"
                                    alt="MollyBears.org">Molly Bears</a> | All Rights Reserved | 501(c)(3) Organization
              </div>
            </div>
          </div>
        </grid-div>
      </div>
    </grid-div>
    <grid-div v-visible.s>
      <div style="text-align: center;" v-width v-flex.center>
        <a href="https://www.mollybears.org" rel="alternate" title="Molly Bears" target="_blank">
          <br/>
          <img src="https://www.mollybears.org/images/Logos/Molly-Bears-Logo-MD.png" alt="Molly Bears Logo" width="260"
               height="82"/>
        </a>
      </div>
      <table v-table>
        <tbody v-grid.center.child-s>
        <tr>
          <td :style="tdStyle1" colspan="2">
            <p :style="tdHeaderStyle"><strong>ORDER &amp; CONTACT INFO</strong></p>
            <p :style="paddingLeft"><strong>Order Number:</strong> {{submission["Order Number"]}}</p>
            <p :style="paddingLeft"><strong>Order Status:</strong> {{submission.Status}}</p>
            <p :style="paddingLeft"><strong>First Name:</strong> {{submission["First Name"]}}</p>
            <p :style="paddingLeft"><strong>Last Name:</strong> {{submission["Last Name"]}}</p>
            <p :style="paddingLeft"><strong>Email:</strong> {{submission.Email}}</p>
            <p :style="paddingLeft" v-show="submission.Phone !== ''"><strong>Phone:</strong>
              {{submission.Phone}}</p>
          </td>
        </tr>
        <tr>
          <td :style="tdStyle1" colspan="2">
            <p :style="tdHeaderStyle"><strong>ANGEL INFO</strong></p>
            <p :style="paddingLeft" v-if="submission['Angels Name'] !== ''"><strong>Angels Name:</strong>
              {{submission["Angels Name"]}}</p>
            <p :style="paddingLeft"><strong>Angels Gender:</strong> {{submission['Angels Gender']}}</p>
            <p :style="paddingLeft" v-if="submission['No Weight'] !== ''">
              <strong>Size:</strong> {{submission["Bear Size"]}}
            </p>
            <p :style="paddingLeft" v-if="submission['Bear Size'] === ''">
              <strong>Angels Weight in Pounds:</strong> {{submission["Angels Weight in Pounds"]}}
            </p>
            <p :style="paddingLeft" v-if="submission['Bear Size'] === ''">
              <strong>Angels Weight in Ounces:</strong> {{submission["Angels Weight in Ounces"]}}
            </p>
            <p :style="paddingLeft"><strong>Angels Birthday:</strong> {{submission["Angels Birthday"]}}</p>
            <p :style="paddingLeft"><strong>Angelversary Date:</strong> {{submission["Angelversary Date"]}}</p>
          </td>
        </tr>
        <tr>
          <td  :style="tdStyle1" colspan="2">
            <p :style="tdHeaderStyle"><strong>SHIPPING ADDRESS</strong></p>
            <p :style="paddingLeft"><strong>Address:</strong> {{submission.Address}}</p>
            <p :style="paddingLeft"><strong>City:</strong> {{submission.City}}</p>
            <p :style="paddingLeft">
              <strong>State or Province:</strong>
              {{submission["State or Province"]}} {{submission["Other State or Province"]}}
            </p>
            <p :style="paddingLeft"><strong>Zip Code:</strong> {{submission["Zip Code"]}}</p>
            <p :style="paddingLeft"><strong>Country:</strong> {{submission.Country}}</p>
          </td>
        </tr>
        <tr>
          <td :style="tdStyle1" colspan="2">
            <p :style="tdHeaderStyle"><strong>BEAR DETAILS</strong></p>
            <p :style="paddingLeft" v-if="submission['Plain Bear'] === 'Yes'"><strong>Plain Bear
              Wanted?:</strong> Yes</p>
            <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
              <strong>Color(s):</strong>
              {{submission["Bear Color"]}}
            </p>
            <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
              <strong>Theme(s):</strong>
              {{submission["Bear Theme"]}}
            </p>
            <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
              <strong>Omit Item(s):</strong>
              {{submission["Bear Omit"]}}
            </p>
            <p :style="paddingLeft" v-if="submission['Plain Bear'] !== 'Yes'">
              <strong>Special Requests:</strong>
              {{submission["Special Requests"]}}
            </p>
            <p :style="paddingLeft"><strong>Embroidery Wanted:</strong> {{submission["Embroidery 1"]}}</p>
            <p :style="paddingLeft" v-if="isEmbroidery"><strong>Embroidery Name:</strong>
              {{submission["Embroidery 1 Name"]}}</p>
          </td>
        </tr>
        <tr>
          <td :style="tdStyle1" colspan="2">
            <p :style="tdHeaderStyle"><strong>MISC INFO</strong></p>
            <p :style="paddingLeft" v-if="submission.Username !== ''">
              <strong>Username:</strong> {{submission.Username}}
            </p>
            <p :style="paddingLeft" v-if="showAdditionalShippingPaid">
              <strong>Additional Shipping Amount Paid:</strong>
              <span> ${{submission["Additional Shipping Paid"]}} (USD)</span>
            </p>
            <p :style="paddingLeft" v-if="showAdditionalShippingPaid">
                    <span>
                      <strong>Transaction Paid Via: </strong>
                    </span>{{$root.payment.cardType}} - {{$root.payment.transactionId}} - {{transactionDate}}</p>
            <p :style="paddingLeft"><strong>Message/Note:</strong><span> {{submission.Message1}}</span></p>
          </td>
        </tr>
        </tbody>
      </table>
    </grid-div>
    <grid-div v-hidden.s>
      <div v-width v-flex.around v-margin>
        <uk-button
                v-if="!$root.saved"
                type="secondary"
                size="large"
                @click.prevent.stop="$root.hideModal('#summarizedModal')"
                :disabled="loading"
        >
          <uk-icon name="pencil-square-o"></uk-icon>
          &nbsp; <span class="uk-hidden-small">Edit</span>
        </uk-button>
        <uk-button size="large" v-flex.center.middle="$root.saved" @click="downloadPdf">
          <uk-icon name="file-pdf-o"></uk-icon>
          &nbsp; <span class="uk-hidden-small">Download PDF</span>
        </uk-button>
        <uk-button type="success" size="large" v-if="!$root.saved" :disabled="loading" @click.prevent.stop="save">
          <uk-icon name="save"></uk-icon>
          &nbsp; <span class="uk-hidden-small">Save</span>
        </uk-button>
      </div>
    </grid-div>
    <grid-div v-visible.s>
      <div v-width v-flex.around v-margin>
        <group-buttons>
          <uk-button
                  v-if="!$root.saved"
              type="secondary"
              size="large"
              @click.prevent.stop="$root.hideModal('#summarizedModal')"
              :disabled="loading"
          >
            <uk-icon name="pencil-square-o"></uk-icon>
            &nbsp; <span>Edit</span>
          </uk-button>
          <uk-button size="large" v-flex.center.middle="$root.saved" @click="downloadPdf">
            <uk-icon name="file-pdf-o"></uk-icon>
            &nbsp; <span>PDF</span>
          </uk-button>
          <uk-button type="success" size="large" v-if="!$root.saved" :disabled="loading" @click.prevent.stop="save">
            <uk-icon name="save"></uk-icon>
            &nbsp; <span>Save</span>
          </uk-button>
        </group-buttons>
      </div>
    </grid-div>
  </div>
</template>

<script>
  import GridDiv from "../UIKit/Grid/GridDiv";
  import moment from 'moment';
  import UkButton from "../UIKit/Buttons/Button";
  import UkIcon from "../UIKit/UkIcon";
  import {post} from "../../Helpers/XHR";
  import GroupButtons from "../UIKit/Buttons/GroupButtons";

  export default {
    name: "SummarizedConfirmation",
    components: {GroupButtons, UkIcon, UkButton, GridDiv},
    props: {
      submission: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      async sendEmail() {
        let source = document.querySelector('#pdf').innerHTML;
        let email = {
          id: this.$root.submission.SubmissionId,
          to: this.$root.personal.email,
          body: this.htmlEntities(source)
        };

        return await post(this.apiURL, {email});
      },
      save() {
        let save = { SubmissionId: this.$root.submission.SubmissionId };
        this.loading = true;

        post(this.apiURL, {save})
          .then(data => this.$root.setSubmission(data))
          .then(() => this.sendEmail())
          .then(() => {
            this.$root.saved = true
          })
          .catch(() => window.location.reload());
      },
      htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      },
      downloadPdf() {
        let source = document.querySelector('#pdf').innerHTML;
        let value = `<input type="hidden" name="pdf" value="${this.htmlEntities(source)}">`;
        let form = `<form target="_blank" action="${this.$root.apiURL}" method="post">${value}</form>`;
        jQuery(form)
          .appendTo('body')
          .submit()
          .remove();
      }
    },
    computed: {
      tdHeaderStyle() {
        return {
          width: '100%',
          textAlign: 'center',
          height: '24px',
          backgroundColor: '#ecddcc',
          fontSize: '16px',
          paddingTop: '10px',
          marginTop: 0
        };
      },
      transactionDate() {
        return moment(this.$root.payment.dateOfTransaction, 'YYYY-MM-DD HH:mm:ss')
          .format('MMMM, DD YYYY hh:mm:ss a');
      },
      isEmbroidery() {
        if (Object.keys(this.submission).length === 0) return false;

        return this.submission['Embroidery 1'] === 'Yes, embroider my angel’s name'
      },
      tdStyle2() {
        return {
          border: '1px',
          solid: '#a3a19c',
          verticalAlign: 'top',
          width: '33%'
        }
      },
      tdStyle1() {
        return {
          border: '1px',
          solid: '#a3a19c',
          verticalAlign: 'top',
          width: '50%'
        }
      },
      showAdditionalShippingPaid() {
        return this.$root.payment.transactionId !== '';
      },
      paddingLeft() {
        return {paddingLeft: '5px'}
      }
    }
  }
</script>
