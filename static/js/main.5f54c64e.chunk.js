(this.webpackJsonpvaccico=this.webpackJsonpvaccico||[]).push([[0],{38:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(32),i=a.n(s),n=(a(38),a(10)),r=a(2),l=a(0),d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container-lg navbubble",children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg mt-3 navbar-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand text-white",href:"#",children:Object(l.jsx)("img",{className:"logo",src:"/VacciCo/img/logo.svg",alt:"Syringe"})}),Object(l.jsx)("button",{className:"navbar-toggler text-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon text-light"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.c,{exact:!0,className:"nav-link text-white mx-lg-3 my-sm-2 px-3",activeClassName:"active-class",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(n.c,{exact:!0,className:"nav-link text-white mx-lg-3 my-sm-2 px-3",activeClassName:"active-class",to:"/get-vaccinated",children:"Get Vaccinated"})})]}),Object(l.jsx)("button",{className:"btn-login text-white my-lg-0 my-sm-2",children:"Log in"})]})]})})})})},o=a(9),j=a.n(o),m=a(12),b=a(15),x=a(13),h=a.n(x),O=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"card state-data card-gray my-2",children:Object(l.jsxs)("div",{className:"card-body card-content",children:[Object(l.jsx)("p",{className:"card-title text-center text-white",children:"Active"}),Object(l.jsx)("p",{className:"card-text text-center text-white",children:e.active},e.id)]})}),Object(l.jsx)("div",{className:"card state-data card-pink my-2",children:Object(l.jsxs)("div",{className:"card-body card-content",children:[Object(l.jsx)("p",{className:"card-title text-center text-white",children:"Deaths"}),Object(l.jsx)("p",{className:"card-text text-center text-white",children:e.deaths},e.id)]})}),Object(l.jsx)("div",{className:"card state-data card-blue my-2",children:Object(l.jsxs)("div",{className:"card-body card-content",children:[Object(l.jsx)("p",{className:"card-title text-center text-white",children:"Active"}),Object(l.jsx)("p",{className:"card-text text-center text-white",children:e.recovered},e.id)]})}),Object(l.jsx)("div",{className:"card state-data card-yellow my-2",children:Object(l.jsxs)("div",{className:"card-body card-content",children:[Object(l.jsx)("p",{className:"card-title text-center text-white",children:"Active"}),Object(l.jsx)("p",{className:"card-text text-center text-white",children:e.confirmed},e.id)]})})]})},v=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),r=Object(b.a)(i,2),d=r[0],o=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19india.org/data.json");case 2:t=e.sent,s(t.data.statewise);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"circle-grp",children:[Object(l.jsx)("img",{src:"/VacciCo/img/circle__l-sm.svg",className:"circle-small",alt:"circle-small"}),Object(l.jsx)("img",{src:"/VacciCo/img/circle__l-md.svg",className:"circle-medium",alt:"circle-medium"}),Object(l.jsx)("img",{src:"/VacciCo/img/circle__l-lg.svg",className:"circle-large",alt:"circle-large"})]}),Object(l.jsxs)("div",{className:"corona-img-top",children:[Object(l.jsx)("img",{src:"/VacciCo/img/corona.svg",alt:"corona",className:"corona-two translate"}),Object(l.jsx)("img",{src:"/VacciCo/img/corona.svg",alt:"corona",className:"corona-three translate"}),Object(l.jsx)("img",{src:"/VacciCo/img/corona.svg",alt:"corona",className:"corona-four translate"}),Object(l.jsx)("img",{src:"/VacciCo/img/corona.svg",alt:"corona",className:"corona-five translate"})]}),Object(l.jsx)("div",{className:"container mt-5 pt-4",children:Object(l.jsxs)("div",{className:"d-flex align-items-center justify-content-center w-100 heading-bubble",children:[Object(l.jsxs)("div",{className:"heading-text",children:[Object(l.jsxs)("h1",{className:"text-white heading-text--primary",children:["Let's Help",Object(l.jsx)("br",{})," Recover the Earth, ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"heading-text--primary heading-text--primary_color",children:"Start From Us!"})]}),Object(l.jsxs)("p",{className:"text-white heading-text--secondary",children:["Getting Vaccinated is the key",Object(l.jsx)("br",{})," to break this virus chain"]}),Object(l.jsx)(n.b,{type:"button",className:"btn-vaccine text-white",to:"/get-vaccinated",children:"Get Vaccinated"})]}),Object(l.jsx)("div",{className:"heading-img w-50 text-end",children:Object(l.jsx)("div",{className:"earth"})})]})})]}),Object(l.jsxs)("div",{className:"covid-data",children:[Object(l.jsx)("div",{className:"bubble",children:Object(l.jsx)("img",{src:"/VacciCo/img/circle__r.svg",alt:"circle-right",className:"circle-right"})}),Object(l.jsxs)("div",{className:"corona-img-bottom",children:[Object(l.jsx)("img",{src:"/VacciCo/img/corona.svg",alt:"corona",className:"corona translate"}),Object(l.jsx)("img",{src:"/VacciCo/img/corona.svg",alt:"corona",className:"corona-one translate"})]}),Object(l.jsx)("div",{className:"mars-bubble",children:Object(l.jsx)("img",{src:"/VacciCo/img/mars.png",alt:"mars",className:"mars-img"})}),Object(l.jsx)("div",{className:"d-flex flex-column mars-content",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{className:"tracker-title text-center",children:"India Covid - 19 Tracker"}),Object(l.jsx)("div",{className:"form-state",children:Object(l.jsxs)("select",{className:"form-select form-data bg-transparent text-white","aria-label":"Default select example",value:d,onChange:function(e){o(e.target.value)},children:[Object(l.jsx)("option",{className:"text-dark",children:"Select State"}),a.map((function(e,t){return Object(l.jsx)("option",{className:"text-dark",value:t,children:e.state})}))]})}),Object(l.jsx)("div",{className:"container py-5",children:Object(l.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:a.map((function(e,t){return t==d&&""!=d?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{id:t,active:e.active,deaths:e.deaths,recovered:e.recovered,confirmed:e.confirmed})}):null}))})})]})})]})]})},p=a(8),g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(l.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(l.jsx)("div",{className:"modal-content",children:Object(l.jsxs)("div",{className:"modal-body p-5",children:[Object(l.jsx)("div",{className:"success-checkmark",children:Object(l.jsxs)("div",{className:"check-icon",children:[Object(l.jsx)("span",{className:"icon-line line-tip"}),Object(l.jsx)("span",{className:"icon-line line-long"}),Object(l.jsx)("div",{className:"icon-circle"}),Object(l.jsx)("div",{className:"icon-fix"})]})}),Object(l.jsxs)("div",{className:"success-book text-center",children:[Object(l.jsx)("h4",{className:"success-text-primary",children:"Congratulations"}),Object(l.jsx)("p",{className:"success-text-secondary",children:"You have successfully booked vaccine dose!!"}),Object(l.jsx)("button",{type:"button",className:"book-btn confirmed text-white my-4","data-bs-dismiss":"modal",children:"Close"})]})]})})})})})},u=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"book-slot my-3 p-3",children:[Object(l.jsx)("p",{className:"hospital-title text-center text-white",children:e.vaccineName}),Object(l.jsx)("p",{className:"hospital-title text-center text-white",children:e.age}),0===e.availCapacity?Object(l.jsx)("button",{className:"book-btn booked text-white",children:"Booked"}):e.availCapacity<=10?Object(l.jsx)("button",{className:"book-btn limited-available","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",children:"Limited Available"}):Object(l.jsx)("button",{type:"button",className:"book-btn available","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",children:"Available"})]})})},N=function(e){var t=[0,1],a=[2,3],c=[4,5],s=new Date,i=s.getDate(),n=s.getMonth()+1,r=s.getFullYear(),d=(i<=9?"0"+i:i)+"/"+(n<=9?"0"+n:n)+"/"+r,o=(i<=9?"0"+i:i+1)+"/"+(n<=9?"0"+n:n)+"/"+r,j=(i<=9?"0"+i:i+2)+"/"+(n<=9?"0"+n:n)+"/"+r;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"container mt-5 d-flex vaccine-container",children:e.vaccineData.map((function(e,s){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"d-flex flex-column",children:[Object(l.jsx)("div",{className:"text-center mb-3 mt-5",children:Object(l.jsx)("span",{className:"date-title text-center badge rounded-pill bg-light text-dark",children:d})}),Object(l.jsx)("div",{className:"card vaccine-data bg-transparent m-2 h-100",children:Object(l.jsxs)("div",{className:"card-body vaccine-content",children:[Object(l.jsx)("p",{className:"hospital-title text-center text-white p-3",children:e.name}),t.map((function(t){return void 0===e.sessions[t]?Object(l.jsx)("p",{}):(e.sessions[t].min_age_limit,Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u,{age:e.sessions[t].min_age_limit,date:e.sessions[t].date,vaccineName:e.sessions[t].vaccine,availCapacity:e.sessions[t].available_capacity})}))}))]},0)})]}),Object(l.jsxs)("div",{className:"d-flex flex-column",children:[Object(l.jsx)("div",{className:"text-center mb-3 mt-5",children:Object(l.jsx)("span",{className:"date-title text-center badge rounded-pill bg-light text-dark",children:o})}),Object(l.jsx)("div",{className:"card vaccine-data bg-transparent m-2 h-100",children:Object(l.jsxs)("div",{className:"card-body vaccine-content",children:[Object(l.jsx)("p",{className:"hospital-title text-center text-white p-3",children:e.name}),a.map((function(t){return void 0===e.sessions[t]?Object(l.jsx)("p",{}):(e.sessions[t].min_age_limit,Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u,{age:e.sessions[t].min_age_limit,date:e.sessions[t].date,vaccineName:e.sessions[t].vaccine,availCapacity:e.sessions[t].available_capacity})}))}))]},0)})]}),Object(l.jsxs)("div",{className:"d-flex flex-column",children:[Object(l.jsx)("div",{className:"text-center mb-3 mt-5",children:Object(l.jsx)("span",{className:"date-title text-center badge rounded-pill bg-light text-dark",children:j})}),Object(l.jsx)("div",{className:"card vaccine-data bg-transparent m-2 h-100",children:Object(l.jsxs)("div",{className:"card-body vaccine-content",children:[Object(l.jsx)("p",{className:"hospital-title text-center text-white p-3",children:e.name}),c.map((function(t){return void 0===e.sessions[t]?Object(l.jsx)("p",{}):(e.sessions[t].min_age_limit,Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u,{age:e.sessions[t].min_age_limit,date:e.sessions[t].date,vaccineName:e.sessions[t].vaccine,availCapacity:e.sessions[t].available_capacity})}))}))]},0)})]})]})}))}),Object(l.jsx)(g,{})]})},f={statesData:[],stateValue:"",districtValue:"",districtsData:[],vaccineData:[]},y=new Date,C=y.getDate(),w=y.getMonth()+1,k=(C<=9?"0"+C:C)+"/"+(w<=9?"0"+w:w)+"/"+y.getFullYear(),T=function(){var e=Object(c.useReducer)((function(e,t){switch(t.type){case"STATESDATA":return Object(p.a)(Object(p.a)({},e),{},{statesData:t.payload});case"SELECTSTATE":return Object(p.a)(Object(p.a)({},e),{},{stateValue:t.payload});case"SELECTDISTRICT":return Object(p.a)(Object(p.a)({},e),{},{districtValue:t.payload});case"DISTRICTSDATA":return Object(p.a)(Object(p.a)({},e),{},{districtsData:t.payload});case"VACCINEDATA":return Object(p.a)(Object(p.a)({},e),{},{vaccineData:t.payload});default:return e}}),f),t=Object(b.a)(e,2),a=t[0],s=t[1],i=a.statesData,n=a.stateValue,r=a.districtValue,d=a.districtsData,o=a.vaccineData;function x(){return(x=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/states",{headers:{"Content-Type":"state"}});case 2:t=e.sent,s({type:"STATESDATA",payload:t.data.states});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(n),{headers:{"Content-Type":"districts"}});case 2:t=e.sent,s({type:"DISTRICTSDATA",payload:t.data.districts});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict",{params:{district_id:r,date:k},headers:{"Content-Type":"vaccine"}});case 2:t=e.sent,s({type:"VACCINEDATA",payload:t.data.centers});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){x.apply(this,arguments)}(),function(){O.apply(this,arguments)}(),v()}),[n,r]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"circle-grp",children:[Object(l.jsx)("img",{src:"/VacciCo/img/circle__l-sm.svg",className:"circle-small",alt:"circle-small"}),Object(l.jsx)("img",{src:"/VacciCo/img/circle__l-md.svg",className:"circle-medium",alt:"circle-medium"}),Object(l.jsx)("img",{src:"/VacciCo/img/circle__l-lg.svg",className:"circle-large",alt:"circle-large"})]}),Object(l.jsx)("form",{onSubmit:v,children:Object(l.jsxs)("div",{className:"container d-flex justify-content-center align-items-center mt-5 pt-4 flex-sm-column flex-column flex-lg-row",children:[Object(l.jsxs)("select",{className:"form-select vaccine-form bg-transparent mx-lg-4 my-sm-4 my-4 text-white","aria-label":"Default select example",value:n,onChange:function(e){return s({type:"SELECTSTATE",payload:e.target.value})},children:[Object(l.jsx)("option",{className:"text-dark",children:"Search State"}),i.map((function(e,t){return Object(l.jsx)("option",{className:"text-dark",value:e.state_id,children:e.state_name},t)}))]}),Object(l.jsxs)("select",{className:"form-select vaccine-form bg-transparent text-white mx-lg-4 my-sm-4 my-4","aria-label":"Default select example",value:r,onChange:function(e){return s({type:"SELECTDISTRICT",payload:e.target.value})},children:[Object(l.jsx)("option",{className:"text-dark",children:"Search District"}),d.map((function(e,t){return Object(l.jsx)("option",{className:"text-dark",value:e.district_id,children:e.district_name},t)}))]})]})}),""===n&&""===r?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container mt-5",children:Object(l.jsxs)("div",{className:"jumbotron text-center border rounded p-5",children:[Object(l.jsx)("h4",{className:"display-4 text-light",children:"How it Works"}),Object(l.jsxs)("div",{className:"d-flex flex-lg-row flex-sm-column flex-column align-items-center w-100",children:[Object(l.jsxs)("div",{className:"w-50 mt-5",children:[Object(l.jsx)("img",{src:"/VacciCo/img/location.svg",className:"hiw-img",alt:"CHOOSE VACCINE LOCATION"}),Object(l.jsx)("p",{className:"hiw-text-primary text-light mt-5",children:"CHOOSE VACCINE LOCATION"}),Object(l.jsx)("p",{className:"hiw-text-secondary text-light",children:"Select your nearby Vaccine Center for vaccination"})]}),Object(l.jsxs)("div",{className:"w-50 mt-5",children:[Object(l.jsx)("img",{src:"/VacciCo/img/slot.svg",className:"hiw-img",alt:"CHOOSE VACCINE LOCATION"}),Object(l.jsx)("p",{className:"hiw-text-primary text-light mt-5",children:"CONFIRM YOUR SLOT"}),Object(l.jsx)("p",{className:"hiw-text-secondary text-light",children:"Book your slot to Get Vaccine"})]})]})]})})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)("p",{className:"text-white text-center",children:"NOTE : The slots availability data displayed in the pincode or district search is provided by the state govt and private hospitals. The total availability slots includes Dose-1 and Dose-2 slots. While we have real-time data, slot availability on CoWin changes rapidly. D1: Dose 1, D2: Dose 2 On-site registration and vaccination services are now available At all vaccination centers \u2013 both Government and Private. For all people aged 18 years or above. For slot availability and timing, please contact the vaccination center directly. However, it is recommended that you book your appointment online for convenience"})})}),Object(l.jsx)(N,{vaccineData:o,date:k}),Object(l.jsx)("div",{className:"bubble",children:Object(l.jsx)("img",{src:"/VacciCo/img/circle__r.svg",alt:"circle-right",className:"circle-right-vaccine"})})]})},D=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{id:"main",children:Object(l.jsxs)("div",{class:"fof",children:[Object(l.jsx)("h1",{children:"Error 404"}),Object(l.jsx)("p",{children:"Page Not Found"})]})})})},_=(a(64),a(65),a(66),a(67),a(68),a(69),a(70),a(71),a(72),a(94),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:v}),Object(l.jsx)(r.a,{exact:!0,path:"/get-vaccinated",component:T}),Object(l.jsx)(r.a,{component:D})]})]})});i.a.render(Object(l.jsx)(n.a,{basename:"/VacciCo",children:Object(l.jsx)(_,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.5f54c64e.chunk.js.map