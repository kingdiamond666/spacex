(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,a,t){e.exports=t.p+"static/media/logo.ab10d000.png"},53:function(e,a,t){e.exports=t(79)},58:function(e,a,t){},70:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(41),r=t.n(l),s=(t(58),t(10)),m=t(11),i=t(21),u=t(12),o=t(22),p=t(51),h=t(13),E=t(83),d=t(84),g=t(25),b=t(9),f=t.n(b),y=t(26),N=t.n(y),_=t(47),v=t.n(_),k=t(82);function j(e){var a=e.launch,t=a.flight_number,n=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:N()({"text-success":r,"text-danger":!r})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k.a,{to:"/launch/".concat(t),className:"btn btn-outline-primary"},"Launch Details"))))}var O=function(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Failure"))};function x(){var e=Object(g.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return x=function(){return e},e}var w=f()(x()),L=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(O,null),c.a.createElement(h.Query,{query:w},function(e){var a=e.loading,t=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,l.launches.map(function(e){return c.a.createElement(j,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function D(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!){\n    launch(flight_number: $flight_number){\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket{\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n  "]);return D=function(){return e},e}var Y=f()(D()),q=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(h.Query,{query:Y,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var l=n.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,i=l.launch_success,u=l.rocket,o=u.rocket_id,p=u.rocket_name,h=u.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},"Mission: ",c.a.createElement("span",{className:"text-muted"},r)),c.a.createElement("h4",{className:"mb-3"},"Launch:"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item list-group-item-action"},"Flight Number:",c.a.createElement("span",{className:"text-muted"}," ",s)),c.a.createElement("li",{className:"list-group-item list-group-item-action"},"Launch Year:",c.a.createElement("span",{className:"text-muted"}," ",m)),c.a.createElement("li",{className:"list-group-item list-group-item-action"},"Launch Successful: ",c.a.createElement("span",{className:N()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item list-group-item-action"},"Rocket ID:",c.a.createElement("span",{className:"text-muted"}," ",o)),c.a.createElement("li",{className:"list-group-item list-group-item-action"},"Rocket Name:",c.a.createElement("span",{className:"text-muted"}," ",p)),c.a.createElement("li",{className:"list-group-item list-group-item-action"},"Rocket Type:",c.a.createElement("span",{className:"text-muted"}," ",h))),c.a.createElement("hr",null),c.a.createElement(k.a,{to:"/",className:"btn-outline-primary"},"Back"))}))}}]),a}(c.a.Component),F=t(48),I=t.n(F),M=(t(70),new p.a({uri:"/graphql"})),Q=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(h.ApolloProvider,{client:M},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:I.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(d.a,{exact:!0,path:"/",component:L}),c.a.createElement(d.a,{exact:!0,path:"/launch/:flight_number",component:q}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.b7ad9a66.chunk.js.map