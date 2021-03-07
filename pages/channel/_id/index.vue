<template>
    <div>
      <v-container>
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
                  <v-btn
                    v-if="!loading"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                    @click="refresh=!refresh"
                  >
                    <v-icon>mdi-{{ `${refresh ? 'pause' : 'play'}` }}</v-icon>
                  </v-btn>
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

  
      <v-list three-line>
       
        
        <template v-for="(item, index) in data">
            <!-- <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
            ></v-subheader>
            -->

            <v-divider
            v-if="index>0"
            :key="index"
            :inset="true"
            ></v-divider>

            <v-list-item
              :key="item.etag"
            >
            <v-list-item-avatar>
                <v-img :src="item.snippet.topLevelComment.snippet.authorProfileImageUrl"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="item.snippet.topLevelComment.snippet.authorDisplayName"></v-list-item-title>
                <v-list-item-subtitle v-html="item.snippet.topLevelComment.snippet.textDisplay"></v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </template>
       
        </v-list>
    </div>
</template>

<script>
export default {
    data: () => ({
      refresh: false,
      loading:false,
      ms: 5000
    }),
    computed: {
      data () {
        return this.$store.state.data
      },
      topinfo () {
        let topinfo = this.$store.state.topinfo
        if(topinfo){
          return topinfo[0]
        }
        return null
      }
    },
    async asyncData ({ store, params }) {
        await store.dispatch('setData',params.id);
        await store.dispatch('setTopInfo',params.id);
    },
    methods:{
      async refreshComments(){
          var th = this;
          setInterval(() => {
            if(th.refresh){
              th.loading=true;
              setTimeout(() => {
                let id = th.$route.params.id;
                th.$store.dispatch('setData',id);
                th.loading=false;
              }, 1000);
            }
          },this.ms)
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
    mounted(){
      this.refreshComments()
    }

}
</script>

<style>

</style>