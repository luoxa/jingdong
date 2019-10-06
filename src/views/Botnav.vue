<template>
    <div>

        <transition :name="transitionName">
          <router-view class="router"/>
        </transition>

        <cube-tab-bar
        class="botnav"
        v-model="selectedLabelSlots"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
        </cube-tab-bar>

        <!-- 购物车商品总数 -->
        <span class="cartsum">{{cartsum}}</span>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {

  name: 'Botnav',

  data () {
    return {
      transitionName:'silde-right',
      selectedLabelSlots: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },

  computed:{
    ...mapGetters([
      'cartsum'
    ])
  },

  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler(label){
      switch(label){
        case '首页':
            this.$router.push({path:'/botnav'})
            break
        case '分类':
            this.$router.push({path:'/botnav/list'})
            break
        case '搜索':
            this.$router.push({path:'/botnav/search'})
            break
        case '购物车':
            this.$router.push({path:'/botnav/cart'})
            break
        case '我的':
            this.$router.push({path:'/botnav/mine'})
            break
      }
    }
  },

  created(){
    const currPath = this.$route.path;
    console.log(currPath);
    switch(currPath){
      case '/botnav':
        this.selectedLabelSlots='首页'
        break
      case '/botnav/list':
        this.selectedLabelSlots='分类'
        break
      case '/botnav/search':
        this.selectedLabelSlots='搜索'
        break
      case '/botnav/cart':
        this.selectedLabelSlots='购物车'
        break
      case '/botnav/mine':
        this.selectedLabelSlots='我的'
        break
    }
  }

}
</script>

<style lang="stylus">
  .cube-tab-bar.botnav
      position fixed
      z-index 1000
      bottom  0
      left    0
      width   100%
      background  #ffffff
      .cube-tab
        div
          font-size  16px
          padding-top  3px
        i
          font-size 20px

  .router
    position absolute
    top 0
    bottom 62.8px
    left 0
    right 0
    transition all 0.8s ease

  .silde-left-enter,.silde-right-leave-active
    opactity 0
    transform: translate(100%,0)
    -webkit-transform translate(100%,0)
  .silde-right-enter,.silde-left-leave-active
    opactity 0
    transform: translate(-100%,0)
    -webkit-transform translate(-100%,0)

  .cartsum
    position fixed
    bottom 33px
    right 23%
    z-index 1001
    width 18px
    height 18px
    line-height 18px
    font-size 14px
    color #ffffff
    border-radius 50%
    background red
</style>