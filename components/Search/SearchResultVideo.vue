<template>
  <v-list-item
    @click="clickResult(item.id.videoId)"
  >
        <v-list-item-avatar>
            <v-img :src="item.snippet.thumbnails.default.url"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-html="item.snippet.title"></v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    props:['item'],
    methods:{
        clickResult(id){
            this.$router.push('comment/'+id)
        }
    }
}
</script>

<style>

</style>