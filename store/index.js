import Vuex from "vuex";
import axios from "axios"

const createStore = () => {
  return new Vuex.Store({
    state:{
        site: "https://socialazy.com",
        data: null,
        topinfo: null,
        replies: null,
        videoinfo: null,
        searchresult: null,
        searchdialog: false,
        key: "AIzaSyDhuIGeH4xmjvncDrgIFsbxGlGfFkCj3uY",
        snackbar:{
            show:false,
            message:""
        }
    },
    mutations:{
        setData(state,data){
            state.data = data;
        },
        setTopInfo(state,data){
            state.topinfo = data;
        },
        setSearchResult(state,data){
            state.searchresult = data;
        },
        setSearchDialog(state){
            state.searchdialog = !state.searchdialog
        },
        setVideoInfo(state,data){
            state.videoinfo = data
        },
        setReplies(state,data){
            state.replies = data
        },
        closeSnackbar(state){
            state.snackbar.show = false
        },
        showSnackbar(state,message){
            let timeout =0
            if(state.snackbar.show){
              state.snackbar.show=false
              timeout=200
            }
            setTimeout(() => {
              state.snackbar.show = true
              state.snackbar.message = message
            }, timeout);
        },
    },
    actions:{
        async setData(state,id){
            state.commit("setData", "");
            //console.log("id - "+id);
            
            await axios.get("https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Creplies%2Csnippet&allThreadsRelatedToChannelId="+id+"&key="+state.state.key)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setData", data.items)
                    //console.log(data.items)
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setDataWithTerm(state,payload){
            state.commit("setData", "");
            //console.log("id - "+id);
            await axios.get("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId="+payload.id+"&searchTerms="+payload.term+"&key="+state.state.key)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setData", data.items)
                    //console.log(data.items)
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setTopInfo(state,id){
            state.commit("setTopInfo", "");
            await axios.get("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+id+"&key="+state.state.key)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setTopInfo", data.items)
                    //console.log(data.items)
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setSearchResult(state,query){
            state.commit("setSearchResult", "");
            await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=channel&q="+query+"&key="+state.state.key)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setSearchResult", data.items)
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setVideoInfo(state,id){
            state.commit("setVideoInfo", "");
            console.log(id)
            await axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id="+id+"&key="+state.state.key)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setVideoInfo", data.items)
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setReplies(state,id){
            state.commit("setReplies", "");
            await axios.get("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&id="+id+"&key="+state.state.key)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setData", data.items)
                    if(data.items[0].replies){
                        state.commit("setReplies", data.items[0].replies.comments)
                    }
                }
            }).catch(error => {
                console.log(error)
            });
        },
    },
    getters:{
        getData(state){
            return state.data;
        },
        getTopInfo(state){
            return state.topinfo;
        },
        getSearchResult(state){
            return state.searchresult;
        }
    }

  });

};

export default createStore


