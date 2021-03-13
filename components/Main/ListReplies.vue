<template>
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
            <Reply
              :item="item"
            />
        </template>
       
        </v-list>
</template>

<script>
import Reply from "@/components/Main/Reply"
export default {
    props:["data"],
    components:{
        Reply
    },
    mounted(){
      console.log(this.data)
    }
}
</script>

<style>

</style>