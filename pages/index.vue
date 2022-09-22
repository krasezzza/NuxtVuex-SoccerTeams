<template>
  <main>
    <app-nav />

    <div class="wrapper">
      <page-header />

      <page-tabs :tab-list="['My Teams', 'About']">
        <template #tabPanel-0>
          <div class="content">
            <content-search />

            <content-teams />
          </div>
        </template>

        <template #tabPanel-1>
          <div class="content">
            <content-about />
          </div>
        </template>
      </page-tabs>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'MainPage'
  }
</script>
