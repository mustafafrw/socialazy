<template>

      <nav class="flex items-center justify-between flex-wrap bg-teal-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
           <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-4">
              Youtube Top Comments
            </a>
          </span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-md lg:flex-grow">
            <a href="#" @click.prevent="$router.push('/About')" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-4">
              About Us
            </a>
            <a href="#" @click.prevent="$router.push('/PrivacyPolicy')" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-4">
              Privacy Policy
            </a>
            <a href="#" @click.prevent="$router.push('/TermsOfService')" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-4">
              Terms Of Service
            </a>
          </div>
        </div>
      </nav>

</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
