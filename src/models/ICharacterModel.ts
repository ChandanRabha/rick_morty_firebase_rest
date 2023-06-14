import IBaseModel from "./IBaseModel"

export default interface ICharacterModel {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: IBaseModel
    location: IBaseModel
    image: string
    episode: string[]
    url: string
    created: string
}   