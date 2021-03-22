<template>
   <v-list three-line v-if="data">
        <template v-for="(item, index) in data">
            <v-divider
            v-if="index>0"
            inset
            ></v-divider>
            <SearchResultVideo v-if="type=='video'" :item="item" />
            <SearchResultChannel v-if="type=='channel'" :item="item" />
            <SearchResultPopular v-if="type=='popular'" :item="item" />
        </template>
    </v-list>
</template>

<script>
import SearchResultVideo from "@/components/Search/SearchResultVideo"
import SearchResultChannel from "@/components/Search/SearchResultChannel"
import SearchResultPopular from "@/components/Search/SearchResultPopular"

export default {
    props:['data','type'],
    components:{
        SearchResultVideo,
        SearchResultChannel,
        SearchResultPopular
    }
}
</script>

<style>

</style>