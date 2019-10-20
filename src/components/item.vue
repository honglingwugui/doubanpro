<template><!--头部公共部分的组件-->
  <div class="item" @click="clickItem">
  		<span v-if="!flag"><slot name="normalImg"></slot></span>
			<span v-if="flag"><slot name="activeImg"></slot></span>
			<br />
			<span :class="{activeColor:flag}">{{title}}</span> 
  </div>
</template>

<script>
export default {
	props:['title','mark','slt'],
	computed:{
		flag(){
				if(this.mark==this.slt){return true;}
				return false;
		}
	},
  methods:{
		clickItem(){
				this.$emit("change",this.mark);//把子组件点击的mark值传递给父组件的当前选择项slt
				this.$router.push('/'+this.mark);//改变路由地址，使显示内容与点击内容一致
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.item{
		text-align: center;
		height: 60/64rem;
	}
	.item img{height: 30/64rem;}
	.item span{font-size: 13/64rem;color: #989295;}
	.item span.activeColor{color: #42BD56;}
</style>
