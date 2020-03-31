<template>
	<!-- <el-dialog class="popScan" :visible.sync="showVideoDialog" 
		@close="closeFn()" top="10vh" center>
		<div style="background-color: red;width: 200px;height: 200px;">
			
		</div>
	</el-dialog> -->
</template>

<script>
import axios from 'axios'
import {mapActions,mapGetters} from 'vuex'
import qs from 'qs';
export default {
	name: 'videoDialog',
	data () {
		return {
			
		}
	},
	computed:{
		showVideoDialog:{
			get: function() {
			  return this.$store.state.showVideoDialog;
			},
			set: function(newValue) {
			  this.$store.state.showVideoDialog = newValue;
			}
		}
	},
	components:{
	
	},
	beforeCreate(){

	},
	created(){
		
	},
	mounted(){


	},
	methods: {
		closeFn(){
			
		},
		
	},
}
</script>

<style>
.dialog{
	width:315px height:576px
}
</style>
