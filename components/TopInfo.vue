<template>
  <div class="bg-indigo-900 text-center py-4 lg:px-4">
    <div class="flex items-center">
        <img class="rounded-full md:w-40 p-4"
             :src="chData[0].ch_logo">
        </img>
      <div class="mt-4 md:mt-0 md:ml-6">
          <div class="block p-2 m-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">

              <span class="font-semibold mr-2 text-left flex-auto">{{chData[0].ch_name}}</span>

            </div>
        <div class="block p-2 m-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">

          <span class="font-semibold mr-2 text-left flex-auto" >Comments : {{comRes[0].total}}</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TopInfo",
        props: {
          chData: null,
          comRes:null
        }
    }
</script>

<style scoped>

</style>
