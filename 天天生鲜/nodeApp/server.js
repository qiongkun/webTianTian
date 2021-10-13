// cd 到目录 node server.js启动  http://localhost:8080/fruits
var express = require('express');
var app = express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With')
    next();

});
var productList = [
    [{
         'fruir':{
            "id":'1143021',
            // 全部分类
            "allcategories": {
                "allrName": "猪牛羊肉 ",
                "commodity": "商品详情",

            },
            "categoryList": {
                "commodityImg": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5GnomAQq89AADQVMDvqR80681832",
                "categoryName": "猪肉",
                "prize": "¥ 23.99",
                "monad": "500g"
            },
            // 新品推荐
            "NewProducts": {
                "commodityIm": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5Gl0WAE3B7AALPyGvbwlU8458834",
                "categoryNam": "牛排",
                "priz": "¥ 99.99",
                "commodityImg": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5GlzeAQUebAAB4RyoHb2Q0951093",
                "categoryName": "羊肉",
                "prize": "¥ 56.99",
            }, 
        },
    }], [{
        "fruir": {
            "id":'1143022',
            // 全部分类
            "allcategories": {
                "allrName": "禽类蛋品",
                "commodity": "商品详情",

            },
            "categoryList": {
                "commodityImg": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5Gl72AFJMTAADUhiqBxmM8961108",
                "categoryName": "盒装鸡蛋",
                "prize": "¥ 23.00",
                "monad": "500g"
            },
            // 新品推荐
            "NewProducts": {
                "commodityIm": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5GnDOALomPAAJf1mh7x1Y4992431",
                "categoryNam": "鹅蛋",
                "priz": "¥ 49.90",
                "commodityImg": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5Gm-WAVcFQAAK8H84FYIQ1825816",
                "categoryName": "鹌鹑蛋",
                "prize": "¥ 39.80",
            }, 
               
            
        },
    }], [{
        "fruir": {
            "id":'1143023',
            // 全部分类
            "allcategories": {
                "allrName": "新鲜水果 ",
                "commodity": "商品详情",

            },
            "categoryList": {
                "commodityImg": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5Gi_KAPLkHAAAgnaeGwNQ8809368",
                "categoryName": "柠檬",
                "prize": "¥ 32.00",
                "monad": "500g"
            },
            // 新品推荐
            "NewProducts": {
                "commodityIm": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5GjAaAQNhcAAAeuLYy0pU0322142",
                "categoryNam": "奇异果",
                "priz": "¥ 12.12",
                "commodityImg": "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5Gm-WAVcFQAAK8H84FYIQ1825816",
                "categoryName": "柠檬",
                "prize": "¥ 32.00",
            }, 
               
            
        }
    }]
]
app.get('/fruits', async function (req, res) {

    res.send(productList)
})
app.listen(8080, function () {
    console.log('8080 中间件运行',)
})