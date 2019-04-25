<!-- This component uses the Vue's state servce to populate a states variable, then iterates over that variable with a v-for -->

<template>
<div id="state-list">

  <Summary
    v-bind:total="totalVisited"
    v-bind:visitedAll="visitedAll">
  </Summary>

    <div class="d-flex flex-wrap justify-content-around">
    <div class="p-2" v-for="state in states" v-bind:key="state.name">
      <State
        v-bind:state="state"
        v-on:isVisited="updateVisited"
        ></State>
    </div>
    </div>
  </div>
</template>

<script>

  import State from '@/components/State'
  import Summary from '@/components/Summary'

  export default {
  name: 'StateList',
    components: {
      State, Summary
    },
    data() {
      return {
        states: []
      }
    },
    mounted() {
      this.getAll()
    },
    methods: {
        getAll() {
            // Fill states array with states from API call
        this.$stateService.getAll().then(data => {
          this.states = data
        })
      }, // Update state in APi with visited value
        updateVisited(stateName, stateVisited) {
            this.$stateService.setVisited(stateName, stateVisited)
                .then(data => {
                    this.getAll()
                });
        }
    },
      computed: {
          // Number of states visited based on length of states array filtered by visited value
          totalVisited() {
              let visited = this.states.filter(function(state) {
                  return state.visited;
              })
              return visited.length;
          }, // If total visited == all states length, return true
          visitedAll() {
              let visited = this.states.filter(function(state) {
                  return state.visited
              });
              return visited.length == this.states.length
          }
      }
}

</script>
<style>
</style>
