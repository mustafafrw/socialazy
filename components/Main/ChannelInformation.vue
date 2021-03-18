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
            <div class="d-flex flex-no-wrap justify-space-between" v-if="topinfo">
              <div>
                <v-card-title
                  class="headline"
                  v-text="topinfo.snippet.title"
                ></v-card-title>

                <v-card-subtitle v-if="!topinfo.statistics.hiddenSubscriberCount" v-text="subscriberText(topinfo.statistics.subscriberCount)+' subscribers'"></v-card-subtitle>

                <v-card-actions>
                  <v-tooltip  v-if="!loading" top>
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
                        @click="refreshComments()"
                      >
                        <v-icon>mdi-refresh</v-icon>
                      </v-btn>
                      
                    </template>
                    <span>refresh Comments</span>
                  </v-tooltip>
                    <div
                        v-else
                        class="text-center"
                      >
                        <v-progress-circular
                          class="ml-2 mt-3"
                          right
                          indeterminate
                          color="white"
                        ></v-progress-circular>
                      </div>

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
                        :href="'https://www.youtube.com/channel/'+topinfo.id"
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
                <v-img :src="topinfo.snippet.thumbnails.default.url"></v-img>
              </v-avatar>
            </div>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    props:["topinfo"],
    data(){
        return {
            loading: false,
        }
    },
    methods:{
      async refreshComments(){
          var th= this;
          th.loading= true;
          setTimeout(() => {
            let id= th.$route.params.id;
            th.$store.dispatch('setData',id);
            th.loading=false;
          }, 1000);
      },
      subscriberText(count){
        if(count>1000000){
          return count/1000000+'M'
        }
        else if(count>1000){
          return count/1000+'K'
        }
        else
          return count
      }
    },
}
</script>

<style>

</style>