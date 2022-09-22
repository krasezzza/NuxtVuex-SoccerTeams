<template>
  <div
    class="section-search"
  >
    <h4>SEARCH TEAMS</h4>

    <form @submit.prevent>
      <img
        :src="require('~/assets/img/search.svg')"
        class="search-icon"
        alt="search icon"
      >

      <input
        ref="searchInput"
        v-model="searchQuery"
        type="search"
        :placeholder="isLoading ? 'Loading...' : 'Search for a team'"
        @keydown.up="onArrowUp"
        @keydown.down="onArrowDown"
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
    
    <div
      v-if="teamsFound"
      class="results-section"
    >
      <ul
        v-if="teamsFound.length"
        class="found-list"
      >
        <li
          v-for="(team, idx) in teamsFound"
          :key="team.id"
          class="found-list-item"
          :class="{ 'is-hovered': idx === hoveredIndex }"
          @mousemove="onMouseMove(idx)"
        >
          <div class="team-placeholder">
            <img
              :src="require('~/assets/img/team.png')"
              alt="team placeholder"
            >
          </div>

          <div class="team-details">
            <p class="leagues-list">
              <content-result
                :search-query="searchQuery"
                :search-result="team.leagues.toString().replace(',', ', ')"
              />
            </p>

            <p class="team-name-and-stadium">
              <content-result
                :search-query="searchQuery"
                :search-result="team.name"
              />

              <span class="stadium-placeholder">
                <img
                  :src="require('~/assets/img/stadium.svg')"
                  class="stadium-icon"
                  alt="stadium icon"
                >

                <content-result
                  :search-query="searchQuery"
                  :search-result="team.stadium"
                />
              </span>
            </p>
          </div>

          <div class="team-actions">
            <button
              v-if="team.is_following"
              class="unfollow-btn"
              @click="unfollowTeam(team)"
            >
              FOLLOWING
            </button>

            <button
              v-else
              class="follow-btn"
              @click="followTeam(team)"
            >
              FOLLOW
            </button>
          </div>
        </li>
      </ul>

      <div
        v-else
        class="not-found"
      >
        <img
          :src="require('~/assets/img/no-results.svg')"
          alt="no results"
        >

        <p>No Teams Found</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teamsList: [],
        searchQuery: '',
        teamsFound: null,
        hoveredIndex: 0,
        isLoading: false
      }
    },
    async fetch() {
      this.isLoading = true

      this.teamsList = await this.$axios.get(
          'https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28'
        ).then((response) => {
          return response.data
        }
      )

      this.isLoading = false
    },
    computed: {
      isSearchNotEmpty() {
        return this.searchQuery.length > 0
      },
      followedTeams() {
        return this.$store.state.followedTeams
      }
    },
    watch: {
      searchQuery() {
        if (this.searchQuery.length) {
          const queryString = this.searchQuery.toLowerCase()

          this.teamsFound = this.teamsList.filter(team => 
              team.name.toLowerCase().includes(queryString) ||
              team.stadium.toLowerCase().includes(queryString) ||
              (team.leagues.toString().toLowerCase()).includes(queryString))
        } else {
          this.teamsFound = null
          this.hoveredIndex = 0
        }
      }
    },
    methods: {
      clearSearch() {
        this.searchQuery = ''
      },
      onMouseMove(idx) {
        this.hoveredIndex = idx
        this.$refs.searchInput.focus()
      },
      onArrowUp() {
        if (this.hoveredIndex > 0) {
          this.hoveredIndex--
        }
      },
      onArrowDown() {
        if (this.teamsFound && this.hoveredIndex < (this.teamsFound.length - 1)) {
          this.hoveredIndex++
        }
      },
      followTeam(selectedTeam) {
        this.$store.dispatch('followTeam', selectedTeam)
      },
      unfollowTeam(selectedTeam) {
        this.$store.dispatch('unfollowTeam', selectedTeam)
      }
    }
  }
</script>
