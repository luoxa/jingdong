<template>
    <div class="panelsbox">
      <cube-scroll class="leftpanels">
        <ul>
            <li v-for="(item,index) in tabslabel" :key="index" @click="selectList(index)" :class="{active:index==activeIndex}">
                {{item.label}}
            </li>
        </ul>
      </cube-scroll>

      <cube-scroll class="rightpanels">
        <ul>
            <li v-for="(item,index) in tags" :key="index">
                <img :src="item.image" alt="">
                <p>{{item.label}}<i class="cubeic-add" @click="toCart($event,item)"></i></p>
            </li>
        </ul>
      </cube-scroll>

      <div class="ball-wrap">
        <transition
        @beforeEnter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
        >
            <div class="ball" v-if="ball.show">
                <div class="inner">
                    <i class="cubeic-add"></i>
                </div>
            </div>
        </transition>
      </div>

    </div>
</template>

<script>
export default {

  name: 'List',

  data () {
    return {
        activeIndex:0,
        tags:[],
        tabslabel:[
            {
                label:'热门推荐'
            },
            {
                label:'家用电器'
            },
            {
                label:'手机数码'
            },
            {
                label:'计生情趣'
            },
            {
                label:'美妆护肤'
            },
            {
                label:'运动户外'
            },
            {
                label:'汽车用品'
            },
            {
                label:'医药保健'
            },
            {
                label:'男装女装'
            },
            {
                label:'美妆护肤'
            },
            {
                label:'运动户外'
            },
            {
                label:'汽车用品'
            },
            {
                label:'医药保健'
            },
            {
                label:'男装女装'
            },
            {
                label:'美妆护肤'
            },
            {
                label:'运动户外'
            },
            {
                label:'汽车用品'
            },
            {
                label:'医药保健'
            },
            {
                label:'男装女装'
            },
            {
                label:'儿童玩具'
            }
        ],
        ball:{
            show:false,
            el:null
        }
    }
  },
  methods:{
    selectList(index){
        this.activeIndex = index

        this.getClassify(index)
    },
    async getClassify(index){
        const result = await this.$http.get('/api/classify',{params:{type:index}})
        this.tags=result.data;
    },
    toCart(e,tag){
        this.$store.commit('toCart',tag)
        this.ball.show=true
        this.ball.el=e.target
    },
    beforeEnter(el){
        const dom = this.ball.el
        const rect = dom.getBoundingClientRect()
        const x = rect.x-window.innerWidth*.7
        const y = rect.y-window.innerHeight
        el.style.display = 'block'
        el.style.transform = `translate3d(0,${y}px,0)`
        const inner = el.querySelector('.inner')
        inner.style.transform = `translate3d(${x}px,0,0)`
    },
    enter(el,done){
        //触发重绘
        document.body.offsetHeight

        //小球回到原点
        el.style.transform = 'translate3d(0,0,0)'
        const inner = el.querySelector('.inner')
        inner.style.transform = 'translate3d(0,0,0)'

        //过渡完成后执行的事件
        el.addEventListener('transitionend',done)
    },
    afterEnter(el){
        this.ball.show = false
        el.style.display='none'
    }
  },
  created(){
    this.getClassify(0)
  }
}
</script>

<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 30%
            height 100%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size  14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width 70%
            height 100%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img
                        width 80px
                        height  80px

    .ball-wrap
        .ball
            position fixed
            left 70%
            bottom 10px
            z-index 1003
            color red
            transition all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
            .inner
                width 16px
                height  16px
                transition all 1s linear

</style>