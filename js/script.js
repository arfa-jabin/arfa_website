// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Sections fade-in
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        opacity:0, y:50, duration:1,
        scrollTrigger:{trigger:section, start:"top 80%", toggleActions:"play none none none"}
    });
});

// Skill bars animate
gsap.utils.toArray(".skill-fill").forEach(bar => {
    gsap.to(bar, {
        width: bar.dataset.percent, duration:1.5,
        scrollTrigger:{trigger:bar, start:"top 80%", toggleActions:"play none none none"}
    });
});

// Project hover effect
document.querySelectorAll(".project").forEach(proj => {
    proj.addEventListener("mouseenter", ()=>{gsap.to(proj,{scale:1.05,duration:0.3});});
    proj.addEventListener("mouseleave", ()=>{gsap.to(proj,{scale:1,duration:0.3});});
});
