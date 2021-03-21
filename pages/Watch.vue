<template>
  
</template>

<script>
export default {
    mounted(){
        if(this.$route.query.v){
            this.$router.push('/comment/'+this.$route.query.v)
        }
    }
}
</script>

<style>

</style>