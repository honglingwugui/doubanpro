<template>
  <div>
  	<Head title="广播">
  		<img src="../../assets/ic_chat_green.png" slot="imgLeft" class="imgLeft"/>
  		<img src="../../assets/ic_status_search_user.png" slot="imgRight" class="imgRight"/>
  	</Head>
  </div>
</template>

<script>
	import Head from '../../components/head'
export default {
	components:{
		Head
	},
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
	
</style>
