(this.webpackJsonpreacrud=this.webpackJsonpreacrud||[]).push([[0],{38:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(30),r=s.n(c),a=s(13),i=s(9),o=s(10),u=s(12),l=s(11),d=s(2),h=(s(37),s(38),s(3)),b=s(31),j=s.n(b).a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),v=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return j.get("/courses")}},{key:"get",value:function(e){return j.get("/courses/".concat(e))}},{key:"create",value:function(e){return j.post("/courses",e)}},{key:"update",value:function(e,t){return j.put("/courses/".concat(e),t)}},{key:"delete",value:function(e){return j.delete("/courses/".concat(e))}},{key:"deleteAll",value:function(){return j.delete("/courses")}},{key:"findByTitle",value:function(e){return j.get("/courses?title=".concat(e))}}]),e}()),O=s(0),C=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).onChangeTitle=n.onChangeTitle.bind(Object(h.a)(n)),n.onChangeCourseDetail=n.onChangeCourseDetail.bind(Object(h.a)(n)),n.saveCourse=n.saveCourse.bind(Object(h.a)(n)),n.newCourse=n.newCourse.bind(Object(h.a)(n)),n.state={id:null,title:"",courseDetail:"",published:!1,submitted:!1},n}return Object(o.a)(s,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeCourseDetail",value:function(e){this.setState({courseDetail:e.target.value})}},{key:"saveCourse",value:function(){var e=this,t={title:this.state.title,courseDetail:this.state.courseDetail};v.create(t).then((function(t){e.setState({id:t.data.id,title:t.data.title,courseDetail:t.data.courseDetail,published:t.data.published,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e.message),window.alert(e.message)}))}},{key:"newCourse",value:function(){this.setState({id:null,title:"",courseDetail:"",published:!1,submitted:!1})}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Successfully Added Course Material"}),Object(O.jsx)("button",{className:"btn btn-success",onClick:this.newCourse,children:"Add Course Material"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"courseDetail",children:"Course Detail"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"courseDetail",required:!0,value:this.state.courseDetail,onChange:this.onChangeCourseDetail,name:"courseDetail"})]}),Object(O.jsx)("button",{onClick:this.saveCourse,className:"btn btn-success",children:"Submit"})]})})}}]),s}(n.Component),m=s(15),g=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).onChangeTitle=n.onChangeTitle.bind(Object(h.a)(n)),n.onChangeCourseDetail=n.onChangeCourseDetail.bind(Object(h.a)(n)),n.getCourse=n.getCourse.bind(Object(h.a)(n)),n.updatePublished=n.updatePublished.bind(Object(h.a)(n)),n.updateCourse=n.updateCourse.bind(Object(h.a)(n)),n.deleteCourse=n.deleteCourse.bind(Object(h.a)(n)),n.state={currentCourse:{id:null,title:"",courseDetail:"",published:!1},message:""},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getCourse(this.props.match.params.id)}},{key:"onChangeTitle",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCourse:Object(m.a)(Object(m.a)({},e.currentCourse),{},{title:t})}}))}},{key:"onChangeCourseDetail",value:function(e){var t=e.target.value;this.setState((function(e){return{currentCourse:Object(m.a)(Object(m.a)({},e.currentCourse),{},{courseDetail:t})}}))}},{key:"getCourse",value:function(e){var t=this;v.get(e).then((function(e){t.setState({currentCourse:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updatePublished",value:function(e){var t=this,s={id:this.state.currentCourse.id,title:this.state.currentCourse.title,courseDetail:this.state.currentCourse.courseDetail,published:e};v.update(this.state.currentCourse.id,s).then((function(s){t.setState((function(t){return{currentCourse:Object(m.a)(Object(m.a)({},t.currentCourse),{},{published:e})}})),console.log(s.data)})).catch((function(e){console.log(e)}))}},{key:"updateCourse",value:function(){var e=this;v.update(this.state.currentCourse.id,this.state.currentCourse).then((function(t){console.log(t.data),e.setState({message:"Course update successful"})})).catch((function(e){console.log(e)}))}},{key:"deleteCourse",value:function(){var e=this;window.confirm("This course will be permanently deleted")&&v.delete(this.state.currentCourse.id).then((function(t){console.log(t.data),e.props.history.push("/courses")})).catch((function(e){console.log(e.message),window.alert(e.message)}))}},{key:"render",value:function(){var e=this,t=this.state.currentCourse;return Object(O.jsx)("div",{children:t?Object(O.jsxs)("div",{className:"edit-form",children:[Object(O.jsx)("h4",{children:"Course"}),Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"title",value:t.title,onChange:"this.onChangeTitle"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"courseDetail",children:"Description"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"courseDetail",value:t.courseDetail,onChange:this.onChangeCourseDetail})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Status:"})}),t.published?"Published":"Pending"]})]}),t.published?Object(O.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!1)},children:"Unpublish"}):Object(O.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!0)},children:"Publish"}),Object(O.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteCourse,children:"Delete"}),Object(O.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateCourse,children:"Update"}),Object(O.jsx)("p",{children:this.state.message})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:" Select a course"})]})})}}]),s}(n.Component),p=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={courses:[],currentCourse:null,currentIndex:-1,searchQuery:""},n.onChangeSearchQuery=n.onChangeSearchQuery.bind(Object(h.a)(n)),n.retrieveCourses=n.retrieveCourses.bind(Object(h.a)(n)),n.refreshCourseList=n.refreshCourseList.bind(Object(h.a)(n)),n.setActiveCourse=n.setActiveCourse.bind(Object(h.a)(n)),n.removeAllCourses=n.removeAllCourses.bind(Object(h.a)(n)),n.searchQuery=n.searchQuery.bind(Object(h.a)(n)),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.retrieveCourses()}},{key:"onChangeSearchQuery",value:function(e){var t=e.target.value;this.setState({searchQuery:t})}},{key:"retrieveCourses",value:function(){var e=this;v.getAll().then((function(t){e.setState({courses:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshCourseList",value:function(){this.retrieveCourses(),this.setState({currentCourse:null,index:-1})}},{key:"setActiveCourse",value:function(e,t){this.setState({currentCourse:e,currentIndex:t})}},{key:"removeAllCourses",value:function(){var e=this;window.confirm("Delete ALL courses?")&&v.deleteAll().then((function(t){console.log(t.data),e.refreshCourseList()})).catch((function(e){console.log(e)}))}},{key:"searchQuery",value:function(){var e=this;v.findByTitle(this.state.searchQuery).then((function(t){e.setState({courses:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.searchQuery,n=t.courses,c=t.currentCourse,r=t.currentIndex;return Object(O.jsxs)("div",{className:"list row",children:[Object(O.jsx)("div",{className:"col-md-8",children:Object(O.jsxs)("div",{className:"input-group mb-3",children:[Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Look up with course title",value:s,onChange:this.onChangeSearchQuery}),Object(O.jsx)("div",{className:"input-group-append",children:Object(O.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchQuery,children:"Look up"})})]})}),Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h4",{children:"Course List"}),Object(O.jsx)("ul",{className:"list-group",children:n&&n.map((function(t,s){return Object(O.jsx)("li",{className:"list-group-item "+(s===r?"active":""),onClick:function(){return e.setActiveCourse(t,s)},children:t.title},s)}))}),Object(O.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllCourses,children:"Delete All"})]}),Object(O.jsx)("div",{className:"col-md-6",children:c?Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"Course"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Title:"})})," ",c.title]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Course Details:"})})," ",c.courseDetail]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:Object(O.jsx)("strong",{children:"Status:"})})," ",c.published?"Published":"Pending"]}),Object(O.jsx)(a.b,{to:"/courses/"+c.id,className:"badge badge-warning",children:"Edit"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Select a course"})]})})]})}}]),s}(n.Component),f=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-success",children:[Object(O.jsx)("a",{href:"/courses",className:"navbar-brand",children:"NOUN Library"}),Object(O.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(a.b,{to:"/courses",className:"nav-link",children:"Courses"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(a.b,{to:"/add",className:"nav-link",children:"Add"})})]})]}),Object(O.jsx)("div",{className:"container mt-3",children:Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{exact:!0,path:["/","/courses"],component:p}),Object(O.jsx)(d.a,{exact:!0,path:"/add",component:C}),Object(O.jsx)(d.a,{path:"/courses/:id",component:g})]})})]})}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(a.a,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.d84cfaa2.chunk.js.map