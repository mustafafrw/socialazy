import Vuex from "vuex";
import axios from "axios"

const createStore = () => {
  return new Vuex.Store({
    state:{
        data: null,
        topinfo: null,
        searchresult: null,
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
        }
    },
    actions:{
        async setData(state,id){
            state.commit("setData", "");
            //console.log("id - "+id);
            await axios.get("https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Creplies%2Csnippet&allThreadsRelatedToChannelId="+id+"&key=AIzaSyDhuIGeH4xmjvncDrgIFsbxGlGfFkCj3uY")
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
            //console.log("id - "+id);
            await axios.get("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+id+"&key=AIzaSyDhuIGeH4xmjvncDrgIFsbxGlGfFkCj3uY")
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
            //console.log("id - "+id);
            await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+query+"&key=AIzaSyDhuIGeH4xmjvncDrgIFsbxGlGfFkCj3uY")
            .then(response => {
                let data = response.data;
                if(data.items){
                    state.commit("setSearchResult", data.items)
                    //console.log(data.items)
                }
            }).catch(error => {
                console.log(error)
            });
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


