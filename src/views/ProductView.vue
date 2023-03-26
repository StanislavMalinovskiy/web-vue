<template>
  <div class="product">
    <h1>Products</h1>
  </div>
</template>


<script>
import axios from 'axios';


export default {
  name: 'ProductView',
  props: {
    delay: {
      default: 3
    }
  },
  data() {
    return {
      msg: ''
    };
  },
  mounted() {

    try {

      // this.$axios.get(`http://192.168.1.104:9091/product`)
      //     .then((val) => {
      //       console.log('9091/product')
      //       console.log(val.data)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })
      //
      //
      // this.$axios.get(`http://192.168.1.104:9090/product`)
      //     .then((val) => {
      //       console.log('9090/product')
      //       console.log(val.data)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })
      //
      // this.$axios.get(`http://192.168.1.104:9090/item`)
      //     .then((val) => {
      //       console.log('9090/item')
      //       console.log(val.data)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })
    } catch (e) {
      console.error(e)
    }

  }

};

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
