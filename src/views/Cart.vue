<template>
    <div class="cart">
        <ul class="goods">
            <li v-for="(item,index) in cartarr" :key="index">
                <label>{{item.label}}</label>

                <span class="goodsright">
                    <i class="cubeic-remove" @click="cartRemove(index)"></i>
                    {{item.num}}
                    <i class="cubeic-add" @click="cartAdd(index)"></i>
                </span>
            </li>
        </ul>
        <p class="emptytip" v-if="cartarr.length==0">未选择任意商品...</p>

        <cube-button style="margin:10px 0;">下单</cube-button>
        <cube-button @click="clearCart()">清空购物车</cube-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {

  name: 'Cart',

  data () {
    return {
        //cartarr:[]
    }
  },

  computed:{
    ...mapState([
        'cartarr'
    ])
  },

  methods:{
    //商品减少
    cartRemove(index){
        this.$store.commit('cartRemove',index)
    },
    //商品增加
    cartAdd(index){
        this.$store.commit('cartAdd',index)
    },
    //清空购物车
    clearCart(){
        this.$store.commit('clearCart')
    }
  }

}
</script>

<style lang="stylus" scoped>
    .cart
        padding: 10px;
    .goods
        li
            padding 16px
            font-size 20px
            text-align  left
        .goodsright
            float   right

    .emptytip
        text-align left
        padding 20px 0
        color #9E9E9E
</style>