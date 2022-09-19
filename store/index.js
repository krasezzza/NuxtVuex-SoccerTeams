export const state = () => ({
  followedTeams: []
})

export const mutations = {

  ADD_TEAM(state, selectedTeam) {
    selectedTeam.is_following = true
    state.followedTeams.push(selectedTeam)
  },

  REMOVE_TEAM(state, selectedTeam) {
    selectedTeam.is_following = false
    state.followedTeams = state.followedTeams.filter(
      team => team.id !== selectedTeam.id
    )
  }
}

export const actions = {

  followTeam({ state, commit }, selectedTeam) {
    if (!state.followedTeams.find(team => team.id === selectedTeam.id)) {
      commit('ADD_TEAM', selectedTeam)
    }
  },

  unfollowTeam({ commit }, selectedTeam) {
    commit('REMOVE_TEAM', selectedTeam)
  }
}
