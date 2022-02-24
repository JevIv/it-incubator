import axios from "axios";
//Data access layer

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "0cef6ec5-ea0b-4679-beff-cc75700e3c68"
    },
    data: {}
})

export const usersAPI = {
    getUsers(currentPage:number = 1, pageSize:number= 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(userId:number = 1,){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollowUser(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    loginUser(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

// export const userSubscriptionAPI = {
//     followUser(userId: number){
//         return instance.post(`follow/${userId}`)
//             .then(response => response.data)
//     },
//     unFollowUser(userId: number){
//         return instance.delete(`follow/${userId}`)
//             .then(response => response.data)
//     }
// }

/*export const getUsers = (currentPage:number = 1, pageSize:number= 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
};*/
