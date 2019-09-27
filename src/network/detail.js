// import qs from 'qs'
// import {request} from "./request"

// export function getDetail(type){
//     return request({
//         url:'/getmain.php',
//         method:'post',
//         data:qs.stringify({"keyflag" : "video","videoflag" : type})
//     })
// }

import qs from 'qs'
import {request} from "./request"

export function getDetail(){
    return request({
        url:'/getmain.php',
        method:'post',
        data:qs.stringify({keyflag:'goodImg'})
    })
}
