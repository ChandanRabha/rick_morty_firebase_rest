import ICharacterModel from "./ICharacterModel"
import IInfoModel from "./IInforModel"

export default interface IResponseModel {
  info: IInfoModel
  results: ICharacterModel[]
}