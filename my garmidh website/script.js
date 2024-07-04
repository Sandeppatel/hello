document.addEventListener("DOMContentLoaded", function () {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    // Update ScrollTrigger when Locomotive Scroll updates
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set ScrollTrigger to use Locomotive Scroll's scroll position
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger and LocomotiveScroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Split text into spans for animation
    var texth1 = document.querySelector("#texth1").textContent;
    var h1text = texth1.split("");
    var count = "";
    h1text.forEach((val) => {
        count += `<span>${val}</span>`;
    });
    document.querySelector("#texth1").innerHTML = count;

    // GSAP timeline animation
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: -1000,
        duration: 0.5,
        stagger: 0.5,
    });

    tl.from(".lefts img", {
        y: -1000,
        duration: 1,
    });
    tl.from(".lefts h1", {
        y: -1000,
        duration: 0.5,
        stagger: 0.1,
    });

    // Page2 text split and animation
    var page2h1 = document.querySelector("#page2one h1").textContent;
    var h1page2 = page2h1.split("");
    var container = "";
    h1page2.forEach((val) => {
        container += `<span>${val}</span>`;
    });
    document.querySelector("#page2one h1").innerHTML = container;

    gsap.to("#page2one h1 span", {
        color: "red",
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page2one h1",
            // markers: true,
            start: "top 10%",
            
            scrub: true,
        },
    });

    gsap.to("#page1 #leftone h1", {
        color: "red",
        opacity : 0,
        stagger: 0.2,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#leftone h1",
            // markers: true,
            start: "top 15%",
            end: "top -30%",
            scrub: 2,
        },
    });


  var p =   document.querySelector("#page1 p").textContent 
  var pone = p.split("");
  var connter = "";
  pone.forEach((val) => {
      connter += `<span>${val}</span>`;
  });
  document.querySelector("#page1 p").innerHTML = connter;


  gsap.to("#page1 p span", {
    color : "#FCA12E",
    stagger: 0.1,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page1 p",
        // markers: true,
        start: "top 30%",
        end : "top 10%",
        scrub: true,
    },
});



    // Add event listener for 'change' event on the select elements
    document.querySelectorAll("#mySelect1, #mySelect2, #mySelect3").forEach(select => {
        select.addEventListener("change", function () {
            var selectedValue = select.value;
            console.log("Selected value:", selectedValue);
            alert("You selected: " + selectedValue);
        });
    });
});
