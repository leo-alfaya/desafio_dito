<template>
    <div id="app">
      <BuyoutPage />
    </div>
</template>

<script>
import BuyoutPage from './layouts/BuyoutPage.vue';

export default {
  name: 'app',
  components: {
    BuyoutPage,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  background-color: #ececec;
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
