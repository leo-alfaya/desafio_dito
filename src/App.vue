<template>
    <div id="app">
        <p v-for="(buyout, key) in buyouts" :key="key">{{buyout}}</p>
    </div>
</template>

<script>
import getEvents from './api/events';
import { prepareBuyouts } from './util/helpers';

export default {
  name: 'app',
  data() {
    return {
      buyouts: [],
    };
  },
  mounted() {
    this.fetchBuyouts();
  },
  methods: {
    fetchBuyouts() {
      getEvents((events) => {
        this.buyouts = prepareBuyouts(events);
      });
    },
  },
};
</script>

<style lang="scss">
</style>
