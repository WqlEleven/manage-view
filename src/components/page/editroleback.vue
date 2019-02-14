<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			this.$router.replace({
				path:'/amend',
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
