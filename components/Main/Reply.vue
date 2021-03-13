<template>
    <v-list-item
              :key="item.etag"
              class="ml-10"
            >
            <v-list-item-avatar>
               <a 
                  :href="'/channel/'+item.snippet.authorChannelId.value"
                >
                  <v-img :src="item.snippet.authorProfileImageUrl"></v-img>
                </a>
            </v-list-item-avatar>
            <v-list-item-content>
                <span>
                <a class="text-decoration-none white--text d-inline-block" 
                  :href="'/channel/'+item.snippet.authorChannelId.value">
                  <v-list-item-title 
                    >
                    {{item.snippet.authorDisplayName}}
                  </v-list-item-title>
                </a>
                </span>
                <v-card-text class="ma-0 pa-0" v-html="item.snippet.textDisplay"></v-card-text>
                
                <div class="mt-2 pb-0 mb-0">
                      <template>
                        <v-icon x-small>mdi-thumb-up</v-icon>
                        <div class="text-subtitle-2 text-no-wrap text-center d-inline-block">{{item.snippet.likeCount}}</div>
                      </template>
                </div>
            </v-list-item-content>
    </v-list-item>
    
</template>

<script>

export default {
    props:["item"]
}
</script>

<style>

</style>