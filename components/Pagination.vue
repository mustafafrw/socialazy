<template>
  <div class="bg-indigo-900 text-center py-4 lg:px-4">


    <div v-if="$store.state.currentPage!=1" class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">

            <span class="font-semibold text-center flex-auto">
              <a  class="font-semibold p-2 text-center flex-auto"
                  href="#"
                  @click.prevent="prvCommit()"
              >
              Previous
            </a>
            </span>

    </div>
    <div v-if="$store.state.channels.length>0" class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex" role="alert">

              <span class="font-semibold text-center flex-auto">
              <a class="font-semibold p-2 text-center flex-auto"
                 href="#"
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
          page:null
        },
        computed:{
            nxt(){
              return this.$store.getters.getcurrentPage;
            }
        },
        methods:{
          nxtCommit(){
              this.$store.commit("setPageNext");
               this.$router.push('/'+this.$props.page+'/'+this.$store.getters.getcurrentPage)
          },
          prvCommit(){
            this.$store.commit("setPagePrevious");
            var cur = this.$store.getters.getcurrentPage;
            if(cur===1)
              this.$router.push('/');
            else
              this.$router.push('/'+this.$props.page+'/'+this.$store.getters.getcurrentPage);
          }

        }
    }

</script>

<style scoped>

</style>
