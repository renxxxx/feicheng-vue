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
	
	},
	activated(){
				this.$router.replace({path:this.$route.query.path,query:this.$route.query.query})
	},
	methods: {
		
	},
}
</script>

<style>
</style>
