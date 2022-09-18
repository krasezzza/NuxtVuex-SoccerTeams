<template>
  <nuxt-link to="/">
    <img
      :src="require('~/assets/img/back.svg')"
      alt="back-btn"
    >
    <img
      :src="require('~/assets/img/logo-short.svg')"
      alt="nav-logo"
    >
  </nuxt-link>
</template>

<style lang="scss" scoped>
  img {
    margin: 0 5px;
  }
</style>
