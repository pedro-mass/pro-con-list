<style scoped>
  #siteLink a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
</style>

<template>
  <div id="HeaderSection">
    <h1 id="siteLink" class="text-center">
      <router-link to="/">Pro/Con List</router-link>
    </h1>

    <auth-links></auth-links>
  </div>
</template>

<script>
import AuthLinks from './AuthLinks.vue'

export default {
  name: 'HeaderSection',
  components: {
    AuthLinks
  }
}
</script>
