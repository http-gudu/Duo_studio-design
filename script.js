function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
var mediaElements = document.querySelectorAll(".page3 img, .page3 video");
document.addEventListener("mousemove",function(dets){
    crsr.style.transition = "transform 0.5s ease-out";
    crsr.style.transform = `translate(${dets.x + 2}px, ${dets.y + 2}px)`;
    
})

mediaElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
        crsr.style.transform += " scale(2)";
    });
    element.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)";
    });
});
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 25%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1",{
    x:-80,
},"bokahoda")
tl.to(".page1 h2",{
    x:70,
},"bokahoda")
tl.to(".page1 video",{
    width:"90%"
},"bokahoda")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -75%",
        end:"top -100%",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -440%",
        end:"top -450%",
        scrub:3
    }
})
tl3.to(".main",{
    backgroundColor:"#111"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "400px"
        crsr.style.height = "350px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "15px"
        crsr.style.height = "15px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})


var h4 = document.querySelectorAll(".nav h4")
var purple = document.querySelector(".purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})