<template>
  <div>
    <loader :loading="$root.loading"></loader>
    <danger v-if="$root.invalidToken">
      <alert-close></alert-close>
      <h2>Invalid Token</h2>
      <p>The token used is <strong>invalid</strong>, <strong>expired</strong>, or has been <strong>confirmed</strong>.
      </p>
      <p>If you feel this is an error please <a href="/contact" target="_blank">contact us.</a></p>
    </danger>
    <uk-form @submit.prevent.stop="onSubmit" v-if="!$root.invalidToken">
      <field-set class="uk-form-horizontal">
        <section-info></section-info>
        <section-personal></section-personal>
        <section-shipping></section-shipping>
        <section-angel></section-angel>
        <section-request></section-request>
        <section-embroidery></section-embroidery>
        <section-notes></section-notes>
        <section-cost v-width v-margin.l:top v-show="$root.costNumber > 0"></section-cost>
        <div v-width v-margin:top>
          <form-checkbox
            name="Terms of Agreement"
            v-model="$root.tos"
            the-id="tos"
          >
            I agree to Molly Bears
            <a href="" target="_blank">Privacy Policy</a>
            and
            <a href="" target="_blank">Terms And Conditions</a>.
            I also agree that this info is either correct "As Is" or the changes I've made are correct.
          </form-checkbox>
        </div>
        <uk-button :disabled="loading" v-margin.l v-width>Complete Confirmation</uk-button>
      </field-set>
      <uk-modal id="confirmModal">
        <modal-dialog>
          <modal-header>
            <h3 class="uk-h3" v-txt.danger v-margin.no:top>Are you sure?</h3>
          </modal-header>
          <p>{{$root.messages.confirm.message}}</p>
          <modal-footer>
            <grid-div>
              <div v-width>
                <group-buttons v-float:right>
                  <uk-button v-modal.close type="default" @click="revertBack">Revert</uk-button>
                  <uk-button v-modal.close @click="saveChanges">Save</uk-button>
                </group-buttons>
              </div>
            </grid-div>
          </modal-footer>
        </modal-dialog>
      </uk-modal>
      <uk-modal id="emptyModal">
        <modal-dialog>
          <modal-header>
            <h3 class="uk-h3" v-txt.danger v-margin.no:top>Are you sure?</h3>
          </modal-header>
          <p>{{$root.messages.empty.message}}</p>
          <modal-footer>
            <grid-div>
              <div v-width v-flex.center>
                <group-buttons v-float:right>
                  <uk-button v-modal.close type="secondary" @click="setOriginal">Set Original Value</uk-button>
                  <uk-button v-modal.close type="default" @click="setPrevious">Set Previous Value</uk-button>
                  <uk-button v-modal.close @click="setCurrent">Save Current</uk-button>
                </group-buttons>
              </div>
            </grid-div>
          </modal-footer>
        </modal-dialog>
      </uk-modal>
      <uk-modal id="submitModal">
        <modal-dialog>
          <modal-header v-flex:f.center.col>
            <h3 class="uk-h3" v-txt.danger v-margin.no:top>{{loadingHeader}}</h3>
            <hollow-dots-spinner
              v-show="loading"
              :animation-duratio="1000"
              :dot-size="30"
              :dots-num="3"
              color="#a572b7"
            ></hollow-dots-spinner>
          </modal-header>

          <p v-for="(msg, index) of loadingMessage" :key="index">{{msg}}</p>
          <modal-footer>
            <grid-div>
              <div v-width>
                <group-buttons v-float:right>
                  <uk-button :disabled="loading" v-modal.close>Ok</uk-button>
                </group-buttons>
              </div>
            </grid-div>
          </modal-footer>
        </modal-dialog>
      </uk-modal>
      <uk-modal id="summarizedModal">
        <modal-dialog v-modal.full >
          <modal-header>
            <h3 class="uk-h3" v-txt:center.primary v-margin.no>Summarized Confirmation</h3>
          </modal-header>
          <summarized-confirmation :submission="$root.submission"></summarized-confirmation>
        </modal-dialog>
      </uk-modal>
    </uk-form>
  </div>
