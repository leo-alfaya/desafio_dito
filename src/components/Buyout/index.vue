<template>
  <div class="buyout">
    <BuyoutCard
      v-for="buyout in buyouts"
      :buyout="buyout"
      :key="buyout.transaction_id" />
  </div>
</template>

<script>
import getEvents from '../../api/events';
import { prepareBuyouts } from '../../util/buyouts_helpers';
import BuyoutCard from './BuyoutCard/index.vue';

export default {
  name: 'Buyout',
  components: {
    BuyoutCard,
  },
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
.buyout {
  width: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 100px 0;
  padding: 40px;
  border-left: 1px solid grey;
}
</style>
