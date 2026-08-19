<template>
  <section id="skills">
    <h2>Habilidades</h2>
    
    <div>
      <h3>Frontend</h3>
      <ul>
        <li>Vue.js 3</li>
        <li>React</li>
        <li>HTML5 & CSS3</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    <div>
      <h3>Backend</h3>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Python</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    </div>

    <div>
      <h3>Herramientas</h3>
      <ul>
        <li>Git & GitHub</li>
        <li>Docker</li>
        <li>Visual Studio Code</li>
        <li>Postman</li>
        <li>Vite</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
section {
  max-width: 900px;
  margin: 40px auto;
  padding: 25px 20px;
}

h2 {
  font-size: 1.8em;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

div {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}

h3 {
  color: #333;
  margin-top: 0;
  font-size: 1.2em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 8px 0;
  color: #666;
  padding-left: 20px;
  position: relative;
}

li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #333;
}
</style>
