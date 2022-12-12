
/*Header Section Javascript codes start*/
var nav=document.querySelector("nav");
var nav_container=document.querySelector("nav .nav__container");
var logo=document.querySelector(".logo");
var nav_li=document.querySelectorAll('nav ul li');
var nav_last_li=document.querySelector('nav ul li:last-child');
var nav_last_li_a=nav_last_li.querySelector("a");
var nav_last_li_a_icon=document.querySelector("nav ul li a .fa-plus");
var scrollToTopBtn=document.querySelector(".scroll_to_top");

window.onscroll=function(){
    function showScrollTopBtn(){
        if(window.scrollY>500){
           scrollToTopBtn.classList.add("active");
        }else{
            scrollToTopBtn.classList.remove("active")
        }
    }
    showScrollTopBtn();
    if(window.scrollY>10){
        nav_li.forEach(function(li){
            li.querySelector("a").style.color="#2a2a2a";
        })
       
       
        Object.assign(nav_last_li.style, {
            "background-color":"#8D99AF",
            "color":"#fff"
        });
        Object.assign(nav_last_li_a.style,{
            "color":"#fff"
        })
        
        Object.assign(nav.style,{
            "background":"#fff",
            "box-shadow":"2px 2px 4px 2px rgba(0,0,0,0.4)",
            "border-bottom":"none"
        })
        Object.assign(nav_container.style,{
            "padding":"0.5rem 0"
        })
        logo.querySelector("img").src="./assets/images/logo.png";
        Object.assign(nav_last_li_a_icon.style,{
            "background":"#fff",
            "color":"#2a2a2a"
        })
        
    }else{
        nav_li.forEach(function(li){
            li.querySelector("a").style.color="#fff";
        })
        Object.assign(nav.style,{
            "background":"transparent",
            "box-shadow":"none",
            "border-bottom":"1px solid rgb(167, 165, 165)"

        })
        logo.querySelector("img").src="./assets/images/logo.png";

        Object.assign(nav_last_li.style, {
            "background-color":"#fff",
            "color":"#2a2a2a"
        });
        Object.assign(nav_last_li_a.style,{
            "color":"#2a2a2a"
        })
        Object.assign(nav_last_li_a_icon.style,{
            "background":"#bf0000",
            "color":"#fff"
        })
        Object.assign(nav_container.style,{
            "padding":"1.1rem 0"
        })
      
    }
}

/*Header Section javascript codes end here...*/
/*============x==============x================x=================*/
/*Tabs Script Start ---------------------------------*/
const single__buttons=document.querySelectorAll(".single__button");
const category__tab__contents__inners=document.querySelectorAll(".category__tab__contents__inner");
single__buttons.forEach(function(singleBtn){
    singleBtn.addEventListener("click",function(e){
        e.preventDefault();
        single__buttons.forEach(function(singleBtn){
           singleBtn.classList.remove("active");
        })
        this.classList.add("active");
        let targetedData=this.dataset.contentTarget;
        category__tab__contents__inners.forEach(function(inner_content){
            inner_content.classList.remove("active");
        })
        category__tab__contents__inners.forEach(function(contentInner){
             contentInner.querySelectorAll(".single__content").forEach(function(singleContent){
                singleContent.classList.remove("active");
                 if(singleContent.dataset.contentType==targetedData){
                     singleContent.classList.add("active");
                     singleContent.closest('.category__tab__contents__inner').classList.add("active");
                 }
             })
        })
    })
})
/*Tabs Script End Here ---------------------------------*/

/*owl carousel initialize start*/
$(".owl-carousel").owlCarousel({
    items:1,
    slideSpeed : 200,
    loop:true,
    nav:false,
    dots:true,
    autoplay:true
 
})
/*owl carousel initialize end*/



function scrollToTop(){
     window.scrollTo({
         top:0,
         left:0,
         behavior: 'smooth'
     })
}
