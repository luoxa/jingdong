import axios from 'axios'
import store from './store'
import router from './router'

/**
 * http全局拦截
 * token传入请求头提供给后台
 */

export default function setAxios(){

    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token = store.state.token
            }
            return config
        }
    )

    //每次请求有返回的，都是经过这个拦截器的
    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                const data = response.data
                if(data.code == 1){
                    console.log('登录状态失效')
                    store.commit('setToken','')
                    window.localStorage.removeItem('token')
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}