import{r as c}from"./index.NEDEFKed.js";var i={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=c,d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,_=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function p(s,e,o){var r,n={},l=null,f=null;o!==void 0&&(l=""+o),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)h.call(e,r)&&!x.hasOwnProperty(r)&&(n[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:d,type:s,key:l,ref:f,props:n,_owner:_.current}}a.Fragment=u;a.jsx=p;a.jsxs=p;i.exports=a;var t=i.exports;const j=({statusUrl:s})=>{const[e,o]=c.useState(void 0),r=e?.open??!1;return c.useEffect(()=>{fetch(s).then(n=>n.json()).then(o)},[s]),e?t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"lab-status-header",children:"The XR Lab is Currently"}),t.jsx("h1",{className:r?"lab-open":"lab-closed",children:r?"Open":"Closed"}),t.jsx("h4",{children:r?`${e.numberOfMembers} members`:"Come back soon"})]}):t.jsx(t.Fragment,{children:t.jsx("h3",{children:"Loading"})})};export{j as default};
