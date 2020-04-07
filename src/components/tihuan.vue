<template>
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
import qs from 'qs';
export default {
	name: 'caseDetails',
	data () {
		return {
			
		}
	},
	computed:{
		
	},
	components:{

	},
	beforeCreate(){

	},
	created(){
	},
	mounted(){
		console.dir(this.$route.query.value)
		this.$router.replace({path:this.$route.query.path,query:{value:this.$route.query.value}})
	},
	activated(){
		console.dir(this.$route.query.value)
		this.$router.replace({path:this.$route.query.path,query:{value:this.$route.query.value}})
	},
	methods: {
		
	},
}
</script>

<style>
</style>
