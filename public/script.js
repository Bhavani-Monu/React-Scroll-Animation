import gsap from "gsap";

function runAnimation(){
    $('.word').each(function(index){
        let triggerElement = $(this);
        let targetElement = $(this).find(".word-mask");
    
        let tl = gsap.timeline({
            scrollTrigger: {
                start: "top center",
                end: "bottom center",
                scrub: 1,
                trigger: triggerElement,
                markers: true,
                toggleActions: "restart none reverse none",
            }
        });
    
        tl.to(targetElement, {
            width: "0%",
            duration: 1,
        });
    });
}

runAnimation();