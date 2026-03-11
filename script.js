AOS.init({
duration:1000,
once:true
});

var typed = new Typed(".typing", {
strings:[
"Desarrollador Full Stack",
"Creando soluciones digitales",
"Sitios web y aplicaciones modernas"
],
typeSpeed:50,
backSpeed:30,
loop:true
});

particlesJS("particles-js", {
particles:{
number:{value:60},
size:{value:3},
color:{value:"#0d6efd"},
line_linked:{
enable:true,
distance:150,
color:"#0d6efd",
opacity:0.2,
width:1
},
move:{speed:2}
},
interactivity:{
events:{
onhover:{enable:true,mode:"repulse"}
}
}
});
