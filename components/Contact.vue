<template>
  

  <div id="contact-form" class="w-full max-w-xs md:items-center justify-center">
    <form class="w-full max-w-xs md:items-center bg-white shadow-md rounded px-8 pt-6 pb-8 justify-center">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="Name"
        >
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          E-mail
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="name@email.com"
        />
        <p class="text-red-500 text-xs italic">Please enter your email address</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>


<script>
export default {}
</script>

<style scoped>
#contact-form {
  margin: 0 auto;
}
</style>