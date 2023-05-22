import http from "@/util/http-common";

const mapStore={
    state:{
        detailData: null,
        isClicked:false
    },

    mutations:{
        setDetailData(state,data){
            state.detailData = data;
            console.log(state.detailData)
        }
    },
    actions:{
        fetchDetailData({commit}, contentId){
            console.log("detail!!!");
            console.log(contentId);
            http.get(`/attraction/${contentId}`)
                .then(response =>{
                    console.log("response!!!")
                    console.log(response.data);
                    commit('setDetailData',response.data);
                })
                .catch(error=>{
                    console.error("데이터 가져오는 중",error);
                });
        }

    },
    getters:{

    }
};

export default mapStore;