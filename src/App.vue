<template>
  <div>
    <h1 class="header">Workout diary</h1>
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
    text-transform: uppercase;
    font-size: 14px;
    color: #FFF;
  }
</style>

