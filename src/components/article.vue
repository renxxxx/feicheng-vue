<template>
	<div style="min-width:150px;max-width:850px;margin:auto">
		
			<div style="color:#000000;font-size: 24px;font-weight: 400;word-wrap: break-word;margin-top:10px;">
				{{data.name}}
			</div>
			
			<div style="margin-top: 20px;color: #9c999b;font-size: 14px;">
				<span>{{moment(data.createTime).format('YYYY-MM-DD')}}</span>
			</div>
			<hr style="z-index: 9;color: #ABABAB;">
			<div style="width: 100%;height: 100%;text-align: center;line-height: 100%;margin-top: 9px;">
				<img :src="data.cover" alt="" style="max-width: 100%;margin: auto;">
			</div>
			 <div v-html="content"  >
			 </div>
	</div>
</template>

<script>
import axios from 'axios'
import qs from 'qs';
export default {
	name: 'article',
	data () {
		return {
			data:{},
			content:null
		};
	},
		metaInfo(){
      let thisVue = this
     let config =  thisVue.$store.state.config
			return{
				title:  config.seoTitle+ ' | '+thisVue.data.name, // set a title
				meta:[   // set meta
					{                
						name: 'keyWords',
						content: config.seoKeywords + ','+thisVue.data.name
					},
					{
						name: 'description',
						content: config.seoDescription+ ',' + thisVue.data.name
					},
				],
			}
		},
	beforeCreate(){

	},
	created(){
		
	},
	mounted(){
		this.getData()
	},
	methods: {
		getData(){
			 var _this = this
			this.$axios.get('/article?'+qs.stringify({
				articleId:this.$route.query.data
			}))
			.then(res=>{
				//debugger;
				_this.data=res.data.data
				this.$axios.get(_this.data.contentUrl).then(res=>{
					//debugger
					_this.content=res.data
				})
			})
		},
	},
}
</script>

<style scoped>

</style>
