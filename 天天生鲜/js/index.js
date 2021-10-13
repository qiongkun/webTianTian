if (typeof (slide) != 'function') {
    function xhr() {
        hx.load('http://localhost:8080/fruits', function (str) {
            var user = JSON.parse(str);
            var url = window.location.href;
            let urlObj = new hx.parUri(url)
            let uls = hx.parseUrl(url)
            let arr = [];
            let item;
            for (let i = 0; i < user.length; i++) {
                var lod = '';
                var img = '';
                var agg = '';
                var pru = '';
                item = user[i][0].fruir;
                arr.push(item.id);
                if (uls == item.id) {
                    lod += '<ul>' +
                        '<li><a href="">全部分类</a> >&nbsp;</li>' +
                        '<li><a href="">' + item.allcategories.allrName + '</a> >&nbsp;</li>' +
                        '<li><a href="">' + item.allcategories.commodity + '</a></li>' +
                        '</ul>'
                    let nav = window.hx.g('#nav .center');
                    nav.innerHTML = lod
                    //拼接商品详情
                    img += ' <img src=' + item.categoryList.commodityImg + ' alt="">'
                    let detailImg = window.hx.g('#detail #img');
                    detailImg.innerHTML = img;

                    agg += ' <h2>' + item.categoryList.categoryName + '</h2>' +
                        ' <p>简介</p>' +
                        '<div class="smBox">' +
                        '+<div class="prize">' + item.categoryList.prize + '</div>' +
                        ' <p>单位：' + item.categoryList.monad + '</p>' +
                        '</div>' +
                        ' <span class="fl ">数量:</span>' +
                        '<div class="btn clearfix">' +
                        '  <input type="button" value="1">' +
                        ' <a href="" class="add">+</a>' +
                        ' <a href="" class="minus">-</a>' +
                        '</div>' +
                        ' <div class="nomoal">' +
                        '<span>其他规格:</span><br>' +
                        ' <span class="span1">总价: <div ' + 'class="prize">' + item.categoryList.prize + '</div> </span>' +
                        '<button>加入购物车</button>'+
                    ' </div>' 
                      
                    let detailcat = window.hx.g('#detail #categor');
                    detailcat.innerHTML = agg;

                    pru += '<h1>新品推荐</h1>' +
                        '<ul>' +
                        '<li>' +
                        '<img src=' + item.NewProducts.commodityIm + ' alt="">' +
                        ' <p>' + item.NewProducts.categoryNam + '</p>' +
                        ' <div class="prize">' + item.NewProducts.priz + '</div>' +
                        '</li>' +
                        ' <hr>' +
                        '<li>' +
                        '<img src=' + item.NewProducts.commodityImg + ' alt="">' +
                        '<p>' + item.NewProducts.categoryName + '</p>' +
                        '<div class="prize">' + item.NewProducts.prize + '</div>' +
                        '</li>' +
                        ' </ul>'
                    let prud = window.hx.g('#NewProducts #prudu');
                    prud.innerHTML = pru;
                }


            }
           
               // 404页面 因为接口 是直接返回所有id对应的数据所以只能这样做
           // console.log(!urlObj.id)
            if (!urlObj.id) {
                window.location.href = '404.html'
            }
            switch (urlObj.id) {
                case '1143023': break;
                case '1143022': break;
                case '1143021': break;
                default: window.location.href = '404.html'
            }
        });
    }

    hx.optionFn();
    xhr()



} else {
    var bananerPic = new slide();
    bananerPic.init({
        id: 'bannerPic',				//轮播图父级的id，必需传的参数
        autoplay: true,			//自动播放，true为自动，false为不自动，默认为true
        intervalTime: 1000,		//间隔时间，运动后停顿的时间，默认1s
        loop: true,				//循环播放，true为循环，false为不循环，默认为true
        totalNum: 4,				//图片总量
        moveNum: 1,				//单次运动的图片数量（图片总量必须为运动数量的整倍数）
        circle: true,				//小圆点功能，true为显示，false为不显示，默认显示
        moveWay: 'opacity'		//运动方式，opacity为透明度过渡，position为位置过渡

    });
}



