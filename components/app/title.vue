<template>
  <h3>{{ pageTitle }}</h3>
</template>

<script>
  export default {
    data() {
      return {
        pageTitle: 'RichyRich'
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    margin-left: -40px;
    font-weight: bolder;
    font-style: italic;
    font-size: 14pt;
  }
</style>
