<template>
  <span
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span v-if="hasStringMatch">
      {{ start }}<span class="highlighted">{{ match }}</span>{{ end }}
    </span>

    <span v-else>
      {{ searchResult }}
    </span>
  </span>
</template>

<script>
  export default {
    props: {
      searchQuery: {
        type: String,
        required: true
      },
      searchResult: {
        type: String,
        required: true
      }
    },
    computed: {
      stringQuery() {
        return this.searchQuery.toLowerCase()
      },
      stringResult() {
        return this.searchResult.toLowerCase()
      },
      hasStringMatch() {
        return this.stringResult.includes(this.stringQuery)
      },
      start() {
        const indexEnd = this.stringResult.indexOf(this.stringQuery)

        return this.searchResult.substring(0, indexEnd)
      },
      match() {
        const indexStart = this.stringResult.indexOf(this.stringQuery)
        const indexEnd = indexStart + this.stringQuery.length

        return this.searchResult.substring(indexStart, indexEnd)
      },
      end() {
        const indexStart =
          this.stringResult.indexOf(this.stringQuery) + this.stringQuery.length

        return this.searchResult.substring(indexStart)
      }
    }
  }
</script>
