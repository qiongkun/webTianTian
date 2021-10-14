// 商品数量 加减 功能
let btns = hx.g("#detail .btn");
let btnpls = btns.children;
let cartBtn = hx.g('#detail .mycart');
let btnnum = hx.g('.btnnum');
addNum()
function addNum() {
    btnpls[1].onclick = function (e) {
        e.preventDefault();
        btnpls[0].value++
    };
    btnpls[2].onclick = function (e) {
        e.preventDefault();
        btnpls[0].value--;
        if (btnpls[0].value < 0) {
            btnpls[0].value = 0
        }
    };
};
// 加入购物车功能
function cartFn() {
    cartBtn.addEventListener('click', function () {
        if (btnpls[0].value <= 0) {
            alert('商品数量不能为0');
            return;
        };
        alert('添加')
        var id = ''; //用拼接的id作为key;
        var item;//商品数据
        var user = us;
        id = cartBtn.getAttribute('data-id');
        for (let l = 0; l < user.length; l++){
            item = user[l][0].fruir;
            console.log(item)
            // console.log(item)
            // console.log(id)
            if (id == item.id) {
                var select = {
                    "id": id,
                    "name": item.categoryList.categoryName,
                    "img": item.categoryList.commodityImg,
                    "prize": item.categoryList.prize,
                    "price":item.categoryList.price,
                    "num": btnpls[0].value,
                    "sign": 'pruductLocal'//给自己local标识避免取到其他人的local
                };
                // 把声明的对象存到localStorge里面
                localStorage.setItem(id, JSON.stringify(select));
            }
        }
    
      
        for (var i = 0; i < localStorage.length; i++){
            var attr = localStorage.key(i); //取到key id
            var value = JSON.parse(localStorage[attr]);
           // window.value = value;
            if (value && value.sign == 'pruductLocal') {
                //条件成立 local就是我们主动添加的local；
                btnnum.innerText = localStorage.length;
            }
        }
        //btnnum.innerText = btnpls[0].value
    })
}


// 加入购物车功能
(function () {
    cartFn();
    
})()