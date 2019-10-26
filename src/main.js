import Vue from 'vue';
import App from './Components/App.vue';
import Loader from './Components/Loader';
import {isObject, get} from 'lodash';
import moment from 'moment';
import MoneyFormation from "./Helpers/MoneyFormation";

// directives
import './Directives/V-UIkit/Form';
import './Directives/V-UIkit/TopBorder';
import './Directives/V-UIkit/Margin';
import './Directives/V-UIkit/Width';
import './Directives/V-UIkit/Text';
import './Directives/V-UIkit/Float';
import './Directives/V-UIkit/Padding';
import './Directives/V-UIkit/Modal';
import './Directives/V-UIkit/Flex';
import './Directives/V-UIkit/Container';
import './Directives/V-UIkit/Grid';
import './Directives/V-UIkit/Hidden';
import './Directives/V-UIkit/Visible';
import './Directives/V-UIkit/Table';
import './Directives/HrefVoid';
import {get as getToken} from "./Helpers/XHR";
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://8f7708ec32ce41de92dff63f9754f649@sentry.io/1392478',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});

//const origin = 'http://shellsu.local/';
const origin = '/confirm-api/';
const token = window.location.search.substr(7);

Vue.config.productionTip = false;
Vue.prototype.token = token;
// Vue.prototype.origin = 'https://mollybears.org/confirm-api';
Vue.prototype.origin = `${origin}${token}`;
Vue.prototype.apiURL = `${origin}?token=${token}`;
window.Vue = Vue;

