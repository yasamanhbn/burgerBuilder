(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],{18:function(e,t,a){e.exports={BreadBottom:"burgerIngredient_BreadBottom__4zMzr",BreadTop:"burgerIngredient_BreadTop__3irzO",Meat:"burgerIngredient_Meat__31mwx",Cheese:"burgerIngredient_Cheese__2ABZ7",Salad:"burgerIngredient_Salad__3qzLF",Bacon:"burgerIngredient_Bacon__2ycHI"}},26:function(e,t,a){e.exports={main:"burgerController_main__1ylSG",BurgerController:"burgerController_BurgerController__2u0qR",label:"burgerController_label__hA6YU"}},27:function(e,t,a){e.exports={Toolbar:"toolbar_Toolbar__hkt3t",Bar:"toolbar_Bar__3lldI",Navigation:"toolbar_Navigation__11oZW"}},28:function(e,t,a){e.exports={Elem:"FormElement_Elem__wg001",Input:"FormElement_Input__12Gba",Error:"FormElement_Error__29eHW"}},30:function(e,t,a){e.exports={BurgerControllers:"BurgerControls_BurgerControllers__20CwN",ORDER:"BurgerControls_ORDER__3AVXh"}},32:function(e,t,a){e.exports={BTN:"scBtn_BTN__1_vpZ"}},35:function(e,t,a){e.exports={Li:"navigation-item_Li__Dtb0l",NavLink:"navigation-item_NavLink__wtcIK"}},36:function(e,t,a){e.exports={Spinner:"orders_Spinner__Bp3JL",OrderP:"orders_OrderP__3b8_z"}},37:function(e,t,a){e.exports={Auth:"auth_Auth__2_gl3",SignIn:"auth_SignIn__33b70"}},49:function(e,t,a){e.exports={Burger:"burger_Burger__2NOky"}},50:function(e,t,a){e.exports={Button:"Button_Button__25nJU"}},53:function(e,t,a){e.exports={Panel:"orderSummery_Panel__iHq3g"}},54:function(e,t,a){e.exports={backDrop:"backDrop_backDrop__DYxcE"}},55:function(e,t,a){e.exports={Navigation:"navigatiom_Navigation__2NVPP"}},56:function(e,t,a){e.exports={Panel:"order_Panel__1AOu9"}},57:function(e,t,a){e.exports={SideDrawer:"sideDrawer_SideDrawer__1U_1y"}},58:function(e,t,a){e.exports={Form:"contactData_Form__1FUXg",Span:"contactData_Span__UXDQQ",SignUp:"contactData_SignUp__jkjhd"}},61:function(e,t,a){e.exports=a(90)},66:function(e,t,a){},67:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),c=a.n(i),l=(a(66),a(17)),o=a(48),s=(a(67),a(6)),u=a(7),d=a(9),p=a(8),m=a(3),h=a(59),b=a(49),g=a.n(b),f=a(18),v=a.n(f),E=function(e){var t;switch(e.type){case"BreadBottom":t=r.a.createElement("div",{className:v.a.BreadBottom});break;case"BreadTop":t=r.a.createElement("div",{className:v.a.BreadTop});break;case"salad":t=r.a.createElement("div",{className:v.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:v.a.Bacon});break;case"cheese":t=r.a.createElement("div",{className:v.a.Cheese});break;case"meat":t=r.a.createElement("div",{className:v.a.Meat});break;default:t=null}return t},_=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(h.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(E,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("h2",null,"please choose an ingredient")),r.a.createElement("div",{className:g.a.Burger},r.a.createElement(E,{type:"BreadTop"}),t,r.a.createElement(E,{type:"BreadBottom"}))},O=a(50),k=a.n(O),y=function(e){return r.a.createElement("button",{onClick:e.clicked,disabled:e.disabled,className:k.a.Button},e.title)},j=a(26),N=a.n(j),C=function(e){return r.a.createElement("div",{className:N.a.main},r.a.createElement("span",{className:N.a.label},e.label),r.a.createElement("div",{className:N.a.BurgerController},r.a.createElement(y,{title:"less",clicked:e.onDecrement,disabled:!e.disabledInfo[e.label]}),r.a.createElement(y,{title:"more",clicked:e.onIncrement})))},I=a(30),S=a.n(I),w=a(91),D=a(92),T=a(93),A=[{label:"salad"},{label:"cheese"},{label:"meat"},{label:"bacon"}],B=function(e){return r.a.createElement("div",{className:S.a.BurgerControllers},r.a.createElement("p",null,"PRICE IS ",e.price.toFixed(2)),r.a.createElement(w.a,null,r.a.createElement("div",{className:"d-flex flex-row flex-wrap  justify-content-around"},A.map((function(t){return r.a.createElement(D.a,{key:t.label},r.a.createElement(T.a,null,r.a.createElement(C,{onIncrement:function(){return e.onIncrement(t.label)},onDecrement:function(){return e.onDecrement(t.label)},label:t.label,disabledInfo:e.disabledInfo})))})))),r.a.createElement(y,{disabled:!e.orderDisabled,clicked:e.purchaseHandler,className:S.a.ORDER,title:e.isAuth?"ORDER NOW":"FIRST SIGN IN"}))},x=a(5),R=a(32),z=a.n(R),H=function(e){return r.a.createElement("div",null,r.a.createElement("button",{style:{color:"red"},className:z.a.BTN,onClick:e.canceled},"CANCELED"),r.a.createElement("button",{style:{color:"green"},className:z.a.BTN,onClick:e.purchaseContinued},"SUCCEED"))},V=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},t," : ",e.ingredients[t])}));return r.a.createElement("div",null,r.a.createElement("h2",null,"YOUR ORDER"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2)),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(H,{canceled:e.canceled,purchaseContinued:e.purchaseContinued}))},L=a(20),P=a.n(L),F=function(e,t,a){return function(n){n({type:"auth-start"});var r={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCmo0xnHMQIxWPix2yPJ1Lp5AraiVFvWCE";a&&(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCmo0xnHMQIxWPix2yPJ1Lp5AraiVFvWCE"),P.a.post(i,r).then((function(e){var t,a,r;n((t=e.data.idToken,a=e.data.localId,{type:"auth-success",idToken:t,userId:a})),n((r=e.data.expiresIn,function(e){setTimeout((function(){e({type:"auth_logout"})}),1e3*r)}))})).catch((function(e){n({type:"auth-failed",error:e.response.data.error})}))}},U=a(53),q=a.n(U),M=a(54),W=a.n(M),J=function(e){return e.showed?r.a.createElement("div",{className:W.a.backDrop,onClick:e.onClicked}):null},Y=function(e){return r.a.createElement("div",null,r.a.createElement(J,{showed:e.showed,onClicked:e.backDropCanceled}),r.a.createElement("div",{className:q.a.Panel,style:{transition:"all 1s",transform:e.showed?"translateY(0)":"translateY(-650%)",zIndex:"500"}},e.children))},G=a(2),X=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={purchaseOrder:!1},e.purchaseHandler=function(){e.props.isAuth?e.setState({purchaseOrder:!0}):e.props.history.push("/Auth")},e.backdropCanceled=function(){e.setState({purchaseOrder:!1})},e.purchaseContinued=function(){e.props.history.push("/checkout")},e}return Object(u.a)(a,[{key:"render",value:function(){var e=Object(m.a)({},this.props.ingredients),t=0;for(var a in e)e[a]=e[a]?1:0,t+=e[a];var n=r.a.createElement(V,{ingredients:this.props.ingredients,showed:this.state.purchaseOrder,canceled:this.backdropCanceled,price:this.props.price,purchaseContinued:this.purchaseContinued});return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_,{ingredients:this.props.ingredients}),r.a.createElement(Y,{showed:this.state.purchaseOrder,backDropCanceled:this.backdropCanceled},n),r.a.createElement(B,{onIncrement:this.props.onIncrement,onDecrement:this.props.onDecrement,disabledInfo:e,price:this.props.price,orderDisabled:t,purchaseHandler:this.purchaseHandler,isAuth:this.props.isAuth})))}}]),a}(n.Component),$=Object(x.b)((function(e){return{ingredients:e.ingreReducer.ingredients,price:e.ingreReducer.price,isAuth:null!==e.authReducer.token}}),(function(e){return{onIncrement:function(t){return e({type:"ADD INGREDIENT",ingredientType:t})},onDecrement:function(t){return e({type:"remove ingredient",ingredientType:t})}}}))(Object(G.g)(X)),Q=a(27),Z=a.n(Q),K=a(16),ee=a(35),te=a.n(ee),ae=function(e){return r.a.createElement("li",{className:te.a.Li},r.a.createElement(K.b,{to:e.to,className:te.a.NavLink},e.children))},ne=a(55),re=a.n(ne),ie=function(e){return r.a.createElement("ul",{className:re.a.Navigation},r.a.createElement(ae,{to:"/"},"burger builder"),e.isAuth?r.a.createElement(ae,{to:"/orders"},"orders"):null,e.isAuth?r.a.createElement(ae,{to:"/logout"},"logout"):r.a.createElement(ae,{to:"/Auth"},"Authenticate"))},ce=function(e){return r.a.createElement("div",{className:Z.a.Toolbar},r.a.createElement("div",{className:Z.a.Bar,onClick:e.barClicked},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("div",{className:Z.a.Navigation},r.a.createElement(ie,{isAuth:e.isAuth})))},le=a(21),oe=a(56),se=a.n(oe),ue={salad:"salad",meat:"meat",bacon:"bacon",cheese:"cheese"},de=function(e){var t=Object.keys(ue).map((function(t){return r.a.createElement("p",{key:t}," ",r.a.createElement("b",null,t)," : ",e.ingredients[t])}));return r.a.createElement("div",{className:se.a.Panel},r.a.createElement("p",null,r.a.createElement("b",null,"username ")," : ",e.data.userName),t,r.a.createElement("p",null,r.a.createElement("b",null,"price "),": ",e.price),r.a.createElement("p",null,r.a.createElement("b",null,"email"),": ",e.data.email))},pe=a(36),me=a.n(pe),he=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={fetchOrders:[],loading:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var t=[],a=this.props.token;P.a.get("https://burger-builder-23f15.firebaseio.com/orders.json?auth="+a).then((function(a){var n=1;for(var r in a.data)t.push(Object(m.a)(Object(m.a)({},a.data[r]),{},{id:n})),n++;e.setState({fetchOrders:t,loading:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.fetchOrders.map((function(e){return r.a.createElement(D.a,{key:e.id},r.a.createElement(T.a,null,r.a.createElement(de,{ingredients:e.ingredients,price:e.price,data:e.orderData})))}));return this.state.loading&&(e=r.a.createElement(le.a,{animation:"grow",role:"status",variant:"primary",className:me.a.Spinner},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement(w.a,null,r.a.createElement("p",{className:me.a.OrderP},"YOUR ORDERS"),r.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-around"},e))}}]),a}(n.Component),be=Object(x.b)((function(e){return{token:e.authReducer.token}}))(he),ge=a(57),fe=a.n(ge),ve=function(e){return e.showed?r.a.createElement("div",{className:fe.a.SideDrawer},r.a.createElement(ie,null)):null},Ee=a(28),_e=a.n(Ee),Oe=function(e){var t=[_e.a.Input];return e.isTouched&&!e.isValid&&t.push(_e.a.Error),r.a.createElement("div",{className:_e.a.Elem},r.a.createElement("input",{className:t.join(" "),placeholder:e.label,onChange:e.changeHandler}))},ke=a(58),ye=a.n(ke),je=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={form:{userName:{value:"",validation:{required:!0,maxLength:10,minLength:3,isValid:!1},isTouched:!1},password:{value:"",validation:{required:!0,pattern:/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/,isValid:!1},isTouched:!1},email:{value:"",validation:{required:!0,pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,isValid:!1},isTouched:!1},phone:{value:"",validation:{required:!0,pattern:/^[0-9\\-\\+]{9,15}$/,isValid:!1},isTouched:!1}},Validation:!1,loading:!1},e.submitHandler=function(){e.setState({loading:!0});var t={};for(var a in e.state.form)t[a]=e.state.form[a].value;var n={orderData:t,ingredients:e.props.ingredients,price:e.props.price.toFixed(2)};P.a.post("https://burger-builder-23f15.firebaseio.com/orders.json?auth="+e.props.token,n).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){console.log(t),e.setState({loading:!1})}))},e.checkValidity=function(e,t){var a=!0;return t.required&&(t.maxLength&&(a=e.length<=t.maxLength),t.minLength&&(a=e.length>=t.minLength),t.pattern&&(a=t.pattern.test(e))),a},e.inputChangeHandler=function(t,a){t.preventDefault();var n=t.target.value,r=Object(m.a)({},e.state.form),i=Object(m.a)({},r[a]),c=e.checkValidity(n,i.validation);i.value=n,i.validation.isValid=c,i.isTouched=!0,r[a]=i;var l=!0;for(var o in r)l=l&&r[o].validation.isValid;e.setState({form:r,validation:l})},e}return Object(u.a)(a,[{key:"render",value:function(){var e,t=this,a=[];for(var n in this.state.form)a.push({id:n,config:this.state.form[n]});return e=a.map((function(e){return r.a.createElement(Oe,{label:e.id,key:e.id,changeHandler:function(a){return t.inputChangeHandler(a,e.id)},isTouched:e.config.isTouched,isValid:e.config.validation.isValid})})),this.state.loading&&(e=r.a.createElement(le.a,{animation:"border",role:"status",variant:"success",size:"lg"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("div",{className:ye.a.Form},r.a.createElement("form",null,e),r.a.createElement(y,{title:"order",disabled:!this.state.validation,clicked:this.submitHandler}))}}]),a}(n.Component),Ne=Object(x.b)((function(e){return{token:e.authReducer.token}}))(Object(G.g)(je)),Ce=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).canceledHandler=function(){e.props.history.goBack()},e.succeedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_,{ingredients:this.props.ingredients}),r.a.createElement(H,{canceled:this.canceledHandler,purchaseContinued:this.succeedHandler})),r.a.createElement(G.b,{path:this.props.match.path+"/contact-data",render:function(){return r.a.createElement(Ne,{ingredients:e.props.ingredients,price:e.props.price})}}))}}]),a}(n.Component),Ie=Object(x.b)((function(e){return{ingredients:e.ingreReducer.ingredients,price:e.ingreReducer.price}}))(Object(G.g)(Ce)),Se=a(37),we=a.n(Se),De=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{value:"",validation:{required:!0,pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,isValid:!1},isTouched:!1},password:{value:"",validation:{required:!0,pattern:/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/,isValid:!1},isTouched:!1}},validation:!1,isSignIn:!0},e.checkValidity=function(e,t){var a=!0;return t.required&&t.pattern&&(a=t.pattern.test(e)),a},e.changeHandler=function(t,a){t.preventDefault();var n=Object(m.a)({},e.state.controls),r=Object(m.a)({},n[a]);r.value=t.target.value,r.validation.isValid=e.checkValidity(t.target.value,r.validation),r.isTouched=!0,n[a]=r;var i=!0;for(var c in n)i=i&&n[c].validation.isValid;e.setState({controls:n,validation:i})},e.switchSignIn=function(){e.setState((function(e){return{isSignIn:!e.isSignIn}}))},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignIn)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return r.a.createElement(Oe,{label:t.id,key:t.id,changeHandler:function(a){return e.changeHandler(a,t.id)},isTouched:t.config.isTouched,isValid:t.config.validation.isValid})})),i=r.a.createElement("form",{onSubmit:this.submitHandler},n,r.a.createElement(y,{title:"Submit",disabled:!this.state.validation}));this.props.loading&&(i=r.a.createElement(le.a,{animation:"border",role:"status",variant:"success",size:"lg"},r.a.createElement("span",{className:"sr-only"},"Loading...")));var c=null;this.props.error&&(c=r.a.createElement("p",null,r.a.createElement("b",null,this.props.error.message)," "));var l=null;return this.props.isAuth&&(l=this.props.building?r.a.createElement(G.a,{to:"/checkout"}):r.a.createElement(G.a,{to:"/"})),r.a.createElement("div",{className:we.a.Auth},l,c,i,r.a.createElement("p",{className:we.a.SignIn,onClick:this.switchSignIn},"SWITCH TO ",r.a.createElement("b",null,this.state.isSignIn?"Sign Up":"Sign In")))}}]),a}(n.Component),Te=Object(x.b)((function(e){return{loading:e.authReducer.loading,error:e.authReducer.error,isAuth:null!==e.authReducer.token,building:4!==e.ingreReducer.price}}),(function(e){return{onAuth:function(t,a,n){return e(F(t,a,n))}}}))(De),Ae=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(G.a,{to:"/"})}}]),a}(n.Component),Be=Object(x.b)(null,(function(e){return{onLogout:function(){return e({type:"auth_logout"})}}}))(Ae),xe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={barEnabled:!1},e.barClicked=function(){e.setState({barEnabled:!0})},e.onclick=function(){e.setState({barEnabled:!1})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(ve,{showed:this.state.barEnabled,isAuth:this.props.isAuth}),r.a.createElement(J,{showed:this.state.barEnabled,onClicked:this.onclick})),r.a.createElement(ce,{barClicked:this.barClicked,isAuth:this.props.isAuth}),r.a.createElement(G.d,null,r.a.createElement(G.b,{path:"/checkout",component:Ie}),r.a.createElement(G.b,{path:"/orders",component:be}),r.a.createElement(G.b,{path:"/Auth",component:Te}),r.a.createElement(G.b,{path:"/logout",component:Be}),r.a.createElement(G.b,{path:"/",component:$})))}}]),a}(n.Component),Re=Object(x.b)((function(e){return{isAuth:e.authReducer.token}}))(xe),ze=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Re,null))},He=a(22),Ve={ingredients:{salad:0,bacon:0,meat:0,cheese:0},price:4},Le={salad:.7,bacon:1.5,meat:2,cheese:1.3},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD INGREDIENT":return Object(m.a)(Object(m.a)({},e),{},{ingredients:Object(m.a)(Object(m.a)({},e.ingredients),{},Object(He.a)({},t.ingredientType,e.ingredients[t.ingredientType]+1)),price:e.price+Le[t.ingredientType]});case"remove ingredient":return Object(m.a)(Object(m.a)({},e),{},{ingredients:Object(m.a)(Object(m.a)({},e.ingredients),{},Object(He.a)({},t.ingredientType,e.ingredients[t.ingredientType]-1)),price:e.price-Le[t.ingredientType]});default:return Object(m.a)({},e)}},Fe={token:null,userId:null,error:null,loading:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth-start":return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null});case"auth-success":return Object(m.a)(Object(m.a)({},e),{},{token:t.idToken,userId:t.userId,error:null,loading:!1});case"auth-failed":return Object(m.a)(Object(m.a)({},e),{},{error:t.error,loading:!1});case"auth_logout":return Object(m.a)(Object(m.a)({},e),{},{token:null,userId:null});default:return Object(m.a)({},e)}},qe=Object(l.c)({ingreReducer:Pe,authReducer:Ue}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,We=Object(l.e)(qe,Me(Object(l.a)(o.a)));c.a.render(r.a.createElement(K.a,null,r.a.createElement(x.a,{store:We},r.a.createElement(ze,null))),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.db4e314d.chunk.js.map