<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Search a channel
        </v-card-title>
        <v-card-text>
            <v-text-field
            placeholder="Search"
            append-outer-icon="mdi-magnify"
            v-model="q"
            @click:append-outer= "search(q)"
            @keydown.enter="search(q)"
          ></v-text-field>
        </v-card-text>
      </v-card>

       <v-list three-line v-if="data">
          <v-subheader>Search Results</v-subheader>
      <template v-for="(item, index) in data">
          <v-divider
            v-if="index>0"
            :key="index"
            :inset="true"
          ></v-divider>
            <v-list-item
              :key="item.snippet.title"
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
    </v-col>
  </v-row>
</template>

<script>

export default {
  data: () => ({
      q: null
  }),
  computed: {
      data () {
        if(this.$store.state.searchresult){
          return this.$store.state.searchresult.filter(item => item.id.kind === 'youtube#channel')
        }
        else{
          return this.$store.state.searchresult
        }
      }
  },
  methods:{
    async search(q){
      this.$store.dispatch('setSearchResult',q)
    },
    clickedResult(id){
      this.$router.push('channel/'+id)
    }
  }
}
</script>
