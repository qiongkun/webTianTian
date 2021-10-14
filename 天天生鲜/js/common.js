window.hx = {
    g: function (name) {
        return document.querySelector(name);
    },
    ga: function (name) {
        return document.querySelectorAll(name);
    },
    addEvent: function (obj, ev, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(ev, fn);
        } else {
            obj.attachEvent('on' + ev, fn);
        }
    },
    removeEvent: function (obj, ev, fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(ev, fn);
        } else {
            obj.detachEvent('on' + ev, fn);
        }
    },
    // 视频评价 评论选项卡

    optionFn: function () {
        // 商品简绍 评论
        let liPro = hx.ga('#product li');
        let detal = hx.ga('#details div');
        for (let i = 0; i < liPro.length; i++) {
            hx.addEvent(liPro[i], 'click', function () {
                for (let y = 0; y < liPro.length; y++) {
                    liPro[y].className = '';
                    detal[y].style.display = 'none';
                }
                liPro[i].className = 'active';
                detal[i].style.display = 'block';
            })
        }
    },
    // 发送ajax
    load: function (url, fn) {
        // XMLHttpRequest对象用于在后台与服务器交换数据
        var xhr = new XMLHttpRequest();
        //每当readyState改变时就会触发onreadystatechange函数
        //0: 请求未初始化
        //1: 服务器连接已建立
        //2: 请求已接收
        //3: 请求处理中
        //4: 请求已完成，且响应已就绪
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            //readyStatus == 4说明请求已经完成
            if (xhr.readyState == 4 && xhr.status == 200) {

                //从服务器获得数据
                fn.call(this, xhr.responseText)

            }
        };
        //发送数据
        xhr.send();
    },
    // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    // post: function (url, data, fn) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("POST", url, true);
    //     // 添加http头，发送信息至服务器时内容编码类型
    //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
    //             fn.call(this, xhr.responseText);
    //         }
    //     };
    //     //发送数据
    //     xhr.send(data);
    // }
    //把地址栏url后面的参数返回
    parseUrl: function (url) {
        // 正则
        var result = url.split("=")[1];
        return result;
    },
    // 404解析把url的参数返回一个对象
    parUri: function (url) {
        var text1 = url.split('?')[1]
        if (text1 == undefined) {
            window.location.href = '404.html'
        }
        var text2 = text1.split('=')

        var key, value;
        for (let i = 0; i < text2.length; i++) {
            key = text2[0];;
            value = text2[1];
            this[key] = value;
        }
    },
    //购物车添加商品展示
    comCartFn: function () {
        var prouctNum = 0; //买了几个商品
        let btnnum = hx.g('.btnnum');
        (function (local) {
            // console.log(local);
            var totalPrice = 0;//总价格
            for (var i = 0; i < local.length; i++) {
                var attr = local.key(i); //取到key id
                var value = JSON.parse(local[attr]);
                //window.value = local;
                //条件成立 local就是我们主动添加的local；
                if (value && value.sign == 'pruductLocal') {
                    console.log(local.length)
                    prouctNum = local.length;
                    btnnum.innerText = prouctNum;
                   
                }
            }
        })(localStorage)
    }



}