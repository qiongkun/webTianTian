; (function (window, undefined) {
    var slide = function () {
        this.settings = {
            id: 'pic',				//轮播图父级的id，必需传的参数
            autoplay: true,			//自动播放，true为自动，false为不自动，默认为true
            intervalTime: 2000,		//间隔时间，运动后停顿的时间，默认1s
            loop: true,				//循环播放，true为循环，false为不循环，默认为true
            totalNum: 4,				//图片总量
            moveNum: 1,				//单次运动的图片数量（图片总量必须为运动数量的整倍数）
            circle: true,				//小圆点功能，true为显示，false为不显示，默认显示
            moveWay: 'opacity'		//运动方式，opacity为透明度过渡，position为位置过渡
        }
    };
    slide.prototype = {
        init: function (opt) {
            var opt = opt || this.settings;
            for (var attr in opt) {
                this.settings[attr] = opt[attr];
            }
            this.createDom();
            this.moveInt();
        },
        // 创建结构
        createDom: function () {
            let This = this;
            // 创建左按钮
            this.box = document.getElementById(this.settings.id);
            this.prev = document.createElement('div');
            this.prev.className = 'prev';
            this.prev.onclick = function () {
                This.parev()
            }
            this.box.appendChild(this.prev);
            //创建右按钮
            this.box = document.getElementById(this.settings.id);
            this.next = document.createElement('div');
            this.next.className = 'next';
            this.next.onclick = function () {
                This.nexet()
            }
            this.box.appendChild(this.next);
            //创建小圆点
            this.circles = []//存放小圆点
            this.circle = document.createElement('div');
            this.circle.className = 'circle';
            for (let i = 0; i < this.settings.totalNum; i++) {
                this.span = document.createElement('span');
                this.circle.appendChild(this.span)
                if (this.settings.circle) {
                    this.circles.push(this.span)
                    this.circles[0].className = 'active'
                    this.box.appendChild(this.circle)
                }
            }

        },
        moveInt: function () {
            this.cn = 0; //当前的索引
            this.ln = 0; //上一次的索引
            this.canClick = true; //是否可以再次点击
            this.opacityItem = this.box.children[0].children;//拿到需要opacity的a标签
            if (this.settings.moveWay == 'opacity') {
                for (var i = 0; i < this.opacityItem.length; i++) {
                    this.opacityItem[i].style.opacity = 0;
                    this.opacityItem[i].style.transition = '.3s opacity';
                }
                this.opacityItem[0].style.opacity = 1;
            }
            if (this.settings.autoplay) {
                this.Aotoplay()
            }
        },
        //透明度运动方式
        opacityFn: function () {
            var This = this;
            // 左边到头
            if (this.cn < 0) {
                this.cn = this.opacityItem.length - 1;
            }
            // 右边到头
            if (this.cn > this.settings.totalNum - 1) {
                this.cn = 0;
            }
            this.opacityItem[this.ln].style.opacity = 0;
            this.circles[this.ln].className = ''
            this.opacityItem[this.cn].style.opacity = 1;
            this.circles[this.cn].className = 'active'
            //点击 循环transitionend/当运动完之后
            this.opacityItem[this.cn].addEventListener('transitionend', function () {
                var e = 0;
                e++;
                if (e == 1) {
                    This.ln = This.cn;
                }
            })
        },

        // 左边点击
        parev: function () {
            console.log(this.cn)
            this.cn--;
            this[this.settings.moveWay + 'Fn']()

        },
        // 右边点击
        nexet: function () {
            this.cn++;
            console.log(this.cn)
            this[this.settings.moveWay + 'Fn']()

        },
        // 自动播放
        Aotoplay: function () {
            this.time = null;
            var This = this;
            this.time = setInterval(function () {
                This.nexet();
            }, this.settings.intervalTime)
            //鼠标放上去的时候停止
            this.box.onmouseenter = function () {
                clearInterval(This.time);
                This.time = null;
            };

            //鼠标离开的时候继续播放
            this.box.onmouseleave = function () {
                This.Aotoplay();
            };
        }

    };
    window.slide = slide
})(window, undefined)