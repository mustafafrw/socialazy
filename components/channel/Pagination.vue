<template>
  <div class="bg-indigo-900 text-center py-4 lg:px-4">


          <div v-if="$store.state.currentChPage!=1" class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">

            <span class="font-semibold text-center flex-auto">
              <a  class="font-semibold p-2 text-center flex-auto"
                                                                     :href="prvHref"
                                                                     @click.prevent="prvCommit()"
            >
              Previous
            </a>
            </span>

          </div>
          <div v-if="$store.state.chComments.length>0" class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">

              <span class="font-semibold text-center flex-auto">
              <a class="font-semibold p-2 text-center flex-auto"
                 :href="nxtHref"
                 @click.prevent="nxtCommit()"
              >
              Next
            </a>
              </span>

          </div>
    </div>

</template>

<script>
  export default {
    name: "Pagination",
    props:{
      page:null,
      chid:null
    },
    computed:{
      nxt(){
        return this.$store.getters.getcurrentChPage;
      },
      prvHref()
      {
        var cur = this.$store.getters.getcurrentChPage-1;
        if(cur===1)
          return "/channel/"+this.$props.chid;
        else
          return '/channel/'+this.$props.chid+'/'+cur
      },
      nxtHref()
      {
        var cur = this.$store.getters.getcurrentChPage+1;
          return '/channel/'+this.$props.chid+'/'+cur
      }
    },
    methods:{
      nxtCommit(){
        this.$store.commit("setcurrentChPageNext");
        this.$router.push('/channel/'+this.$props.chid+'/'+this.$store.getters.getcurrentChPage)
      },
      prvCommit(){
        this.$store.commit("setcurrentChPagePrevious");
        var cur = this.$store.getters.getcurrentChPage;
        if(cur===1)
          this.$router.push('/channel/'+this.$props.chid);
        else
          this.$router.push('/channel/'+this.$props.chid+'/'+this.$store.getters.getcurrentChPage);
      }


    }
  }

</script>

<style scoped>

</style>
