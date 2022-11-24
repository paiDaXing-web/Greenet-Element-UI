// 每个组件的入口文件
import Icon from "./src/icon.vue" //导出组件出现问题，他是.vue 的文件类型 解决ts中文件类型
import {App} from "vue"

Icon.install=(app:App)=>{
  //注册组件
  app.component(Icon.name,Icon)
}

//暴露出去
export default Icon
//