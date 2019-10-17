import Toast from './Toast'

const obj = {}
obj.install = function (Vue) {
    console.log("执行了obj里的install函数",Vue);
    //创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    //根据组件构造器 创建出一个组件对象
    const toast = new toastContrustor()
    //将组件对象手动挂载到某一个元素
    toast.$mount(document.createElement('div'))
    //toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
   
    // console.log(Vue.prototype.$toast);
    
}

export default obj