<template>
     <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
             <v-card
                class="mx-auto"
            >
                <v-toolbar
                    flat
                    dense
                >
                <v-toolbar-title>

                    <span class="subheading">
                        <v-icon 
                            class="mb-1"
                            dense
                        >
                            mdi-map-marker
                        </v-icon>
                        {{cardtitle}}</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>

                <v-card-text>
                <v-row
                    class="mb-4"
                    justify="space-between"
                >
                    <v-col class="text-left">
                    <span
                        class="display-3 font-weight-light"
                        v-text="km"
                    ></span>
                    <span class="subheading font-weight-light mr-1">KM</span>
                    
                    </v-col>
                    <v-col class="text-right">
                        <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                :color="color"
                                dark
                                depressed
                                fab
                                v-bind="attrs"
                                v-on="on"
                                @click="searchvideos()"
                            >
                                <v-icon large>
                                    mdi-magnify
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Search</span>
                        </v-tooltip>
                    </v-col>
                </v-row>

                <v-slider
                    v-model="km"
                    :color="color"
                    track-color="grey"
                    always-dirty
                    min="1"
                    max="1000"
                >
                    <template v-slot:prepend>
                    <v-icon
                        :color="color"
                        @click="decrement"
                    >
                        mdi-minus
                    </v-icon>
                    </template>

                    <template v-slot:append>
                    <v-icon
                        :color="color"
                        @click="increment"
                    >
                        mdi-plus
                    </v-icon>
                    </template>
                </v-slider>
                
                </v-card-text>
             
            </v-card>
            <v-row class="ma-0 pa-0">
                  <v-col cols="7" ></v-col>
                  <v-col cols="5" class="text-right mb-0 pb-0 mt-1 pt-0">
                  <v-select 
                    v-model="select"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Order"
                  ></v-select>
                  </v-col>
            </v-row>
            <v-list three-line v-if="resultnear">
              <template v-for="(item, index) in resultnear">
              <v-divider
                v-if="index>0"
                inset
              ></v-divider>
                <v-list-item
                  :key="index"
                >
                  <v-list-item-avatar>
                    <v-img :src="item.snippet.thumbnails.default.url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-card-text 
                      class="ma-0 pa-0" 
                      v-html="item.snippet.title"
                     ></v-card-text>
                    <div class="subtitle-2 orange--text">{{item.snippet.channelTitle}}</div>
                  </v-list-item-content>

                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <a 
                                :href="'https://www.youtube.com/watch?v='+item.id.videoId"
                                target="_blank"
                                class="text-decoration-none"
                            >
                                
                                    <v-btn
                                    class="ml-2 mt-3"
                                    fab
                                    icon
                                    height="40px"
                                    right
                                    width="40px"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon dense>mdi-youtube</v-icon>
                                </v-btn>
                            </a>
                         </template>
                         <span>watch on youtube</span>
                    </v-tooltip>
                    
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            class="ml-2 mt-3"
                            fab
                            icon
                            height="40px"
                            right
                            width="40px"
                            v-bind="attrs"
                            v-on="on"
                            @click="$router.push('/comment/'+item.id.videoId)"
                        >
                            <v-icon dense>mdi-comment-text-multiple</v-icon>
                        </v-btn>
                        </template>
                        <span>read comments</span>
                    </v-tooltip>

                </v-list-item>
               </template>
          </v-list>

          <div class="text-center">
              <LoadMore />
          </div>
        </v-col>
    </v-row>
</template>

<script>
import LoadMore from "@/components/Main/LoadMore"

export default {
    data: () => ({
      cardtitle: "Find YouTube Videos Near You",
      title:"Find YouTube Videos Near Me",
      description:"You can easily find YouTube videos Near You with this tool",
      km: 40,
      interval: null,
      isPlaying: false,
      lat: null,
      lon: null,
      select: { state: 'Relevance',abbr:"relevance"  },
      items: [
        { state: 'Relevance',abbr:"relevance" },
        { state: 'View Count',abbr:"viewCount" },
        { state: 'Date',abbr:"date" },
        { state: 'Rating',abbr:"rating" }
      ],
    }),
    components:{
      LoadMore
    },
    computed: {
      color () {
        return 'red'
      },
      resultnear(){
        return this.$store.state.nearresult
      }
    },
    watch:{
      select(){
        this.searchvideos()
      }
    },
    methods: {
      decrement () {
        this.km--
      },
      increment () {
        this.km++
      },
      payload(){
        return {
            lat: this.lat,
            lon: this.lon,
            radius: this.km,
            order: this.select.abbr == null ? this.select : this.select.abbr
        }
      },
      searchvideos () {
          if(this.getLocation()){
             this.dispatchresults()
          }
      },
      async getLocation(){
          if(this.lat==null || this.lon==null){
              navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
                this.dispatchresults()
              })
          }
          else{
              return true
          }
      },
      async dispatchresults(){
         await this.$store.dispatch('setNearResult',this.payload());
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: this.description },
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { property: 'twitter:card', content: 'summary' },
          { property: 'twitter:site', content: '@socialazyeu' },
        ]
      }
    }
  }
</script>

<style scoped>
  @keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>