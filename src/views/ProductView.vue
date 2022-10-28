<template>
  <div class="product">
    <h1>Products</h1>
  </div>
</template>


<script>
import axios from 'axios';

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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
    window.addEventListener('hashchange', () => {
      console.log('eee')
      this.currentPath = window.location.hash
    })

    axios.get(`http://localhost:9090/product`)
        .then(users => {
          console.log('done')
          const i = randInt(users.length);
          this.msg = users[i].first_name
        })

    axios.get(`http://localhost:9090/product2`)
        .then(resp => resp.data.data)
        .then(users => {
          console.log('done2')
          const i = randInt(users.length);
          this.msg = users[i].first_name
        })

    axios.get(`http://localhost:9090/sss`)
        .then(users => {
          console.log('done sss' + users)

        })
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
