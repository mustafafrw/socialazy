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
                ></v-card-title>

                <v-card-subtitle v-text="viewText(data.statistics.viewCount)+' views'"></v-card-subtitle>

                <v-card-actions>
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
    props:["data"],
    methods:{
      viewText(count){
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