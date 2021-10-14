let prom = document.querySelector('.prom');
let total_count = document.querySelector(".btnnum");
var str = '';
let price = [];//总价钱
var allprice = 0;
var num = 1;
var addpri = 0;
(function (local) {
    // 全部商品
    total_count.innerText = local.length;
    for (var i = 0; i < local.length; i++) {
     //   console.log(local.length)
        var attr = local.key(i); //取到key id
        var value = JSON.parse(local[attr]);
        //window.value = local;
        //条件成立 local就是我们主动添加的local；
        if (value && value.sign == 'pruductLocal') {
            str += '<li class="co101"><input data-prize=' + value.price * value.num + '  class="check" type="checkbox" name="" id="" onclick="inputfll(this)"></li>' +
                '<li class="co102"><img src=' + value.img + ' alt="">' +
                ' <div class="titel">' +
                '<span>' + value.name + '</span>' +
                '<p>' + value.price + '/500g</p>' +
                ' </div>' +
                '</li>' +
                '<li class="co103"><span>500g</span></li>' +
                '<li class="co104"><span>' + value.price + '元</span></li>' +
                '<li class="co105 clearfix">' +
                '<div class="addNum">' +

                '  <button class="btnd">-</button>' +
                ' <input class="btnd2" type="text" value=' + value.num + '>' +
                '<button data-pr=' + value.price * value.num + '  class="btnd1">+</button>' +

                ' </div>' +
                '</li>' +
                '<li class="co106"><span>' + value.price * value.num + '元</span></li>' +
                '<li class="co107"><a href="">删除</a></li>'
            prom.innerHTML = str;
            // return value.num;
        }
    }
})(localStorage)
var fanxuanNum = [];
var fanNums = 0;
var praaicss;
let inputs = document.querySelectorAll('.check');
let allbox = document.querySelector('.allbox');
let prize = document.querySelector('.rmb');
var btnd2 = document.querySelectorAll('.btnd2');//input
// 商品全选功能 价钱功能
function inputAll() {
    price = [];//总价钱
    allprice = 0;
    // 全选
    for (let i = 0; i < inputs.length; i++) {
        if (allbox.checked) {
            inputs[i].checked = true;
            let pric = inputs[i].getAttribute('data-prize')
            price.push(pric);
            jiesuan()
        } else {
            inputs[i].checked = false;
            for (let i = 0; i < btnd2.length; i++){
                btnd2[i].value = 1
                num = 1;
            }
        }
    }
    //jiesuan()
    allPrize(price, num,false)
}

// inputAll();算价格
function allPrize(price, num, addprize) {
    //console.log(price.length)
    if (addprize) {
        
        var a = price * (num - 1);
     
        //console.log(num)
        //Number(addpri)  +=  price * num;
        var b = Number(addpri)
        b += a;
        prize.innerText  = Math.floor(b)
    } else {
     
        for (let y = 0; y < price.length; y++) {
            addpri = 0
           // console.log(allprice)
            allprice += parseFloat(price[y] * num);
            //console.log(allprice)
            console.log(price[y],num)
            addpri = allprice.toFixed(2);
        }
        prize.innerText =Math.floor(allprice)  
    }
  
    
}       
//checked
function inputfll(e) {
    let n = 0;
    var peizs = [];
    let pric = e.getAttribute('data-prize')
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            n += 1;
            let praaic = inputs[i].getAttribute('data-prize')
            peizs.push(praaic)
        }

    }
    // 都选中
    if (n == inputs.length) {
        allbox.checked = true;
        inputAll()
        //console.log(2)
    } else {
        for (let i = 0; i < btnd2.length; i++){
            btnd2[i].value = 1
            num = 1;
        }
        fanxuanNum = []
        allbox.checked = false;
        for (let i = 0; i < inputs.length; i++){
            if (inputs[i].checked) {
                 praaicss= inputs[i].getAttribute('data-prize');
                fanxuanNum.push(praaicss)
            }
           
        }
        fanNum();
    }
}
function fanNum() {

    console.log(fanxuanNum)
    fanNums = 0;
    for (let i = 0; i < fanxuanNum.length; i++){
        
            fanNums +=Number(fanxuanNum[i])
          
    }
   
    prize.innerText =fanNums
}

//结算 + - 功能
function jiesuan() {
    let btnd = document.querySelectorAll('.btnd');//
let btnd1 = document.querySelectorAll('.btnd1');//+
for (let i = 0; i < btnd.length; i++) {
    btnd[i].addEventListener('click', function () {
        num = btnd2[i].value;
        num--
        if (num < 1) {
            num = 1;
        }
        btnd2.value = num;
        let praaic = btnd1[i].getAttribute('data-pr')
        //prize.innerText += praaic * num
    })
}
for (let i = 0; i < btnd1.length; i++) {
    btnd1[i].addEventListener('click', function () {
        num = 1;
        num++;
        console.log(num)
        btnd2[i].value = num;
        //console.log(btnd2[i].value)
        let praaic = btnd1[i].getAttribute('data-pr')
        //  praaic *num
        // addprize = praaic * num
       // prize.innerText += praaic * num 
     //   console.log(fanxuanNum)
        allPrize(praaic, num,true)  
    })
 }
}
