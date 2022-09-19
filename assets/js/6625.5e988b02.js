"use strict";(self.webpackChunkhyboria_documentation=self.webpackChunkhyboria_documentation||[]).push([[6625],{4161:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(6687),l=a(4923),r=a(3286),o=a(5927),s=a(597),i=a(8017);const c="sidebar_JZo7",m="sidebarItemTitle_XngP",u="sidebarItemList_V48I",d="sidebarItem_XjAw",g="sidebarItemLink_cILl",p="sidebarItemLinkActive_tEb2";function h(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var f=a(9232);function E(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(f.Zo,{component:E,props:e})}function v(e){let{sidebar:t}=e;const a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(h,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},9328:(e,t,a)=>{a.d(t,{Z:()=>U});var n=a(6687),l=a(4923),r=a(2445),o=a(6823);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),c=s.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var i=a(597);const c="title_tMoJ";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=a,u=o?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c,t),itemProp:"headline"},o?m:n.createElement(i.Z,{itemProp:"url",to:s},m))}var u=a(8017),d=a(7641);const g="container_filT";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return n.createElement(n.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:i}=a;return n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},n.createElement(h,{date:o,formattedDate:s}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement(p,{readingTime:i})))}function b(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:c}=t,m=s||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(b,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const _="authorCol_HuVL",N="imageOnlyAuthorRow_GSQu",P="imageOnlyAuthorCol_bJeZ";function Z(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?N:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?P:_),key:t},n.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function k(){return n.createElement("header",null,n.createElement(m,null),n.createElement(E,null),n.createElement(Z,null))}var T=a(8840),C=a(8390);function y(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return n.createElement("div",{id:o?T.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(C.Z,null,t))}var w=a(1322),I=a(1170),M=a(6274);function L(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function B(e){const{blogPostTitle:t,...a}=e;return n.createElement(i.Z,(0,M.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(L,null))}const F="blogPostFooterDetailsFull_ioU4";function x(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,c=!t&&i,m=a.length>0;return m||c||s?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&F)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},n.createElement(I.Z,{tags:a})),t&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(w.Z,{editUrl:s})),c&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(B,{blogPostTitle:o,to:e.permalink}))):null}function U(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,l.Z)(o,a)},n.createElement(k,null),n.createElement(y,null,t),n.createElement(x,null))}},1322:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(6687),l=a(8017),r=a(4932),o=a(6274),s=a(4923);const i="iconEdit_U0sD";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7078:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(6687),l=a(4923),r=a(597);function o(e){const{permalink:t,title:a,subLabel:o,isNext:s}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},2749:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(6687),l=a(4923),r=a(597);const o="tag_IGg6",s="tagRegular_YfZ4",i="tagWithCount_hoaf";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o,c?i:s)},a,c&&n.createElement("span",null,c))}},1170:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(6687),l=a(4923),r=a(8017),o=a(2749);const s="tags_zQ1U",i="tag_ZQkI";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i},n.createElement(o.Z,{label:t,permalink:a}))}))))}},2445:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var n=a(6687),l=a(506);const r=n.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:o},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},7641:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(6687),l=a(8669);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}},3122:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[l]=e.split(/[#?]/),r="/"===l||l===n?l:(o=l,a?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(l,r)}},8840:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var l=a(3122);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(l).default}})}}]);