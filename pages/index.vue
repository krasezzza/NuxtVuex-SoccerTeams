<template>
  <main>
    <app-nav />

    <div class="page-wrapper">
      <div class="page-header">
        <header-top />

        <header-tabs />
      </div>

      <div class="page-content">
        <content-search />

        <content-teams />
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'MainPage'
  }
</script>
