/**
 * Created by lenovo on 17/12/5 005.
 */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
var mp3 = document.querySelector("#mp3");
var mp3Bnt =document.querySelector("#mp3Btn");

mp3Bnt.onclick =function (){
    if(mp3.paused){
         mp3Bnt.style.animationPlayState ="running";
        mp3.play();
    }else{
        mp3Btn.style.animationplaystate ="paused";
        mp3.pause();
    }
}



