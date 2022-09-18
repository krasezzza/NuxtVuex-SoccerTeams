<template>
  <div class="section-search">
    <h4>SEARCH TEAMS</h4>

    <form>
      <img
        :src="require('~/assets/img/search.svg')"
        class="search-icon"
        alt="search icon"
      >

      <input
        v-model="teamSearch"
        type="search"
        placeholder="Search for a team"
      >
      
      <button
        v-if="isSearchNotEmpty"
        class="search-clear"
        @click="clearSearch()"
      >
        <img
          :src="require('~/assets/img/close.svg')"
          alt="search clear"
        >
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teamSearch: ''
      }
    },
    computed: {
      isSearchNotEmpty() {
        return this.teamSearch.length > 0
      }
    },
    methods: {
      clearSearch() {
        this.teamSearch = ''
      }
    }
  }
</script>