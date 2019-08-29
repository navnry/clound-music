<template>
  <div class="search">
    <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style scoped>
  .search {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #ffffff;
  }
</style>
