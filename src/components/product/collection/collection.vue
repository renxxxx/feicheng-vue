<template>
	<div class="collection">
		<div class="ant-tabs ant-tabs-top _1nF74FAR ant-tabs-line">
			<div role="tablist" class="ant-tabs-bar ant-tabs-top-bar" tabindex="0">
				<div class="ant-tabs-nav-container"><span unselectable="unselectable" class="ant-tabs-tab-prev ant-tabs-tab-btn-disabled"><span
						 class="ant-tabs-tab-prev-icon"><i aria-label="图标: left" class="anticon anticon-left ant-tabs-tab-prev-icon-target"><svg
								 viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor"
								 aria-hidden="true">
									<path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
								</svg></i></span></span><span unselectable="unselectable" class="ant-tabs-tab-next ant-tabs-tab-btn-disabled"><span
						 class="ant-tabs-tab-next-icon"><i aria-label="图标: right" class="anticon anticon-right ant-tabs-tab-next-icon-target"><svg
								 viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor"
								 aria-hidden="true">
									<path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
								</svg></i></span></span>
					<div class="ant-tabs-nav-wrap">
						<div class="ant-tabs-nav-scroll">
							<div class="ant-tabs-nav ant-tabs-nav-animated">
								<div>
									<div @click="xiaclickFn(0)" role="tab" aria-disabled="false" aria-selected="true" class="ant-tabs-tab-active ant-tabs-tab" style="margin-right: 64px;">
										<a class="_1zlCAgAE" href="#">视频号</a>
									</div>
									<!-- <div @click="xiaclickFn(103)" role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style="margin-right: 64px;">
										<a class="_1zlCAgAE" href="#">视频</a>
									</div> -->
									<!-- <div @click="xiaclickFn(200)" role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style="margin-right: 64px;">
										<a class="_1zlCAgAE" href="#">城市</a>
									</div> -->
									<!-- <div @click="xiaclickFn(310)" role="tab" aria-disabled="false" aria-selected="false" class=" ant-tabs-tab" style="margin-right: 0px;">
										<a class="_1zlCAgAE" href="#">商品推广</a>
									</div> -->
								</div>
								<div ref="xiahuaxian" class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="display: block; transform: translate3d(0px, 0px, 0px); width: 42px;"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
			<div class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content" style="margin-left: -100%;">
				<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
				<div role="tabpanel" aria-hidden="false" class="ant-tabs-tabpane ant-tabs-tabpane-active">
					<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
					<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
				</div>
				<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
				<div role="tabpanel" aria-hidden="true" class="ant-tabs-tabpane ant-tabs-tabpane-inactive"></div>
			</div>
			<div tabindex="0" role="presentation" style="width: 0px; height: 0px; overflow: hidden; position: absolute;"></div>
		</div>
		<component v-bind:is="componentName" v-bind:componentsValue='componentsValue'></component>
	</div>
</template>

<script>
import axios from 'axios'
import qs from 'qs';
import videoTemplate from '@/components/product/collection/video.vue'
import videoAccount from '@/components/product/collection/videoAccount.vue'
export default {
	name: 'caseDetails',
	data () {
		return {
			componentsValue:{},
			componentName:'videoAccount',
		}
	},
	computed:{
		
	},
	components:{
		videoTemplate,videoAccount
	},
	beforeRouteLeave(to, from, next) {
		this.scrollTop =document.getElementById('product').scrollTop ||document.getElementById('product').pageYOffset
		if(!to.query.time || !from.query.time || to.query.time < from.query.time){
	          if (this.$vnode && this.$vnode.data.keepAlive)
	          {
	              if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache)
	              {
	                  if (this.$vnode.componentOptions)
	                  {
	                      var key = this.$vnode.key == null
	                                  ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '')
	                                  : this.$vnode.key;
	                      var cache = this.$vnode.parent.componentInstance.cache;
	                      var keys  = this.$vnode.parent.componentInstance.keys;
	                      if (cache[key])
	                      {
	                          if (keys.length) {
	                              var index = keys.indexOf(key);
	                              if (index > -1) {
	                                  keys.splice(index, 1);
	                              }
	                          }
	                          delete cache[key];
	                      }
	                  }
	              }
				}
	          this.$destroy();
			}
		next();
	},
	//进入该页面时，用之前保存的滚动位置赋值
	beforeRouteEnter(to, from, next) {
	  next(vm => {
		 document.getElementById('product').scrollTop=document.getElementById('product').pageYOffset=vm.scrollTop;
		});
	
	},
	created(){
		
	},
	mounted(){


	},
	methods: {
		xiaclickFn(num){
			this.$refs.xiahuaxian.style.webkitTransform = "translate3d("+(num)+"px,0px,0)"
			switch(num){
				case 0:
				this.componentName = 'videoAccount'
				break;
				case 103:
				this.componentName = 'videoTemplate'
				break;
			}
		},
	},
}
	
	
</script>

