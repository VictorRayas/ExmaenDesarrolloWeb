<script setup>
</script>

<template>
  <b-container>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Formulario</h1>

    <form id="app" @submit="checkForm" action="#" method="post">
      <div class="row">
        <p v-if="errors.length">
          <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        </p>


        <div class="col-md-6">
          <label for="marca">Marca</label><br>
          <input style="width: 100%;" type="text" name="marca" id="marca" v-model="marca">
        </div>
        <div class="col-md-6">
          <label for="modelo">Modelo</label><br>
          <input style="width: 100%;" type="text" name="modelo" id="modelo" v-model="modelo">
        </div>

        <div class="col-md-6">
          <label for="anio">Año de Fabricacion</label><br>
          <input style="width: 100%;" type="number" name="anio" id="anio" v-model="anio">
        </div>

        <div class="col-md-4">
          <label for="numero">Número de serie</label><br>
          <input style="width: 100%;" type="text" name="numero" id="numero" v-model="numero">
        </div>
      </div>


      <p>
        <input type="submit" value="Enviar">
      </p>
    </form>


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
          to: "formulario"
        },
        {
          text: "Paginacion",
          href: "#",
          to: "paginacion"
        },
        {

          href: "#",

        },

      ],
      errors: [],
      marca: null,
      anio: null,
      numero: null,
      modelo: null,

    };
  },
  methods: {
    checkForm: function (e) {

      this.errors = [];
      console.log(this.anio)
      console.log(this.marca)
      console.log(this.modelo)
      console.log(this.numero)

      if (!this.marca) {
        this.errors.push("El año es obligatorio.");
      }
      if (!this.anio) {
        this.errors.push("El año es obligatorio.");
        if (parseInt(this.anio) >2024) {
          this.errors.push("El año no debe de ser mayor a este año.");
        }
      }
      if (!this.numero) {
        this.errors.push("El numero  es obligatorio.");
      }
      if (!this.modelo) {
        this.errors.push("El numero  es obligatorio.");
      }

      e.preventDefault();

      const url ="http://localhost:8080/api/vehiculos"

      const jsonData = {
        brand: this.marca,
        model:this.modelo,
        serie: this.numero,
        year: this.aniox  
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      };




      function miPromesa() {

  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
     
      const exito = true;
      fetch(url, options)
        .then(response => {  
          if (response.ok) {
            return response.json(); // Devuelve los datos en formato JSON
          }
          throw new Error('Error en la solicitud POST');
        })
        .then(data => {
          console.log('Respuesta:', data);
        })
        .catch(error => {
          console.error('Error:', error);

        });
   
      if (exito) {
        
        resolve('¡La operación se completó con éxito!');
      } else {
    
        reject(new Error('¡La operación falló!'));
      }
    }, 2000); 
  });
}


miPromesa()
  .then(resultado => {
 
    console.log(resultado);
  })
  .catch(error => {
 
    console.error(error);
  });



      
    }



  }

}
</script>
<style scoped></style>
