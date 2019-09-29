import qs from 'qs'
import {request} from "./request"

export function getDetailGoods(type){
    return request({
        url:'/getmain.php',
        method:'post',
        data:qs.stringify({"keyflag" : "video","videoflag" : type})
    })
}

export function getDetail(){
    return request({
        url:'/getmain.php',
        method:'post',
        data:qs.stringify({keyflag:'goodImg'})
    })
}

export class Goods {
    constructor(list){
        this.title = list[0].title
    }
}
