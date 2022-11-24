 const {VueLoaderPlugin} =require("vue-loader") ;
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 const path=require("path") ;
 
 module.exports={
    mode:"development",
    devtool:"source-map",
    entry:path.resolve(__dirname,"main.ts"),//打包入口
    output:{
        path:path.resolve(__dirname,"../play-dist"),//出口
        filename:"bundle.js"
    },
    resolve:{
        extensions:[".ts",".tsx",".js",".vue",".json"]//解析文件顺序

    },
    module:{
        rules:[
            {
            //识别Vue
            test:/\.vue$/,
            use:'vue-loader',

        },{
            //识别tsx
            test:/\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader:"babel-loader",

        },{
            // 识别图标
            test:/\.(svg|otf|ttf|woff|eot|gif|png)$/,
            loader:"url-loader",


        },{
            //识别样式
            test:/\.(scss|css)$/,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader",
            ]
        }
    ],
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            //html 插件
            template:path.resolve(__dirname,"index.html")
        }),
    ]
 }