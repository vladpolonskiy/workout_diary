<template>
  <div>
    <nav class="header">
      <router-link
        class="link"
        to="/">Workout diary</router-link>
      <router-link
        class="link"
        to="/exercises">Exercises</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open sans', Arial, sans-serif;
  }
</style>

<style lang="postcss" scoped>
  .header {
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    background: orange;
    margin: 0 -10px;
  }
  .link {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: #FFF;
    margin: 0 10px;
  }
</style>

