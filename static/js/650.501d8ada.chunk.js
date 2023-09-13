"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[650,84,478],{7084:function(e,a,t){t.r(a);t(2791),t(3508);var r=t(184);a.default=function(e){var a=e.title;return(0,r.jsx)("div",{className:"header",children:a})}},1650:function(e,a,t){t.r(a);var r=t(9439),n=t(2791),c=t(7022),s=t(9743),o=t(3360),i=t(6444),l=t(4075),d=t.n(l),u=t(7084),f=t(126),v=t(5478),x=t(2150),m=t(184),p={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};a.default=function(e){var a,t,l=(0,n.useContext)(i.Ni),h=e.header,b=(0,n.useState)(null),Z=(0,r.Z)(b,2),y=Z[0],j=Z[1],g=(0,n.useState)(null),N=(0,r.Z)(g,2),S=N[0],P=N[1],C=(0,n.useState)(!1),w=(0,r.Z)(C,2),k=w[0],E=w[1];(0,n.useEffect)((function(){fetch(f.Z.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return e}))}),[]);var T=k&&y?y.length:10;(0,n.useEffect)((function(){fetch(f.Z.side_projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return P(e)})).catch((function(e){return e}))}),[]);var B=k&&S?S.length:10;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.default,{title:h}),y?(0,m.jsx)("div",{className:"section-content-container",children:(0,m.jsx)(c.Z,{style:p.containerStyle,children:(0,m.jsx)(s.Z,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(a=y.projects)||void 0===a?void 0:a.slice(0,T).map((function(e){return(0,m.jsx)(d(),{children:(0,m.jsx)(v.default,{project:e})},e.title)}))})})}):(0,m.jsx)(x.default,{}),(0,m.jsx)(u.default,{title:"Side-Project"}),S?(0,m.jsx)("div",{className:"section-content-container",children:(0,m.jsxs)(c.Z,{style:p.containerStyle,children:[(0,m.jsx)(s.Z,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=S.projects)||void 0===t?void 0:t.slice(0,B).map((function(e){return(0,m.jsx)(d(),{children:(0,m.jsx)(v.default,{project:e})},e.title)}))}),!k&&(0,m.jsx)(o.Z,{style:p.showMoreStyle,variant:l.bsSecondaryVariant,onClick:function(){return E(!0)},children:"show more"})]})}):(0,m.jsx)(x.default,{})]})}},5478:function(e,a,t){t.r(a),t.d(a,{default:function(){return H}});var r=t(1413),n=t(2791),c=t(2677),s=t(5987),o=t(1694),i=t.n(o),l=t(162),d=t(6543),u=t(7472),f=t(184),v=["bsPrefix","className","variant","as"],x=n.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.variant,o=e.as,d=void 0===o?"img":o,u=(0,s.Z)(e,v),x=(0,l.vE)(t,"card-img");return(0,f.jsx)(d,(0,r.Z)({ref:a,className:i()(c?"".concat(x,"-").concat(c):x,n)},u))}));x.displayName="CardImg";var m=x,p=t(6040),h=["bsPrefix","className","as"],b=n.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.as,d=void 0===o?"div":o,u=(0,s.Z)(e,h),v=(0,l.vE)(t,"card-header"),x=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(p.Z.Provider,{value:x,children:(0,f.jsx)(d,(0,r.Z)((0,r.Z)({ref:a},u),{},{className:i()(c,v)}))})}));b.displayName="CardHeader";var Z=b,y=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,u.Z)("h5"),g=(0,u.Z)("h6"),N=(0,d.Z)("card-body"),S=(0,d.Z)("card-title",{Component:j}),P=(0,d.Z)("card-subtitle",{Component:g}),C=(0,d.Z)("card-link",{Component:"a"}),w=(0,d.Z)("card-text",{Component:"p"}),k=(0,d.Z)("card-footer"),E=(0,d.Z)("card-img-overlay"),T=n.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.bg,o=e.text,d=e.border,u=e.body,v=void 0!==u&&u,x=e.children,m=e.as,p=void 0===m?"div":m,h=(0,s.Z)(e,y),b=(0,l.vE)(t,"card");return(0,f.jsx)(p,(0,r.Z)((0,r.Z)({ref:a},h),{},{className:i()(n,b,c&&"bg-".concat(c),o&&"text-".concat(o),d&&"border-".concat(d)),children:v?(0,f.jsx)(N,{children:x}):x}))}));T.displayName="Card";var B=Object.assign(T,{Img:m,Title:S,Subtitle:P,Body:N,Link:C,Text:w,Header:Z,Footer:k,ImgOverlay:E}),R=t(3360),z=["bsPrefix","bg","pill","text","className","as"],F=n.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bg,c=void 0===n?"primary":n,o=e.pill,d=void 0!==o&&o,u=e.text,v=e.className,x=e.as,m=void 0===x?"span":x,p=(0,s.Z)(e,z),h=(0,l.vE)(t,"badge");return(0,f.jsx)(m,(0,r.Z)((0,r.Z)({ref:a},p),{},{className:i()(v,h,d&&"rounded-pill",u&&"text-".concat(u),c&&"bg-".concat(c))}))}));F.displayName="Badge";var V=F,G=t(6444),I=t(7111),_={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},H=function(e){var a,t,s=(0,n.useContext)(G.Ni),o=e.project;return(0,f.jsx)(c.Z,{children:(0,f.jsxs)(B,{style:(0,r.Z)((0,r.Z)({},_.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[(0,f.jsx)(B.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),(0,f.jsxs)(B.Body,{children:[(0,f.jsx)(B.Title,{style:_.cardTitleStyle,children:o.title}),(0,f.jsx)(B.Text,{style:_.cardTextStyle,children:(t=o.bodyText,(0,f.jsx)(I.D,{children:t}))})]}),(0,f.jsx)(B.Body,{children:null===o||void 0===o||null===(a=o.links)||void 0===a?void 0:a.map((function(e){return(0,f.jsx)(R.Z,{style:_.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&(0,f.jsx)(B.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return(0,f.jsx)(V,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:_.badgeStyle,children:e},e)}))})]})})}},3360:function(e,a,t){var r=t(1413),n=t(9439),c=t(5987),s=t(1694),o=t.n(s),i=t(2791),l=t(5341),d=t(162),u=t(184),f=["as","bsPrefix","variant","size","active","disabled","className"],v=i.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,i=e.variant,v=void 0===i?"primary":i,x=e.size,m=e.active,p=void 0!==m&&m,h=e.disabled,b=void 0!==h&&h,Z=e.className,y=(0,c.Z)(e,f),j=(0,d.vE)(s,"btn"),g=(0,l.FT)((0,r.Z)({tagName:t,disabled:b},y)),N=(0,n.Z)(g,2),S=N[0],P=N[1].tagName;return(0,u.jsx)(P,(0,r.Z)((0,r.Z)((0,r.Z)({},S),y),{},{ref:a,disabled:b,className:o()(Z,j,p&&"active",v&&"".concat(j,"-").concat(v),x&&"".concat(j,"-").concat(x),y.href&&b&&"disabled")}))}));v.displayName="Button",a.Z=v},2677:function(e,a,t){var r=t(9439),n=t(1413),c=t(5987),s=t(1694),o=t.n(s),i=t(2791),l=t(162),d=t(184),u=["as","bsPrefix","className"],f=["className"];var v=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,s=(0,c.Z)(e,u);t=(0,l.vE)(t,"col");var i=(0,l.pi)(),d=(0,l.zG)(),f=[],v=[];return i.forEach((function(e){var a,r,n,c=s[e];delete s[e],"object"===typeof c&&null!=c?(a=c.span,r=c.offset,n=c.order):a=c;var o=e!==d?"-".concat(e):"";a&&f.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=n&&v.push("order".concat(o,"-").concat(n)),null!=r&&v.push("offset".concat(o,"-").concat(r))})),[(0,n.Z)((0,n.Z)({},s),{},{className:o().apply(void 0,[r].concat(f,v))}),{as:a,bsPrefix:t,spans:f}]}(e),s=(0,r.Z)(t,2),i=s[0],v=i.className,x=(0,c.Z)(i,f),m=s[1],p=m.as,h=void 0===p?"div":p,b=m.bsPrefix,Z=m.spans;return(0,d.jsx)(h,(0,n.Z)((0,n.Z)({},x),{},{ref:a,className:o()(v,!Z.length&&b)}))}));v.displayName="Col",a.Z=v},9743:function(e,a,t){var r=t(1413),n=t(5987),c=t(1694),s=t.n(c),o=t(2791),i=t(162),l=t(184),d=["bsPrefix","className","as"],u=o.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,f=(0,n.Z)(e,d),v=(0,i.vE)(t,"row"),x=(0,i.pi)(),m=(0,i.zG)(),p="".concat(v,"-cols"),h=[];return x.forEach((function(e){var a,t=f[e];delete f[e],a=null!=t&&"object"===typeof t?t.cols:t;var r=e!==m?"-".concat(e):"";null!=a&&h.push("".concat(p).concat(r,"-").concat(a))})),(0,l.jsx)(u,(0,r.Z)((0,r.Z)({ref:a},f),{},{className:s().apply(void 0,[c,v].concat(h))}))}));u.displayName="Row",a.Z=u}}]);
//# sourceMappingURL=650.501d8ada.chunk.js.map