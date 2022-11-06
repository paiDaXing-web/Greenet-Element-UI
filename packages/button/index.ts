// 每个组件的入口文件
import Button from "./src/button.vue" //导出组件出现问题，他是.vue 的文件类型 解决ts中文件类型
import {App} from "vue"

Button.install=(app:App)=>{
  //注册组件
  app.component(Button.name,Button)
}

//暴露出去
export default Button
