webpackJsonp([0xc23565d713b7],{762:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(1),a=o(i),r=n(3),l=o(r),d=n(9),u=n(52);e.default=(0,l.default)({displayName:"HomeAnnouncement",propTypes:{announcement:d.AnnouncementPropType.isRequired},render:function(){var t=this.props.announcement,e=t.title,n=t.description,o=t.media,i=t.link,r=o.sizes;return a.default.createElement(u.Announcement,null,a.default.createElement(u.AnnouncementMedia,{to:i.url},a.default.createElement(u.AnnouncementImage,{src:r.src})),a.default.createElement(u.AnnouncementText,{to:i.url},a.default.createElement(u.AnnouncementTitle,null,this.renderBadge(i.badge),a.default.createElement(u.AnnouncementTitleText,null,e)),a.default.createElement(u.AnnouncementDescription,null,n.value.split("\n").map(this.renderText))))},renderBadge:function(t){return!(!t||"none"===t)&&a.default.createElement(u.AnnouncementBadge,null,t)},renderText:function(t,e){return a.default.createElement(u.AnnouncementDescriptionText,{key:e},t)}}),t.exports=e.default},763:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(1),a=o(i),r=n(3),l=o(r),d=n(2),u=o(d),s=n(9),c=n(52),m=n(10),f=n(762),p=o(f);e.default=(0,l.default)({displayName:"HomeAnnouncements",propTypes:{announcements:s.AnnouncementsPropType.isRequired,max:u.default.number},getDefaultProps:function(){return{max:1}},render:function(){var t=this.props,e=t.max,n=t.announcements;return!(!n||!n.length)&&a.default.createElement(c.Announcements,null,a.default.createElement(m.SectionContainer,null,n.slice(0,e).map(function(t){return a.default.createElement(p.default,{key:t.id,announcement:t})})))}}),t.exports=e.default},764:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return t.raw=e,t}e.__esModule=!0;var a=i(["\n\tpadding: 9em 0 40em 0;\n\tbackground-image: url(","), ",";\n\tbackground-size: 144em;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\n\t","\n\n\t","\n"],["\n\tpadding: 9em 0 40em 0;\n\tbackground-image: url(","), ",";\n\tbackground-size: 144em;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center bottom;\n\n\t","\n\n\t","\n"]),r=i(["\n\t\tbackground-size: 100%;\n\t"],["\n\t\tbackground-size: 100%;\n\t"]),l=i(["\n\ttext-align: center;\n"],["\n\ttext-align: center;\n"]),d=i(["\n\tfont-size: 0.8rem;\n\tmargin-top: ","em;\n"],["\n\tfont-size: 0.8rem;\n\tmargin-top: ","em;\n"]),u=n(1),s=o(u),c=n(3),m=o(c),f=n(9),p=n(4),g=o(p),h=n(6),y=n(8),w=n(11),b=n(52),x=n(10),k=h.colors.WHITE;e.default=(0,m.default)({displayName:"HomeLatestNews",propTypes:{brands:f.HomeBrandsPropType.isRequired},render:function(){var t=this.props.brands,e=t.title,n=t.subtitle,o=t.media,i=t.link,a=o.childImageSharp.sizes.src;return s.default.createElement(v,{src:a},s.default.createElement(x.SectionContainer,null,s.default.createElement(E,null,s.default.createElement(b.SectionTitle,{width:"100%",color:k},e),s.default.createElement(b.SectionSubtitle,{color:k},n),s.default.createElement(T,null,s.default.createElement(w.ButtonLink,{to:i.url},i.title)))))}});var v=g.default.div(a,function(t){return t.src||""},h.gradients.cobalt0To72,y.layout.fluidFontSize(h.FONT_SCALING_DEFAULT),y.layout.minWidthQuery(1440)(r)),E=g.default.div(l),T=g.default.div(d,2.5);t.exports=e.default},52:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return t.raw=e,t}function a(t){return!(!t||"small"!==t.size)}e.__esModule=!0,e.RecommendedReadingItemLink=e.RecommendedReadingItem=e.RecommendedReadingList=e.RecommendedReadingTitle=e.RecommendedReading=e.NewsCardTitleText=e.NewsCardTitle=e.NewsCardImage=e.NewsCardLink=e.NewsCard=e.LatestNewsStoriesColumn=e.LatestNewsStories=e.LatestNews=e.AnnouncementImage=e.AnnouncementDescriptionText=e.AnnouncementDescription=e.AnnouncementTitleText=e.AnnouncementTitle=e.AnnouncementBadge=e.AnnouncementText=e.AnnouncementMedia=e.Announcement=e.Announcements=e.LinkBlock=e.SectionSubtitle=e.SectionTitle=void 0;var r=i(["\n\twidth: ",";\n\tmargin: 0 auto 0.2em;\n\tfont-size: 4em;\n\tfont-family: ",";\n\tfont-weight:normal;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tline-height: 1;\n\tcolor: ",";\n"],["\n\twidth: ",";\n\tmargin: 0 auto 0.2em;\n\tfont-size: 4em;\n\tfont-family: ",";\n\tfont-weight:normal;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tline-height: 1;\n\tcolor: ",";\n"]),l=i(["\n\twidth: 85%;\n\tmargin: 0 auto;\n\tfont-size: 2.4em;\n\tfont-weight: normal;\n\tfont-family: ",";\n\ttext-align: center;\n\tline-height: ",";\n\tcolor: ",";\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"],["\n\twidth: 85%;\n\tmargin: 0 auto;\n\tfont-size: 2.4em;\n\tfont-weight: normal;\n\tfont-family: ",";\n\ttext-align: center;\n\tline-height: ",";\n\tcolor: ",";\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"]),d=i(["\n\tdisplay: block;\n\ttext-decoration: none;\n\n\t&:visited,\n\t&:hover\n\t&:active {\n\t\tcolor: inherit;\n\t}\n"],["\n\tdisplay: block;\n\ttext-decoration: none;\n\n\t&:visited,\n\t&:hover\n\t&:active {\n\t\tcolor: inherit;\n\t}\n"]),u=i(["\n\tmargin-top: -10em;\n\tpadding-bottom: 5em;\n\tbackground-color: ",";\n\n\t","\n"],["\n\tmargin-top: -10em;\n\tpadding-bottom: 5em;\n\tbackground-color: ",";\n\n\t","\n"]),s=i(["\n\tdisplay: flex;\n\tflex-grow: 1;\n\tflex-wrap: nowrap;\n\tmargin-bottom: 2.5em;\n\tpadding: 0;\n\tbackground-color: ",";\n\tbox-shadow: 0 0.3em 0.5em rgba(0, 0, 0, 0.15);\n\tborder-radius: 0.5em;\n\toverflow: hidden;\n\n\t","\n"],["\n\tdisplay: flex;\n\tflex-grow: 1;\n\tflex-wrap: nowrap;\n\tmargin-bottom: 2.5em;\n\tpadding: 0;\n\tbackground-color: ",";\n\tbox-shadow: 0 0.3em 0.5em rgba(0, 0, 0, 0.15);\n\tborder-radius: 0.5em;\n\toverflow: hidden;\n\n\t","\n"]),c=i(["\n\t\tdisplay: block;\n\t"],["\n\t\tdisplay: block;\n\t"]),m=i(["\n\tdisplay: block;\n\tflex-basis: 34%;\n\ttext-decoration: none;\n"],["\n\tdisplay: block;\n\tflex-basis: 34%;\n\ttext-decoration: none;\n"]),f=i(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\tflex-basis: 66%;\n\tpadding: 2.5em;\n\ttext-decoration: none;\n"],["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\tflex-basis: 66%;\n\tpadding: 2.5em;\n\ttext-decoration: none;\n"]),p=i(["\n\tdisplay: block;\n\tmargin-right: 0.7em;\n\tpadding: 0.25em 0.75em;\n\talign-self: center;\n\tfont-size: 1.6em;\n\tfont-family: ",";\n\tfont-weight: 600;\n\tline-height: 1;\n\tletter-spacing: 0.1em;\n\ttext-transform: uppercase;\n\tborder-radius: 1em;\n\tbackground-color: ",";\n\tcolor: ",";\n"],["\n\tdisplay: block;\n\tmargin-right: 0.7em;\n\tpadding: 0.25em 0.75em;\n\talign-self: center;\n\tfont-size: 1.6em;\n\tfont-family: ",";\n\tfont-weight: 600;\n\tline-height: 1;\n\tletter-spacing: 0.1em;\n\ttext-transform: uppercase;\n\tborder-radius: 1em;\n\tbackground-color: ",";\n\tcolor: ",";\n"]),g=i(["\n\tdisplay: flex;\n\tmargin: 0 0 0.5em 0;\n\tpadding: 0;\n\tfont-size: 1em;\n"],["\n\tdisplay: flex;\n\tmargin: 0 0 0.5em 0;\n\tpadding: 0;\n\tfont-size: 1em;\n"]),h=i(["\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 2.4em;\n\tfont-weight: 500;\n\tfont-family: ",";\n\tline-height: 1.375;\n\tcolor: ",";\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"],["\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 2.4em;\n\tfont-weight: 500;\n\tfont-family: ",";\n\tline-height: 1.375;\n\tcolor: ",";\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"]),y=i(["\n\tmargin: 0;\n\tpadding: 0;\n"],["\n\tmargin: 0;\n\tpadding: 0;\n"]),w=i(["\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 2.4em;\n\tfont-weight: normal;\n\tfont-family: ",";\n\tline-height: 1.375;\n\tcolor: ",";\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"],["\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 2.4em;\n\tfont-weight: normal;\n\tfont-family: ",";\n\tline-height: 1.375;\n\tcolor: ",";\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"]),b=i(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n"],["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n"]),x=i(["\n\tpadding: 5em 0;\n\tbackground-color: ",";\n\n\t","\n"],["\n\tpadding: 5em 0;\n\tbackground-color: ",";\n\n\t","\n"]),k=i(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\tlist-style: none;\n\tmargin: 2em 0 0 0;\n\tpadding: 0;\n\n\t","\n"],["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\tlist-style: none;\n\tmargin: 2em 0 0 0;\n\tpadding: 0;\n\n\t","\n"]),v=i(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\tflex-basis: 25%;\n\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\n\t&:first-of-type {\n\t\tflex-grow: 2;\n\t\tflex-basis: 50%;\n\t}\n\n\t&:nth-child(2) {\n\t\t> article {\n\t\t\tmax-height: 50%;\n\t\t}\n\t}\n\n\t","\n"],["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\tflex-basis: 25%;\n\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\n\t&:first-of-type {\n\t\tflex-grow: 2;\n\t\tflex-basis: 50%;\n\t}\n\n\t&:nth-child(2) {\n\t\t> article {\n\t\t\tmax-height: 50%;\n\t\t}\n\t}\n\n\t","\n"]),E=i(["\n\t\t&:nth-child(3) {\n\t\t\tpadding-top: 2em;\n\t\t}\n\t"],["\n\t\t&:nth-child(3) {\n\t\t\tpadding-top: 2em;\n\t\t}\n\t"]),T=i(["\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 1em;\n"],["\n\theight: 100%;\n\twidth: 100%;\n\tpadding: 1em;\n"]),L=i(["\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 0.5em;\n\toverflow: hidden;\n\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-image: linear-gradient(\n\t\t\tto bottom,\n\t\t\trgba(4, 30, 65, 0) 0%,\n\t\t\trgba(4, 30, 65, 0.9) 100%\n\t\t);\n\t}\n\n\t","\n"],["\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 0.5em;\n\toverflow: hidden;\n\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-image: linear-gradient(\n\t\t\tto bottom,\n\t\t\trgba(4, 30, 65, 0) 0%,\n\t\t\trgba(4, 30, 65, 0.9) 100%\n\t\t);\n\t}\n\n\t","\n"]),I=i(["\n\t\t","\n\t"],["\n\t\t","\n\t"]),z=i(["\n\tdisplay: block;\n\theight: 100%;\n\twidth: 100%;\n\tobject-fit: cover;\n\tz-index: -1;\n\n\t","\n"],["\n\tdisplay: block;\n\theight: 100%;\n\twidth: 100%;\n\tobject-fit: cover;\n\tz-index: -1;\n\n\t","\n"]),S=i(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 1em 1.5em;\n\tcolor: ",";\n\tz-index: ","\n"],["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 1em 1.5em;\n\tcolor: ",";\n\tz-index: ","\n"]),A=i(["\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: ",";\n\tfont-family: ",";\n\tfont-weight: 600;\n\tline-height: ",";\n\n\t","\n"],["\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: ",";\n\tfont-family: ",";\n\tfont-weight: 600;\n\tline-height: ",";\n\n\t","\n"]),N=i(["font-size: 1.6rem;"],["font-size: 1.6rem;"]),R=i(["\n\tpadding: 1em;\n"],["\n\tpadding: 1em;\n"]),C=i(["\n\tmargin: 0 0 ","em 0;\n\tfont-size: 2em;\n\tfont-family: ",";\n\tfont-weight: 600;\n\tline-height: ",";\n\n\t","\n"],["\n\tmargin: 0 0 ","em 0;\n\tfont-size: 2em;\n\tfont-family: ",";\n\tfont-weight: 600;\n\tline-height: ",";\n\n\t","\n"]),F=i(["\n\t\tfont-size: 2rem;\n\t"],["\n\t\tfont-size: 2rem;\n\t"]),_=i(["\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n"],["\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n"]),M=i(["\n\tmargin-bottom: 1em;\n"],["\n\tmargin-bottom: 1em;\n"]),j=i(["\n\tfont-size: 1.6em;\n\tfont-family: ",";\n\tfont-weight: normal;\n\tline-height: ",";\n\ttext-decoration: none;\n\tcolor: ",";\n\n\t&:visited,\n\t&:hover\n\t&:active {\n\t\tcolor: ",";\n\t}\n\n\t","\n"],["\n\tfont-size: 1.6em;\n\tfont-family: ",";\n\tfont-weight: normal;\n\tline-height: ",";\n\ttext-decoration: none;\n\tcolor: ",";\n\n\t&:visited,\n\t&:hover\n\t&:active {\n\t\tcolor: ",";\n\t}\n\n\t","\n"]),B=i(["\n\t\tfont-size: 1.6rem;\n\t"],["\n\t\tfont-size: 1.6rem;\n\t"]),P=n(4),H=o(P),D=n(6),O=n(8),W=n(14),Q=o(W),q=D.fonts.FONT_AVENIRNEXT,G=D.fonts.FONT_DIN_CONDENSED,Z=D.colors.BLACK,U=D.colors.WHITE,X=D.colors.ALMOST_WHITE,J=D.colors.CYAN,K=D.colors.COBALT,V=D.colors.COOL_GRAY,Y=D.colors.EMERALD_HOVER,$=(e.SectionTitle=H.default.h2(r,function(t){return t.width||"85%"},G,function(t){return t.color||K}),e.SectionSubtitle=H.default.h3(l,q,1.375,function(t){return t.color||V}),e.LinkBlock=(0,H.default)(Q.default)(d));e.Announcements=H.default.section(u,X,O.layout.fluidFontSize(D.FONT_SCALING_DEFAULT)),e.Announcement=H.default.article(s,U,O.layout.maxWidthQuery(800)(c)),e.AnnouncementMedia=$.extend(m),e.AnnouncementText=$.extend(f),e.AnnouncementBadge=H.default.span(p,q,Y,U),e.AnnouncementTitle=H.default.h3(g),e.AnnouncementTitleText=H.default.span(h,q,Z),e.AnnouncementDescription=H.default.div(y),e.AnnouncementDescriptionText=H.default.p(w,q,V),e.AnnouncementImage=H.default.img(b),e.LatestNews=H.default.section(x,U,O.layout.fluidFontSize(D.FONT_SCALING_DEFAULT)),e.LatestNewsStories=H.default.ul(k,O.layout.maxWidthQuery(750)(c)),e.LatestNewsStoriesColumn=H.default.li(v,O.layout.maxWidthQuery(750)(E)),e.NewsCard=H.default.article(T),e.NewsCardLink=$.extend(L,O.layout.maxWidthQuery(750)(I,function(t){return a(t)?O.layout.aspectRatioBlock(2,1):""})),e.NewsCardImage=H.default.img(z,O.layout.maxWidthQuery(750)(I,function(t){return a(t)?O.layout.fillParent():""})),e.NewsCardTitle=H.default.h1(S,U,D.layers.base),e.NewsCardTitleText=H.default.span(A,function(t){return a(t)?"1.6em":"3em"},q,41/30,O.layout.maxWidthQuery(750)(I,function(t){return a(t)?(0,P.css)(N):""})),e.RecommendedReading=H.default.div(R),e.RecommendedReadingTitle=H.default.h2(C,.5,q,1.35,O.layout.maxWidthQuery(750)(F)),e.RecommendedReadingList=H.default.ul(_),e.RecommendedReadingItem=H.default.li(M),e.RecommendedReadingItemLink=(0,H.default)(Q.default)(j,q,19/16,J,J,O.layout.maxWidthQuery(750)(B))},765:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(1),a=o(i),r=n(3),l=o(r),d=n(9),u=n(40),s=o(u),c=n(766),m=o(c),f=n(768),p=o(f),g=n(767),h=o(g),y=n(52),w=n(10);e.default=(0,l.default)({displayName:"HomeLatestNews",propTypes:{news:d.LatestNewsSectionPropType.isRequired},trackAndSubmit:function(t,e,n){var o=this;t.preventDefault();var i=t.currentTarget,a=function(){return o.submitForm(i)},r=n.leadSource,l=e.email,d={email:l,userLogin:l,Source:r};s.default.identify(l,d),s.default.track("Newsletter Sign-Up [latestnews]",d,a),this._timer=setTimeout(a,1e3)},submitForm:function(t){clearTimeout(this._timer),t.submit()},renderLargePost:function(t){return this.renderPost(t)},renderSmallPost:function(t){return this.renderPost(t,"small")},renderPost:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"large";return a.default.createElement(m.default,{key:t.id,post:t,size:e})},render:function(){var t=this.props.news,e=t.title,n=t.subtitle,o=t.newsletter,i=t.posts,r=o.title,l=o.guid,d=o.leadSource,u=o.callToAction;return a.default.createElement(y.LatestNews,null,a.default.createElement(w.SectionContainer,null,a.default.createElement(y.SectionTitle,null,e),a.default.createElement(y.SectionSubtitle,null,n.value),a.default.createElement(y.LatestNewsStories,null,a.default.createElement(y.LatestNewsStoriesColumn,null,i.slice(0,1).map(this.renderLargePost)),a.default.createElement(y.LatestNewsStoriesColumn,null,i.slice(1,3).map(this.renderSmallPost)),a.default.createElement(y.LatestNewsStoriesColumn,null,a.default.createElement(p.default,{posts:i.slice(3,7)}),a.default.createElement(h.default,{title:r,onSubmit:this.trackAndSubmit,hubspotFormGuid:l,leadSource:d,callToAction:u})))))}}),t.exports=e.default},766:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(1),a=o(i),r=n(3),l=o(r),d=n(2),u=o(d),s=n(9),c=n(52);e.default=(0,l.default)({displayName:"HomeNewsCard",propTypes:{size:u.default.oneOf(["small","large"]).isRequired,post:s.LatestNewsItemPropType.isRequired},render:function(){var t=this.props,e=t.post,n=t.size,o=e.title,i=e.media,r=e.link,l=i.sizes.src,d=r.url;return a.default.createElement(c.NewsCard,null,a.default.createElement(c.NewsCardLink,{to:d,size:n},a.default.createElement(c.NewsCardImage,{src:l,size:n}),a.default.createElement(c.NewsCardTitle,null,a.default.createElement(c.NewsCardTitleText,{size:n},o))))}}),t.exports=e.default},767:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return t.raw=e,t}e.__esModule=!0,e._group=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=i(['\n\tpadding: 1em;\n\n\tform {\n\t\tdisplay: block;\n\n\t\t> div {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\tdiv {\n\t\tdisplay: inline;\n\t}\n\n\tlabel {\n\t\tdisplay: none;\n\t}\n\n\tinput[type="email"] {\n\t\t',"\n\t\twidth: 11em;\n\t\tmargin: 0 0.5em 0.5em 0;\n\t\tborder: 0.1em solid ",";\n\t\tborder-radius: 0.3em;\n\t\tbackground-color: transparent;\n\t\tcolor: ",";\n\n\t\t::-webkit-input-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t\t::-moz-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t\t:-ms-input-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t\t:-moz-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"],['\n\tpadding: 1em;\n\n\tform {\n\t\tdisplay: block;\n\n\t\t> div {\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\n\tdiv {\n\t\tdisplay: inline;\n\t}\n\n\tlabel {\n\t\tdisplay: none;\n\t}\n\n\tinput[type="email"] {\n\t\t',"\n\t\twidth: 11em;\n\t\tmargin: 0 0.5em 0.5em 0;\n\t\tborder: 0.1em solid ",";\n\t\tborder-radius: 0.3em;\n\t\tbackground-color: transparent;\n\t\tcolor: ",";\n\n\t\t::-webkit-input-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t\t::-moz-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t\t:-ms-input-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t\t:-moz-placeholder {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"]),l=i(["\n\tfont-size: 1.5em;\n\tfont-weight: 500;\n\tline-height: ",";\n\tcolor: ",";\n"],["\n\tfont-size: 1.5em;\n\tfont-weight: 500;\n\tline-height: ",";\n\tcolor: ",";\n"]),d=i(["\n\tpadding: 1.085em 1.2em;\n\tfont-size: 1.17rem;\n\tbox-shadow: none;\n"],["\n\tpadding: 1.085em 1.2em;\n\tfont-size: 1.17rem;\n\tbox-shadow: none;\n"]),u=n(1),s=o(u),c=n(4),m=o(c),f=n(3),p=o(f),g=n(2),h=o(g),y=n(6),w=n(8),b=n(53),x=o(b),k=n(11),v=n(52),E=y.colors.BLACK,T=y.colors.COOL_GRAY,L=y.colors.HAZE,I="sent=true",z="sales",S="resources",A=[{type:"email",name:"email",title:"Email",placeholder:"joe@company.io",required:!0}];e.default=(0,p.default)({displayName:"HomeNewsletterSignupForm",propTypes:{title:h.default.string.isRequired,hubspotPortalId:h.default.string,hubspotFormGuid:h.default.string.isRequired,salesforceCampaignId:h.default.string,leadSource:h.default.string.isRequired,callToAction:h.default.string,onSubmit:h.default.func},getDefaultProps:function(){return{successMessage:"Thank you for signing up for our newsletter!"}},getInitialState:function(){return{submitted:!1}},componentDidMount:function(){var t=window.location.href;this.setState({submitted:t.includes(I)&&!t.includes(z)&&!t.includes(S)})},renderSubmitButton:function(){var t=this.props.callToAction;return s.default.createElement(C,null,t)},render:function(){var t=this.props,e=t.title,n=t.successMessage,o=a({},this.props,{fields:A,renderSubmitButton:this.renderSubmitButton});return s.default.createElement(N,null,s.default.createElement(v.RecommendedReadingTitle,null,e),this.state.submitted?s.default.createElement(R,null,n):s.default.createElement(x.default,o))}});var N=e._group=m.default.div(r,w.styles.smallParagraph,L,E,L,L,L,L),R=m.default.p(l,20/15,T),C=k.Button.extend(d)},768:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(1),a=o(i),r=n(3),l=o(r),d=n(2),u=o(d),s=n(9),c=n(52);e.default=(0,l.default)({displayName:"HomeNewsRecommendedReading",propTypes:{title:u.default.string,posts:s.LatestNewsItemsPropType.isRequired},getDefaultProps:function(){return{title:"Recommended reading"}},renderItem:function(t){var e=t.id,n=t.title,o=t.link;return a.default.createElement(c.RecommendedReadingItem,{key:e},a.default.createElement(c.RecommendedReadingItemLink,{to:o.url},n))},render:function(){var t=this.props,e=t.title,n=t.posts;return a.default.createElement(c.RecommendedReading,null,a.default.createElement(c.RecommendedReadingTitle,null,e),a.default.createElement(c.RecommendedReadingList,null,n.map(this.renderItem)))}}),t.exports=e.default},210:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(1),a=o(i),r=n(3),l=o(r),d=n(2),u=o(d),s="#b2c0db",c="#002F87";e.default=(0,l.default)({displayName:"Hexagon",propTypes:{icon:u.default.oneOf(["hardware","connectivity","device-cloud","apps"]).isRequired,isActive:u.default.bool.isRequired},getStrokeColor:function(){return c},renderIcon:function(){switch(this.props.icon){case"hardware":return this.renderHardwareIcon();case"connectivity":return this.renderConnectivityIcon();case"device-cloud":return this.renderDeviceCloudIcon();case"apps":return this.renderAppsIcon()}},renderHardwareIcon:function(){var t=this.getStrokeColor();return a.default.createElement("g",{transform:"translate(30.000000, 30.000000)"},a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"20.0474995 0.75 0.820608731 7.5 0.820608731 30.75 20.0474995 39.375 38.9046423 30.75 38.9046423 7.5"}),a.default.createElement("polygon",{fill:"#b2c0db",fillRule:"nonzero",points:"0.820608731 30.75 20.0474995 39.375 20.0474995 14.625"}),a.default.createElement("polygon",{fill:"#b2c0db",fillRule:"nonzero",points:"20.0474995 14.625 20.0474995 39.375 38.9046423 30.75 38.9046423 7.5"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"20.0474995 14.625 0.820608731 7.5 20.0474995 0.75 38.9046423 7.5"}),a.default.createElement("polyline",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"38.9046423 7.5 38.9046423 30.75 20.0474995 39.375 0.820608731 30.75 0.820608731 7.5"}),a.default.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",d:"M20.0474995,14.625 L20.0474995,39.375"}))},renderConnectivityIcon:function(){var t=this.getStrokeColor();return a.default.createElement("g",{transform:"translate(35.000000, 31.000000)",stroke:t,strokeLinecap:"round",strokeLinejoin:"round"},a.default.createElement("polyline",{points:"26 38 15.5 15 5 38"}),a.default.createElement("path",{d:"M12,22 L19,22"}),a.default.createElement("path",{d:"M24,35 L11,25"}),a.default.createElement("path",{d:"M7,35 L20,25"}),a.default.createElement("path",{d:"M7,35 L25,35"}),a.default.createElement("polyline",{points:"10 18 10 14.325 15 11 20 14.325 20 18"}),a.default.createElement("polyline",{points:"26.1777778 30 31 27.2396552 31 8.96551724 15.5 0 0 8.96551724 0 27.2396552 4.82222222 30"}),a.default.createElement("polyline",{points:"23.725 24 26 22.6428571 26 11.1071429 15.5 5 5 11.1071429 5 22.6428571 7.275 24"}))},renderDeviceCloudIcon:function(){var t=this.getStrokeColor();return a.default.createElement("g",{transform:"translate(25.000000, 34.000000)"},a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"45.75 12.5056818 41.0769231 12.5056818 34.8461538 0.528409091 23.9423077 0.528409091 19.2692308 6.51704545 9.92307692 6.51704545 0.576923077 19.9914773 9.92307692 30.4715909 44.1923077 30.4715909 50.4230769 22.9857955"}),a.default.createElement("polygon",{fill:"#b2c0db",fillRule:"nonzero",points:"0.576923077 19.9914773 6.80769231 19.9914773 11.4807692 24.4829545 42.6346154 24.4829545 44.1923077 22.9857955 50.4230769 22.9857955 44.1923077 30.4715909 9.92307692 30.4715909"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"45.75 12.5056818 41.0769231 12.5056818 34.8461538 0.528409091 23.9423077 0.528409091 19.2692308 6.51704545 9.92307692 6.51704545 0.576923077 19.9914773 9.92307692 30.4715909 44.1923077 30.4715909 50.4230769 22.9857955"}),a.default.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",d:"M31.7307692,12.5056818 L41.0769231,12.5056818"}))},renderAppsIcon:function(){var t=this.getStrokeColor();return a.default.createElement("g",{id:"Icon",transform:"translate(30.000000, 30.000000)"},a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"7.82608696 10 4.34956522 12.173913 0.869565217 10 0.869565217 6.52173913 4.34956522 4.34782609 7.82608696 6.52173913"}),a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"33.9130435 6.52173913 30.4365217 8.69565217 26.9565217 6.52173913 26.9565217 3.04347826 30.4365217 0.869565217 33.9130435 3.04347826"}),a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"7.82608696 35.2173913 4.34956522 37.3913043 0.869565217 35.2173913 0.869565217 31.7391304 4.34956522 29.5652174 7.82608696 31.7391304"}),a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"36.5217391 36.9565217 33.0452174 39.1304348 29.5652174 36.9565217 29.5652174 33.4782609 33.0452174 31.3043478 36.5217391 33.4782609"}),a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"39.1304348 20 35.653913 22.173913 32.173913 20 32.173913 16.5217391 35.653913 14.3478261 39.1304348 16.5217391"}),a.default.createElement("polygon",{fill:"#FFFFFF",fillRule:"nonzero",points:"23.4782609 21.3043478 17.3913043 25.2173913 11.3043478 21.3043478 11.3043478 15.2173913 17.3913043 11.3043478 23.4782609 15.2173913"}),a.default.createElement("polygon",{fill:"#b2c0db",fillRule:"nonzero",points:"11.3043478 21.2737391 13.0382609 20.0006957 17.386087 22.6093913 21.733913 20.018087 23.4782609 21.3346087 17.373913 25.218087"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"23.4782609 21.3043478 17.3913043 25.2173913 11.3043478 21.3043478 11.3043478 15.2173913 17.3913043 11.3043478 23.4782609 15.2173913"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"7.82608696 10 4.34956522 12.173913 0.869565217 10 0.869565217 6.52173913 4.34956522 4.34782609 7.82608696 6.52173913"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"33.9130435 6.52173913 30.4365217 8.69565217 26.9565217 6.52173913 26.9565217 3.04347826 30.4365217 0.869565217 33.9130435 3.04347826"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"7.82608696 35.2173913 4.34956522 37.3913043 0.869565217 35.2173913 0.869565217 31.7391304 4.34956522 29.5652174 7.82608696 31.7391304"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"36.5217391 36.9565217 33.0452174 39.1304348 29.5652174 36.9565217 29.5652174 33.4782609 33.0452174 31.3043478 36.5217391 33.4782609"}),a.default.createElement("polygon",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",points:"39.1304348 20 35.653913 22.173913 32.173913 20 32.173913 16.5217391 35.653913 14.3478261 39.1304348 16.5217391"}),a.default.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",d:"M11.3043478,15.2173913 L6.63130435,10.746087"}),a.default.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",d:"M30.7761739,32.7224348 L20.3953043,23.285913"}),a.default.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",d:"M32.173913,18.2608696 L23.4782609,18.2608696"}),a.default.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",d:"M13.8297391,22.928 L6.40365217,30.8514783"}),a.default.createElement("path",{stroke:t,strokeLinecap:"round",strokeLinejoin:"round",d:"M28.378087,7.40991304 L21.9676522,14.2481739"}))},render:function(){var t=this.props,e=t.icon,n=t.isActive;return a.default.createElement("svg",{viewBox:"0 0 88 100",xmlns:"http://www.w3.org/2000/svg"},a.default.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:n?1:.3},a.default.createElement("g",{transform:"translate(-6.000000, 0.000000)"},a.default.createElement("g",null,a.default.createElement("polygon",{fill:s,points:"50 0 93.3012702 25 93.3012702 75 50 100 6.69872981 75 6.69872981 25"}),this.renderIcon(e)))))}}),t.exports=e.default},221:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(1),a=o(i),r=n(3),l=o(r),d=n(9),u=n(10);e.default=(0,l.default)({displayName:"Banner",propTypes:d.BannerSectionPropTypeShape,getBodyText:function(){var t=this.props.body;return t&&"string"!=typeof t?t.value:t},getBackgroundImage:function(){var t=this.props.background;if(t)return t.childImageSharp&&(t=t.childImageSharp),t=t.sizes||t.resolutions,t?t.src:void 0},renderText:function(t,e){return a.default.createElement(u.BannerText,{key:e},t)},render:function(){var t=this.props,e=t.title,n=t.minHeight,o=t.dark,i=t.link,r=this.getBackgroundImage(),l=this.getBodyText();return a.default.createElement(u.Banner,{minHeight:n,backgroundImage:r,dark:o},a.default.createElement(u.SectionContainer,null,a.default.createElement(u.BannerTitle,null,e),l&&l.split("\n").map(this.renderText),i&&a.default.createElement(u.BannerButton,{to:i.url},i.title)))}}),t.exports=e.default},222:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return t.raw=e,t}e.__esModule=!0;var a=i(["\n\tpadding-top: 5.5em;\n\tpadding-bottom: 5em;\n\t","\n\t","\n\t","\n"],["\n\tpadding-top: 5.5em;\n\tpadding-bottom: 5em;\n\t","\n\t","\n\t","\n"]),r=i(["\n\ttext-align: center;\n\tmargin: 0 0 .2em;\n"],["\n\ttext-align: center;\n\tmargin: 0 0 .2em;\n"]),l=i(["\n\ttext-align: center;\n\tmargin: 0 0 1em;\n"],["\n\ttext-align: center;\n\tmargin: 0 0 1em;\n"]),d=i(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\tmargin-top: 4em;\n\tmargin-bottom: 3em;\n\n\t","\n"],["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\tmargin-top: 4em;\n\tmargin-bottom: 3em;\n\n\t","\n"]),u=i(["\n\t\tflex-wrap: wrap;\n\t"],["\n\t\tflex-wrap: wrap;\n\t"]),s=i(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\twidth: 25%;\n\tpadding: 1em;\n\tuser-select: none;\n\n\t> svg {\n\t\tmax-width: 10em;\n\t\tmargin: 0 auto;\n\t}\n\n\t","\n"],["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\twidth: 25%;\n\tpadding: 1em;\n\tuser-select: none;\n\n\t> svg {\n\t\tmax-width: 10em;\n\t\tmargin: 0 auto;\n\t}\n\n\t","\n"]),c=i(["\n\t\twidth: 50%;\n\t\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\n\t\t& > svg {\n\t\t\tmax-width: 8em;\n\t\t}\n\t"],["\n\t\twidth: 50%;\n\t\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\n\t\t& > svg {\n\t\t\tmax-width: 8em;\n\t\t}\n\t"]),m=i(["\n\tmargin: 1em 0 0 0;\n\tpadding: 0;\n\tfont-size: 1.8em;\n\tfont-weight: 500;\n\tfont-family: ",";\n\tline-height: ","em;\n\tcolor: ",";\n\ttext-align: center;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"],["\n\tmargin: 1em 0 0 0;\n\tpadding: 0;\n\tfont-size: 1.8em;\n\tfont-weight: 500;\n\tfont-family: ",";\n\tline-height: ","em;\n\tcolor: ",";\n\ttext-align: center;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"]),f=i(["\n\tpadding: 1em 2em;\n\tbackground-size: 50%;\n\tbackground-position:center;\n\tbackground-repeat:no-repeat;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\n\t","\n\n\t","\n"],["\n\tpadding: 1em 2em;\n\tbackground-size: 50%;\n\tbackground-position:center;\n\tbackground-repeat:no-repeat;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\n\t","\n\n\t","\n"]),p=i(['\n\t\t\t\tmargin-left: 2.5em;\n\t\t\t\tbackground-image:  url("','");\n\t\t\t'],['\n\t\t\t\tmargin-left: 2.5em;\n\t\t\t\tbackground-image:  url("','");\n\t\t\t']),g=i(['\n\t\t\tmargin-right: 2.5em;\n\t\t\tbackground-image:  url("','");\n\t\t'],['\n\t\t\tmargin-right: 2.5em;\n\t\t\tbackground-image:  url("','");\n\t\t']),h=i(["\n\t\tdisplay: none;\n\t"],["\n\t\tdisplay: none;\n\t"]),y=i(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\twidth: 100%;\n\tpadding: 2em;\n\tbackground-color: ",";\n\n\t","\n\n\t","\n"],["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\twidth: 100%;\n\tpadding: 2em;\n\tbackground-color: ",";\n\n\t","\n\n\t","\n"]),w=i(["\n\t\tpadding: 2em 3em;\n\t"],["\n\t\tpadding: 2em 3em;\n\t"]),b=i(["\n\twidth: 100%;\n\toverflow: hidden;\n"],["\n\twidth: 100%;\n\toverflow: hidden;\n"]),x=i(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\talign-items: center;\n\twidth: ",";\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\ttransform: ","\n"],["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\talign-items: center;\n\twidth: ",";\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\ttransform: ","\n"]),k=i(["\n\tdisplay: inline-block;\n\twidth: ",";\n"],["\n\tdisplay: inline-block;\n\twidth: ",";\n"]),v=i(["\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 2.4em;\n\tfont-weight: normal;\n\tfont-family: ",";\n\tline-height: 1.375;\n\ttext-align: center;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"],["\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 2.4em;\n\tfont-weight: normal;\n\tfont-family: ",";\n\tline-height: 1.375;\n\ttext-align: center;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n"]),E=n(1),T=o(E),L=n(3),I=o(L),z=n(9),S=n(4),A=o(S),N=n(210),R=o(N),C=n(10),F=n(18),_=n(6),M=n(8),j=n(320),B=o(j),P=n(321),H=o(P),D=_.fonts.FONT_AVENIRNEXT,O=_.colors.BLACK,W=_.colors.WHITE,Q=[{
icon:"hardware",caption:"IoT Hardware",body:"Get started with easy-to-use hardware development kits, and scale with industrial-grade connectivity modules. Wi-Fi, cellular, Bluetooth, and mesh."},{icon:"connectivity",caption:"Connectivity",body:"Network infrastructure designed for IoT. From SIM cards to security, we make sure your devices can talk to the cloud."},{icon:"device-cloud",caption:"IoT Device Cloud",body:"A secure, managed platform that gives you visibility and control over your fleet of devices. OTA software updates, SIM and device management."},{icon:"apps",caption:"IoT Apps",body:"Our SDKs help you build iOS, Android, and web apps. Our web integrations stream data out of Particle and into your database of choice."}];e.default=(0,I.default)({displayName:"HexagonCarouselSection",propTypes:z.HexagonCarouselSectionPropTypeShape,getDefaultProps:function(){return{title:"Meet the only all-in-one IoT platform on the market",subtitle:"Everything you need to power your IoT product, from device to cloud"}},getInitialState:function(){return{activeIndex:0}},setActiveIndex:function(t){var e=Q.length-1;t<0?t=e:t>e&&(t=0),this.setState({activeIndex:t})},next:function(){var t=this.state.activeIndex;this.setActiveIndex(t+1)},previous:function(){var t=this.state.activeIndex;this.setActiveIndex(t-1)},renderIcon:function(t,e){var n=this,o=this.state.activeIndex===e,i=function(){return n.setActiveIndex(e)};return T.default.createElement(X,{key:t.icon,onMouseOver:i,onClick:i},T.default.createElement(R.default,{icon:t.icon,isActive:o}),T.default.createElement(J,null,t.caption))},renderSlide:function(t,e){return T.default.createElement(tt,{key:t.icon,count:e.length},T.default.createElement(et,null,t.body))},render:function(){var t=this.state.activeIndex,e=this.props,n=e.alternate,o=void 0!==n&&n,i=e.title,a=e.subtitle,r=e.noTopPad;return T.default.createElement(q,{alternate:o,noTopPad:r},T.default.createElement(C.SectionContainer,null,i&&T.default.createElement(G,null,i),a&&T.default.createElement(Z,null,a),T.default.createElement(U,null,Q.map(this.renderIcon)),T.default.createElement(V,null,T.default.createElement(K,{mode:"previous",onClick:this.previous}),T.default.createElement(Y,null,T.default.createElement($,{count:Q.length,activeIndex:t},Q.map(this.renderSlide))),T.default.createElement(K,{mode:"next",onClick:this.next}))))}});var q=A.default.section(a,function(t){return t.noTopPad&&"\n\t\tpadding-top: 0;\n\t"},function(t){return t.alternate&&"\n\t\tbackground-color: "+_.colors.ALMOST_WHITE+";\n\t"},M.layout.fluidFontSize(_.FONT_SCALING_DEFAULT)),G=F.SectionTitle.extend(r),Z=F.SectionSubtitle.extend(l),U=A.default.div(d,M.layout.maxWidthQuery(700)(u)),X=A.default.div(s,M.layout.maxWidthQuery(700)(c)),J=A.default.h4(m,D,25/18,O),K=A.default.button(f,function(t){return"next"===t.mode?(0,S.css)(p,B.default):(0,S.css)(g,H.default)},M.layout.maxWidthQuery(700)(h)),V=A.default.div(y,W,function(t){return t.showArrow&&M.shapes.arrow({direction:"up",size:"2em",color:W})},M.layout.maxWidthQuery(700)(w)),Y=A.default.div(b),$=A.default.ul(x,function(t){return 100*(t.count||4)+"%"},function(t){var e=100/t.count*t.activeIndex;return"translateX(-"+e+"%)"}),tt=A.default.li(k,function(t){return 100/(t.count||4)+"%"}),et=A.default.p(v,D);t.exports=e.default},320:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNC4xIDI1LjQiPjxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiM1MDUwNTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjAuNywwLjcgMTIuNywxMi43IDAuNywyNC43ICIvPjwvc3ZnPgo="},321:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNC4xIDI1LjQiPjxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiM1MDUwNTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludHM9IjEzLjQsMC43IDEuNCwxMi43IDEzLjQsMjQuNyAiLz48L3N2Zz4K"},843:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.pageQuery=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a=n(1),r=o(a),l=n(3),d=o(l),u=n(2),s=o(u),c=n(9),m=n(17),f=o(m),p=n(88),g=o(p),h=n(763),y=o(h),w=n(221),b=o(w),x=n(222),k=o(x),v=n(765),E=o(v),T=n(764),L=o(T),I=n(22),z=o(I);e.default=(0,d.default)({displayName:"Home",propTypes:{data:s.default.shape({page:s.default.shape({meta:c.MetaPropType.isRequired,sections:c.SectionsPropType.isRequired}),homeYaml:s.default.shape({brands:c.HomeBrandsPropType.isRequired}).isRequired}).isRequired},render:function(){var t=this.props.data.page,e=t.meta,n=t.sections,o=this.flattenSections(n),a=o.banner,l=o.announcement,d=o.news,u=this.props.data.homeYaml,s=u.section,c=u.brands,m=u.bottomCTA;return r.default.createElement(f.default,{pagePath:"/",meta:e},r.default.createElement(b.default,i({minHeight:"61.5em"},a)),r.default.createElement(y.default,{announcements:l.posts}),r.default.createElement(k.default,{alternate:!0,noTopPad:!0}),r.default.createElement(z.default,s),r.default.createElement(L.default,{brands:c}),r.default.createElement(E.default,{news:d}),r.default.createElement(g.default,m))},flattenSections:function(t){var e={ContentfulBannerSection:"banner",ContentfulAnnouncementSection:"announcement",ContentfulLatestNewsSection:"news"};return t.reduce(function(t,n){var o=n.__typename,i=e[o];return i&&!t[i]&&(t[i]=n),t},{})}});e.pageQuery="** extracted graphql fragment **"}});