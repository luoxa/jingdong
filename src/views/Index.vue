<template>
    <div id="index">
        <!-- 轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
          <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
            <a :href="item.url">
              <img class="banner" :src="item.image">
            </a>
          </cube-slide-item>
        </cube-slide>

        <!-- 滚动分类 -->
        <cube-slide ref="slide" :auto-play="false" :data="lists" @change="changePage">
          <cube-slide-item v-for="(list, index) in lists" :key="index">
            <ul class="listul">
                <li class="listli" v-for="(item,index) in list">
                    <img :src="item.image">
                    <p>{{item.label}}</p>
                </li>
            </ul>
          </cube-slide-item>
        </cube-slide>
    </div>

</template>

<script>
export default {

    name: 'Index',

    data() {
        return {
          items: [],
          lists: []
        }
    },
    methods: {
        changePage(current) {
          console.log('当前轮播图序号为:' + current)
        },
        clickHandler(item, index) {
          console.log(item, index)
        }
    },
    async created(){
        //获取轮播图数据
        const items = await this.$http.get('/api/banner')
        this.items =items.data

        //获取滚动分类数据
         const lists=await this.$http.get('/api/rollinglist')
         this.lists=lists.data
    }
}
</script>

<style lang="stylus" scoped>
    #index
        a
            .banner
                height 170px
                width 100%

        .listul
            display flex
            flex-wrap wrap
        .listli
            width 20%
            justify-content center
            img
                width 36px
                height 36px
                border-radius 50%
                padding 5px 0
            p
                font-size 14px
                padding-bottom 10px
    .cube-slide
        height  auto
</style>