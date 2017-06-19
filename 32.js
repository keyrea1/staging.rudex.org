webpackJsonp([32],{1190:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n.n(s),c=n(41),l=n(19),u=n.n(l),p=n(131),d=n(48),f=n.n(d),h=n(34),w=n(1276),m=n(21),b=n.n(m),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={success:!1},e}return o(t,e),v(t,[{key:"onAccept",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.old_password,r=n.new_password;h.a.changePassword(a,r,!0).then(function(){p.a.success("Password changed"),t.setState({success:!0})}).catch(function(e){console.error(e),p.a.error("Unable to change password: "+e)})}},{key:"onOldPassword",value:function(e){this.setState({old_password:e})}},{key:"onNewPassword",value:function(e){this.setState({new_password:e})}},{key:"_onCancel",value:function(){this.setState({old_password:""}),this.refs.pwd.cancel()}},{key:"render",value:function(){var e=!!this.state.new_password;return this.state.success?i.a.createElement("div",null,i.a.createElement(u.a,{component:"p",content:"wallet.change_success"}),i.a.createElement(u.a,{component:"p",content:"wallet.change_backup"}),i.a.createElement(c.e,{to:"/wallet/backup/create"},i.a.createElement("div",{className:"button outline"},i.a.createElement(u.a,{content:"wallet.create_backup"})))):i.a.createElement("span",null,i.a.createElement(_,{ref:"pwd",onValid:this.onOldPassword.bind(this)},i.a.createElement(w.a,{onSubmit:this.onAccept.bind(this),newPassword:!0,onValid:this.onNewPassword.bind(this)},i.a.createElement("button",{className:f()("button outline",{disabled:!e}),type:"submit",onClick:this.onAccept.bind(this)},i.a.createElement(u.a,{content:"wallet.accept"})),i.a.createElement("div",{className:"button outline",onClick:this._onCancel.bind(this)},i.a.createElement(u.a,{content:"wallet.cancel"})))))}}]),t}(s.Component);t.default=y;var _=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",verified:!1},e}return o(t,e),v(t,[{key:"cancel",value:function(){this.setState({verified:!1,password:""})}},{key:"onPassword",value:function(e){e.preventDefault(),h.a.validatePassword(this.state.password)?(this.setState({verified:!0}),this.props.onValid(this.state.password)):p.a.error("Invalid Password")}},{key:"formChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"render",value:function(){return this.state.verified?i.a.createElement("div",{className:"grid-content"},this.props.children):i.a.createElement("form",{onSubmit:this.onPassword.bind(this)},i.a.createElement("label",null,i.a.createElement(u.a,{content:"wallet.existing_password"})),i.a.createElement("section",null,i.a.createElement("input",{placeholder:b.a.translate("wallet.current_pass"),type:"password",id:"password",onChange:this.formChange.bind(this),value:this.state.password})),i.a.createElement("button",{className:"button outline"},i.a.createElement(u.a,{content:"wallet.submit"})))}}]),t}(s.Component);_.propTypes={onValid:i.a.PropTypes.func.isRequired};!function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}o(t,e),v(t,[{key:"render",value:function(){var e=this.props.label||i.a.createElement(u.a,{content:"wallet.reset"});return i.a.createElement("span",{className:"button outline",onClick:this.onReset.bind(this)},e)}},{key:"onReset",value:function(){window.history.back()}}])}(s.Component)},1276:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(1),i=n.n(s),c=n(19),l=n.n(c),u=n(26),p=n.n(u),d=n(48),f=n.n(d),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",confirm:"",errors:p.a.Map(),valid:!1},e}return o(t,e),h(t,[{key:"componentDidMount",value:function(){this.refs.firstPassword&&this.refs.firstPassword.focus()}},{key:"render",value:function(){var e=this.state,t=(e.password,e.confirm,e.valid,e.errors),n=this.props.newPassword,a=1;return i.a.createElement("div",{className:f()({"has-error":t.size})},i.a.createElement(l.a,{component:"label",content:n?"wallet.new_password":"wallet.password"}),i.a.createElement("section",null,i.a.createElement("input",{type:"password",id:"password",ref:"firstPassword",onChange:this.formChange.bind(this),value:this.state.password,tabIndex:a++})),i.a.createElement(l.a,{component:"label",content:n?"wallet.new_confirm":"wallet.confirm"}),i.a.createElement("section",null,i.a.createElement("input",{type:"password",id:"confirm",onChange:this.formChange.bind(this),value:this.state.confirm,tabIndex:a++})),i.a.createElement("div",{style:{paddingBottom:10}},t.get("password_match")||t.get("password_length")),this.props.children,i.a.createElement("br",null))}},{key:"formChange",value:function(e){var t=this.state;t[e.target.id]=e.target.value,this.setState(t),this.validate(t)}},{key:"validate",value:function(e){var t=e.password,n=e.confirm;n=n.trim(),t=t.trim();var a=p.a.Map();0!==t.length&&t.length<8&&(a=a.set("password_length","Password must be 8 characters or more")),""!==t&&""!==n&&t!==n&&(a=a.set("password_match","Passwords do not match"));var r=t.length>=8&&t===n;this.setState({errors:a,valid:r}),this.props.onValid(r?t:null)}}]),t}(s.Component);w.propTypes={onValid:s.PropTypes.func.isRequired},t.a=w}});
//# sourceMappingURL=32.js.map