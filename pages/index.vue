<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Search on YouTube
        </v-card-title>
        <v-card-text>
            <v-text-field
            placeholder="Search"
            append-outer-icon="mdi-magnify"
            v-model="q"
            @click:append-outer= "search()"
            @keydown.enter="search()"
          ></v-text-field>
        </v-card-text>
      </v-card>
       <v-tabs>
           <v-tab @click="videoClicked()">{{ type == 'popular' ? 'Popular Videos':'Videos' }}</v-tab>
           <v-tab 
              v-if="type!='popular'"
              @click="channelsClicked()"
           >Channels</v-tab> 
        </v-tabs>
        <SearchResults
            :data="data"
            :type="type"
        />
    </v-col>
  </v-row>
</template>

<script>
import SearchResults from "@/components/Search/SearchResults"

export default {
  data: () => ({
      q: null,
      type: 'popular'
  }),
  components:{
    SearchResults
  },
  computed: {
      data () {
        if(this.$store.state.searchresult){
          return this.$store.state.searchresult
        }
      }
  },
  methods:{
    async search(){
      if(this.type==='popular'){
        this.type='video'
      }
      if(this.q==null){
        return
      }
      let payload= {
        type: this.type,
        query: this.q
      }
      this.$store.dispatch('setSearchResult',payload)
    },
    videoClicked(){
      this.type='video'
      this.search()
    },
    channelsClicked(){
      this.type='channel'
      this.search()
    },
    async popularVideosByCountry(code){
      await this.$store.dispatch('setLocalizedList',code)
    }
  },
  mounted(){
    this.$axios.get('https://freegeoip.app/json/').then(response => {
          let code = response.data.country_code
          this.popularVideosByCountry(code)
    })
    
  }
}
</script>
