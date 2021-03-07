<template>
  <div class="container">
    <div>
      <h1 class="title">
        <a href="/">Anthony Gilbert</a>
      </h1>
      <hr />
      <div class="links">
        <a href="/projects" rel="noopener noreferrer" class="button--green">
          Projects
        </a>
        <a href="/blog" rel="noopener noreferrer" class="button--green">
          Blog
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {},
}
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
