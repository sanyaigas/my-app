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
    <button class="v-catalog-item_add_to_cart_btn" @click="sendDataToParent">
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
    sendDataToParent () {
      this.$emit('send-data-to-parent', this.product_data.article)
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px grey;
  padding: 20px;
  margin: 20px;
  &_image {
    max-width: 100px;
  }
}
</style>
