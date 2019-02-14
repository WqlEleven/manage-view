<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			this.$router.replace({
				path:'/revise',
				query:{
						id : this.$route.query.id
				}
			})
			return {
				
			};
		}
	}
</script>

<style>

</style>
