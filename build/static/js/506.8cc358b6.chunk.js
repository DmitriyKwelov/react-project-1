"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[506],{1506:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var n=e(8683),r=e(5671),i=e(3144),u=e(136),o=e(516),a=e(2791),p="ProfileInfo_descriptionBlock__AE0Xp",d=e(2242),l=e(885),c=e(184),f=function(t){var s=(0,a.useState)(!1),e=(0,l.Z)(s,2),n=e[0],r=e[1],i=(0,a.useState)(t.status),u=(0,l.Z)(i,2),o=u[0],p=u[1];(0,a.useEffect)((function(){p(t.status)}),[t.status]);return(0,c.jsx)("div",{children:n?(0,c.jsx)("div",{children:(0,c.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(o)},value:o})}):(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status})})})},h=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return null===s?(0,c.jsx)(d.Z,{}):(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:p,children:[(0,c.jsx)("img",{src:s.photos.large}),(0,c.jsx)(f,{status:e,updateStatus:n})]})})},x=e(6070),j="MyPosts_postBlock__TpFUj",m="MyPosts_posts__CIJfx",v="Post_item__XIIxU",g=function(t){return(0,c.jsxs)("div",{className:v,children:[(0,c.jsx)("img",{src:"https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"}),t.massage,(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"like"})," ",t.likeCount]})]})},P=e(6139),S=e(704),_=e(5466),k=e(7876),Z=(0,S.Z)({form:"profileAddNewPostForm"})((function(t){return(0,c.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(P.Z,{name:"newPostText",component:k.g,validate:[_.C,(0,_.D)(10)],placeholder:"new post"})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"add post"})})]})})),C=a.memo((function(t){return(0,c.jsxs)("div",{className:j,children:[(0,c.jsx)("h3",{children:"My posts"}),(0,c.jsx)("div",{children:(0,c.jsx)(Z,{onSubmit:function(s){t.addPost(s.newPostText)}})}),(0,c.jsx)("div",{className:m,children:t.posts.map((function(t){return(0,c.jsx)(g,{massage:t.massage,likeCount:t.likeCount})}))})]})})),y=e(8687),b=(0,y.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,x.HM)(s))}}}))(C),w=function(t){return(0,c.jsxs)("div",{children:[(0,c.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,c.jsx)(b,{})]})},I=e(7689),T=e(3708),U=e(7781),N=function(t){(0,u.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.id;if(t||(t=this.props.authorizedUserId),!t)return(0,c.jsx)(I.Fg,{to:"/login"});this.props.getUsersProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,c.jsx)(w,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(a.Component);var M=(0,U.qC)((0,y.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUsersProfile:x.XG,getStatus:x.lR,updateStatus:x.Nf}),(function(t){return function(s){var e=(0,I.TH)(),r=(0,I.s0)(),i=(0,I.UO)();return(0,c.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{router:{location:e,navigate:r,params:i}}))}}),T.Z)(N)}}]);
//# sourceMappingURL=506.8cc358b6.chunk.js.map