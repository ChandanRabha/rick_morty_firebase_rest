import { SyntheticEvent } from "react";

import ICharacterModel from "../../../../models/ICharacterModel";

export default interface ICardProps extends ICharacterModel {
    onMouseOver: (e: SyntheticEvent) => void;
    onMouseLeave: (e: SyntheticEvent) => void;
    hoveredImage: string;
}