webpackJsonp([1],{1611:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=a.n(r),l=a(2),m=a.n(l),c=a(734),u=a(5),g=a(4),v=a(3),b=a(107),d=a(19),f=a(56),_=a(7),h=a.n(_),y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p="-----BEGIN BITSHARES SIGNED MESSAGE-----",E="-----END BITSHARES SIGNED MESSAGE-----",k=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={tabsm_memo_key:a.props.account.get("options").get("memo_key"),tabsm_memo:"",tabsm_memo_signed:"",tabvm_memo:"",tabvm_verified:null,tabvm_memo_verified:null,tabvm_flag_verifyonchange:!1},a}return i(t,e),y(t,[{key:"parseMemo",value:function(e){var t=void 0,a=void 0,n=void 0,s=void 0;try{t=e.split(p)[1],a=t.split("-----BEGIN META-----"),t=a[0].trim(),n=a[1].split("-----BEGIN SIGNATURE-----"),a=n[0].trim(),n=n[1].split(E)[0].trim(),s=t+"\n"+a}catch(e){throw new Error(h.a.translate("account.signedmessages.invalidformat"))}var i=void 0,r=void 0,o=void 0,l=void 0;if(a)try{i=a.split("account="),i=i[1].split("\n")[0].trim(),r=a.split("memokey="),r=r[1].split("\n")[0].trim(),o=a.split("block="),o=o[1].split("\n")[0].trim(),l=a.split("timestamp="),l=l[1].split("\n")[0].trim()}catch(e){throw new Error(h.a.translate("account.signedmessages.invalidformat"))}var m=v.b.getAccount(i);if(null==m)throw new Error(h.a.translate("account.signedmessages.invaliduser"));var c=m.get("options").get("memo_key");if(r!==c)throw new Error(h.a.translate("account.signedmessages.keymismatch"));return{content:t,meta:{account:i,key:c,block:o,timestamp:l},signed:s,signature:n}}},{key:"_tabSMSignAction",value:function(e){var t=this;e.preventDefault(),Promise.resolve(f.a.unlock()).then(function(){if(t.state.tabsm_memo)try{var e=t.state.tabsm_memo,a=t.state.tabsm_memo_key;/111111111111111111111/.test(a)&&(a=null);var n=void 0;if(e&&a&&!(n=d.a.getPrivateKey(a)))throw new Error(h.a.translate("account.signedmessages.invalidkey"));var s=v.b.getObject("2.1.0").get("last_irreversible_block_num"),i=new Date,r="account="+t.props.account.get("name")+"\nmemokey="+t.state.tabsm_memo_key+"\nblock="+s+"\ntimestamp="+i.toUTCString(),o=e+"\n"+r;t._tabSMPopMessage(h.a.translate("account.signedmessages.signing"),0),setTimeout(function(){try{var s=v.k.signBuffer(o,n,a),i=p+"\n"+e+"\n-----BEGIN META-----\n"+r+"\n-----BEGIN SIGNATURE-----\n"+s.toHex()+"\n"+E;t.setState({tabsm_memo_signed:i,tabsm_message:""})}catch(e){t._tabSMPopMessage(e.message),t.setState({tabsm_memo_signed:null})}},0)}catch(e){t._tabSMPopMessage(e.message)}})}},{key:"_tabSMHandleChange",value:function(e){this.setState({tabsm_memo:e.target.value})}},{key:"_tabSMHandleChangeKey",value:function(e){this.setState({tabsm_memo_key:e})}},{key:"_tabSMCopyToClipBoard",value:function(e){if(""!==e.target.value){e.target.focus(),e.target.select();try{var t=document.execCommand("copy");this._tabSMPopMessage(t?h.a.translate("account.signedmessages.copysuccessful"):h.a.translate("account.signedmessages.copyunsuccessful"))}catch(e){this._tabSMPopMessage(h.a.translate("account.signedmessages.copyunsuccessful"))}}}},{key:"_tabSMPopMessage",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.setState({tabsm_message:e}),""!==e&&a>0&&setTimeout(function(){t.setState({tabsm_message:""})},a)}},{key:"_tabVMAction",value:function(e){var t=this;e.preventDefault(),this.setState({tabvm_memo_verified:null,tabvm_verified:!1}),this.state.tabvm_memo&&(this._tabVMPopMessage(h.a.translate("account.signedmessages.verifying"),0),setTimeout(function(){try{var e=t.parseMemo(t.state.tabvm_memo),a=!1;try{a=v.k.fromHex(e.signature).verifyBuffer(e.signed,v.i.fromPublicKeyString(e.meta.key))}catch(e){throw new Error(h.a.translate("account.signedmessages.errorverifying"))}if(!a)throw new Error(h.a.translate("account.signedmessages.invalidsignature"));t.setState({tabvm_memo_verified:e,tabvm_verified:a,tabvm_message:""})}catch(e){t._tabVMPopMessage(e.message),t.setState({tabvm_memo_verified:null,tabvm_verified:!1})}},0))}},{key:"_tabVMHandleChange",value:function(e){this.setState({tabvm_memo:e.target.value,tabvm_verified:!1,tabvm_memo_verified:null}),this.state.tabvm_flag_verifyonchange&&this._tabVMAction(e)}},{key:"_tabVMPopMessage",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.setState({tabvm_message:e}),""!==e&&a>0&&setTimeout(function(){t.setState({tabvm_message:""})},a)}},{key:"_tabVMToggleVerifyOnChange",value:function(){this.setState({tabvm_flag_verifyonchange:!this.state.tabvm_flag_verifyonchange})}},{key:"render",value:function(){return o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"generic-bordered-box"},o.a.createElement(b.b,{tabsClass:"bordered-header no-padding",setting:"accountSignedMessagesTab",contentClass:"grid-content shrink small-vertical medium-horizontal no-padding"},o.a.createElement(b.a,{title:"account.signedmessages.signmessage"},o.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},o.a.createElement("div",{className:"content-block no-margin"},o.a.createElement("h3",null,o.a.createElement(m.a,{content:"account.signedmessages.signmessage"}))),o.a.createElement(c.a,{ref:"memo_key",value:this.state.tabsm_memo_key,label:"account.perm.memo_public_key",placeholder:"Public Key",tabIndex:7,onChange:this._tabSMHandleChangeKey.bind(this),disableActionButton:!0}),o.a.createElement("br",null),o.a.createElement("textarea",{rows:"10",value:this.state.tabsm_memo,onChange:this._tabSMHandleChange.bind(this),placeholder:h.a.translate("account.signedmessages.entermessage")}),o.a.createElement("span",null,o.a.createElement("button",{className:"button",onClick:this._tabSMSignAction.bind(this)},o.a.createElement(m.a,{content:"account.signedmessages.sign"})),o.a.createElement("text",{style:{color:"gray"}},this.state.tabsm_message)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("textarea",{rows:"14",value:this.state.tabsm_memo_signed,style:{editable:!1},placeholder:h.a.translate("account.signedmessages.automaticcreation"),onClick:this._tabSMCopyToClipBoard.bind(this)}))),o.a.createElement(b.a,{title:"account.signedmessages.verifymessage"},o.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},o.a.createElement("div",{className:"content-block no-margin"},o.a.createElement("h3",null,o.a.createElement(m.a,{content:"account.signedmessages.verifymessage"})),o.a.createElement("div",{style:{float:"right",marginTop:"0.1em",marginBottom:"0.5em"}},o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("label",null,o.a.createElement(m.a,{content:"account.signedmessages.verifyonchange"}))),o.a.createElement("td",null,o.a.createElement("div",{className:"switch",onClick:this._tabVMToggleVerifyOnChange.bind(this)},o.a.createElement("input",{type:"checkbox",checked:this.state.tabvm_flag_verifyonchange,value:h.a.translate("account.signedmessages.verifyonchange")}),o.a.createElement("label",null))))))),o.a.createElement("textarea",{rows:"10",value:this.state.tabvm_memo,onChange:this._tabVMHandleChange.bind(this),placeholder:h.a.translate("account.signedmessages.entermessage")}),o.a.createElement("span",null,o.a.createElement("button",{className:"button",onClick:this._tabVMAction.bind(this)},o.a.createElement(m.a,{content:"account.signedmessages.verify"})),o.a.createElement("text",{style:{color:"gray"}},this.state.tabvm_message),null!==this.state.tabvm_verified&&o.a.createElement("div",{style:{float:"right"}},"Message is:",o.a.createElement("div",{style:{backgroundColor:this.state.tabvm_verified?"green":"red"}},o.a.createElement("label",null,this.state.tabvm_verified?"verified":"not verified"))),this.state.tabvm_verified&&null!==this.state.tabvm_memo_verified&&o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{style:{color:"gray"}},"Verified message from ",this.state.tabvm_memo_verified.meta.account,", signed on ",this.state.tabvm_memo_verified.meta.timestamp,":",o.a.createElement("br",null),o.a.createElement("pre",null,this.state.tabvm_memo_verified.content)))))))))}}]),t}(o.a.Component);k.propTypes={account:u.a.ChainAccount.isRequired},k=Object(g.a)(k),t.default=k}});
//# sourceMappingURL=1.js.map