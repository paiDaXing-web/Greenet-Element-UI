module.exports={
    //预设
    presets:[
        "@babel/presets-env",
        "@babel/preset-typescript",
        
    ]
    ,
overrides:[{
    test:/\.vue$/
    ,
    plugins:[
        "@babel/transform-typescript",
    ],

}],
env:{
    utils:{
        plugins:[
            ["babel-plugin-module-resolver",{root:"youjia"}]
        ]
    }
}
}