</template>

<script>

  import UkForm from "./UIKit/Form/UkForm.vue";
  import FieldSet from "./UIKit/Form/FieldSet.vue";
  import SectionInfo from "./Sections/Info.vue";
  import SectionPersonal from "./Sections/Personal.vue";
  import SectionShipping from "./Sections/Shipping.vue";
  import SectionAngel from "./Sections/Angel.vue";
  import SectionRequest from "./Sections/Request.vue";
  import SectionEmbroidery from "./Sections/Embroidery.vue";
  import SectionNotes from "./Sections/Notes.vue";
  import FormCheckbox from "./Form/Input/Checkbox";
  import SectionCost from "./Sections/Cost";
  import UkModal from "./UIKit/Modal/UkModal";
  import ModalHeader from "./UIKit/Modal/ModalHeader";
  import ModalDialog from "./UIKit/Modal/ModalDialog";
  import ModalFooter from "./UIKit/Modal/ModalFooter";
  import GridDiv from "./UIKit/Grid/GridDiv";
  import UkButton from "./UIKit/Buttons/Button";
  import GroupButtons from "./UIKit/Buttons/GroupButtons";
  import {HollowDotsSpinner} from 'epic-spinners';

  import {set} from 'lodash';
  import Loader from "./Loader";
  import SummarizedConfirmation from "./Sections/SummarizedConfirmation";
  import AlertClose from "./UIKit/Alert/Close";
  import Danger from "./UIKit/Alert/Danger";
  import {post, get} from "../Helpers/XHR";

  export default {
    name: 'App',
    components: {
      Danger,
      AlertClose,
      SummarizedConfirmation,
      Loader,
      GroupButtons,
      UkButton,
      GridDiv,
      ModalFooter,
      ModalDialog,
      ModalHeader,
      UkModal,
      SectionCost,
      FormCheckbox,
      SectionNotes,
      SectionEmbroidery,
      SectionRequest,
      SectionAngel,
      SectionShipping,
      SectionPersonal,
      SectionInfo,
      FieldSet,
      UkForm,
      HollowDotsSpinner
    },
    data() {
      return {
        loading: false,
        loadingMessage: [],
        loadingHeader: 'Processing Form'
      }
    },
    methods: {
      setCurrent() {
        this.setValue(this.$root.messages.empty.current);
      },
      setPrevious() {
        this.setValue(this.$root.messages.empty.previous);
      },
      setOriginal() {
        this.setValue(this.$root.messages.empty.original);
      },
      revertBack() {
        for (let args of this.$root.messages.confirm.revert) {
          this.setValue(args);
        }

        this.$root.updatedByUser = true;
      },
      saveChanges() {
        for (let args of this.$root.messages.confirm.save) {
          this.setValue(args);
        }

        this.$root.updatedByUser = true;
      },
      setValue(args) {
        set(...args);
      },
      validation() {
        this.loadingMessage = [];

        let r = this.$root;
        let validation = true;

        if (!r.tos) {
          let msg = 'You must agree to the Terms and Conditions to complete the confirmation process.';
          validation = this.failedValidation(msg);
        }

        r.showModal('#submitModal');
        if (!r.isCostsReady) {
          let expObj = $.payment.cardExpiryVal(r.payment.exp);
          let card = !$.payment.validateCardNumber(r.payment.card);
          let exp = !$.payment.validateCardExpiry(expObj.month, expObj.year);
          let cvv = !$.payment.validateCardCVC(r.payment.cvv, r.payment.cardType);
          let firstName = !r.payment.firstName !== '';
          let lastName = !r.payment.lastName !== '';

          if (lastName)
            validation = this.failedValidation('Last Name should match the name on the card.  It cannot be empty.');
          if (firstName)
            validation = this.failedValidation('First Name should match the name on the card.  It cannot be empty.');
          if (cvv)
            validation = this.failedValidation('CVV code is not valid.');
          if (exp)
            validation = this.failedValidation('Expiration Date is not valid or expired.');
          if (card)
            validation = this.failedValidation('Card Number is not valid.');
        }
        if (!r.isEmbroideryReady)
          validation = this.failedValidation('Please provide a name to embroider.', r.keyIndex['text']);
        if (!r.isRequestsReady) {
          let color = r.requests.bearColor !== '';
          let theme = r.requests.bearTheme !== '';
          let omit = r.requests.bearOmit !== '';
          let special = r.requests.special !== '';
          if (special)
            validation = this.failedValidation('Special Requests cannot be empty.', r.keyIndex['special']);
          if (omit)
            validation = this.failedValidation('Bear Omit cannot be empty.', r.keyIndex['bearOmit']);
          if (theme)
            validation = this.failedValidation('Bear Theme cannot be empty.', r.keyIndex['bearTheme']);
          if (color)
            validation = this.failedValidation('Bear Color cannot be empty.', r.keyIndex['bearColor']);
        }
        if (!r.isAngelReady) {
          let msg = '';
          let selector = '';
          if (r.angel.trimester) {
            if (r.angel.bearSize === '' && r.angel.gender === '') {
              msg = 'Both the Angel\'s Gender and Bear Size are required.';
              selector = r.keyIndex['gender'];
            } else if (r.angel.bearSize === '') {
              msg = 'The Bear\'s Size option must be filled selected.';
              selector = r.keyIndex['bearSize'];
            } else {
              msg = 'Please select your Angel\'s Gender.  ';
              msg += 'There is an unknown option if you do not know or would rather not say.';
              selector = r.keyIndex['gender']
            }
          } else {
            msg = 'Please select your Angel\'s Gender.  ';
            msg += 'There is an unknown option if you do not know or would rather not say.';
            selector = r.keyIndex['gender']
          }
          validation = this.failedValidation(msg, selector);
        }
        if (!r.isShippingReady) {
          if (r.shipping.postal === '')
            validation = this.failedValidation(
              'Please fill out Postal Code in the shipping section.',
              r.keyIndex['postal']
            );
          if (r.shipping.state === '')
            validation = this.failedValidation(
              'Please fill out State or Providence in the shipping section.',
              r.keyIndex['state']
            );
          if (r.shipping.city === '')
            validation = this.failedValidation(
              'Please fill out City in the shipping section.',
              r.keyIndex['city']
            );
          if (r.shipping.address === '')
            validation = this.failedValidation(
              'Please fill out Street Address in the shipping section.',
              r.keyIndex['address']
            );
        }
        if (!r.isPersonalReady)
          validation = this.failedValidation('You must provide an Email Address.', r.keyIndex['email']);

        return validation;
      },
      sendPreFinalSave() {
        let changes = this.$root.changes;
        if (changes.length === 0) return new Promise(res => res(true));

        return post(this.apiURL, {changes});
      },
      getPayment() {
        if (this.$root.costNumber <= 0) return new Promise(res => res(true));
        let SubmissionId = this.$root.submission.SubmissionId;
        let payment = JSON.parse(JSON.stringify(this.$root.payment));
        let cost = this.$root.costNumber;
        let exp = $.payment.cardExpiryVal(payment.exp);

        payment.cardType = this.$root.cardType;
        payment.exp = {
          month: exp.month,
          year: exp.year
        };

        return post(this.$root.apiURL, {SubmissionId, payment, cost});
      },
      loadSummary() {
        this.loading = false;
        this.$root.hideModal('#submitModal');
        this.$root.showModal('#summarizedModal');
      },
      internalError() {
        this.loadingHeader = 'Internal Error';

        this.loadingMessage = ['There was an error with the internal server.'];
        this.loading = false;
      },
      onSubmit() {
        this.loading = true;

        if (!this.validation())
          return this.loading = false;

        this.getPayment()
          .then(data => {
            if (typeof data !== 'object' && data !== true) {
              return this.internalError();
            } else if (typeof data !== 'boolean') {
              if (data.success === false) {
                this.loadingHeader = 'Payment Issue';
                this.loadingMessage = [data.message];

                throw new Error('Card Not Charged.')
              } else {
                this.$root.payment.transactionId = data.transactionId;
                this.$root.payment.dateOfTransaction = data.dateOfTransaction;
              }
            }

            return this.sendPreFinalSave()
          })
          .then(data => {
            if (typeof (data) !== 'object' && data !== true) {
              return this.internalError();
            } else if (data === true) {
              return get(this.$root.origin, {token: this.$root.token})
            } else {
              return this.$root.setSubmission(data)
            }
          })
          .then(data => {
            if (typeof data !== 'undefined')
              this.$root.setSubmission(data)
          })
          .then(() => this.loadSummary())
          .catch(err => {
            switch (err.message) {
              case 'Card Not Charged.':
                this.loading = false;
                break;
              default:
                console.log(err);
                this.internalError();
                break;
            }
          })
      },
      scrollToThisSelector(selector) {
        let screenPixel = jQuery(window).height() * .5;
        jQuery('html, body').animate(
          {
            scrollTop: jQuery(selector).offset().top - screenPixel,
          },
          500,
          'linear'
        )
      },
      failedValidation(msg, scrollToSelector = false) {
        this.loadingHeader = 'Validation Failed';
        this.loadingMessage.unshift(msg);

        if (scrollToSelector) this.scrollToThisSelector(`[name*="${scrollToSelector}"]`);
        return false;
      }
    }
  }
