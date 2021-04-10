<template>
  <div>
    <Aboutme />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Aboutme from '../components/Aboutme.vue'
import Header from '../components/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Aboutme,
  },
})
</script>

<style>
h1 {
  color: azure;
  text-align: center;
}
body {
  position: absolute;
  width: 100%;
  height: 25%;
  background-image: url('https://cdn.pixabay.com/photo/2019/11/14/13/01/abstract-4626113_960_720.jpg');
  background-size: cover;
  background-position: center;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}



.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #3b8070;
  word-spacing: 5px;
  padding-bottom: 15px;
}


</style>
