<template>
  <h3
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ pageTitle }}
  </h3>
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
