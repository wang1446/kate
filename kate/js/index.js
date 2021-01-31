// 导航栏吸顶效果
var nav = document.getElementById("nav")
var navTop=nav.offsetTop
var navcon = document.querySelectorAll(".navcon")[0]
var navcon2 = document.querySelectorAll(".navcon2")[0]
document.onscroll=function  () {
    // 4 获取当前滚动的距离也就是滚动条距离顶端的高度
    var top=document.body.scrollTop||document.documentElement.scrollTop
    // console.log(top)
    // 5 判断，如果滚动条下拉数值超过导航栏距离顶端的高度那么就让导航栏吸顶
    if(top>navTop){
        // 导航栏吸顶
        // 给导航栏赋值新的样式
        // nav.className="fix"
        navcon.style.display = "none"
        navcon2.style.display = "block"
    }
    else{
        //如果小于导航栏距离顶端默认的高度我们就让他取消掉定位className
        // nav.className=""
        navcon.style.display = "block"
        navcon2.style.display = "none"
    }
}

// 二级导航
$(".navlist li").mouseover(function(){
    if($(this).index() === 0){
        $(".sec1")[0].style.display = "block"
    }
})
$(".sec1").mouseover(function(){
        $(".sec1")[0].style.display = "block"
})
$(".navlist li").mouseout(function(){
    if($(this).index() === 0){
        $(".sec1")[0].style.display = "none"
    }
})
$(".sec1").mouseout(function(){
    $(".sec1")[0].style.display = "none"
})       
// sec2
$(".navlist li").mouseover(function(){
    if($(this).index() === 1){
        $(".sec2")[0].style.display = "block"
    }
})
$(".sec2").mouseover(function(){
        $(".sec2")[0].style.display = "block"
})
$(".navlist li").mouseout(function(){
    if($(this).index() === 1){
        $(".sec2")[0].style.display = "none"
    }
})
$(".sec2").mouseout(function(){
    $(".sec2")[0].style.display = "none"
})    
// sce3
$(".navlist li").mouseover(function(){
    if($(this).index() === 2){
        $(".sec3")[0].style.display = "block"
    }
})
$(".sec3").mouseover(function(){
        $(".sec3")[0].style.display = "block"
})
$(".navlist li").mouseout(function(){
    if($(this).index() === 2){
        $(".sec3")[0].style.display = "none"
    }
})
$(".sec3").mouseout(function(){
    $(".sec3")[0].style.display = "none"
})
// sec4
$(".navlist li").mouseover(function(){
    if($(this).index() === 3){
        $(".sec4")[0].style.display = "block"
    }
})
$(".sec4").mouseover(function(){
        $(".sec4")[0].style.display = "block"
})
$(".navlist li").mouseout(function(){
    if($(this).index() === 3){
        $(".sec4")[0].style.display = "none"
    }
})
$(".sec4").mouseout(function(){
    $(".sec4")[0].style.display = "none"
})    
// sec5
$(".navlist li").mouseover(function(){
    if($(this).index() === 4){
        $(".sec5")[0].style.display = "block"
    }
})
$(".sec5").mouseover(function(){
        $(".sec5")[0].style.display = "block"
})
$(".navlist li").mouseout(function(){
    if($(this).index() === 4){
        $(".sec5")[0].style.display = "none"
    }
})
$(".sec5").mouseout(function(){
    $(".sec5")[0].style.display = "none"
})    
// sec6
$(".navlist li").mouseover(function(){
    if($(this).index() === 5){
        $(".sec6")[0].style.display = "block"
    }
})
$(".sec6").mouseover(function(){
        $(".sec6")[0].style.display = "block"
})
$(".navlist li").mouseout(function(){
    if($(this).index() === 5){
        $(".sec6")[0].style.display = "none"
    }
})
$(".sec6").mouseout(function(){
    $(".sec6")[0].style.display = "none"
})    
// sec7
$(".navlist li").mouseover(function(){
    if($(this).index() === 6){
        $(".sec7")[0].style.display = "block"
    }
})
$(".sec7").mouseover(function(){
        $(".sec7")[0].style.display = "block"
})
$(".navlist li").mouseout(function(){
    if($(this).index() === 6){
        $(".sec7")[0].style.display = "none"
    }
})
$(".sec7").mouseout(function(){
    $(".sec7")[0].style.display = "none"
})    


