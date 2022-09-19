<template>
  <div class="section-teams">
    <h4>MY TEAMS</h4>

    <ul
      v-if="followedTeams.length"
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
      <span>You aren't following any teams yet.</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      followedTeams() {
        return []
      }
    }
  }
</script>
