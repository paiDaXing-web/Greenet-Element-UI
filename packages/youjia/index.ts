 import Button from "@youjia/button";
 import Icon from "@youjia/icon";
import { App } from "vue";

/**
 * 全局动态引入   
 */
 const components=[//
    Button,
    Icon
 ]

 const install=(app:App)=>{
components.forEach(component=>{
    app.component(component.name,component);
})
 }
 export default {
    install
 }