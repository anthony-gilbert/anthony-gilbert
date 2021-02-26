<template>
  <div class="container">
    <div>
      <h1 class="title">
        Anthony Gilbert
      </h1>
      <hr>
      <div class="links">
        <a
          href="/projects"
          rel="noopener noreferrer"
          class="button--green"
        >
          Projects
        </a>
        <a
          href="/blog"
          rel="noopener noreferrer"
          class="button--green"
        >
          Blog
        </a>
      </div>
    </div>
  </div>

<header class="blog-header py-3 container bg-gray-500">
        <div class="row flex-nowrap justify-content-between align-items-center mx-auto bg-gray-900">
            <div class="col-4 pt-1">

            </div>
            <div class="col-4 text-center">
                <a class="blog-header-logo text-light" href="home.html">ANTHONY GILBERT</a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
            </div>
        </div>
    <Canvas />
    </header>

</template>

<script lang="ts">
import Canvas from '../components/Canvas.vue'

export default {
  name: "App",
  components: {
    Canvas
  }
};
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
