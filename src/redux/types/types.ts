export type PhotosType = {
    large: string | null
    small: string | null
}
export type UserType= {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type InitialStateMessageType = {
    id: number
    content: string
}
export type InitialStateUserType = {
    name: string
    lastName: string
    id: number
    photo: string
}