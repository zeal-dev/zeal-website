webpackJsonp([0xe49a88e0816a],{845:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d=a(1),i=r(d),u=a(3),l=r(u),p=a(2),s=r(p),o=a(9),f=a(17),c=r(f),h=a(23),g=r(h),m=a(22),v=r(m);t.default=(0,l.default)({displayName:"WhitepapersPage",propTypes:{data:s.default.shape({meta:o.MetaPropType.isRequired,whitepapers:s.default.object.isRequired}).isRequired},render:function(){var e=this.props.data,t=e.meta,a=e.whitepapers;return i.default.createElement(c.default,{meta:t},i.default.createElement(g.default,{title:"IoT Insights",subtitle:"The leading edge of industry knowledge and best practices"}),a.edges.map(this.renderWhitepaper))},renderWhitepaper:function(e,t){var a=e.node,r=a.title,d=a.blurb,u=a.cover,l=a.fields,p={alternate:t%2===1,textWithImage:{text:"# "+r+"\n"+d.value,image420:u,cta:{to:l.path,text:"Read the full report"}}};return i.default.createElement(v.default,n({key:t},p))}});t.pageQuery="** extracted graphql fragment **"}});