</script>

<style lang="scss">
  @media (min-width: 768px) and (max-width: 959px) {
    .uk-modal-dialog-blank {
      height: 100%;
    }
  }
  @media (min-width: 768px) {
    .uk-modal-dialog-blank {
      height: 100%;
    }
  }
  h6 {
    font-size: 17px;
    line-height: 23px;
  }

  h4, h6 {
    margin: 0 0 15px 0;
    font-family: 'Lato';
    font-weight: 300;
    color: #555454;
    text-transform: none;
  }

  hr {
    box-sizing: content-box !important;
    height: 0 !important;
    margin: 15px 0 !important;
    border: 0 !important;
    border-top: 1px solid #c8d1d6 !important;
  }

  .uk-form input[type="text"], .uk-form textarea {
    padding: 8px 6px;
    font-size: 16px;
  }

  .uk-form input[type="checkbox"]:not(disabled),
  .uk-form input[type="radio"]:not(disabled) {
    height: 20px !important;
    width: 20px !important;
  }

  .uk-form input[type="checkbox"]:not(disabled),
  .uk-form input[type="radio"]:not(:disabled) {
    display: inline-block !important;
    border: 1px solid #aaa !important;
    overflow: hidden !important;
    margin-top: -4px !important;
    vertical-align: middle !important;
    -webkit-appearance: none !important;
    outline: 0 !important;
    background: transparent !important;
  }

  .uk-form input[type=checkbox]:checked:before,
  .uk-form input[type=checkbox]:indeterminate:before {
    content: "\f00c";
    -webkit-font-smoothing: antialiased;
    text-align: center;
    font-size: 18px !important;
    line-height: 18px !important;
    color: #403323 !important;
  }

  .mb-height-100 {
    height: 100%;
    position: fixed;
  }

  .uk-close {
    -webkit-appearance: none;
    margin: 0;
    border: none;
    overflow: visible;
    font: inherit;
    color: inherit;
    text-transform: none;
    padding: 0;
    background: 0 0;
    display: inline-block;
    box-sizing: content-box;
    width: 20px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    opacity: .3;
  }

  .uk-close:after {
    display: block;
    content: "\f00d" !important;
    font-family: FontAwesome !important;
  }
</style>
