<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome/>
  </main>
</template>
<script>
import axios from 'axios';
import {createApp} from "vue";


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
    // let instance = createApp();
    // console.log(instance);
    // console.log(this.$axios);
    try {
      //
      // this.$axios.get(`http://192.168.1.104:9091/product`)
      //     .then((val) => {
      //       console.log('9091/product')
      //       console.log(val.data)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })


      this.$axios.get(`http://192.168.1.104:9090/product`)
          .then((val) => {
            console.log('9090/product')
            console.log(val.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      //
      // this.$axios.get(`http://192.168.1.104:9090/item`)
      //     .then((val) => {
      //       console.log('9090/item')
      //       console.log(val.data)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })
      //
      this.$axios.get(`http://192.168.1.104:9090/`)
          .then((val) => {
            console.log(val.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      //
      // this.$axios.get(`http://192.168.1.104:9090/test`)
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