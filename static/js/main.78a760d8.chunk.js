(this.webpackJsonploanbook=this.webpackJsonploanbook||[]).push([[0],{25:function(e,t){e.exports={pushHistory:function(e,t){e.history.push(t)},getUrlData:function(e,t){return t[e]||{didInvalidate:!1,isFetching:!0,items:[],lastUpdated:""}},lookup:function(e){try{!function(e,t){var a=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.src="".concat(e+(e.indexOf("?")+1?"&":"?"),"callback=").concat(t),a.parentNode.insertBefore(n,a),n.onload=function(){n.remove()}}("http://ipinfo.io?token=e6909d77aca84d","sendBack"),window.sendBack=function(t){var a=t&&t.country?t.country:"";e(a)}}catch(t){}},extractResponseError:function(e){var t="";if(e.constructor===Array&&e.length>0)t=e[0];else if("object"===typeof e)if(e.detail)t=e.detail;else if(e.non_field_errors)t=e.non_field_errors;else if(Object.keys(e).length>0)for(var a in e)t+=a+": "+e[a]+" ";else t=e.toString();else"string"===typeof e&&(t=e);return t},formDataToPayload:function(e,t){return e.forEach((function(e,a){t[a]=e})),t},dynamicSort:function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,n){return(a[e]<n[e]?-1:a[e]>n[e]?1:0)*t}},roundNumber:function(e,t){return+(Math.round(e+"e+"+t)+"e-"+t)},numberWithCommas:function(e,t){if(t||(t=2),e||0===e||(e=null),null!=e){try{e=e.toFixed(t)}catch(n){e=this.roundNumber(e,2)}var a=e.toString().split(".");return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),a.join(".")}return e}}},251:function(e,t,a){e.exports=a(348)},256:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),l=(a(256),a(17)),c=a(16),s=a(20),u=a(21),m=a(22),d=a(103),p=a(112),_=a(398),h=a(399),f=a(400),b=a(401),g=a(191),v=a(152),E=a(189),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{color:"primary"})}}]),t}(n.Component),O=a(91),j=a(71),C=a(60),k=a(25),D=a(88),x=a.n(D),w=a(30),S=a(2),I=a(3),N=a(216),P=a.n(N),Y=a(218),A=a.n(Y),M=a(219),W=a.n(M),B=a(395),U=a(396),R=a(397),q=a(217),L=a.n(q),z=a(63),T={success:P.a,warning:L.a,error:A.a,info:W.a},F=Object(z.a)((function(e){return{success:{backgroundColor:B.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:U.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function V(e){var t=F(),a=e.className,n=e.message,i=(e.onClose,e.variant),o=Object(S.a)(e,["className","message","onClose","variant"]),l=T[i];return r.a.createElement(R.a,Object.assign({className:Object(I.a)(t[i],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(l,{className:Object(I.a)(t.icon,t.iconVariant)}),n)},o))}var H=Object(z.a)((function(e){return{margin:{margin:e.spacing(1)}}}));function J(e){var t=H(),a=r.a.useState(!1),n=Object(w.a)(a,2);n[0],n[1];return r.a.createElement("div",null,r.a.createElement(V,{variant:e.message_variant,className:t.margin,message:e.message_text}))}var G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleLoginSubmit=function(e){e.preventDefault(),a.setState({activity:!0});var t=new FormData(x()("form#login-form")[0]),n={grant_type:"password",client_id:"i7YlkIu4qdkLZJsnJubhIbeYWP0Qq2NH3D0vatNO",client_secret:"cx84im8OqngRMM3EftMAfKh1vwEFuSuAD9GH2gE7JxzjE7lJCTI55ZJND8MFPOGkHcFesA9Piy9CgKSzaz3L0bKyspdhq1w8wRouYwhrv3ba8rNwvZ4ppnsebR0rccdB"};n=Object(k.formDataToPayload)(t,n),localStorage.username=n.username;var r=Object(C.serverBaseUrl)()+"/registration/login/";Object(j.postAPIRequest)(r,(function(e){e.access_token&&(localStorage.token=e.access_token),a.setState({activity:!1},Object(k.pushHistory)(a.props,"/"))}),(function(e){var t=Object(k.extractResponseError)(e);a.setState({message:!0,message_text:t,message_variant:"error",activity:!1})}),n,{"Content-Type":"application/json"})},a.state={activity:!1,message:!1,message_text:null,message_variant:"info"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement(d.a,{variant:"contained",color:"primary",type:"submit"},"Login");this.state.activity&&(t=r.a.createElement(y,null));var a="";return this.state.message&&(a=r.a.createElement(J,{message_variant:this.state.message_variant,message_text:this.state.message_text})),r.a.createElement(p.a,{className:"Login-container"},r.a.createElement(_.a,{maxWidth:"sm"},r.a.createElement(h.a,{container:!0,spacing:0,alignItems:"center",justify:"center",className:"login-grid"},r.a.createElement(f.a,null,r.a.createElement(b.a,null,a,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){return e.handleLoginSubmit(t)},id:"login-form"},r.a.createElement("div",null,r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(g.a,{fullWidth:!0},r.a.createElement(v.a,{label:"Email/Username",name:"username"}))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(g.a,{fullWidth:!0},r.a.createElement(v.a,{type:"password",label:"Password",name:"password"}))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(g.a,{fullWidth:!0},t))))))))))}}]),t}(n.Component),K=Object(O.f)(G),Z=a(46),Q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-center align-content-center loading-page"},r.a.createElement("div",{className:"spinner-grow text-primary",style:{width:"5rem",height:"5rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Processing...")))}}]),t}(n.Component),$=a(7),X=a(12),ee=a(404),te=a(170),ae=a(143),ne=a(74),re=a(236),ie=a(403),oe=a(212),le=a(137),ce=a(224),se=a.n(ce),ue=a(225),me=a.n(ue),de=a(177),pe=a.n(de),_e=a(223),he=a.n(_e),fe=a(176),be=a.n(fe),ge=a(226),ve=a.n(ge),Ee=Object(z.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object($.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object($.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(X.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object($.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object($.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object($.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ye(e){var t=Ee(),a=r.a.useState(null),n=Object(w.a)(a,2),i=n[0],o=n[1],l=r.a.useState(null),c=Object(w.a)(l,2),s=c[0],u=c[1],m=Boolean(i),d=Boolean(s),p=function(e){o(e.currentTarget)},_=function(){u(null)},h=function(){o(null),_()},f="primary-search-account-menu",b=r.a.createElement(le.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:f,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:h},r.a.createElement(oe.a,{onClick:h},"Profile"),r.a.createElement(oe.a,{onClick:h},"My account")),g=r.a.createElement(le.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:_},r.a.createElement(oe.a,null,r.a.createElement(ae.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(ie.a,{badgeContent:4,color:"secondary"},r.a.createElement(he.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(oe.a,null,r.a.createElement(ae.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(ie.a,{badgeContent:11,color:"secondary"},r.a.createElement(be.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(oe.a,{onClick:p},r.a.createElement(ae.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(pe.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:t.grow},r.a.createElement(ee.a,{position:"fixed"},r.a.createElement(te.a,null,r.a.createElement(ae.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(se.a,null)),r.a.createElement(ne.a,{className:t.title,variant:"h6",noWrap:!0},e.brand_name),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(me.a,null)),r.a.createElement(re.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},r.a.createElement(ae.a,{"aria-label":"show ".concat(e.notifications_count," new notifications"),color:"inherit"},r.a.createElement(ie.a,{badgeContent:e.notifications_count,color:"secondary"},r.a.createElement(be.a,null))),r.a.createElement(ae.a,{edge:"end","aria-label":"account of current user","aria-controls":f,"aria-haspopup":"true",onClick:p,color:"inherit"},r.a.createElement(pe.a,null))),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(ae.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(ve.a,null))))),g,b)}var Oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){e.preventDefault();var t=Object(C.serverBaseUrl)()+"/registration/logout/";Object(j.postAPIRequest)(t,(function(){Object(k.pushHistory)(a.props,"/login"),localStorage.removeItem("token")}),(function(){Object(k.pushHistory)(a.props,"/login"),localStorage.removeItem("token")}),{},{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token})},a.state={loading:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(C.serverBaseUrl)()+"/registration/users/i/";Object(j.getAPIRequest)(t,(function(){e.setState({loading:!1})}),(function(){Object(k.pushHistory)(e.props,"/login"),localStorage.removeItem("token")}),{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token})}},{key:"render",value:function(){return this.state.loading?r.a.createElement(Q,null):r.a.createElement("div",null,r.a.createElement(ye,{brand_name:"Loanbook",notifications_count:0}),this.props.children)}}]),t}(n.Component);var je=Object(Z.b)((function(e){return{sessionVariables:e.sessionVariables}}))(Object(O.f)(Oe)),Ce=a(227),ke=a.n(Ce),De="REQUEST_DATA",xe="RECEIVE_DATA",we="SELECT_API_ENDPOINT",Se="INVALIDATE_DATA";function Ie(e){return function(t){return t(function(e){return{type:De,endpoint:e}}(e)),ke()(e,{headers:{Authorization:"Bearer "+localStorage.token}}).then((function(e){return e.json()})).then((function(a){return t(function(e,t){return{type:xe,endpoint:e,items:t,receivedAt:Date.now()}}(e,a))}))}}function Ne(e){return function(t,a){if(function(e,t){var a=e.dataByUrl[t];return!a||!a.isFetching&&a.didInvalidate}(a(),e))return t(Ie(e))}}var Pe=a(368),Ye=a(405),Ae=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Pe.a,{fullWidth:"sm",maxWidth:"sm",open:this.props.open,onClose:this.props.handleClose,disableBackdropClick:!0,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ye.a,{id:"form-dialog-title"},this.props.title),this.props.children))}}]),t}(n.Component),Me=a(52),We=a.n(Me),Be=(a(31),a(144)),Ue=a.n(Be);var Re=a(409),qe=a(408),Le=a(412),ze=a(157),Te=a(211),Fe=a(210),Ve=a(232),He=a(19),Je=a(165);function Ge(e){return r.a.createElement(He.a,{utils:Ve.a},r.a.createElement(Je.a,{onChange:e.onChange,maxDate:e.maxDate,value:e.value,format:e.format,label:e.label,fullWidth:e.fullWidth}))}var Ke=a(410);function Ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Qe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(a),!0).forEach((function(t){Object($.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ze(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $e=Object(z.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}});function Xe(e){var t=$e();return r.a.createElement(Ke.a,{id:"autocomplete-select",options:e.data,classes:{option:t.option},autoHighlight:!0,onChange:function(t,a){return e.onChange(a)},getOptionLabel:function(e){return e.label},renderOption:function(e){return r.a.createElement(r.a.Fragment,null,e.optionDisplay)},renderInput:function(t){return r.a.createElement(v.a,Object.assign({},t,{label:e.label,fullWidth:!0,inputProps:Qe({},t.inputProps,{autoComplete:"disabled"})}))}})}var et=a(365),tt=a(366),at=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDateChange=function(e){a.setState({selected_date:e})},a.handleCountryChange=function(e){a.setState({selected_country:e.label}),document.querySelector("input[name=mobile_no]").value=e.phone};var n=We()().subtract(18,"years").toDate();return a.state={_18_years_ago:n,selected_date:n,selected_country:"",activity:!1,message:!1,message_variant:"info",message_text:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){Object(k.lookup)((function(e){var t=ze.countries[e]||{};document.querySelector("input[name=mobile_no]").value="+"+t.phone}))}},{key:"handleSubmitClient",value:function(e){var t=this;e.preventDefault(),this.setState({activity:!0});var a=new FormData(x()("form#client-details-form")[0]),n=this.state.selected_date;"object"===typeof n&&(n=We()(n).format("YYYY-MM-DD"));var r={date_of_birth:n};r=Object(k.formDataToPayload)(a,r);var i=Object(C.serverBaseUrl)()+"/registration/members/";Object(j.postAPIRequest)(i,(function(e){t.setState({message:!0,message_text:"Client added successfully",message_variant:"success",activity:!1}),x()("form#client-details-form")[0].reset();var a=t.props,n=a.sessionVariables,r=a.dispatch,i=n.clients_url||"";r(Ne(i)),r({type:Se,endpoint:i})}),(function(e){var a=Object(k.extractResponseError)(e);t.setState({message:!0,message_text:a,message_variant:"error",activity:!1})}),r,{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token})}},{key:"render",value:function(){var e=this,t=Object.keys(ze.countries).map((function(e){var t=ze.countries[e];return{value:e,label:t.name,optionDisplay:t.name+"("+t.native+")",phone:"+"+t.phone}})),a=r.a.createElement(tt.a,null,r.a.createElement(d.a,{color:"primary",type:"submit"},"Add client"),r.a.createElement(d.a,{onClick:this.props.handleClose,color:"primary"},"Close"));this.state.activity&&(a=r.a.createElement(y,null));var n="";return this.state.message&&(n=r.a.createElement(J,{message_variant:this.state.message_variant,message_text:this.state.message_text})),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:12},n,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmitClient(t)},id:"client-details-form"},r.a.createElement(et.a,null,r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(v.a,{fullWidth:!0,type:"text",label:"First name",name:"first_name",required:!0})),r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(v.a,{fullWidth:!0,type:"text",label:"Last name",name:"last_name",required:!0}))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(v.a,{fullWidth:!0,type:"text",label:"ID no",name:"id_no",required:!0})),r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(Te.a,{id:"gender-select-label"},"Gender"),r.a.createElement(Fe.a,{fullWidth:!0,name:"gender",labelId:"gender-select-label",required:!0},r.a.createElement(oe.a,{value:"male"},"Male"),r.a.createElement(oe.a,{value:"female"},"Female"),r.a.createElement(oe.a,{value:"other"},"Other")))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(Ge,{label:"Date of birth",maxDate:this.state._18_years_ago,value:this.state.selected_date,onChange:this.handleDateChange,format:"YYYY-MM-DD",fullWidth:!0}))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(g.a,{fullWidth:!0},r.a.createElement(Xe,{label:"Country",optionLabel:"label",data:t,onChange:function(t){return e.handleCountryChange(t)}})))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(v.a,{fullWidth:!0,type:"email",label:"Email",name:"email",required:!0}))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(g.a,{fullWidth:!0},r.a.createElement(v.a,{fullWidth:!0,type:"text",label:"Phone number",name:"mobile_no",ref:"mobile_no",required:!0}))))),a)))}}]),t}(n.Component);var nt=Object(Z.b)((function(e){return{sessionVariables:e.sessionVariables}}))(Object(O.f)(at)),rt=a(171),it=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClientChange=function(e){a.setState({selected_client:e})},a.handleFirstDateChange=function(e){a.setState({date_of_first_repayment:e})},a.handleApplicationDateChange=function(e){a.setState({date_of_loan_application:e})},a.matchWithProduct=function(e,t){var n=(a.props.loan_products_data.items||[]).find((function(t){return t.amortization===e.amortization&&t.interest_method===e.interest_calculation_method&&t.interest_charged_per===e.interest_charged_per&&t.repayment_interval===e.repayment_interval&&t.repaid_every===parseInt(e.repaid_every)}));n?(e.loan_type=n.id,t(e)):a.createLoanProduct(e,t)},a.createLoanProduct=function(e,t){var n=a.props,r=n.chart_of_accounts_data,i=n.banks_data,o=n.loan_products_url,l=n.loan_products_data,c=r.items,s=l.items,u=We()().format("YYYY-MM-DD"),m=We()().add(100,"years").format("YYYY-MM-DD"),d=c.find((function(e){return 1===e.account_type})),p=c.find((function(e){return 4===e.account_type})),_=c.find((function(e){return 5===e.account_type})),h=c.find((function(e){return 2===e.account_type})),f=i.items[0],b="Per "+e.interest_charged_per+" "+e.interest_calculation_method+" "+e.amortization+" "+e.repaid_every+" "+e.repayment_interval,g={product_name:b,short_name:s.length+1,description:b,start_date:u,close_date:m,loan_fund:f.gl_account,status:"active",minimum_days_disbursement_repayment:0,minimum_principal:1,maximum_principal:2147483647,minimum_repayments:1,maximum_repayments:100,minimum_interest_rate:0,maximum_interest_rate:2147483647,default_interest_rate:e.interest_rate,interest_charged_per:e.interest_charged_per,repaid_every:e.repaid_every,repayment_interval:e.repayment_interval,interest_method:e.interest_calculation_method,days_overdue_before_arreas:30,days_overdue_before_npa:60,minimum_guarantors:0,maximum_guarantors:0,place_guarantor_funds_hold:"yes",enable_multiple_disbursals:"yes",amortization:e.amortization,gl_account:d.id,interest_account:p.id,overpayment_account:h.id,losses_from_write_off:_.id,is_group_loan:!1,recalculate_loan_advance_payment:!1,realtime_interest:!1,realtime_penalties:!0,total_interest_calculation_method:"as_per_loan_type",calculate_repayment_ability_from_salary:!1,no_of_decimal_places:0,members_only:!0,maximum_number_of_concurrent_loans:1,recalculate_loan_on_repayment:!1,interest_posting_method:"on_application"};Object(j.postAPIRequest)(o,(function(a){e.loan_type=a.id,t(e)}),(function(e){var t=Object(k.extractResponseError)(e);a.setState({alert:!0,alert_message:t,alert_class:"alert alert-danger",activity:!1})}),g,{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token})},a.state={selected_client:null,date_of_first_repayment:null,date_of_loan_application:null,activity:!1,message:!1,message_variant:"info",message_text:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleLoanIssueSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({activity:!0});var a=new FormData(x()("form#issue-loan-form")[0]),n="LNR-"+(new Date).getTime(),r={date_of_first_repayment:We()(this.state.date_of_first_repayment).format("YYYY-MM-DD"),loan_reference_no:n,date_of_loan_application:We()(this.state.date_of_loan_application).format("YYYY-MM-DD"),member:(this.props.selected_client||{}).id};r=Object(k.formDataToPayload)(a,r),this.matchWithProduct(r,(function(e){var a=Object(C.serverBaseUrl)()+"/products/applied_loans/";Object(j.postAPIRequest)(a,(function(e){t.setState({message:!0,message_text:"Loan issued successfully",message_variant:"success",activity:!1}),x()("form#issue-loan-form")[0].reset()}),(function(e){var a=Object(k.extractResponseError)(e);t.setState({message:!0,message_text:a,message_variant:"error",activity:!1})}),e,{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token})}))}},{key:"render",value:function(){var e=this,t=this.props.selected_client,a=r.a.createElement(tt.a,null,r.a.createElement(d.a,{color:"primary",type:"submit"},"Issue Loan"),r.a.createElement(d.a,{onClick:this.props.handleClose,color:"primary"},"Close"));this.state.activity&&(a=r.a.createElement(y,null));var n="";return this.state.message&&(n=r.a.createElement(J,{message_variant:this.state.message_variant,message_text:this.state.message_text})),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:12},n,r.a.createElement("form",{onSubmit:function(t){return e.handleLoanIssueSubmit(t)},id:"issue-loan-form"},r.a.createElement(et.a,null,r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(ne.a,{fullWidth:!0},"Client: ",t.full_name))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(v.a,{type:"number",fullWidth:!0,label:"Amount",name:"amount",required:!0})),r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(v.a,{type:"number",label:"Interest rate",required:!0,name:"interest_rate",InputProps:{endAdornment:r.a.createElement(rt.a,{position:"end"},r.a.createElement(Te.a,{id:"interest-charged-per-label"},"Per"),r.a.createElement(Fe.a,{name:"interest_charged_per",labelId:"interest-charged-per-label"},r.a.createElement(oe.a,{value:"month"},"Per month"),r.a.createElement(oe.a,{value:"year"},"Per year")))}}))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(Te.a,{id:"interest-calculation-method-label"},"Interest calculation method"),r.a.createElement(Fe.a,{fullWidth:!0,labelId:"interest-calculation-method-label",name:"interest_calculation_method"},r.a.createElement(oe.a,{value:"flat_rate"},"Flat rate"),r.a.createElement(oe.a,{value:"reducing_balance"},"Reducing balance")))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(Ge,{label:"Date of application",value:this.state.date_of_loan_application,format:"YYYY-MM-DD",fullWidth:!0,onChange:this.handleApplicationDateChange})),r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(Ge,{label:"First payment date",value:this.state.date_of_first_repayment,format:"YYYY-MM-DD",fullWidth:!0,onChange:this.handleFirstDateChange}))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(v.a,{type:"number",label:"Repayment plan (repaid every)",required:!0,fullWidth:!0,name:"repaid_every",InputProps:{endAdornment:r.a.createElement(rt.a,{position:"end"},r.a.createElement(Te.a,{id:"repayment-interval-label"},"Interval"),r.a.createElement(Fe.a,{name:"repayment_interval",labelId:"repayment-interval-label"},r.a.createElement(oe.a,{value:"days"},"Days"),r.a.createElement(oe.a,{value:"months"},"Months")))}}))),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(v.a,{fullWidth:!0,type:"number",label:"No of installments",name:"no_of_repayments",required:!0})),r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(Te.a,{id:"amortization-label"},"Amortization"),r.a.createElement(Fe.a,{fullWidth:!0,labelId:"amortization-label",name:"amortization"},r.a.createElement(oe.a,{value:"equal_installments"},"Equal installments"),r.a.createElement(oe.a,{value:"equal_principal"},"Equal principal payments"))))),a)))}}]),t}(n.Component);var ot=Object(Z.b)((function(e){var t=e.sessionVariables,a=e.dataByUrl,n=t.loan_products_url||"",r=t.chart_of_accounts_url||"",i=t.banks_url||"";return{sessionVariables:t,loan_products_data:Object(k.getUrlData)(n,a),chart_of_accounts_data:Object(k.getUrlData)(r,a),banks_data:Object(k.getUrlData)(i,a),loan_products_url:n}}))(Object(O.f)(it)),lt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fetchUrlData=function(e,t){var n=a.props.dispatch;t=Object(C.serverBaseUrl)()+t,a.props.dispatch(function(e,t){return{type:we,var_value:t,var_name:e}}(e,t)),n(Ne(t))},a.handleCloseDialogue=function(e){a.setState(Object($.a)({},e,!1))},a.handleOpenDialogue=function(e){a.setState(Object($.a)({},e,!0))},a.selectClient=function(e,t){e.preventDefault(),a.setState({selected_client:t})},a.state={selected_client:{},add_client_dialogue_open:!1,issue_loan_dialogue_open:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=We()().subtract(1,"month").format("YYYY-MM-DD"),t=We()().format("YYYY-MM-DD");this.fetchUrlData("clients_url","/registration/members/"),this.fetchUrlData("loan_products_url","/products/loans/"),this.fetchUrlData("chart_of_accounts_url","/registration/chart_accounts/"),this.fetchUrlData("banks_url","/registration/banks/"),this.fetchUrlData("pending_loans_url","/products/applied_loans/?status=6"),this.fetchUrlData("pending_disbursement_url","/products/applied_loans/?status=11"),this.fetchUrlData("payments_mode_url","/registration/payment_modes/"),this.fetchUrlData("currencies_url","/registration/currency/"),this.fetchUrlData("approved_loans_url","/products/applied_loans/?status=9"),this.fetchUrlData("active_loans_url","/products/applied_loans/?status=1"),this.fetchUrlData("current_month_income_url","/general_ledger/general_ledger/?date_from".concat(e,"&date_to").concat(t,"&totals=true&account_group=4"))}},{key:"createSummaryCard",value:function(e,t,a){return r.a.createElement("div",{className:"card bg-grey border-width-0 clickable"},r.a.createElement("div",{className:"card-body d-flex flex-row"},r.a.createElement("div",{className:"col-md-4 mx-auto"}),r.a.createElement("div",{className:"col-md-8 d-flex flex-column justify-content-center align-items-end"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"h4 mb-3 font-weight-normal"},a)),r.a.createElement("div",{className:"row"},t))))}},{key:"issueLoanButton",value:function(){return r.a.createElement("button",{className:"btn btn-outline-primary"})}},{key:"editClientButton",value:function(){return r.a.createElement(d.a,{color:"primary"},"Edit client")}},{key:"approveLoanButton",value:function(e,t){var a=this;return t.pending_loans>0?r.a.createElement("button",{className:"btn btn-outline-primary","data-toggle":"modal","data-target":"#approve-loan",onClick:function(e){return a.selectClient(e,t)}}):t.pending_disburse_loans>0?r.a.createElement("button",{className:"btn btn-outline-primary"}):t.approved_loans>0?r.a.createElement("button",{className:"btn btn-outline-primary"}):r.a.createElement("div",null)}},{key:"render",value:function(){var e=this,t=this.props,a=t.clients_data,n=t.pending_loans_data,i=t.banks_data,o=t.payments_mode_data,l=t.currencies_data,c=t.approved_loans_data,s=t.active_loans_data,u=t.current_month_income_data,m=a.items,d=(n.items,i.items,o.items,l.items,c.items,s.items),p=u.items;m.sort(Object(k.dynamicSort)("-approved_loans")),m.sort(Object(k.dynamicSort)("-pending_disburse_loans")),m.sort(Object(k.dynamicSort)("-pending_loans"));d.forEach((function(e){e.outstanding_balance}));p.forEach((function(e){e.credit}));var h=[{icon:"edit",tooltip:"Edit Client",onClick:function(e,t){}},{icon:"add",tooltip:"Issue Loan",onClick:function(t,a){return e.setState({selected_client:a},(function(){return e.handleOpenDialogue("issue_loan_dialogue_open")}))}},{icon:"done",tooltip:"Approve Loan",onClick:function(e,t){}},{icon:"payment",tooltip:"Add payment",onClick:function(e,t){}}];return r.a.createElement(_.a,{maxWidth:"xl",className:"Main-container"},r.a.createElement(Re.a,{pt:2},r.a.createElement(qe.a,{variant:"extended",color:"default",onClick:function(t){return e.handleOpenDialogue("add_client_dialogue_open")}},r.a.createElement(Le.a,null),"Add client")),r.a.createElement(Re.a,{mt:2},r.a.createElement(Ue.a,{isLoading:a.isFetching,title:"Clients",columns:[{field:"full_name",title:"Name"},{field:"mobile_no",title:"Phone number"}],data:m,options:{actionsColumnIndex:-1},actions:h})),r.a.createElement(Ae,{handleClickOpen:function(t){return e.handleOpenDialogue("add_client_dialogue_open")},handleClose:function(t){return e.handleCloseDialogue("add_client_dialogue_open")},open:this.state.add_client_dialogue_open,title:"Add client"},r.a.createElement(nt,{handleClose:function(t){return e.handleCloseDialogue("add_client_dialogue_open")}})),r.a.createElement(Ae,{handleClickOpen:function(t){return e.handleOpenDialogue("issue_loan_dialogue_open")},handleClose:function(t){return e.handleCloseDialogue("issue_loan_dialogue_open")},open:this.state.issue_loan_dialogue_open,title:"Issue loan"},r.a.createElement(ot,{selected_client:this.state.selected_client,handleClose:function(t){return e.handleCloseDialogue("issue_loan_dialogue_open")}})))}}]),t}(n.Component);var ct=Object(Z.b)((function(e){function t(e){var t=a[e]||"";return Object(k.getUrlData)(t,n)}var a=e.sessionVariables,n=e.dataByUrl,r=t("clients_url"),i=t("pending_loans_url"),o=t("pending_disbursement_url"),l=t("banks_url"),c=t("payments_mode_url"),s=t("currencies_url"),u=t("approved_loans_url"),m=t("active_loans_url"),d=t("current_month_income_url");return{sessionVariables:a,clients_data:r,pending_loans_data:i,pending_disbursement_data:o,banks_data:l,payments_mode_data:c,currencies_data:s,approved_loans_data:u,active_loans_data:m,current_month_income_data:d}}))(Object(O.f)(lt)),st=a(100);a(347);var ut=function(){return r.a.createElement(st.a,null,r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/login",component:K,key:2}),r.a.createElement(je,null,r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:ct,key:3.1})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt=a(51),dt=a(233),pt=a(234);var _t=Object(mt.c)({dataByUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:case xe:case De:return Object.assign({},e,Object($.a)({},t.endpoint,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object.assign({},e,{didInvalidate:!0});case De:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case xe:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.items,lastUpdated:t.receivedAt});default:return e}}(e[t.endpoint],t)));default:return e}},sessionVariables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object.assign({},e,Object($.a)({},t.var_name,t.var_value));default:return e}}}),ht=Object(pt.createLogger)();var ft,bt=Object(mt.e)(_t,ft,Object(mt.a)(dt.a,ht));o.a.render(r.a.createElement(Z.a,{store:bt},r.a.createElement(ut,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},60:function(e,t,a){e.exports={serverBaseUrl:function(){return"https://my.jisort.com"}}},71:function(e,t,a){e.exports={postAPIRequest:function(e,t,a,n,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"POST";fetch(e,{method:i,body:JSON.stringify(n),headers:r}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){e.json().then((function(e){a(e)}))}))},getAPIRequest:function(e,t,a,n){fetch(e,{headers:n}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){e.json().then((function(e){a(e)}))}))}}}},[[251,1,2]]]);
//# sourceMappingURL=main.78a760d8.chunk.js.map