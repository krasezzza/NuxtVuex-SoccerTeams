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
        :placeholder="isLoading ? 'Loading...' : 'Search for a team'"
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
          v-for="team in teamsFound"
          :key="team.id"
        >
          <div class="found-list-item">
            <div class="team-placeholder">
              <img
                :src="require('~/assets/img/team.png')"
                alt="team placeholder"
              >
            </div>

            <div class="team-details">
              <p class="leagues-list">
                {{ team.leagues.toString().replace(',', ', ') }}
              </p>

              <p class="team-name-and-stadium">
                {{ team.name }}

                <span class="stadium-placeholder">
                  <img
                    :src="require('~/assets/img/stadium.svg')"
                    class="stadium-icon"
                    alt="stadium icon"
                  >

                  {{ team.stadium }}
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
        teamSearch: '',
        teamsFound: null,
        isLoading: false
      }
    },
    async fetch() {
      this.isLoading = true

      this.teamsList = await this.$axios.get('https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28').then((response) => {
        return response.data
      })

      this.isLoading = false
    },
    computed: {
      isSearchNotEmpty() {
        return this.teamSearch.length > 0
      },
      followedTeams() {
        return this.$store.state.followedTeams
      }
    },
    watch: {
      teamSearch() {
        if (this.teamSearch.length) {
          const queryString = this.teamSearch.toLowerCase()

          this.teamsFound = this.teamsList.filter(team => 
              team.name.toLowerCase().includes(queryString) ||
              team.stadium.toLowerCase().includes(queryString) ||
              (team.leagues.toString().toLowerCase()).includes(queryString))
        } else {
          this.teamsFound = null
        }
      }
    },
    methods: {
      clearSearch() {
        this.teamSearch = ''
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
