<template>
  <div class="v-main-wrapper">
      <router-view></router-view>
    <!-- <vCatalog />
    <vCart v-if="CART.length" :cart_data="CART" /> -->
  </div>
</template>

<script>
// import vCatalog from './v-catalog.vue'
// import vCart from './v-cart.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  // components: { vCatalog, vCart },
  props: {},
  data () {
    return {
      title: 'hello!'
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {},
  watch: {},
  mounted () {
    console.log('Hello, I am here!')
  }
}
</script>

<style>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
