<template>
	<div class="place">
		<img v-bind:src="img" width="235" height="300"/>
		<h2>{{name}}</h2>
		<p>{{desc}}</p>
	</div>
</template>
<script>
export default {
	props: {
		name: {
			required: true,
		},
		img: {
			required: true,
		},
		desc: {
			required: true,
		}
	},
	data(){
		return{
			
		}
	}
}
</script>
<style scoped>

</style>