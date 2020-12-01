(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),c=a(18),i=a.n(c),l=(a(26),a(9)),s=a(4),u=a(5),d=a(7),m=a(6),h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.handleChange=function(t){e.setState({term:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term),e.setState({term:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.term;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{value:e,name:"term",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})})}}]),a}(r.Component),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.openModal(e.props.largeImageURL)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("li",{className:"ImageGalleryItem",onClick:this.handleClick,children:Object(n.jsx)("img",{src:this.props.webformatURL,alt:"",className:"ImageGalleryItem-image"},this.props.largeImageURL)})})}}]),a}(r.Component);var p=function(e){var t=e.data,a=e.openModal;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(g,{openModal:a,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL},e.id)}))})})};var b=function(e){var t=e.handleClick;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})},j=a(19),f=a.n(j),O=a(2),v=a.n(O),y=function(e,t,a){return f.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};y.propTypes={query:v.a.string.isRequired,page:v.a.number.isRequired,TOKEN:v.a.string.isRequired};var x=y,S=a(20),w=a.n(S),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){"Escape"!==t.code&&"IMG"===t.target.nodeName||e.props.modalClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal),window.addEventListener("click",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal),window.removeEventListener("click",this.closeModal)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Overlay",children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:this.props.largeImageURL,alt:""})})})}}]),a}(r.Component),L=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:[],loading:!1,error:null,query:"",page:1,TOKEN:"18953391-242970f94fd4bfb72dd77b6d1",largeImageURL:null},e.fetchData=function(){var t=e.state,a=t.query,n=t.page,r=t.TOKEN;e.setState({loading:!0}),x(a,n,r).then((function(t){t.length<1?e.setState({error:!0}):e.setState((function(e){return{data:[].concat(Object(l.a)(e.data),Object(l.a)(t)),page:e.page+1,error:!1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.onSubmitForm=function(t){e.setState({data:[]}),e.setState({query:t})},e.openModal=function(t){e.setState({largeImageURL:t})},e.modalClose=function(){e.setState((function(e){return{largeImageURL:!e.largeImageURL}}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchData(),window.scrollTo({top:document.documentElement.scrollHeight+document.documentElement.scrollTop,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.loading,r=e.error,o=e.largeImageURL;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h,{onSubmit:this.onSubmitForm}),r&&Object(n.jsxs)("p",{children:["Whoops, something went wrong ",r.message]}),a&&Object(n.jsx)(w.a,{}),Object(n.jsx)(p,{data:t,openModal:this.openModal}),t.length>0&&Object(n.jsx)(b,{handleClick:this.fetchData}),o&&Object(n.jsx)(C,{onSubmit:this.openModal,largeImageURL:o,modalClose:this.modalClose})]})}}]),a}(r.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),k()}},[[65,1,2]]]);
//# sourceMappingURL=main.98a8e5f5.chunk.js.map