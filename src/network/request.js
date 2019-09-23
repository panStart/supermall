import axios from "axios";
//简版promise

export function request(config){
    // console.log(config);
        const instance = axios.create({
            baseURL : 'http://47.106.248.143/app',
            timeout : 5000,
        })  
        //请求拦截
        instance.interceptors.request.use(config => {
            //console.log(config);
            return config
        },err => {
            console.log(err);
            
        }) 
        //响应拦截 
        instance.interceptors.response.use(res => {
            //console.log(res);
            return res.data 
        },err => {
            console.log(err);
            
        })    
        return instance(config)
}