import qs from 'qs'
import {request} from "./request"
let postData = qs.stringify({keyflag:'goodImg'});
let config = {
    url:'/getmain.php',
    method:'post',
    data:postData
}

export function getHomeMultidata(){
    return request({
        config
    })
}