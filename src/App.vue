<template>
    <div id="app">
        <div v-for="(compra, key) in compras" :key="key">
            {{compra}}
        </div>
    </div>
</template>

<script>
import getEventos from './api/eventos';

export default {
  name: 'app',
  data() {
    return {
      compras: [1, 2, 3, 4],
    };
  },
  mounted() {
    this.fetchCompras();
  },
  methods: {
    fetchCompras() {
      getEventos((data) => {
        this.compras = data;
      });
    },
  },
};
</script>

<style lang="scss">
</style>
