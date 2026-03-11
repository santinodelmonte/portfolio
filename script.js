document.addEventListener("DOMContentLoaded", function(){

AOS.init();

new Typed(".typing",{
strings:[
"Desarrollador Full Stack",
"Apasionado por el Backend",
"Creando soluciones digitales"
],
typeSpeed:60,
backSpeed:40,
loop:true
});

particlesJS("particles-js", {
particles: {
number: { value: 70 },
color: { value: "#000000" },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 3 },
line_linked: {
enable: true,
distance: 150,
color: "#000000",
opacity: 0.4,
width: 1
},
move: {
enable: true,
speed: 2
}
},
interactivity: {
events: {
onhover: {
enable: true,
mode: "repulse"
}
},
modes: {
repulse: {
distance: 100
}
}
}
});

});
