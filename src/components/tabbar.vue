<template><!--底部公共的导航切换组件-->
  <div  class="footerWrap">
  	<Item title="首页" mark='home' :slt='current' @change='getval'>
			<img src="../assets/ic_tab_home_normal.png" slot="normalImg"/>
			<img src="../assets/ic_tab_home_active.png" slot="activeImg"/>
		</Item>
		<Item title="书影音" mark='audio' :slt='current' @change='getval'>
			<img src="../assets/ic_tab_subject_normal.png" slot="normalImg"/>
			<img src="../assets/ic_tab_subject_active.png" slot="activeImg"/>
		</Item>
		<Item title="广播" mark='broadcast' :slt='current' @change='getval'>
			<img src="../assets/ic_tab_status_normal.png" slot="normalImg"/>
			<img src="../assets/ic_tab_status_active.png" slot="activeImg"/>
		</Item>
    <Item title="小组" mark='group' :slt='current' @change='getval'>
			<img src="../assets/ic_tab_group_normal.png" slot="normalImg"/>
			<img src="../assets/ic_tab_group_active.png" slot="activeImg"/>
		</Item>
		<Item title="我的" mark='mine' :slt='current' @change='getval'>
			<img src="../assets/ic_tab_profile_normal.png" slot="normalImg"/>
			<img src="../assets/ic_tab_profile_active.png" slot="activeImg"/>
		</Item>
  </div>
</template>

<script>
	import Item from './item'
export default {
		components:{
			Item
		},
	  data () {
	    return {
	      current: 'home'
	    }
	  },
	  methods:{
				getval(val){//this.current=val=this.mark
					this.current=val;
				}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
	.footerWrap{
		height:56/64rem;
		width: 100%;
		max-width:640px;/*取消移动端时最大显示宽度应该与设计稿一致*/
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
	  border-top: 1px solid gainsboro;
	  background: white;
	}
</style>