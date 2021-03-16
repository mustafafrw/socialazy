<template>
  <v-list-item
              :key="item.etag"
            >
            <v-list-item-avatar>
                <a 
                  @click.prevent="$router.push('/channel/'+item.snippet.topLevelComment.snippet.authorChannelId.value)"
                  :href="'/channel/'+item.snippet.topLevelComment.snippet.authorChannelId.value"
                >
                  <v-img :src="item.snippet.topLevelComment.snippet.authorProfileImageUrl"></v-img>
                </a>
            </v-list-item-avatar>
            <v-list-item-content>
                <span>
                <a class="text-decoration-none white--text d-inline-block" 
                  :href="'/channel/'+item.snippet.topLevelComment.snippet.authorChannelId.value"
                   @click.prevent="$router.push('/channel/'+item.snippet.topLevelComment.snippet.authorChannelId.value)"
>
                  <v-list-item-title 
                    >
                    {{item.snippet.topLevelComment.snippet.authorDisplayName}}
                  </v-list-item-title>
                </a>
                </span>
                <v-card-text 
                    class="ma-0 pa-0" 
                    v-html="item.snippet.topLevelComment.snippet.textDisplay"
                ></v-card-text>
                
                <div class="mt-2 pb-0 mb-0">
                      <template>
                        <v-icon x-small>mdi-thumb-up</v-icon>
                        <div class="text-subtitle-2 text-no-wrap text-center d-inline-block">{{item.snippet.topLevelComment.snippet.likeCount}}</div>
                      </template>
                      <template>
                        <div class="d-inline-block">
                          <a
                            class="text-decoration-none white--text" 
                            :href="'/comment/'+item.snippet.videoId+'/'+item.id">
                            <v-icon x-small class="ml-1">mdi-message-reply</v-icon>
                            <div class="text-subtitle-2 text-no-wrap text-center d-inline-block">{{item.snippet.totalReplyCount}}</div>
                          </a>
                        </div>
                      </template>
                </div>
            </v-list-item-content>

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
                    @click="sharedialog= !sharedialog"
                  >
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                </template>
                
                <span>Share</span>
            </v-tooltip>

            <!-- Share component -->
            <Share 
              v-if="sharedialog"
              :video_id="item.snippet.videoId"
              :comment_id="item.id"
              @close="sharedialog= !sharedialog"  
            />
    </v-list-item>
    
</template>

<script>
import Share from "@/components/Sharing/Share"

export default {
    props:["item"],
    components:{
      Share
    },
    data(){
      return {
        sharedialog: false
      }
    }
}
</script>

<style>
  .v-card__text a {
    color:white
  }
</style>