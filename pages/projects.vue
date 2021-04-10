<template>
<div>
<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img src="https://docs.dialoguewise.com/images/site/vuejs.png?width=9pc" class=" sm:w-27 md:w-32 lg:w-25" />
          <h2 class="text-sm font-bold text-gray-900">Starwars Fan Page</h2>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>A responsive Star Wars fan-page made with Vue.js version 2.</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Vue.js</code>
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Bootstrap</code>
                </p>
              </li>
            </ul>
            <!-- <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p> -->
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>
              <a target="_blank" href="https://starwars-responsive.netlify.app/" class=" visit text-cyan-600 hover:text-cyan-700">Visit App &rarr; </a>
            </p>
            <p>
              <a target="_blank" href="https://github.com/anthonygilbertt/starwars-fan-page" class="visit text-cyan-600 hover:text-cyan-700">View Code &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

<!--
Book Tracker App
-->
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img src="data:image/png;base64,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" class=" sm:w-27 md:w-32 lg:w-25" />
          <h2 class="text-sm font-bold text-gray-900">Github User Search App</h2>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>An app that allows you to search for Github users</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Vanilla JavaScript</code>
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Bootstrap</code>
                </p>
              </li>
            </ul>
            <!-- <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p> -->
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>
              <a target="_blank" href="https://anthonys-search-app.netlify.app/" class="visit text-cyan-600 hover:text-cyan-700">Visit App &rarr; </a>
            </p>
            <p>
              <a target="_blank" href="https://github.com/anthonygilbertt/github-search" class="visit text-cyan-600 hover:text-cyan-700">View Code &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

<!--
Github User Search App - Vanilla
-->

  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img src="https://docs.dialoguewise.com/images/site/vuejs.png?width=9pc" class=" sm:w-27 md:w-32 lg:w-25" />
          <h2 class="text-sm font-bold text-gray-900">Book Tracker App</h2>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>An app that keeps track of the books you read.</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Vue.js</code>
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Bootstrap</code>
                </p>
              </li>
            </ul>
            <!-- <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p> -->
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>
              <a target="_blank" href="https://anthonys-book-tracker.netlify.app/" class="visit text-cyan-600 hover:text-cyan-700">Visit App &rarr; </a>
            </p>
            <p>
              <a target="_blank" href="https://github.com/anthonygilbertt/Vue-Book-Tracker" class="visit text-cyan-600 hover:text-cyan-700">View Code &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


<!--
Github User Search App - Vue.js
-->

  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img src="https://docs.dialoguewise.com/images/site/vuejs.png?width=9pc" class=" sm:w-27 md:w-32 lg:w-25" />
          <h2 class="text-sm font-bold text-gray-900">Github User Search App</h2>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>I decided to re-build my Github User Search app using Vue.js.</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Vue.js</code>
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Bootstrap</code>
                </p>
              </li>
            </ul>
            <!-- <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p> -->
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>
              <a target="_blank" href="https://starwars-responsive.netlify.app/" class="visit text-cyan-600 hover:text-cyan-700">Visit App &rarr; </a>
            </p>
            <p>
              <a target="_blank" href="https://github.com/anthonygilbertt/anthony-gilbert" class="visit text-cyan-600 hover:text-cyan-700">View Code &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>




<!--
Personal Website - Nuxt.js
-->

  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img src="https://docs.dialoguewise.com/images/site/vuejs.png?width=9pc" class=" sm:w-27 md:w-32 lg:w-25" />
          <h2 class="text-sm font-bold text-gray-900">My Personal Website</h2>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>This is the site that you are currently on.</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">Nuxt.js/Vue.js</code>
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">TailwindCSS</code>
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  <code class="text-sm text-gray-900">TypeScript</code>
                </p>
              </li>
            </ul>

            <!-- <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p> -->
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>
              <a target="_blank" href="https://starwars-responsive.netlify.app/" class="visit text-cyan-600 hover:text-cyan-700">Visit App &rarr; </a>
            </p>
            <p>
              <a target="_blank" href="https://github.com/anthonygilbertt/anthony-gilbert" class="visit text-cyan-600 hover:text-cyan-700">View Code &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



</div>
</div>

</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}
h2 {
  text-decoration: bold;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

html, body {
  margin: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.visit{
  color: #3b6b80;
}

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

<script lang="ts">

// import Header from '../components/Header.vue'

export default {
  components: {
    // Header,
  },
}
</script>
