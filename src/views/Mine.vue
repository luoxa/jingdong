<template>
    <div>
        <img class="header-img" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png" alt="logo">

        <ul>
            <li class="mineitem" v-for="item in mineArr" :key="item.label" @click="itemClick(item)">
                <span class="minelabel">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

  name: 'Mine',

  data () {
    return {
        mineArr:[
            {label:'商品收藏',type:''},
            {label:'店铺收藏',type:''},
            {label:'我的足迹',type:''},
            {label:'退出',type:'exit'}
        ]
    }
  },

  methods:{
    itemClick(item){
        switch(item.type){
            case 'exit':
                this.$store.commit('setToken','')
                this.$router.push('login')
                break
        }

    }
  }
}
</script>

<style lang="stylus" scoped>
    .header-img
        width 100%
        height 150px
    .mineitem
        font-size 14px
        text-align left
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .minelabel
            display inline-block
            width 90%


</style>