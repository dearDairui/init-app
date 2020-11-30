const path = require("path")

module.exports ={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'bundle')

    },
    // 处理模块
    module:{
        rules:[
            {
                // 图片处理
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options:{
                        name:"[name]_[hash].[ext]",
                        //图片输出位置
                        outputPath:"images",
                        limit:2048
                    }
                  },
                ],
              },
              {
                //   字体处理
                test:/\.(eot|ttf|woff|woff2|svg)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        //图片输出位置
                        outputPath:"font",
                    }
                }]
                
              },
              {
                  test:/\.css$/,
                  use:["style-loader","css-loader"]
              },
              {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
        ]
    },
    mode:"production"
}