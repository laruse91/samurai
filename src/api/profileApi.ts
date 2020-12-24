import {TPhotos, TProfile} from "../types/types";
import {instance, TResponse} from "./api";

type TSavePhoto = {
    photos: TPhotos
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<TProfile>(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<TResponse>(`profile/status`, {status: status})
            .then(response => response.data);
    },
    savePhoto(photo: File) {
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put<TResponse<TSavePhoto>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    saveProfile(profile: TProfile) {
        return instance.put<TResponse>(`profile`, profile)
            .then(response => response.data);
    },
}