<template>
  <div class="container">
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
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
</template>

<script lang="ts">
import Vue from 'vue'
import Canvas from '../components/Canvas.vue'

export default {
  name: "App",
  components: {
    Vue,
    Canvas
  }
};
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
    background-color: #551c1c;
    background-image: url("https://cdn.pixabay.com/photo/2019/11/14/13/01/abstract-4626113_960_720.jpg");
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

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2.25rem;
  color: #3b8070;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #3b8070;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
