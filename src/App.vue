<template>
  <div id="app">
    <Conversor moedaA="USD" moedaB="BRL"/>
    <Conversor moedaA="BRL" moedaB="USD"/>
    <Conversor moedaA="BRL" moedaB="CAD"/>
    <Conversor moedaA="BRL" moedaB="EUR"/>
    <Conversor moedaA="USD" moedaB="EUR"/>
    <Conversor moedaA="USD" moedaB="CAD"/>
    <Conversor moedaA="USD" moedaB="QAR"/>
    <Conversor moedaA="BRL" moedaB="JPY"/>
  </div>
</template>

<script>
import Conversor from './components/Conversor.vue'

export default {
  name: 'app',
  components: {
    Conversor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
