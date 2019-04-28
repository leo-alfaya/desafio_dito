<template>
  <div class="buyout-page">
    <Buyout />
  </div>
</template>

<script>
import Buyout from '../components/Buyout/index.vue';

export default {
  name: 'BuyoutPage',
  components: {
    Buyout,
  },
};
</script>

<style lang="scss">
.buyout-page {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
