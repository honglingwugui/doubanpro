<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
	import Tabbar from './components/tabbar.vue'
	import {obj} from '../static/js/setRem.js'
	export default {
	  name: 'App',
	  components:{
	  	Tabbar
	  },
	  beforeCreate(){
	  	this.$router.push('/');//每次刷新网页都导向默认地址
	  },
	  mounted(){obj.setRem()}
	}
</script>

<style lang="less">
	*{margin: 0;padding: 0;}
	body{font-size: 18/100rem;}
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  /*margin-top: 60px;*/
	}
</style>
