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
                        @click="refresh=!refresh"
                      >
                        <v-icon>mdi-{{ `${refresh ? 'pause' : 'play'}` }}</v-icon>
                      </v-btn>
                      
                    </template>
                    
                    <span>Auto Refresh</span>
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
                        @click="searchdialog= true"
                      >
                        <v-icon>mdi-magnify</v-icon>
                      </v-btn>
                    </template>
                    
                    <span>Search comments</span>
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

  
      <v-list 
        two-line
        expand
        >
       
        
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

        <SearchTerm 
          v-if="searchdialog"
          :id= "$route.params.id"
          @close="searchdialog= false"
        />
    </div>
</template>

<script>
import SearchTerm from "@/components/Dialogs/SearchTerm"
export default {
    components:{
      SearchTerm
    },
    data: () => ({
      refresh: false,
      loading: false,
      searchdialog: false,
      ms: 20000,
      title: null,
      description: null,
      descEnd: " - Socialazy.com, Live Comments on YouTube"
    }),
    computed: {
      data () {
        return this.$store.state.data
      },
      topinfo () {
        let topinfo = this.$store.state.topinfo
        if(topinfo){
          let top = topinfo[0];
          this.title = top.snippet.title;
          this.description = top.snippet.title + this.descEnd;
          return top;
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
    },
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    }

}
</script>

<style>

</style>