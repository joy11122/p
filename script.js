 gsap.to("footer",{duration:2, y:0, x:0, rotation:360, top:0,  scale:1.1,ease:"power2"});
 gsap.to(".line",{duration:4, y:0, x:1200,ease:"power2"});
 gsap.fromTo(".hero",{ y:"-100%"},{y:"0%",duration:1,ease:"bounce"});
 
 gsap.fromTo(".full",{ y:"-100%"},{y:"0%",duration:2,ease:"bounce.easeOut"});
 gsap.fromTo(".para",{ x:"-100%"},{x:"0%",duration:2,ease:"bounce.easeOut"});
 gsap.fromTo(".centerdiv",{ x:"-1000%"},{x:"0%",duration:3,ease:"bounce.easeOut"});