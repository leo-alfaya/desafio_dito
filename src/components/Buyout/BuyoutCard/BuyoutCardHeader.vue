<template>
  <div class="card-header">
    <div class="arrow-left"></div>
    <div class="item">
      <img src="/icons/calendar.svg" alt="icone calendário">
      <span>{{date}}</span>
    </div>
    <div class="item">
      <img src="/icons/clock.svg" alt="icone relógio">
      <span>{{hour}}</span>
    </div>
    <div class="item">
      <img src="/icons/place.svg" alt="icone marcação lugar">
      <span>{{store_name}}</span>
    </div>
    <div class="item">
      <img src="/icons/money.svg" alt="icone saco dinheiro">
      <span>{{value}}</span>
    </div>
  </div>
</template>

<script>
import currencyValue from '../../../util/formatHelpers';

const moment = require('moment');

moment.locale('pt-BR');

export default {
  name: 'BuyoutCardHeader',
  props: {
    timestamp: String,
    store_name: String,
    revenue: Number,
  },
  computed: {
    date() {
      return moment(this.timestamp).format('L');
    },
    hour() {
      return moment(this.timestamp).format('H:mm');
    },
    value() {
      return currencyValue(this.revenue);
    },
  },
};
</script>

<style lang="scss">
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  position: relative;

  .arrow-left {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid white;
    position: absolute;
    left: -15px;
  }

  .item {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #171717;

    img {
      height: 20px;
      margin-right: 5px;
    }

    span {
      height: 20px;
    }
  }
}
</style>
