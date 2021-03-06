<template>
  <footer id="footer" class="container w-full text-center border-t border-grey p-4 pin-b">
      <div class="container">
    <p class="item1">Made with</p>&nbsp;
    <img class="item2" alt="Vue logo" src="../assets/logo.png" />
    <p class="item3">ue.js by Anthony Gilbert</p>
      </div>
  </footer>
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

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}

.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>