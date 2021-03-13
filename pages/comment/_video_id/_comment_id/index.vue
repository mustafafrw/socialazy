<template>
    <div>
      <VideoInformation 
          :data="videoinfo"
      />
      <ListComments
          :data="comment"
      />
      <v-divider v-if="replies"></v-divider>
      <ListReplies
          :data="replies"
      />
    </div>
</template>

<script>
import VideoInformation from "@/components/Main/VideoInformation"
import ListReplies from "@/components/Main/ListReplies"
import ListComments from "@/components/Main/ListComments"

export default {
    components:{
        VideoInformation,
        ListReplies,
        ListComments
    },
    mounted(){
        console.log(this.$route)
    },
    async asyncData ({ store, params }) {
        await store.dispatch('setVideoInfo',params.video_id);
        await store.dispatch('setReplies',params.comment_id);
    },
    computed: {
      replies () {
        return this.$store.state.replies
      },
      comment(){
        return this.$store.state.data
      },
      videoinfo () {
        let videoinfo = this.$store.state.videoinfo
        
        if(videoinfo){
          let info = videoinfo[0];
          //this.title = top.snippet.title;
          //this.description = top.snippet.title + this.descEnd;
          return info;
        }
        return null
      }
    }
}
</script>

<style>

</style>