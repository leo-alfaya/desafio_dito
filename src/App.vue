<template>
    <div id="app">
        <p v-for="(compra, key) in compras" :key="key">{{compra}}</p>
    </div>
</template>

<script>
import getEventos from './api/eventos';
import formatCustomData from './util/helpers';

export default {
  name: 'app',
  data() {
    return {
      compras: [],
    };
  },
  mounted() {
    this.fetchCompras();
  },
  methods: {
    fetchCompras() {
      getEventos((data) => {
          console.log(data)
        this.compras = data.events.map((event) => {
          let compra = event
          compra.custom_data = formatCustomData(event.custom_data);
          return compra
        });
      });
    },
  },
};
</script>

<style lang="scss">
</style>
