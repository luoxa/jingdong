<template>
<div>
    <img class="header-img" src="../assets/img/logo.png" alt="logo">
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    >
    </cube-form>
</div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {
        model:{
            username:'',
            password:''
        },
        schema:{
            fields:[
                //用户名配置
                {
                    type:"input",
                    modelKey:'username',
                    label:'用户名',
                    props:{
                        placeholder:'请输入用户名'
                    },
                    rules:{
                        required:true,
                        type:'string',
                        min:3,
                        max:15
                    },
                    trigger:'blur',
                    messages:{
                        required:'用户名不能为空',
                        min:'用户名不少于3个字符',
                        max:'用户名不多于15个字符'
                    }
                },
                //密码配置
                {
                    type:'input',
                    modelKey:'password',
                    label:'密码',
                    props:{
                        placeholder:'请输入密码',
                        type:'password',
                        eye:{
                            open:false
                        }
                    },
                    trigger:'blur',
                    rules:{
                        required:true
                    }
                },
                //提交按钮配置
                {
                    type:'submit',
                    label:'登录'
                }

            ]
        }
    }
  },

  methods:{
    async submitHandler(e){
        e.preventDefault();
        try{
            const result = await this.$http.get('/api/login',{params:this.model})
            if(result.code==0){
                console.log(result.message)
                this.$store.commit('setToken',result.token)

                if(this.$route.query.redirect){
                    this.$router.replace({path:this.$route.query.redirect})
                }else{
                    this.$router.replace({path:'/botnav'})
                }
            }else{
                console.log(result.message)
            }
        }catch(err){
            console.log(err)
        }
    }
  }

}
</script>

<style lang="stylus" scoped>
.header-img
    width 100%
    height 150px
</style>
