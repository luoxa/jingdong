<template>
<div>
    <img class="header-img" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png" alt="logo">
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

  name: 'Register',

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
                    label:'注册'
                }

            ]
        }
    }
  },

  methods:{
    submitHandler(e){
        e.preventDefault();
        this.$http.get('api/register',{params:this.model}).then(res=>{
            console.log(res.success);
        }).catch(err=>{
            console.log(err);
        })
    }
  }

}
</script>

<style lang="stylus" scoped>
.header-img
    width 100%
    height 150px
</style>
