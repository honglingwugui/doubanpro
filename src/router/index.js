import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home/home'
import Audio from '../pages/Audio/audio'
import Broadcast from '../pages/Broadcast/broadcast'
import Group from '../pages/Group/group'
import Mine from '../pages/Mine/mine'

import Film from '../pages/Audio/film'
import Read from '../pages/Audio/read'
import Tv from '../pages/Audio/tv'
import City from '../pages/Audio/city'
import Music from '../pages/Audio/music'
Vue.use(Router)

//解决vue router 报错： Uncaught (in promise) NavigationDuplicated 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/audio',name: 'audio',component: Audio,
    		children:[
    				{path:'film',component:Film},
    				{path:'read',component:Read},
    				{path:'tv',component:Tv},
    				{path:'city',component:City},
    				{path:'music',component:Music},
    		]
    },
    {path: '/broadcast',name: 'broadcast',component: Broadcast},
    {path: '/group',name: 'group',component: Group},
    {path: '/mine',name: 'mine',component: Mine}
  ]
})
