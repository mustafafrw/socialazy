<template>
  <div class="m-5 bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/6 border-1 border-transparent">
    <div class="bg-cover h-20" :style="'background-color:#'+rndClr()+';'"></div>
    <div class="border-0 px-4 pb-6">
      <div class="text-center text-left sm:flex mb-4">
        <img class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4" :src="ch.ch_logo" alt="">
        <div class="py-2 text-left">
          <h3 class="font-bold text-xl mb-1">{{ch.ch_name}}</h3>
        </div>
      </div>

      <div class="flex">

        <n-link :to="'/channel/'+ch.ch_id" :href="'/channel/'+ch.ch_id" tag="button" class="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2" no-prefetch>
          Top Comments
        </n-link>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "chcard",
      props:{
          ch:null
      },
      methods:{
        rndClr()
        {
          //var randomColor = Math.floor(Math.random()*16777215).toString(16);
          return "34495E";
        }
      }
    }
</script>

<style scoped>

</style>
