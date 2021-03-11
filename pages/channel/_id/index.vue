<template>
    <div>
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
                    <span>Refresh Comments</span>
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
      subheader
      three-line 
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
            inset="true"
            ></v-divider>

            <v-list-item
              :key="item.etag"
            >
            <v-list-item-avatar>
                <v-img :src="item.snippet.topLevelComment.snippet.authorProfileImageUrl"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title v-html="item.snippet.topLevelComment.snippet.authorDisplayName"></v-list-item-title>
                <v-card-text class="ma-0 pa-0" v-html="item.snippet.topLevelComment.snippet.textDisplay"></v-card-text>

                <div class="mt-2 pb-0 mb-0">
                  <v-icon x-small>mdi-thumb-up</v-icon>
                    <div class="text-subtitle-2 text-no-wrap text-center d-inline-block">{{item.snippet.topLevelComment.snippet.likeCount}}</div>
                  <v-icon x-small class="ml-1">mdi-message-reply</v-icon>
                    <div class="text-subtitle-2 text-no-wrap text-center d-inline-block">{{item.snippet.totalReplyCount}}</div>
                </div>
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
      loading: false,
      searchdialog: false,
      title: null,
      description: null,
      descEnd: " - Socialazy.com, Search Comments on YouTube"
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