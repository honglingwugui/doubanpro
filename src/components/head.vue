<template><!--头部公共部分-->
  <div  class="headWrap" :class="{bggreen:hasbg}">
  	 <span>{{title}}</span>
  	 <slot name='imgLeft'></slot>
  	 <slot name='imgRight'></slot>
  	 <slot name='search'></slot>
  </div>
</template>

<script>
export default {
	  props:['title','hasbg'],
}
</script>

<style scoped lang="less">
		*{margin:0;padding: 0;}
		.headWrap{
			height: 45/64rem;
			background: #f7f7f7;
			border-bottom: 1px solid #D8D8D8;
			text-align: center;
			line-height: 45/64rem;
			position: relative;
			
		}
		.headWrap img{position: absolute;width: 25/64rem;top: 13/64rem;}
		.headWrap .imgLeft{right: 50/64rem;} 
		.headWrap .imgRight{right:20/64rem;}
		.headWrap .search input{
					width: 85%;height:30/64rem;
					text-indent:30/64rem;border: none;
					border-radius: 5/64rem;outline: none;
					position: absolute;left: 10/100rem;top:8/64rem;
		}
		.headWrap .search img{position: absolute;top:10/64rem;}
		.headWrap .search .searchimg{left: 10/64rem;}
		.headWrap .search .scanimg{right:65/64rem;}
		.bggreen{background: #48BD5A;}
</style>