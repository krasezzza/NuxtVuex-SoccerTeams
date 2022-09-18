<template>
  <h3>{{ pageTitle }}</h3>
</template>

<script>
  export default {
    data() {
      return {
        pageTitle: 'Richy Rich'
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    font-weight: bolder;
    font-style: italic;
    font-size: 14pt;
  }
</style>