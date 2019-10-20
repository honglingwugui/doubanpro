<template><!--小组速报组件-->
  <div  class="listWrap">
	  	<div>
	  			<slot name='grouplist'></slot>
	  	</div>
  </div>
</template>

<script>
export default {
	
}
</script>

<style scoped lang="less">
		.listWrap{
			padding:10px 0 10px 10px;
			overflow: hidden;/*清除浮动*/
			text-align: left;
		}
		.listWrap  img{width:30px;height:30px;vertical-align: middle;}
		.listWrap  .item{border-bottom: 1px solid gainsboro;padding: 10px 0 0;}
		.listWrap  .item span{padding-left: 10px;}
		.listWrap  .item i{float: right;font-style: normal;padding-right: 10px;line-height: 30px;color: #D5D5D5;}
		.listWrap  .item p{line-height:35px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;}
</style>