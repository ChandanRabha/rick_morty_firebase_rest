import ICardProps from "./interfaces/ICardProps";

const Card = (props: ICardProps) => (
    <div className='drop-shadow-xl gap-2 flex flex-col' key={props.id}>
        <img
            src={props.image}
            alt={props.name}
            className={`rounded-md transition-opacity duration-300 ${props.id.toString() !== props.hoveredImage && props.hoveredImage !== "" && "opacity-70"}`}
            id={props.id.toString()}
            onMouseOver={props.onMouseOver}
            onMouseLeave={props.onMouseLeave}
            loading="lazy"
        />
        <div className='flex flex-col dark:text-white drop-shadow-xl'>
            <label>{props.name}</label>
            <label>{props.species}</label>
            <label>{props.status}</label>
        </div>
    </div>
)

export default Card