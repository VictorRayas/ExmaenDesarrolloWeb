<template>
 <b-container  style="top: -240px;">
    <b-breadcrumb :items="items"></b-breadcrumb>
  <h1>Paginacion</h1>
  </b-container>
  
</template>
<script>
export default {
data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#",
          to: "/",
        },
        {
          text: "Formulario",
          href: "#",
          to:"formulario"
        },
        {
          text: "Paginacion",
          href: "#",
          to:"paginacion"
        },
        {
        },
        
      ]
    };
}
}
</script>
<style scoped>
</style>