<style scoped>
a {text-decoration:none; color: rgba(255, 255, 255, 1);}
a:link{text-decoration:none; }
a:hover{text-decoration:none; }
a:active{text-decoration:none; }
a:visited{text-decoration:none; }
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{
	list-style: none;
}
h1,h2,h3,h4,h5,h6,p{
	font-size: inherit;font-weight: normal;
	margin-block-start: 0rem !important;
	margin-block-end: 0rem !important;
}
.collection{
	margin: 24px 40px 24px 0;
}
.ant-tabs {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #e8edee;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum","tnum";
    font-feature-settings: "tnum","tnum";
    position: relative;
    overflow: hidden;
    zoom: 1;
}
.ant-tabs:after {
    clear: both;
}
.ant-tabs:after, .ant-tabs:before {
    display: table;
    content: "";
}
.ant-tabs:after, .ant-tabs:before {
    display: table;
    content: "";
}
._1nF74FAR .ant-tabs-bar {
    border: 1px solid #6d6d6d;
    padding: 0 32px;
    border-radius: 4px;
    margin: 0;
}
.ant-tabs-bar, .ant-tabs-nav-container {
    -webkit-transition: padding .3s cubic-bezier(.645,.045,.355,1);
    transition: padding .3s cubic-bezier(.645,.045,.355,1);
}
.ant-tabs-bar {
    margin: 0 0 16px;
    border-bottom: 1px solid #6d6d6d;
    outline: none;
}
.ant-tabs {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #e8edee;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum","tnum";
    font-feature-settings: "tnum","tnum";
    position: relative;
    overflow: hidden;
    zoom: 1;
}
.ant-tabs-nav-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: -1px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5;
    white-space: nowrap;
    zoom: 1;
}
.ant-tabs-nav-container:after, .ant-tabs-nav-container:before {
    display: table;
    content: "";
}
:root .ant-tabs-tab-prev {
    -webkit-filter: none;
    filter: none;
}
.ant-tabs-tab-prev {
    left: 0;
}
.ant-tabs-tab-btn-disabled, .ant-tabs-tab-btn-disabled:hover {
    color: #6b6d6d;
}
.ant-tabs-tab-btn-disabled {
    cursor: not-allowed;
}
.ant-tabs-tab-next, .ant-tabs-tab-prev {
    position: absolute;
    z-index: 2;
    width: 0;
    height: 100%;
    color: #cdcfcf;
    text-align: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);
    transition: width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
}
.ant-layout, .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.ant-tabs-tab-next-icon, .ant-tabs-tab-prev-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: 700;
    font-style: normal;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    line-height: inherit;
    text-align: center;
    text-transform: none;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.ant-layout, .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:root .ant-tabs-tab-next-icon-target, :root .ant-tabs-tab-prev-icon-target {
    font-size: 12px;
}
.ant-tabs-tab-next-icon-target, .ant-tabs-tab-prev-icon-target {
    display: block;
    display: inline-block;
    font-size: 12px;
    font-size: 10px\9;
    -webkit-transform: scale(.83333333) rotate(0deg);
    -ms-transform: scale(.83333333) rotate(0deg);
    transform: scale(.83333333) rotate(0deg);
}
..ant-tabs-tab-next {
    right: 2px;
}
.ant-tabs-tab-btn-disabled, .ant-tabs-tab-btn-disabled:hover {
    color: #6b6d6d;
}
.ant-tabs-tab-btn-disabled {
    cursor: not-allowed;
}
.ant-tabs-nav-wrap {
    margin-bottom: -1px;
    overflow: hidden;
}
.ant-layout, .ant-layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.ant-tabs-nav-scroll {
    overflow: hidden;
    white-space: nowrap;
}
.ant-tabs-nav {
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding-left: 0;
    list-style: none;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
}
.ant-tabs-nav:after, .ant-tabs-nav:before {
    display: table;
    content: " ";
}
.ant-tabs-nav .ant-tabs-tab {
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    margin: 0 32px 0 0;
    padding: 0;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1);
}
.ant-tabs-nav .ant-tabs-tab:before {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    border-top: 2px solid transparent;
    border-radius: 4px 4px 0 0;
    -webkit-transition: all .3s;
    transition: all .3s;
    content: "";
    pointer-events: none;
}
._1zlCAgAE {
    display: inline-block;
    color: #fff;
    height: 48px;
    line-height: 48px;
}
._1nF74FAR .ant-tabs-nav .ant-tabs-tab-active {
    font-weight: 700;
}
.ant-tabs-nav .ant-tabs-tab-active {
    color: #fff;
    font-weight: 500;
}
.ant-tabs-nav .ant-tabs-tab {
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    margin: 0 32px 0 0;
    padding: 0;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1);
}
.ant-tabs-nav .ant-tabs-tab:before {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    border-top: 2px solid transparent;
    border-radius: 4px 4px 0 0;
    -webkit-transition: all .3s;
    transition: all .3s;
    content: "";
    pointer-events: none;
}
._1zlCAgAE {
    display: inline-block;
    color: #fff;
    height: 48px;
    line-height: 48px;
}
.ant-tabs-nav .ant-tabs-tab {
    position: relative;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    margin: 0 32px 0 0;
    padding: 0;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1);
}
.ant-tabs-nav .ant-tabs-tab:before {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    border-top: 2px solid transparent;
    border-radius: 4px 4px 0 0;
    -webkit-transition: all .3s;
    transition: all .3s;
    content: "";
    pointer-events: none;
}
._1zlCAgAE {
    display: inline-block;
    color: #fff;
    height: 48px;
    line-height: 48px;
}
._1zlCAgAE {
    display: inline-block;
    color: #fff;
    height: 48px;
    line-height: 48px;
}
._1nF74FAR .ant-tabs-ink-bar {
    height: 3px;
}
.ant-tabs-bottom .ant-tabs-ink-bar-animated, .ant-tabs-top .ant-tabs-ink-bar-animated {
    opacity: 1;
    -webkit-transition: width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s,-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s,-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s;
    transition: transform .3s cubic-bezier(.645,.045,.355,1),width .2s cubic-bezier(.645,.045,.355,1),left .3s cubic-bezier(.645,.045,.355,1),opacity .3s,-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
}
.ant-tabs-ink-bar {
    position: absolute;
    bottom: 1px;
    left: 0;
    z-index: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 0;
    height: 2px;
    background-color: #ff7800;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    opacity: 0;
}

</style>
