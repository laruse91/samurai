export type TPhotos = {
    large: string | null
    small: string | null
}
export type TUser = {
    id: number
    name: string
    status: string | null
    photos: TPhotos
    followed: boolean
    location?: string
}
export type TContacts = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type TProfile = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: {[key: string]: string | null}
    photos: TPhotos
}

export type TInitialStateMessage = {
    userId: number
    photo: string | null
    message: string
    userName: string
}

export type TInitialStateUserType = {
    name: string
    lastName: string
    id: number
    photo: string | null
    info: string | null
}
export type TNavItem = {
    id: number
    item: string
    path: string
    icon: string
}

