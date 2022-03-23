<template>
  <div class="l-wrap u-text-center">
    <h1 v-if="error.statusCode === 404" class="u-text-5xl u-mt-10">Page not found</h1>
    <h1 v-else class="u-text-5xl u-mt-10">An error occurred</h1>
    <br>
    <NuxtLink class="u-underline" to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    // layout: 'error' // you can set a custom layout for the error page
  }
</script>