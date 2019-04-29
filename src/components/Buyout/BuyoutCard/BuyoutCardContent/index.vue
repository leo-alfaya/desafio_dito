<template>
  <div class="card-content">
    <div class="products">
      <div class="products-row header">
        <span>Produto</span>
        <span>Preço</span>
      </div>
      <div class="products-row" v-for="(product, key) in products" :key="key">
        <span>{{product.product_name}}</span>
        <span>{{formatCurrency(product.product_price)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { currencyValue } from '../../../../util/formatHelpers';

export default {
  name: 'BuyoutCardContent',
  methods: {
    formatCurrency(value) {
      return currencyValue(value);
    },
  },
  props: {
    products: Array,
  },
};
</script>

<style lang="scss">
.card-content {
  width: 100%;
  padding: 0 25px;
  background-color: #f5f5f5;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  .products {
    .products-row {
      width: 100%;
      border-bottom: 1px solid #cecece;
      padding: 20px 0;
      display: flex;

      span {
        font-size: 18px;
        font-weight: 400;
        flex: 1 0 25%;

        &:first-child {
          flex: 0 0 75%;
        }
      }

      &.header {
        span {
          font-weight: 600;
        }
      }

      &:last-child {
        border: none;
      }
    }
  }
}
</style>
