<template>
  <div class="section-teams">
    <span class="section-title">
      My Teams
    </span>

    <ul
      v-if="followedTeams && followedTeams.length"
      class="followed-list"
    >
      <li
        v-for="team in followedTeams"
        :key="team.id"
      >
        <div class="followed-list-item">
          <div class="team-placeholder">
            <img
              :src="require('~/assets/img/team.png')"
              alt="team placeholder"
            >
          </div>

          <div class="team-details">
            <p class="team-name">
              {{ team.name }}
            </p>
          </div>
        </div>
      </li>
    </ul>

    <div
      v-else
      class="no-teams"
    >
      <span class="general-text">
        You aren't following any teams yet.
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      followedTeams() {
        return this.$store.state.followedTeams
      }
    }
  }
</script>
