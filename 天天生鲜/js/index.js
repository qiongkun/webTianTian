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
