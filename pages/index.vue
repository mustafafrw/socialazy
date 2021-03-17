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
          <v-tab @click="channelsClicked()">Channels</v-tab>  
           <v-tab @click="videoClicked()">Videos</v-tab>
        </v-tabs>

        <v-list three-line v-if="data && channels">
              
              <template v-for="(item, index) in data">
              <v-divider
                v-if="index>0"
                inset
              ></v-divider>
                <v-list-item
                  :key="index"
                  @click="clickedResult(item.snippet.channelId)"
                >
                  <v-list-item-avatar>
                    <v-img :src="item.snippet.thumbnails.default.url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.snippet.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
               </template>
          </v-list>

          <v-list three-line v-if="data && !channels">
              <template v-for="(item, index) in data">
              <v-divider
                v-if="index>0"
                inset
              ></v-divider>
                <v-list-item
                  :key="index"
                  @click="clickedResult(item.id.videoId)"
                >
                  <v-list-item-avatar>
                    <v-img :src="item.snippet.thumbnails.default.url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.snippet.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
               </template>
          </v-list>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data: () => ({
      q: null,
      channels: true
  }),
  computed: {
      data () {
        if(this.$store.state.searchresult){
          return this.$store.state.searchresult
        }
      }
  },
  methods:{
    async search(){
      if(this.q==null){
        return
      }
      let payload= {
        type: this.channels ? "channel":"video",
        query: this.q
      }
      this.$store.dispatch('setSearchResult',payload)
    },
    clickedResult(id){
      if(this.channels){
        this.$router.push('channel/'+id)
      }
      else{
        this.$router.push('comment/'+id)
      }
    },
    videoClicked(){
      this.channels=false
      this.search()
    },
    channelsClicked(){
      this.channels=true
      this.search()
    }
  }
}
</script>
