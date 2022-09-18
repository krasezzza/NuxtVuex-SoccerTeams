<template>
  <main>
    <app-nav />

    <div class="page-header">
      <header-top />

      <header-tabs />
    </div>

    <div class="page-content">
      <content-search />

      <content-teams />
    </div>
  </main>
</template>

<script>
  export default {
    name: 'MainPage'
  }
</script>
