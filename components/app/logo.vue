<template>
  <nuxt-link to="/">
    <img
      :src="require('~/assets/img/back.svg')"
      alt="back-btn"
    >

    <img
      :src="require('~/assets/img/logo-short.svg')"
      class="logo-short"
      alt="nav logo"
    >

    <img
      :src="require('~/assets/img/logo-long.png')"
      class="logo-long"
      alt="nav logo"
    >
  </nuxt-link>
</template>

<style lang="scss" scoped>
  img {
    margin: 0 5px;
  }
</style>
