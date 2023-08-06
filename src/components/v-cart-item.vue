<template>
    <div class="v-cart-item">
      <vCatalog />
      <vCart />
    </div>
  </template>
  
  <script>
  import vCatalog from './v-catalog.vue'
  import vCart from './v-cart.vue'
  
  export default {
    name: 'v-cart-item',
    components: { vCatalog, vCart },
    props: {},
    data () {
      return {
        title: 'hello!'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted () {
      console.log('Hello, I am here!')
    }
  }
  </script>
  
  <style lang="scss">
  .v-cart-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 25%;
    box-shadow: 0 0 8px grey;
    padding: 20px;
    margin: 20px;
  }
  </style>
  