let waitForElement = setInterval(() => {
  let el = document.querySelector('#App');
  if (el) {
    clearInterval(waitForElement);
    Vue.config.devtools = true;
    window.VueComponent = new Vue({
      components: {Loader, App},
      data: {
        submission: {},
        invalidToken: false,
        loading: true,
        updatedByUser: true,
        messages: {
          empty: {
            message: '',
            original: [],
            previous: [],
            current: []
          },
          confirm: {
            save: [],
            revert: [],
            message: '',
            noWeight: false
          },
        },
        personal: {
          firstName: '',
          lastName: '',
          orderNumber: '',
          phone: '',
          email: ''
        },
        shipping: {
          address: '',
          city: '',
          state: '',
          other: '',
          postal: '',
          country: ''
        },
        angel: {
          name: '',
          gender: '',
          trimester: false,
          birthday: {
            month: '',
            day: '',
            year: ''
          },
          angelversary: {
            month: '',
            day: '',
            year: ''
          },
          pounds: '',
          ounces: '',
          bearSize: ''
        },
        requests: {
          plainBear: false,
          bearColor: '',
          bearTheme: '',
          bearOmit: '',
          special: '',
        },
        embroidery: {
          alreadyPurchased: false,
          selected: '',
          text: ''
        },
        notes: {
          message1: ''
        },
        tos: false,
        payment: {
          firstName: '',
          lastName: '',
          card: '',
          exp: '',
          cvv: '',
          postal: '',
          transactionId: '',
          dateOfTransaction: ''
        },
        previously: {
          firstName: '',
          lastName: '',
          orderNumber: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          state: '',
          other: '',
          postal: '',
          country: '',
          name: '',
          gender: '',
          trimester: '',
          birthday: '',
          angelversary: '',
          pounds: '',
          ounces: '',
          bearSize: '',
          plainBear: '',
          bearColor: '',
          bearTheme: '',
          bearOmit: '',
          special: '',
          selected: '',
          text: '',
          message1: ''
        }
      },
      methods: {
        setSubmission(submission) {
          return new Promise((res, rej) => {
            try {
              this.submission = submission;

              let birthday = this.rsformDate(this.submission["Angels Birthday"]);
              let angelversary = this.rsformDate(this.submission["Angelversary Date"]);
              this.personal = {
                firstName: this.submission["First Name"],
                lastName: this.submission["Last Name"],
                orderNumber: this.submission["Order Number"],
                phone: this.submission.Phone,
                email: this.submission.Email
              };
              this.shipping = {
                address: this.submission.Address,
                city: this.submission.City,
                state: this.submission["State or Province"],
                other: this.submission["Other State or Province"],
                postal: this.submission["Zip Code"],
                country: this.submission.Country
              };
              this.angel = {
                name: this.submission["Angels Name"],
                gender: this.submission["Angels Gender"],
                trimester: this.submission["No Weight"] !== '',
                birthday: {
                  month: !birthday ? '' : birthday.format('MM'),
                  day: !birthday ? '' : birthday.format('DD'),
                  year: !birthday ? '' : birthday.format('YYYY')
                },
                angelversary: {
                  month: !angelversary ? '' : angelversary.format('MM'),
                  day: !angelversary ? '' : angelversary.format('DD'),
                  year: !angelversary ? '' : angelversary.format('YYYY')
                },
                pounds: !this.submission["Angels Weight in Pounds"] ? '' : this.submission["Angels Weight in Pounds"],
                ounces: !this.submission["Angels Weight in Ounces"] ? '' : this.submission["Angels Weight in Ounces"],
                bearSize: this.submission["Bear Size"]
              };
              if (this.angel.trimester) {
                this.angel.ounces = '';
                this.angel.pounds = '';
              }
              this.requests = {
                plainBear: this.submission["Plain Bear"] !== '',
                bearColor: this.submission["Bear Color"],
                bearTheme: this.submission["Bear Theme"],
                bearOmit: this.submission["Bear Omit"],
                special: this.submission["Special Requests"],
              };
              this.embroidery = {
                alreadyPurchased: this.submission["Embroidery 1"] === 'Yes, embroider my angel’s name',
                selected: this.submission["Embroidery 1"],
                text: this.submission["Embroidery 1 Name"]
              };
              this.notes = {
                message1: this.submission.Message1
              };
              this.previously = {
                firstName: this.personal.firstName,
                lastName: this.personal.lastName,
                phone: this.personal.phone,
                email: this.personal.email,
                address: this.shipping.address,
                city: this.shipping.city,
                state: this.shipping.state,
                other: this.shipping.other,
                postal: this.shipping.postal,
                country: this.shipping.country,
                name: this.angel.name,
                gender: this.angel.gender,
                trimester: this.submission['No Weight'],
                birthday: this.submission['Angels Birthday'],
                angelversary: this.submission['Angelversary Date'],
                pounds: this.submission['Angels Weight in Pounds'],
                ounces: this.submission['Angels Weight in Ounces'],
                bearSize: this.submission['Bear Size'],
                plainBear: this.submission['Plain Bear'],
                bearColor: this.requests.bearColor,
                bearTheme: this.requests.bearTheme,
                bearOmit: this.requests.bearOmit,
                special: this.requests.special,
                selected: this.embroidery.selected,
                text: this.embroidery.text,
                message1: this.notes.message1
              }
            } catch (err) {
              return rej(err);
            }

            return res();
          })
        },
        updatePrevious(value, key) {
          if (this.updatedByUser) {
            let actualKey = this.keyIndex[key];
            let originalValue = this.submission[actualKey];
            let previousValue = this.previously[key];
            if (originalValue !== '' && value === '' && previousValue !== '') {
              let properDisplayName = this.getDisplayName(key);
              let msg = `Are you sure you want to leave ${properDisplayName} blank?`;
              let original = [this, this.keyPaths[key], originalValue];
              let previous = [this, this.keyPaths[key], previousValue];
              let current = [this, this.keyPaths[key], value];
              this.setEmptyValueModal(msg, original, previous, current);
            } else {
              this.previously[key] = value;
            }
          } else {
            this.previously[key] = value;
          }
        },
        getDisplayName(key) {
          switch (key) {
            case 'phone':
              return 'Phone Number';
            case 'email':
              return 'Email Address';
            case 'address':
              return 'Street Address';
            case 'postal':
              return 'Postal Code';
            case 'name':
              return 'Angel\'s Name';
            case 'gender':
              return 'Angel\'s Gender';
            case 'birthday':
              return 'Angel\'s Birthday';
            case 'angelversary':
              return 'Angelversary Date';
            case 'text':
              return 'Embroidery Name';
            case 'message1':
              return 'Special Instructions';
            default:
              return this.keyIndex[key];
          }
        },
        setEmptyValueModal(msg, original, previous, current) {
          this.messages.empty.message = msg;
          this.messages.empty.original = original;
          this.messages.empty.previous = previous;
          this.messages.empty.current = current;

          this.showModal('#emptyModal');
        },
        getModal(selector, options) {
          return UIkit.modal(selector, options);
        },
        showModal(selector, {center = true, bgclose = false, keyboard = false, modal = false} = {}) {
          this.getModal(selector, {
            center: center,
            bgclose: bgclose,
            keyboard: keyboard,
            modal: modal
          }).show();
        },
        hideModal(selector, {center = true, bgclose = false, keyboard = false, modal = false} = {}) {
          this.getModal(selector, {
            center: center,
            bgclose: bgclose,
            keyboard: keyboard,
            modal: modal
          }).hide();
        },
        confirmMessage(msg, revert, save) {
          this.updatedByUser = false;
          this.messages.confirm.message = msg;
          this.messages.confirm.revert = revert;
          this.messages.confirm.save = save;

          this.showModal('#confirmModal');
        },
        rsformDate(obj, toMoment = true) {
          let theMoment = null;
          if (isObject(obj)) {
            let month = obj.month;
            let day = obj.day;
            let year = obj.year;
            theMoment = moment(`${month} / ${day} / ${year}`, 'MM / DD / YYYY');
          } else {
            theMoment = moment(obj, 'MM / DD / YYYY');
          }

          if (!theMoment.isValid()) return !toMoment ? '' : null;
          if (toMoment) return theMoment;

          return theMoment.format('M / D / YYYY');
        },
        isChanges(key, value) {
          let actualKey = get(this, `keyIndex.${key}`, null);
          if (!actualKey) return null;

          let val = get(this.submission, actualKey, null);

          switch (key) {
            case 'trimester':
              value = !value ? '' : 'First Trimester Loss, No Weight Was Reported.';
              break;
            case 'plainBear':
              value = !value ? '' : 'Yes';
              break;
          }

          if (val === value) return null;

          return actualKey;
        },
        checkForChanges(obj, callback) {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              let val = obj[key];
              if (isObject(val)) {
                switch (key) {
                  case 'birthday':
                  case 'angelversary':
                    val = this.rsformDate(obj[key], false);
                    break;
                }
              }

              let actualKey = this.isChanges(key, val);
              if (actualKey !== null) {
                switch (key) {
                  case 'plainBear':
                    val = !val ? '' : 'Yes';
                    break;
                  case 'trimester':
                    var whenTrue = ' I would like a Molly Bear big enough to cuddle and understand the weight may not ';
                    whenTrue += 'necessarily match my angel.';
                    val = !val ? '' : whenTrue;
                    break;
                }
                callback({
                  SubmissionId: this.submission.SubmissionId,
                  FieldName: actualKey,
                  FieldValue: val
                });
              }
            }
          }
          return false;
        },
        hasFocus(selector) {
          return document.hasFocus(document.querySelector(`[name*="${selector}"]`));
        }
      },
      computed: {
        changes() {
          let updatesNeeded = [];
          this.checkForChanges(this.personal, updateObject => updatesNeeded.push(updateObject));
          this.checkForChanges(this.shipping, updateObject => updatesNeeded.push(updateObject));
          this.checkForChanges(this.angel, updateObject => updatesNeeded.push(updateObject));
          this.checkForChanges(this.requests, updateObject => updatesNeeded.push(updateObject));
          this.checkForChanges(this.embroidery, updateObject => updatesNeeded.push(updateObject));
          this.checkForChanges(this.notes, updateObject => updatesNeeded.push(updateObject));

          return updatesNeeded;
        },
        isPersonalReady() {
          return this.personal.email !== ''
        },
        isShippingReady() {
          let street = this.shipping.address !== '';
          let city = this.shipping.city !== '';
          let state = this.shipping.state !== '';
          let postal = this.shipping.postal !== '';

          return (street && city && state && postal);
        },
        isAngelReady() {
          let gender = this.angel.gender !== '';
          let noWeight = this.angel.trimester;
          let bearSize = this.angel.bearSize !== '';
          return noWeight ? (gender && bearSize) : gender;
        },
        isRequestsReady() {
          if (this.requests.plainBear !== false) return true;
          let color = this.requests.bearColor !== '';
          let theme = this.requests.bearTheme !== '';
          let omit = this.requests.bearOmit !== '';
          let special = this.requests.special !== '';

          return (color && theme && omit && special);
        },
        isEmbroideryReady() {
          if (this.embroidery.selected === 'No embroidery requested') return true;

          return this.embroidery.text !== '';
        },
        isCostsReady() {
          if (this.costNumber === 0) return true;
          /** @var {jQuery} $ */

          let card = $.payment.validateCardNumber(this.payment.card);
          let expObj = $.payment.cardExpiryVal(this.payment.exp);
          let exp = $.payment.validateCardExpiry(expObj.month, expObj.year);
          let cvv = $.payment.validateCardCVC(this.payment.cvv, this.payment.cardType);
          let first = this.payment.firstName !== '';
          let last = this.payment.lastName !== '';

          return (card && exp && cvv && first && last);
        },
        keyIndex() {
          return {
            firstName: 'First Name',
            lastName: 'Last Name',
            orderNumber: 'Order Number',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            city: 'City',
            state: 'State or Province',
            other: 'Other State or Province',
            postal: 'Zip Code',
            country: 'Country',
            name: 'Angels Name',
            gender: 'Angels Gender',
            trimester: 'No Weight',
            birthday: 'Angels Birthday',
            angelversary: 'Angelversary Date',
            pounds: 'Angels Weight in Pounds',
            ounces: 'Angels Weight in Ounces',
            bearSize: 'Bear Size',
            plainBear: 'Plain Bear',
            bearColor: 'Bear Color',
            bearTheme: 'Bear Theme',
            bearOmit: 'Bear Omit',
            special: 'Special Requests',
            selected: 'Embroidery 1',
            text: 'Embroidery 1 Name',
            message1: 'Message1'
          }
        },
        keyPaths() {
          return {
            firstName: 'personal.firstName',
            lastName: 'personal.lastName',
            orderNumber: 'personal.orderNumber',
            phone: 'personal.phone',
            email: 'personal.email',
            address: 'shipping.address',
            city: 'shipping.city',
            state: 'shipping.state',
            other: 'shipping.other',
            postal: 'shipping.postal',
            country: 'shipping.country',
            name: 'angel.name',
            gender: 'angel.gender',
            trimester: 'angel.trimester',
            birthday: 'angel.birthday',
            angelversary: 'angel.angelversary',
            pounds: 'angel.pounds',
            ounces: 'angel.ounces',
            bearSize: 'angel.bearSize',
            plainBear: 'requests.plainBear',
            bearColor: 'requests.bearColor',
            bearTheme: 'requests.bearTheme',
            bearOmit: 'requests.bearOmit',
            special: 'requests.special',
            selected: 'embroidery.selected',
            text: 'embroidery.text',
            message1: 'notes.message1'
          }
        },
        baseCostNumber() {
          if (this.submission["Additional Shipping Amount"] === '') return 0;
          let baseCost = parseFloat(this.submission["Additional Shipping Amount"]);
          return isNaN(baseCost) ? 0 : baseCost;
        },
        baseCost() {
          return MoneyFormation(this.baseCostNumber, false);
        },
        embroideryCost() {
          return MoneyFormation(this.embroideryCostNumber);
        },
        embroideryCostNumber() {
          if (this.embroidery.alreadyPurchased) return 0;
          return this.embroidery.selected === 'Yes, embroider my angel’s name' ? 10 : 0;
        },
        costNumber() {
          return this.baseCostNumber + this.embroideryCostNumber;
        },
        cost() {
          return MoneyFormation(this.costNumber, false);
        },
        cardType() {
          switch ($.payment.cardType(this.payment.card)) {
            case 'visa':
              return 'visa';
            case 'mastercard':
              return 'mastercard';
            case 'discover':
              return 'discover';
            case 'amex':
              return 'amex';
            default:
              return 'generic'
          }
        }
      },
      render(h) {
        return h(App);
      },
      mounted() {
        if (this.token !== '') {
          getToken(this.origin, {token: this.token})
            .then(data => {
              if (!isObject(data)) return this.invalidToken = true;
              return this.setSubmission(data);
            })
            .then(() => {
              this.$nextTick(() => {
                this.loading = false;
              })
            })
            .catch(err => window.lastError = err);
        } else {
          this.invalidToken = true;
          this.loading = false;
        }
      }
    })
      .$mount('#App');
  }
}, 10);
