<script setup>
import Header from '../components/HomePageComp/Header.vue'
import About from '../components/HomePageComp/About.vue'
import Projects from '../components/HomePageComp/Projects.vue'
import Skills from '../components/HomePageComp/Skills.vue'
import Contact from '../components/HomePageComp/Contact.vue'
import Footer from '../components/HomePageComp/Footer.vue'
</script>

<template>
<div class="fondo-contenedor">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <div class="blob blob-4"></div>
  <div class="blob blob-5"></div>
  
  <div class="homepage">
    <Header />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
</div>
  
</template>

<style>
@font-face {
  font-family: 'Ananda';
  src: url('public/fonts/corp/ananda/Ananda-Black-Personal-Use.ttf');
}
@font-face {
  font-family: 'Bbg';
  src: url('public/fonts/corp/girly/Baby Girly.ttf');
}
@font-face {
  font-family: 'TypeWriter';
  src: url('public/fonts/corp/typewrite/typewcond_regular.otf');
}

.homepage {
  color: #000;
}
.app-reset,
html,
body {
  margin: 0;
  height: 100%;
}
.fondo-contenedor {
  position: relative;
  width: 100vw;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: #ffffff; /* Tu fondo blanco base */
  overflow: hidden;
  z-index: 1;
}

/* Estilo base para las figuras difuminadas */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px); /* Más difuminado para un aspecto más mate */
  opacity: 0.45;       /* Matizar intensidad */
  z-index: 0;        /* Colocados por debajo del contenido pero por encima del fondo */
  will-change: transform;
}

/* Elemento 1: Rosa/Morado */
.blob-1 {
  top: -25%;
  left: -25%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, #ff7beb, #9a4eff);
  animation: mover1 24s infinite alternate ease-in-out;
}

/* Elemento 2: Azul/Cian */
.blob-2 {
  bottom: -25%;
  right: -25%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, #4ade80, #3b82f6);
  animation: mover2 28s infinite alternate ease-in-out;
}

/* Elemento 3: Amarillo/Naranja */
.blob-3 {
  top: 35%;
  left: 45%;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, #fde047, #ea580c);
  animation: mover3 22s infinite alternate ease-in-out;
}

/* Elemento 4: Morado claro */
.blob-4 {
  top: 5%;
  right: -10%;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, #c084fc, #7c3aed);
  animation: mover4 26s infinite alternate ease-in-out;
}

/* Elemento 5: Verde suave */
.blob-5 {
  bottom: -10%;
  left: -15%;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, #86efac, #34d399);
  animation: mover5 32s infinite alternate ease-in-out;
}

.homepage {
  position: relative;
  z-index: 2; /* Asegura que el contenido esté por encima de los blobs animados */
}

/* --- ANIMACIONES DE MOVIMIENTO ORGÁNICO --- */
@keyframes mover1 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(150px, 80px) scale(1.2); }
}

@keyframes mover2 {
  0% { transform: translate(0, 0) scale(1.1); }
  100% { transform: translate(-120px, -100px) scale(0.9); }
}

@keyframes mover3 {
  0% { transform: translate(0, 0) scale(0.9); }
  100% { transform: translate(-80px, 120px) scale(1.1); }
}

@keyframes mover4 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(60px, -40px) scale(1.05); }
  100% { transform: translate(-40px, 50px) scale(0.95); }
}

@keyframes mover5 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(100px, -30px) scale(1.12); }
}

/* Estilo extra para el texto del contenido */
.contenido {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: sans-serif;
  color: #333333;
}
</style>