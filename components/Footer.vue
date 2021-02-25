<template>
  <div id="footer" class="container">
    <p class="item1">Made with</p>&nbsp;
    <img class="item2" alt="Vue logo" src="../assets/logo.png" />
    <p class="item3">ue.js by Anthony Gilbert</p>
  </div>
</template>


<script>
export default {}
</script>

<style scoped>
#footer {
  background-color: rgb(162, 160, 160);
  min-width: 100%;
}
img {
  width: 20px;
}


.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>