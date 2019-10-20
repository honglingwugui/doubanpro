<template>
  <div>
  	<Head title="小组">
  		<img src="../../assets/ic_chat_green.png" slot="imgLeft" class="imgLeft"/>
  		<img src="../../assets/ic_status_search_user.png" slot="imgRight" class="imgRight"/>
  	</Head>
  	<Grouplist v-for="(item,index) in arr">
  		 <div slot="grouplist">
  		 			<h3>{{item.title}}</h3>
  		 			<div v-for="(citem,cindex) in item.group_list" class="item">
  		 				 <div class="itemUp">
  		 				 		<img :src="citem.img_url"/>
		  		 				<span>{{citem.group_name}}</span>
		  		 				<i>{{citem.group_member}}</i>
  		 				 </div>
  		 				 <p>{{citem.topic_title}}</p>
  		 			</div>
  		 			<button>查看更多</button>
  		 </div>
  	</Grouplist>
  </div>
</template>

<script>
	import Head from '../../components/head'
	import Grouplist from '../../components/grouplist'
export default {
	components:{
		Head,Grouplist
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
  		this.$axios.get('../../../static/data/groupData.json')
  		.then(res=>{
			    this.arr=res.data.group;
			    console.log(this.arr);
  		})
  	}
  }
}
</script>

<style scoped>
	
</style>
