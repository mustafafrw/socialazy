<template>
    <div class="pa-5 text-center">
        <iframe
            v-if="loaded"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            height="320"
            :src= "getembed"
            title="YouTube video player"
            :width="width"
            allowfullscreen
        >
        </iframe>
    </div>
</template>

<script>
export default {
    props:['time','dialog','video_id'],
    data(){
        return{
            loaded: false,
            timeinseconds: 0
        }
    },
    computed:{
        width () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 320
                default:
                    return 640
            }
        },
        getembed(){
            return "https://www.youtube.com/embed/"+this.video_id+"?start="+this.timeinseconds+"&autoplay=1"
        }
    },
    methods:{
        gettime(){
            let time = this.time
            let second = 0
            let minute = 0
            let hour = 0

            
            //const regex = new RegExp('t=(.*?)?[^a-z](.*?)?[^a-z](.*?)s','g')
            //const regex = new RegExp('/(\d+h)?(\d+m)?(\d+s)/')
            
            if(time.includes('h')){
                hour = time.split('h')[0]
            }
            if(time.includes('m')){
                minute = time.split('m')[0].replace(hour+('h'),"")
            }
            second = time.split('s')[0].replace(hour+('h'),"").replace(minute+('m'),"")
            hour = parseInt(hour)
            minute = parseInt(minute)
            second = parseInt(second)
            this.timeinseconds = (hour*60*60)+(minute*60)+second
        },
        getHour(){

        }
    },
    mounted(){
        this.gettime()
        this.loaded = true;

    }
}
</script>

<style>

</style>