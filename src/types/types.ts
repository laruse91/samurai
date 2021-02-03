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
    contacts: { [key: string]: string | null }
    photos: TPhotos
}

export type TNavItem = {
    id: number
    item: string
    path: string
    icon: string
}

export type TChatMessageAPI = {
    message: string,
    photo: string | null,
    userId: 2,
    userName: string
}
export type TChatMessage = TChatMessageAPI & {id: string}

export type TAuthorizedUser = {
    userId: number | null
    login: string | null
    email: string | null
    userPhoto: string | null
    userName: string | null
}
export type TFirebaseDataFolder = 'images' | 'users' | 'backgrounds' | 'icons' | 'profileContacts'

export type TStatistic = {
    [key: string]: number
}
export type TStatisticWithId = {
    ID?: string
    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
}
export type TWebSocketStatus = 'ready' | 'pending' | 'error'