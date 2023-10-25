$(document).ready(function(){



    //메뉴 
    
    // $('.gnb>ul>li').mouseover(function(){
    //    $('.subm').stop().slideDown();
    // }).mouseout(function(){
    //    $('.subm').stop().slideUp();
    // }); 




    //bx 슬라이드

        $(".slide_wrap").bxSlider({
            mode: 'horizontal',  //vertical은 수직으로, horisontal 수평으로
            speed:700, //슬라이드전환속도 
            auto:true,  //자동실행여부
            pager:true,  //동그라미 버튼 노출 여부 
            moveSlides:1,  //슬라이드 이동시 개수 (자주 쓰이진 않음)
            infiniteLoop:true, //무한반복 
            minSlides:8, //슬라이드 최소 노출개수
            maxSlides:8, //슬라이드 최대 노출개수
            controls:true, //이전, 다음 버튼 노출
            autoHover:false, // 호버시 애니메니션 정지여부
        });
    

})//마무리

