<template>
	<div>
		<!--正在热映的电影-->
		<p>正在热映的电影</p>
		<ul>
			<li></li>
		</ul>
	</div>
</template>

<script>
	export default {
		created:function(){
			this.nowshow();
		},
		methods:{
		  	nowshow(){
		  		 console.log(11)
		  		 //怎么引入axios
		  		/* this.axios.get('https://developers.douban.com/wiki/?title=movie_v2#in_theaters').then(
		  		 	  res=>{
		  		 	  	console.log(res);
		  		 	  }
		  		 )*/
		  	}
  }
	}
</script>

<style>
</style>