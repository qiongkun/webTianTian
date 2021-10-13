// 商品数量 加减 功能
let btns = hx.g("#detail .btn");
let btnpls = btns.children;
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
   
}
