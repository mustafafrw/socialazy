<template>
  <v-container fluid>

      <v-row dense>
        <v-col
          cols="12"
        >
        
          <v-card
            color="#952175"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between" v-if="data">
              <div>
                <v-card-title
                  class="headline"
                  v-text="data.snippet.title"
                >
                </v-card-title>
                
                <v-card-subtitle v-text="viewText(data.statistics.viewCount)+' views'"></v-card-subtitle>

                <v-card-actions>
                  <v-tooltip 
                    v-if="comments_video"
                    top
                  >
                  <template v-slot:activator="{ on, attrs }" >
                      <v-btn
                        class="ml-2 mt-3"
                        fab
                        icon
                        height="40px"
                        right
                        width="40px"
                        v-bind="attrs"
                        v-on="on"
                        @click="navigateToVideo()"
                      >
                        <v-icon>mdi-comment-text-multiple</v-icon>
                      </v-btn>
                      
                    </template>
                    <span>comments in this video</span>
                  </v-tooltip>
                  
                  <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }" >
                      <v-btn
                        class="ml-2 mt-3"
                        fab
                        icon
                        height="40px"
                        right
                        width="40px"
                        v-bind="attrs"
                        v-on="on"
                        @click="navigateToChannel()"
                      >
                        <v-icon>mdi-television-classic</v-icon>
                      </v-btn>
                      
                    </template>
                    <span>comments in this channel</span>
                  </v-tooltip>

                  <v-tooltip 
                    v-if="search"
                    top
                  >
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
                        @click="$store.commit('setSearchDialog')"
                      >
                        <v-icon>mdi-magnify</v-icon>
                      </v-btn>
                    </template>
                    
                    <span>search comments</span>
                  </v-tooltip>

                  <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }" >
                      <a 
                        :href="'https://www.youtube.com/watch?v='+data.id"
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
                        <v-icon>mdi-youtube</v-icon>
                      </v-btn>
                      </a>
                    </template>
                    <span>watch on youtube</span>
                  </v-tooltip>
                </v-card-actions>
              </div>
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="data.snippet.thumbnails.default.url"></v-img>
              </v-avatar>
            </div>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    props:["data","search","comments_video"],
    methods:{
      viewText(count){
        if(count>1000000000){
          return this.fix(count/1000000000)+'B'
        }
        else if(count>1000000){
          return this.fix(count/1000000)+'M'
        }
        else if(count>1000){
          return this.fix(count/1000)+'K'
        }
        else
          return count
      },
      fix(n){
        return n.toFixed(2)
      },
      navigateToVideo(){
        this.$router.push('/comment/'+this.$route.params.video_id)
      },
      navigateToChannel(){
        this.$router.push('/channel/'+this.data.snippet.channelId)
      }
    },
}
</script>

<style>

</style>