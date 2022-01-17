(this.webpackJsonpreacrud=this.webpackJsonpreacrud||[]).push([[0],{30:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(23),r=s.n(c),a=s(10),i=s(6),o=s(7),l=s(9),u=s(8),d=s(2),h=(s(29),s(30),s(3)),b=s(24),j=s.n(b).a.create({baseURL:"https://fierce-inlet-25199.herokuapp.com/api/courses",headers:{"Content-type":"application/json"}}),O=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return j.get("/courses")}},{key:"get",value:function(e){return j.get("/courses/".concat(e))}},{key:"create",value:function(e){return j.post("/courses",e)}},{key:"update",value:function(e,t){return j.put("/courses/".concat(e),t)}},{key:"delete",value:function(e){return j.delete("/courses/".concat(e))}},{key:"deleteAll",value:function(){return j.delete("/courses")}},{key:"findByTitle",value:function(e){return j.get("/courses?title=".concat(e))}}]),e}()),v=s(0),m=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).onChangeTitle=n.onChangeTitle.bind(Object(h.a)(n)),n.onChangeCourseDetail=n.onChangeCourseDetail.bind(Object(h.a)(n)),n.saveCourse=n.saveCourse.bind(Object(h.a)(n)),n.newCourse=n.newCourse.bind(Object(h.a)(n)),n.state={id:null,title:"",courseDetail:"",published:!1,submitted:!1},n}return Object(o.a)(s,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeCourseDetail",value:function(e){this.setState({courseDetail:e.target.value})}},{key:"saveCourse",value:function(){var e=this,t={title:this.state.title,courseDetail:this.state.courseDetail};O.create(t).then((function(t){e.setState({id:t.data.id,title:t.data.title,courseDetail:t.data.courseDetail,published:t.data.published,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e.message),window.alert(e.message)}))}},{key:"newCourse",value:function(){this.setState({id:null,title:"",courseDetail:"",published:!1,submitted:!1})}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Successfully Added Course Material"}),Object(v.jsx)("button",{className:"btn btn-success",onClick:this.newCourse,children:"Add Course Material"})]}):Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Title"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"courseDetail",children:"Course Detail"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"courseDetail",required:!0,value:this.state.courseDetail,onChange:this.onChangeCourseDetail,name:"courseDetail"})]}),Object(v.jsx)("button",{onClick:this.saveCourse,className:"btn btn-success",children:"Submit"})]})})}}]),s}(n.Component),C=s(12),g=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).onChangeTitle=n.onChangeTitle.bind(Object(h.a)(n)),n.onChangeCourseDetail=n.onChangeCourseDetail.bind(Object(h.a)(n)),n.getCourse=n.getCourse.bind(Object(h.a)(n)),n.updatePublished=n.updatePublished.bind(Object(h.a)(n)),n.updateCourse=n.updateCourse.bind(Object(h.a)(n)),n.deleteCourse=n.deleteCourse.bind(Object(h.a)(n)),n.state={currentCourse:{id:null,title:"",courseDetail:"",published:!1},message:""},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getCourse(this.props.match.params.id)}},{key:"onChangeTitle",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCourse:Object(C.a)(Object(C.a)({},e.currentCourse),{},{title:t})}}))}},{key:"onChangeCourseDetail",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCourse:Object(C.a)(Object(C.a)({},e.currentCourse),{},{courseDetail:t})}}))}},{key:"getCourse",value:function(e){var t=this;O.get(e).then((function(e){t.setState({currentCourse:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updatePublished",value:function(e){var t=this,s={id:this.state.currentCourse.id,title:this.state.currentCourse.title,courseDetail:this.state.currentCourse.courseDetail,published:e};O.update(this.state.currentCourse.id,s).then((function(s){t.setState((function(t){return{currentCourse:Object(C.a)(Object(C.a)({},t.currentCourse),{},{published:e})}})),console.log(s.data)})).catch((function(e){console.log(e)}))}},{key:"updateCourse",value:function(){var e=this;O.update(this.state.currentCourse.id,this.state.currentCourse).then((function(t){console.log(t.data),e.setState({message:"Course update successful"})})).catch((function(e){console.log(e)}))}},{key:"deleteCourse",value:function(){var e=this;window.confirm("This course will be permanently deleted")&&O.delete(this.state.currentCourse.id).then((function(t){console.log(t.data),e.props.history.push("/courses")})).catch((function(e){console.log(e.message),window.alert(e.message)}))}},{key:"render",value:function(){var e=this,t=this.state.currentCourse;return Object(v.jsx)("div",{children:t?Object(v.jsxs)("div",{className:"edit-form",children:[Object(v.jsx)("h4",{children:"Course"}),Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Title"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"title",value:t.title,onChange:"this.onChangeTitle"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"courseDetail",children:"Description"}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"courseDetail",value:t.courseDetail,onChange:this.onChangeCourseDetail})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Status:"})}),t.published?"Published":"Pending"]})]}),t.published?Object(v.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!1)},children:"Unpublish"}):Object(v.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!0)},children:"Publish"}),Object(v.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteCourse,children:"Delete"}),Object(v.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateCourse,children:"Update"}),Object(v.jsx)("p",{children:this.state.message})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:" Select a course"})]})})}}]),s}(n.Component),p=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={courses:[],currentCourse:null,currentIndex:-1,searchQuery:""},n.onChangeSearchQuery=n.onChangeSearchQuery.bind(Object(h.a)(n)),n.retrieveCourses=n.retrieveCourses.bind(Object(h.a)(n)),n.refreshCourseList=n.refreshCourseList.bind(Object(h.a)(n)),n.setActiveCourse=n.setActiveCourse.bind(Object(h.a)(n)),n.removeAllCourses=n.removeAllCourses.bind(Object(h.a)(n)),n.searchQuery=n.searchQuery.bind(Object(h.a)(n)),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.retrieveCourses()}},{key:"onChangeSearchQuery",value:function(e){var t=e.target.value;this.setState({searchQuery:t})}},{key:"retrieveCourses",value:function(){var e=this;O.getAll().then((function(t){e.setState({courses:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshCourseList",value:function(){this.retrieveCourses(),this.setState({currentCourse:null,index:-1})}},{key:"setActiveCourse",value:function(e,t){this.setState({currentCourse:e,currentIndex:t})}},{key:"removeAllCourses",value:function(){var e=this;window.confirm("Delete ALL courses?")&&O.deleteAll().then((function(t){console.log(t.data),e.refreshCourseList()})).catch((function(e){console.log(e)}))}},{key:"searchQuery",value:function(){var e=this;O.findByTitle(this.state.searchQuery).then((function(t){e.setState({courses:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.searchQuery,n=t.courses,c=t.currentCourse,r=t.currentIndex;return Object(v.jsxs)("div",{className:"list row",children:[Object(v.jsx)("div",{className:"col-md-8",children:Object(v.jsxs)("div",{className:"input-group mb-3",children:[Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"Look up with course title",value:s,onChange:this.onChangeSearchQuery}),Object(v.jsx)("div",{className:"input-group-append",children:Object(v.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchQuery,children:"Look up"})})]})}),Object(v.jsxs)("div",{className:"col-md-6",children:[Object(v.jsx)("h4",{children:"Course List"}),Object(v.jsx)("ul",{className:"list-group",children:n&&n.map((function(t,s){return Object(v.jsx)("li",{className:"list-group-item "+(s===r?"active":""),onClick:function(){return e.setActiveCourse(t,s)},children:t.title},s)}))}),Object(v.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllCourses,children:"Delete All"})]}),Object(v.jsx)("div",{className:"col-md-6",children:c?Object(v.jsxs)("div",{children:[Object(v.jsx)("h4",{children:"Course"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Title:"})})," ",c.title]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Course Details:"})})," ",c.courseDetail]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("strong",{children:"Status:"})})," ",c.published?"Published":"Pending"]}),Object(v.jsx)(a.b,{to:"/courses/"+c.id,className:"badge badge-warning",children:"Edit"})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Select course"})]})})]})}}]),s}(n.Component),f=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-success",children:[Object(v.jsx)("a",{href:"/",className:"navbar-brand",children:"NOUN Library"}),Object(v.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(a.b,{to:"/",className:"nav-link",children:"Courses"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(a.b,{to:"/add",className:"nav-link",children:"Add"})})]})]}),Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/",element:Object(v.jsx)(p,{})}),Object(v.jsx)(d.a,{path:"/add",element:Object(v.jsx)(m,{})}),Object(v.jsx)(d.a,{path:"/courses/:id",element:Object(v.jsx)(g,{})})]})})]})}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(v.jsx)(a.a,{children:Object(v.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.bf95c9b8.chunk.js.map