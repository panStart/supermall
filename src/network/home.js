import qs from 'qs'
import {request} from "./request"
let postData1 = qs.stringify({keyflag:'goodImg'});
let config1 = {
    url:'/getmain.php',
    method:'post',
    data:postData1
}

export function getHomeMultidata(){
    return request(
        config1
    )
}
export function getHomeGoods(type){
    return request({
        url:'/getmain.php',
        method:'post',
        data:qs.stringify({"keyflag" : "class","class" : type})
    })
}