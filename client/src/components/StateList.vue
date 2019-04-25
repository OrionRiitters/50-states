<!-- This component uses the Vue's state servce to populate a states variable, then iterates over that variable with a v-for -->

<template>
  <div id="state-list">

    <div class="d-flex flex-wrap justify-content-around">
    <div class="p-2" v-for="state in states" v-bind:key="state.name">
      <State
        v-bind:state="state"
        ></State>
    </div>
    </div>
  </div>
</template>

<script>

  import State from '@/components/State'

  export default {
  name: 'StateList',
    components: {
      State
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
        this.$stateService.getAll().then(data => {
          this.states = data
        })
      },
    }
  }

</script>
<style>
</style>
