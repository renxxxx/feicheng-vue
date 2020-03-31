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
		console.log(this.$route)
		this.$router.replace({path:this.$route.query.urlName})
	},
	mounted(){
	
	},
	methods: {
		
	},
}
</script>

<style>
</style>
