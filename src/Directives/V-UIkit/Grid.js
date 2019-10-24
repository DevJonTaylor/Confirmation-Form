import Vue from 'vue';
import CommandCenter from "../CommandCenter";

Vue.directive('grid', function (el, bind) {
  const cc = new CommandCenter(el, bind);

  cc.hasArg((arg) => {
    if(arg === 'uk') cc.trueValueClass( 'uk-grid');
  })
    .hasNothing(() => cc.addClass('uk-grid'))
    .hasMod('center', () => cc.trueValueClass('uk-container.center'))
    .hasMod('s', () => cc.trueValueClass('uk-grid-small'))
    .hasMod('m', () => cc.trueValueClass('uk-grid-medium'))
    .hasMod('l', () => cc.trueValueClass('uk-grid-large'))
    .hasMod('col', () => cc.trueValueClass('uk-grid-collapse'))
    .hasMod('div', () => cc.trueValueClass('uk-grid-divider'))
    .hasMod('child', (m, arg) => {
      if(arg) cc.trueValueClass(`uk-grid-width-${arg}`);
      else cc.trueValueClass(`uk-grid-width-1-1`);
    })
    .hasMod('child-s', (m, arg) => {
      if(arg) cc.trueValueClass(`uk-grid-width-small-${arg}`);
      else cc.trueValueClass(`uk-grid-width-small-1-1`);
    })
    .hasMod('child-m', (m, arg) => {
      if(arg) cc.trueValueClass(`uk-grid-width-medium-${arg}`);
      else cc.trueValueClass(`uk-grid-width-medium-1-1`);
    })
    .hasMod('child-l', (m, arg) => {
      if(arg) cc.trueValueClass(`uk-grid-width-large-${arg}`);
      else cc.trueValueClass(`uk-grid-width-large-1-1`);
    })
    .hasMod('match', () => {
      if(typeof this.isValue) {
        let val = this.value;
        if(typeof val === 'string')
          cc.trueValueAttr(['data-uk-grid-match', `{target: '${val}'}`]);
        else if(val) cc.trueValueAttr(['data-uk-grid-match']);
        else cc.trueValueAttr(['data-uk-grid-match', 'false']);
      } else {
        cc.trueValueAttr(['data-uk-grid-match']);
      }
    });
});
