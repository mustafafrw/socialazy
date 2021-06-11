<template>
  <div>
    <v-list 
        subheader
        three-line 
          >
          <template v-for="(item, index) in data">
              <v-divider
              v-if="index>0"
              :key="index"
              inset
              ></v-divider>
                <Comment
                  :item="item"
                />
          </template>
        
      </v-list>
      
  </div>
   
</template>

<script>
import Comment from "@/components/Main/Comment"
export default {
    props:["data"],
    components:{
        Comment,
    },
}
</script>

<style>

</style>