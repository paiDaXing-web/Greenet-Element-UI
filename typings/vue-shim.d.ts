// 处理解析TS中声明文件

declare module "*.vue"{

   import { defineComponent } from "vue";
   const component:ReturnType<typeof defineComponent>&{
    install(app:App):void
   }
   export default component;
}