// 导航吸顶下的二级导航
// 二级导航
$(".navlist2 li").mouseover(function(){
    if($(this).index() === 0){
        $(".sec1-2")[0].style.display = "block"
    }
})
$(".sec1-2").mouseover(function(){
        $(".sec1-2")[0].style.display = "block"
})
$(".navlist2 li").mouseout(function(){
    if($(this).index() === 0){
        $(".sec1-2")[0].style.display = "none"
    }
})
$(".sec1-2").mouseout(function(){
    $(".sec1-2")[0].style.display = "none"
})       
// sec2-2
$(".navlist2 li").mouseover(function(){
    if($(this).index() === 1){
        $(".sec2-2")[0].style.display = "block"
    }
})
$(".sec2-2").mouseover(function(){
        $(".sec2-2")[0].style.display = "block"
})
$(".navlist2 li").mouseout(function(){
    if($(this).index() === 1){
        $(".sec2-2")[0].style.display = "none"
    }
})
$(".sec2-2").mouseout(function(){
    $(".sec2-2")[0].style.display = "none"
})    
// sce3
$(".navlist2 li").mouseover(function(){
    if($(this).index() === 2){
        $(".sec3-2")[0].style.display = "block"
    }
})
$(".sec3-2").mouseover(function(){
        $(".sec3-2")[0].style.display = "block"
})
$(".navlist2 li").mouseout(function(){
    if($(this).index() === 2){
        $(".sec3-2")[0].style.display = "none"
    }
})
$(".sec3-2").mouseout(function(){
    $(".sec3-2")[0].style.display = "none"
})
// sec4-2
$(".navlist2 li").mouseover(function(){
    if($(this).index() === 3){
        $(".sec4-2")[0].style.display = "block"
    }
})
$(".sec4-2").mouseover(function(){
        $(".sec4-2")[0].style.display = "block"
})
$(".navlist2 li").mouseout(function(){
    if($(this).index() === 3){
        $(".sec4-2")[0].style.display = "none"
    }
})
$(".sec4-2").mouseout(function(){
    $(".sec4-2")[0].style.display = "none"
})    
// sec5-2
$(".navlist2 li").mouseover(function(){
    if($(this).index() === 4){
        $(".sec5-2")[0].style.display = "block"
    }
})
$(".sec5-2").mouseover(function(){
        $(".sec5-2")[0].style.display = "block"
})
$(".navlist2 li").mouseout(function(){
    if($(this).index() === 4){
        $(".sec5-2")[0].style.display = "none"
    }
})
$(".sec5-2").mouseout(function(){
    $(".sec5-2")[0].style.display = "none"
})    
// sec6-2
$(".navlist2 li").mouseover(function(){
    if($(this).index() === 5){
        $(".sec6-2")[0].style.display = "block"
    }
})
$(".sec6-2").mouseover(function(){
        $(".sec6-2")[0].style.display = "block"
})
$(".navlist2 li").mouseout(function(){
    if($(this).index() === 5){
        $(".sec6-2")[0].style.display = "none"
    }
})
$(".sec6-2").mouseout(function(){
    $(".sec6-2")[0].style.display = "none"
})    
// sec7-2
$(".navlist2 li").mouseover(function(){
    if($(this).index() === 6){
        $(".sec7-2")[0].style.display = "block"
    }
})
$(".sec7-2").mouseover(function(){
        $(".sec7-2")[0].style.display = "block"
})
$(".navlist2 li").mouseout(function(){
    if($(this).index() === 6){
        $(".sec7-2")[0].style.display = "none"
    }
})
$(".sec7-2").mouseout(function(){
    $(".sec7-2")[0].style.display = "none"
})    

// 轮播图
let n = 0;	//代表当前在第几张 
let liList = document.querySelectorAll(".imgwrap a")
let dotWrap = $("#dotWrap")[0]
let ul = $(".imgwrap")[0]
// console.log(ul)
for(let i = 0; i < liList.length;i++){
    let dot = document.createElement("li");
    dotWrap.appendChild(dot)
}
$("#dotWrap li")[0].className = "focus"
$("#dotWrap li").mouseover(function(){
    n = $(this).index()
    $("#dotWrap li").removeClass("focus");
    $(this).addClass("focus");
    console.log($(this))
    if(n === 0){
        ul.style.marginLeft = -1200 + "px"
        var autoPlay = setInterval(function(){
            let o = parseInt(ul.style.marginLeft)
            if(o >= 0){
                clearInterval(autoPlay)
            }
            ul.style.marginLeft = o + 5 + "px"
        },16) 
    }
    else{
        ul.style.marginLeft = 0
        var autoPlay = setInterval(function(){
            let o = parseInt(ul.style.marginLeft)
            if(o <= -1200){
                clearInterval(autoPlay)
            }
            ul.style.marginLeft = o - 5 + "px"
        },16) 
    }
})
    ul.style.marginLeft = 0
var autoPlay = setInterval(function(){
    let o = parseInt(ul.style.marginLeft)
    
    ul.style.marginLeft = o - 5 + "px"
    if(o===1200){
        $("#dotWrap li")[1].addClass("focus");
    }
    if(o <= -1200){
        ul.style.marginLeft = 0;
        $("#dotWrap li")[0].addClass("focus");
    }
},20)

// 轮播图二
let lilist = document.querySelectorAll(".imglist li")
let cir = $(".cir")[0]
// let ul = $(".imgwrap")[0]
// console.log(ul)
for(let i = 0; i < lilist.length;i++){
    let dot = document.createElement("li");
    cir.appendChild(dot)
}

