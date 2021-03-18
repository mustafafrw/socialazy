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
        },
        lastrequest: {
            url: null,
            nextPageToken: null,
            type: null
        }
    },
    mutations:{
        setData(state,data){
            state.data = data;
        },
        addData(state,data){
            data.forEach(element => {
                state.data.push(element)
            });
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
            let url= "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Creplies%2Csnippet&order=relevance&allThreadsRelatedToChannelId="+id+"&key="+state.state.key
            await axios.get(url)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setData", data.items)
                    state.state.lastrequest.url= url
                    state.state.lastrequest.type= "commentThreads"
                    if(data.nextPageToken)
                        state.state.lastrequest.nextPageToken= data.nextPageToken
                    else{
                        state.state.lastrequest.nextPageToken= null
                    }
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setDataWithTerm_Channel(state,payload){
            state.commit("setData", "");
            
            let url="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&allThreadsRelatedToChannelId="+payload.id+"&searchTerms="+payload.term+"&key="+state.state.key
            await axios.get(url)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setData", data.items)
                    state.state.lastrequest.url= url
                    state.state.lastrequest.type= "commentThreads"
                    if(data.nextPageToken)
                        state.state.lastrequest.nextPageToken= data.nextPageToken
                    else{
                        state.state.lastrequest.nextPageToken= null
                    }
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setDataWithTerm_Video(state,payload){
            state.commit("setData", "");
            
            let url="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId="+payload.id+"&searchTerms="+payload.term+"&key="+state.state.key
            await axios.get(url)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setData", data.items)
                    state.state.lastrequest.url= url
                    state.state.lastrequest.type= "commentThreads"
                    if(data.nextPageToken)
                        state.state.lastrequest.nextPageToken= data.nextPageToken
                    else{
                        state.state.lastrequest.nextPageToken= null
                    }
                }
            }).catch(error => {
                console.log(error)
            });
        },
        async setDataWithVideoId(state,id){
            state.commit("setData", "");
            let url= "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&videoId="+id+"&key="+state.state.key
            await axios.get(url)
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setData", data.items)
                    state.state.lastrequest.url= url
                    state.state.lastrequest.type= "commentThreads"
                    if(data.nextPageToken)
                        state.state.lastrequest.nextPageToken= data.nextPageToken
                    else{
                        state.state.lastrequest.nextPageToken= null
                    }
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
        async setSearchResult(state,payload){
            state.commit("setSearchResult", "");
            await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type="+payload.type+"&q="+payload.query+"&key="+state.state.key)
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
        async LoadMore(state){
            if(state.state.lastrequest.type=="commentThreads"){
                //console.log("id - "+id);
                let url=  state.state.lastrequest.url
                await axios.get(url+"&pageToken="+state.state.lastrequest.nextPageToken)
                .then(response => {
                    let data = response.data;
                    if(data.items){
                        state.commit("addData", data.items)
                        if(data.nextPageToken)
                            state.state.lastrequest.nextPageToken= data.nextPageToken
                        else{
                            state.state.lastrequest.nextPageToken= null
                        }
                    }
                }).catch(error => {
                    console.log(error)
                });
           }
        }


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


