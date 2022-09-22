<template>
  <span
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ pageTitle }}
  </span>
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
