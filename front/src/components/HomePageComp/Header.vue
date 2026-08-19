<template>
  <header>
    <div class="header-controls">
      <div class="social-icons">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <font-awesome-icon :icon="['fab','github']" />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <font-awesome-icon :icon="['fab','linkedin']" />
        </a>
      </div>

      <button class="theme-toggle" @click="toggleTheme" :aria-pressed="theme==='dark'" :title="theme==='dark' ? 'Modo claro' : 'Modo oscuro'">
        <span v-if="theme==='light'">☀️</span>
        <span v-else>🌙</span>
      </button>
    </div>

    <div class="intro">
      <h1>Alba Sánchez</h1>
      <p>Frontend Developer | UI Enthusiast</p>
    </div>

    <nav>
      <a href="#about">Sobre mí</a>
      <a href="#projects">Proyectos</a>
      <a href="#skills">Habilidades</a>
      <a href="#contact">Contacto</a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin)

const theme = ref(localStorage.getItem('theme') || 'light')

function applyTheme(t) {
  const el = document.documentElement
  if (t === 'dark') el.classList.add('dark')
  else el.classList.remove('dark')
  localStorage.setItem('theme', t)
  theme.value = t
}

function toggleTheme() {
  applyTheme(theme.value === 'light' ? 'dark' : 'light')
}

onMounted(() => applyTheme(theme.value))
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
  padding: 0px 20px;
}
.header-controls {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
  margin-bottom: 10px;
}
.social-icons {
  display: flex;
  gap: 10px;
}
.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #333;
  transition: color .15s;
}
.social-icons a:hover { color: #6b46c1 }
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
}

.intro {
  background: linear-gradient(to right, #d3affcbb, #f5b7b7bd);
  padding: 20px 110px 20px 110px;
  margin-left: -130px;
  width: 50%;
  border-radius: 150px;
  animation: fadeIn .9s ease-out forwards;
}

.intro h1, .intro p {
  margin-left: 10%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

header h1 {
  font-family: 'Ananda', sans-serif;
  font-size: 4.5em;
  color: #333;
  animation: fadeIn .9s ease-out forwards;
}

@keyframes fadeIn {
from { opacity: 0; transform: translateX(-30px); }
to { opacity: 1; transform: translateX(0); }
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
  margin-top: 30px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeNav .9s ease-in;
}
@keyframes fadeNav { from { opacity: 0 } to { opacity: 1 } }

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

nav a:hover { background: #d3affc70; border: 1px solid #d3affc70 }

</style>
