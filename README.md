
# supermall
# vue-cli安装
npm i webpack -g
npm install @vue/cli -g
# 创建项目
vue create ~
# git管理
1.粘贴复制上传。
git clone ~
复制到托管目录
git add .
git commit -m ''
git push
2.空文件夹直接上传。

## 划分目录结构
# assets-资源
css,img文件夹
# commponents-公共组件
common--别的项目也可以用的公共组件,content-私有的公共组件
# views-大视图组件
category,home
# network--网络数据封装
# router
# store
# common

# css文件的引入
引入两个css文件
优化浏览器 引入优化css

# 脚手架3里的vue.config
configureWebpack:{
        resolve:{
           alias: {
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views' 
           }
        }
    }别名配置
# 脚手架的.editorconfig调整代码规范

# 添加tabbar模块
# 添加路由
# 导航模块封装（利用插槽）

# 请求数据network文件夹封装request.js
npm i axios --save

# 数据获取
注意分类文件home.vue面对home.js
# 轮播图封装
# recommend.vue封装
# home页数据获取
2019/9/23 晚
# 商品数据填补页面
# 滑动测试
npm install better-scroll --save

# 滑动封装
第一种控制内容区域方法：
.content
height: calc(100% - 93px);
#home
 /* vh属性--可视化界面大小 */
height: 100vh;

第二种相对定位控制
#home
height: 100vh;
position: relative;
.content
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0

# 滚动封装完成后 控制栏不动 封装向上按钮
监听组件的点击：@click.native
this.$refs.scroll.scroll.scrollTo(0,0,500)
利用home里的refs调用scroll组件
组件就是一个对象，可以直接调用scroll里的属性
scrollTo(0,0,500)//x,y,time

# 处理了滚动卡顿的问题
利用$bus--事件总线

# 处理请求过多防抖处理  例如搜索栏里的文字搜索
refresh频繁刷新的问题：
# 补习：回调函数和apply

## 上拉加载
## 控制栏不吸顶
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}失效

使用this.$refs.tabControl.$el.offsetTop获取位置
问题：图片没加载完不能正确获取位置
监听轮播图图片的加载完成后发出事件，在home里监听
优化：为了部多次监听图片的更新，使用isLoad进行状态记录
注意此次优化与防抖的区别


#### 9.2. 监听滚动, 动态的改变tabControl的样式

* 问题:动态的改变tabControl的样式时, 会出现两个问题:
  * 问题一: 下面的商品内容, 会突然上移
  * 问题二: tabControl虽然设置了fixed, 但是也随着Better-Scroll一起滚出去了.
* 其他方案来解决停留问题.
  * 在最上面, 多复制了一份PlaceHolderTabControl组件对象, 利用它来实现停留效果.
  * 当用户滚动到一定位置时, PlaceHolderTabControl显示出来.
  * 当用户滚动没有达到一定位置时, PlaceHolderTabControl隐藏起来.

### 十. 让Home保持原来的状态

#### 10.1. 让Home不要随意销毁掉

* keep-alive

#### 10.2. 让Home中的内容保持原来的位置

* 离开时, 保存一个位置信息saveY.
* 进来时, 将位置设置为原来保存的位置saveY信息即可.
  * 注意: 最好回来时, 进行一次refresh()

### 十一. 详情页开发
#### 11.1 通过ID值获取不同的数据
* keep-alive exclude="Detail"//name里的内容
#### 11.2 数据整合
* 处理后台很多数据的时候，需要整合一个对象来整合数据
  export class Goods {
      constructor(list){
          this.title = list[0].title
      }
  }
* 调用：this.goods = new Goods(res)
* 此处因为数据少的缘故，制作简单的数据整合。
#### 11.3 v-for="index in goods.services.length-1" :key="index"的运用
* <span class="info-service-item" v-for="index in goods.services.length-1"          :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
  </span>
* 为什么要用key属性
使用key属性性能更高 虚拟dom-->patch-->浏览器  通过diff算法检测出不一样的元素。

### 十二. vue--混入
home页和详情页的使用的item图片刷新是同一个，离开home页面时应该取消一个。

### 十三.  两个bug 首页tabControl不一致 详情页滚动的bug

### 十四.  标题和内容的联动效果
# 14.1 点击标题，滚动到相应的位置
* 在detail中监听标题的点击，获取index
* 滚动到相应的主题：
   * 获取所有主题的offsetTop
   * 问题：在哪里获取到正确的offsetTop
   * 1.created肯定不行，没有获取到元素
   * 2.mounted不行，数据还没有获取到
   * 3.获取到的数据回调也不行，DOM还没有渲染
   * 4.$nextTick不行，图片的高度问题
   * 5.在图片加载完后，获取高度
# 14.2 内容渲染，显示正确的标题
if(this.currentIndex !== i && 
((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) 
|| (i === length - 1 && positionY >= this.themeTopYs[i])))   
* 条件一：防止赋值重复
* 条件二：区间判断
* 简化：添加一个最大值 
 if(this.currentIndex !== i && 
        (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) 
        )
### 十五 顶部工具栏的封装


### 十六 详情页的backTop
* 组件的点击事件要添加@click.native
*home.vue和detail.vue回到顶部

### 十七 点击加入购物车
##### 17.1 监听加入购物车的点击，获取商品信息
* 监听
* 获取商品信息

##### 17.2将商品添加到vuex
*安装vuex
*配置
*定义mutations,将商品添加到state.carList
*重构代码：1.将mutations中的代码抽取到actions（定义两个mutations）2.将mutations/actions单独抽取到文件中

### 十八购物车的展示
###### 18.1购物车的导航栏展示
###### 18.2购物车商品显示
*  CartList -> Scroll(滚动问题)
* CartListItem -> CheckButton
##### 18.3商品的选中和不选中
* 修改模型对象，改变选中状态

#### 18.4 底部工具栏的汇总
* 全选按钮
* 计算总价格
* 去计算
#### 18.5  mapGrtters应用：
* import { mapGetters } from 'vuex'
* ...mapGetters(['cartList']),
* v-for="(item,index) in cartList 直接将getters里的计算属性变为组件的计算属性
#### 十九 商品全部按钮选中
