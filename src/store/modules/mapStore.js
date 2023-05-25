import http from "@/util/http-common";

const mapStore={
    namespaced: true,
    state:{
        categoryCode:10,
        detailData: null,
        address:null,
        selectedDay:0,
        planList:[],
        planTitle :''
    },

    mutations:{
        SET_DETAIL_DATA(state,value){
            state.detailData = value;
        },
        SET_CATEGORY_CODE(state,value){
            state.categoryCode = value;
        },
        SET_SELECTED_DAY(state,value){
            state.selectedDay = value;
        },
        SET_PLAN_TITLE(state,value){
            state.planTitle = value;
        },
        SET_PLAN_LIST(state,value){
            state.planList = value;
        },
        ADD_PLAN(state,plan){
            const existingDay = state.planList.find((day) => day.day === state.selectedDay);
            if(existingDay){
                existingDay.elements.push(plan);
            }else{
                const newPlan ={
                    day:state.selectedDay,
                    elements:[plan],
                };
                state.planList.push(newPlan);
            }
        },
        DELETE_PLAN(state, {day,index}){
            state.planList.forEach((item) => {
                if (item.day == day && item.elements[index]) {
                    item.elements.splice(index, 1);
                }
            });
          }
    },
    actions:{
        fetchDetailData({commit}, contentId,userInfo){
            console.log(contentId + ":::" + userInfo)
            if(userInfo == undefined){
                http.get(`/attraction?contentId=${contentId}&userId=`)
                    .then(response =>{
                        console.log("response!!!")
                        console.log(response.data);
                        commit('SET_DETAIL_DATA',response.data);
                    })
                    .catch(error=>{
                        console.error("데이터 가져오는 중",error);
                    });
            }else{
                http.get(`/attraction?contentId=${contentId}&userId=${userInfo.userId}`)
                    .then(response =>{
                        console.log("response!!!")
                        console.log(response.data);
                        commit('SET_DETAIL_DATA',response.data);
                    })
                    .catch(error=>{
                        console.error("데이터 가져오는 중",error);
                    });
            }

        },
        setCategoryCode({commit},categoryCode){
            commit('SET_CATEGORY_CODE',categoryCode)
        },
        setSelectedDay({commit},day){
            commit('SET_SELECTED_DAY',day);
        },
        setPlanTitle({commit},planTitle){
            commit('SET_PLAN_TITLE',planTitle);
        },
        setPlanList({commit},planList){
            commit('SET_PLAN_LIST',planList);
        },
        addPlan({commit,state},plan){
            if(state.selectedDay != 0){
                commit('ADD_PLAN',plan);
            }
        },
        deletePlan({commit},{day,index}){
            commit('DELETE_PLAN',{day,index});
        }
    },
    getters:{
        getCategoryCode(state){
            return state.categoryCode;
        },
        getDetailData(state){
            return state.detailData;
        },
        getPlanData(state){
            return state.planList;
        }
    }
};

export default mapStore;