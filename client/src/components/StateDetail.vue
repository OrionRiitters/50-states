<template>
  <div class="state-detail p-2">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this dang state!</p>

    <!-- Show leaflet map  -->
    <div id="map-container">
    <l-map
ref="stateMap"
style="height: 100%; width: 100%"
v-bind:zoom="zoom"
v-bind:center="center">
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
    </div>

  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
    name: 'StateDetail',
    components: {
        LMap, LTileLayer
    },
  data () {
    return {
      state: {
        name: ''
      },
        // Return data to render with Leaflet map
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        zoom: 2,
        center: [44, -103],
        bounds: null
    }
  },
    mounted() {
      this.state.name = this.$route.params.state
      this.$refs.stateMap.mapObject.dragging.disable()
      this.fetchStateData()
  },
    methods: {
        // Pull state's data from API
        fetchStateData() {
            this.$stateService.getOne( this.state.name )
                .then( data => {
                    // Take state data and use it with Leaflet map
                    this.state = data
                    this.zoom = data.zoom
                    this.center = [data.lat, data.lon]
                    this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
                }).catch( err => console.error(err))
        }
    }

}

</script>
