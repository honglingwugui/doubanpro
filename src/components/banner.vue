<template><!--轮播图组件-->
  <div class="banner">
  	<!--1.从swiper中文网复制html，不需要的部分可删除-->
  	<div class="swiper-container" :class="swiperId">
		    <div class="swiper-wrapper">
		        <!--<div class="swiper-slide">Slide 1</div>
		        <div class="swiper-slide">Slide 2</div>
		        <div class="swiper-slide">Slide 3</div>-->
		        <slot name='swiper-i'></slot>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div :class="{'swiper-pagination':paginationShow}"></div>
		</div>
  </div>
</template>

<script>
		//2.在node_modules中的Swiper文件夹中，引入Swiper和swiper.min.css
		import Swiper from  'swiper'
		import 'swiper/css/swiper.css'
		export default {
			//props高级用法，不一定需要传值，有默认值
			props:{
				//控制分页器类型，默认圆点bullets
				paginationType:{type:String,default:'bullets'},
				//不同分页器显示不同，但是同一个new Swiper无法识别。给不同的new Swiper动态绑定swiperId
				swiperId:{type:String,default:''},
				//控制分页器显示
				paginationShow:{type:Boolean,default:true}
			},
			mounted:function(){
					//3.从swiper中文网复制 script标签内容
					//修改为'.'+this.swiperId给每个new swiper分别绑定分页器样式
			  var mySwiper = new Swiper ('.'+this.swiperId, {
				    loop: true, // 循环模式选项
				    
				    // 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination',
				      type:this.paginationType//与props对应
				    }
				})
			}        
		}
		//4.在使用页面注册和调用组件
</script>
<style>
	/*不能写在scoped的style里面，样式优先级不够*/
		.swiper-pagination-bullet{background: red;}
		.swiper-pagination-bullet-active{opacity:0.5}
</style>
<style scoped lang="less">
	 /*@import url("swiper/css/swiper.min.css");直接在上面import引入也可以*/
		.banner {
		    height:130/64rem;
		    background: pink;
		}  
		.banner .swiper-slide{
			height: 130/64rem;
		}
		.banner .swiper-slide img{width: 100%;height: 100%;}
</style>