webpackJsonp([0],{106:function(e,n,i){function t(e){i(109)}var s=i(0)(i(107),i(110),t,null,null);e.exports=s.exports},107:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{menuStyle:{type:Object,required:!0},menuList:{type:Array,required:!0}},data:function(){return{menus:this.menuList}},computed:{},methods:{fn:function(){},selectItem:function(e){this.menus.forEach(function(e){e.active=!1}),e.active=!0,this.$emit("update:menu-list",this.menus),this.$emit("update",e)}}},e.exports=n.default},108:function(e,n,i){n=e.exports=i(104)(!0),n.push([e.i,".menu-list{position:absolute;overflow:auto;border:1px solid #ccc}.menu-list>li>a{display:-ms-flexbox;display:flex;-ms-flex-pack:left;justify-content:left;-ms-flex-align:center;align-items:center;padding:4px 8px;color:inherit}.menu-list>li>a.active,.menu-list>li>a:hover{background-color:#00bcd4;color:#fff}.menu-list>li>a.active .icon-checked{visibility:visible}.menu-list>li .icon-checked{margin-right:5px;visibility:hidden}","",{version:3,sources:["E:/zk/components/src/views/editView/components/Menu.vue"],names:[],mappings:"AACA,WACE,kBAAmB,AACnB,cAAe,AACf,qBAAuB,CACxB,AACD,gBACI,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,qBAAsB,AAC1B,sBAAuB,AACnB,mBAAoB,AACxB,gBAAiB,AACjB,aAAe,CAClB,AACD,6CACM,yBAA0B,AAC1B,UAAY,CACjB,AACD,qCACM,kBAAoB,CACzB,AACD,4BACI,iBAAkB,AAClB,iBAAmB,CACtB",file:"Menu.vue",sourcesContent:["\n.menu-list {\n  position: absolute;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n.menu-list > li > a {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: left;\n        justify-content: left;\n    -ms-flex-align: center;\n        align-items: center;\n    padding: 4px 8px;\n    color: inherit;\n}\n.menu-list > li > a:hover, .menu-list > li > a.active {\n      background-color: #00bcd4;\n      color: #FFF;\n}\n.menu-list > li > a.active .icon-checked {\n      visibility: visible;\n}\n.menu-list > li .icon-checked {\n    margin-right: 5px;\n    visibility: hidden;\n}\n"],sourceRoot:""}])},109:function(e,n,i){var t=i(108);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);i(105)("c6f80d2e",t,!0,{})},110:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",{staticClass:"menu-list",style:e.menuStyle},e._l(e.menus,function(n){return i("li",[i("a",{class:{active:n.active},attrs:{href:"javascript:;"},on:{click:function(i){e.selectItem(n)},mousedown:function(n){return n.stopPropagation(),e.fn(n)}}},[i("i",{staticClass:"icon icon-checked"}),e._v(" "),i("span",{domProps:{textContent:e._s(n.name)}})])])}))},staticRenderFns:[]}}});
//# sourceMappingURL=0.f36dede294624ca97670.js.map