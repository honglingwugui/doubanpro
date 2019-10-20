<template><!--首页新闻组件-->
  <div  class="listWrap">
	  	<div class="left">
	  			<slot name='leftlist'></slot>
	  	</div>
  	  <div class="right">
  	 		<img :src="url"/>
  	  </div>
  </div>
</template>

<script>
export default {
	  props:['url']
}
</script>

<style scoped lang="less">
		.listWrap{
			padding:10px;
			overflow: hidden;/*清除浮动*/
			text-align: left;
			/*border: 1px solid red;*/
		}
		.listWrap>div{float: left;}
		.listWrap .left{
				width: 67%;
				p{padding:5px 0;line-height:18px;color:#BDBDBD;}
				span{color: #E1DDDD;}
		}
		.listWrap .right{width:30%;text-align: center;}
		.listWrap .right img{width:100px;height: 100px;}
</style>