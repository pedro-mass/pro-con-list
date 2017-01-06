<style scoped>
  #authLinks {
    position: absolute;
    top: 1rem;
    right: 3rem;
  }

  #authLinks {
    color: white;
  }

  #authLinks a {
    color: inherit;
  }


  #authLinks a.router-link-active {
    color: black;
  }
</style>

<template>
  <div id="authLinks">
    <router-link to="/auth">Login/Signup</router-link>
    | <router-link to="/auth">Profile</router-link>
  </div>
</template>

<script></script>
