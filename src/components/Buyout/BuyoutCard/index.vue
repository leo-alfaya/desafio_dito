<template>
  <div class="card">
    <BuyoutCardHeader
      :timestamp="buyout.timestamp"
      :store_name="buyout.store_name"
      :revenue="buyout.revenue"
    />
    <BuyoutCardContent
      :products="buyout.products"
    />
  </div>
</template>

<script>
import BuyoutCardHeader from './BuyoutCardHeader.vue';
import BuyoutCardContent from './BuyoutCardContent/index.vue';

export default {
  name: 'BuyoutCard',
  components: {
    BuyoutCardHeader,
    BuyoutCardContent,
  },
  props: {
    buyout: Object,
  },
};
</script>

<style lang="scss">
.card {
  width: 100%;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 10px;
  position: relative;
  -webkit-box-shadow: 0px 0px 30px 1px rgba(171,171,171,.4);
  -moz-box-shadow: 0px 0px 30px 1px rgba(171,171,171,.4);
  box-shadow: 0px 0px 30px 1px rgba(171,171,171,.4);

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background-image: url('/icons/check.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    top: 15px;
    left: -60px;
    position: absolute;
  }
}
</style>
