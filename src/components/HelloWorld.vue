<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div v-if="$apollo.loading">Cargando</div>
    <p v-if="$apollo.queries.getCountryCases.loading" class="text-green-600">Loading facts ...</p>
      <p>output data:</p> {{getCountryCases[0].continent}}

  </div>
</template>

<script>
import gql from "graphql-tag"


export default {
  name: 'HelloWorld',
  apollo: {
    // The actual GraphQL query
    getCountryCases: gql`
      query getCountryCases {
          getCountryCases{
            continent
            country
          }


      }
    `
  },
  
  

  data () {
    return {
      msg: 'Bienvenido al COVID',
      getCountryCases:[]
      
    }
  },
   
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
