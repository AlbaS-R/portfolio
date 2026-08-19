<template>
  <header>
    <h1>Alba Sánchez</h1>
    <p>Desarrollador Full Stack | Frontend & Backend</p>
    <nav>
      <a href="#about">Sobre mí</a>
      <a href="#projects">Proyectos</a>
      <a href="#skills">Habilidades</a>
      <a href="#contact">Contacto</a>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>

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


header {
 
  padding: 40px 20px;
  border-bottom: 1px solid #ccc;
}

header h1 {
  font-family: 'Ananda', sans-serif;
  font-size: 4.5em;
  color: #333;
  animation: fadeIn .9s ease-out forwards;
}

@keyframes fadeIn {
from {
opacity: 0;
transform: translateX(-30px);
}
to {
opacity: 1;
transform: translateX(0);
}
}

header p {
  font-family: 'TypeWriter', sans-serif;
  margin-top: -4%;
  font-size: 1.2em;
  color: #666;
  animation: fadeIn .9s ease-out forwards;
}

nav {
  display: flex;
  gap: 17px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeNav .9s ease-in;
}
@keyframes fadeNav {
from {
opacity: 0;
}
to {
opacity: 1;
}
}

nav a {
  color: rgb(51, 51, 51);
  text-decoration: none;
  
  padding: 4px 20px 10px;
  border-radius: 50px;
  border: 1px solid #dadadae3;
  background: #fafafa70;
  font-family: 'TypeWriter', sans-serif;
  font-size: 1.3rem;
  transition: all 0.2s;
  cursor: pointer;
}


nav a:hover {
  background: #d3affc70;
  border: 1px solid #d3affc70;
}
</style>
