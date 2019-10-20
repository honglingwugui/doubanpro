<template>
  <div>
  	<Head title="书影音">
  		<img src="../../assets/ic_actionbar_search_icon.png" slot="imgLeft" class="imgLeft"/>
  		<img src="../../assets/ic_chat_green.png" slot="imgRight" class="imgRight"/>
  	</Head>
  	
  	<!--头部下方导航切换按钮-->
  	<div class="nav">
  		<span @click="nowIndex=0"  :class="{active:nowIndex==0}">
  				<router-link to="/audio/film">电影</router-link>
  		</span>
  		<span @click="nowIndex=1"  :class="{active:nowIndex==1}">
  				<router-link to="/audio/read">读书</router-link>
  		</span>
  		<span @click="nowIndex=2"  :class="{active:nowIndex==2}">
  				<router-link to="/audio/tv">电视</router-link>
  		</span>
  		<span @click="nowIndex=3"  :class="{active:nowIndex==3}">
  				<router-link to="/audio/city">同城</router-link>
  		</span>
  		<span @click="nowIndex=4"  :class="{active:nowIndex==4}">
  				<router-link to="/audio/music">音乐</router-link>
  		</span>
  	</div>
  	<div><!--头部下方导航切换内容显示区-->
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
	import Head from '../../components/head'
export default {
	components:{
		Head
	},
  data () {
    return {nowIndex:0}
  }
}
</script>

<style scoped>
		/*上方导航*/
		.nav{width: 100%;height:30px;line-height:30px;border-bottom: 1px solid #F6F6F6;}
		.nav a{display:block;width: 20%;float:left;text-decoration:none;color: #9B9A9B;font-size: 13px;}
		.nav span.active  a{background:#07D614;color: white;}
</style>
