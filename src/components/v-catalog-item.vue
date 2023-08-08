<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item_image"
      :src="require('../assets/images/' + product_data.image)"
      alt="pic"
    />
    <p class="v-catalog-item_name">{{ product_data.name }}</p>
    <p class="v-catalog-item_price">{{ product_data.price }}</p>
    <p class="v-catalog-item_price">{{ product_data.about }}</p>
    <button class="v-catalog-item_add_to_cart_btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    addToCart () {
      this.$emit('add-to-cart', this.product_data)
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 40%;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
}
.v-catalog-item_image {
  width: 160px;
  display: block;
  margin: 0 auto;
}
</style>
