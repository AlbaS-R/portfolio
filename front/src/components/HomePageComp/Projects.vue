<template>
  <section id="projects">
    <h2>Proyectos</h2>
    
    <article>
      <h3>Proyecto 1: Ejemplo</h3>
      <p>
        Plataforma de comercio electrónico construida con Vue.js y Node.js.
        Incluye carrito de compras, sistema de pagos y panel de administración.
      </p>
      <p>Tecnologías: Vue 3, TypeScript, Express, MongoDB</p>
    </article>
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

article {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}

article h3 {
  color: #333;
  margin-top: 0;
  font-size: 1.2em;
}

article p {
  margin: 10px 0;
  color: #666;
}
</style>
