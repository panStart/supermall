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
2019/9/22 19:31
