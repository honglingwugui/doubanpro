<template>
  <div>
  	<Head :hasbg="true">
  		<img src="../../assets/ic_chat_white.png" slot="imgRight" class="imgRight"/>
				<div slot="search" class="search">
	  				<input type="text" placeholder="影视 图片 唱片 小组等"/>
	  				<img src="../../assets/ic_group_search_small.png" class="searchimg"/>
	  				<img src="../../assets/ic_scan_gray.png" class="scanimg"/>
  			</div>  	
  	</Head>
  	<!--:paginationShow='false'需要动态绑定样式，否则识别false为字符串而非布尔类型-->
  	<!--<Banner swiperId="swiperA" paginationType="fraction"  :paginationShow='false'></Banner>-->
  	<Banner swiperId="swiperB">
  		 <div slot="swiper-i" class="swiper-slide">
  		 	  <img src="../../assets/banner/01.jpg"/>
  		 </div>
  		 <div slot="swiper-i" class="swiper-slide">
  		 	  <img src="../../assets/banner/02.jpg"/>
  		 </div>
  		 <div slot="swiper-i" class="swiper-slide">
  		 	  <img src="../../assets/banner/03.jpg"/>
  		 </div>
  	</Banner>
  	<Newlist v-for="(item,index) in arr" :url='item.target.cover_url'>
  		 <div slot="leftlist">
  		 	  <h4>{{item.title}}</h4>
  		 	  <p>{{item.target.desc}}</p>
  		 	  <span>{{item.target.author.name}}</span>
  		 </div>
  	</Newlist>
  </div>
</template>

<script>
	import Head from '../../components/head'
	import Banner from '../../components/banner'
	import Newlist from '../../components/Newlist'
export default {
	components:{
		Head,Banner,Newlist
	},
  data () {
    return {
      msg: '',
      arr:[]
    }
  },
  mounted:function(){
  	this.getData();
  },
  methods:{
  	getData(){
  		this.$axios.get('../../../static/data/homeData.json')
  		.then(res=>{
  			 this.arr=res.data.recommend_feeds;
//			 console.log(this.arr);
  		})
  	}
  }
}
</script>

<style scoped>

</style>
