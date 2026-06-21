interface CardProps {
        id: number;
        image: string;
        isFlipped: boolean;
        isMatched: boolean;
        onCardClick: (id: number) => void;
    }

function Card({ id, image, isFlipped, isMatched, onCardClick }: CardProps) {

    return (
        <div onClick={() => onCardClick(id)}>
            {isFlipped || isMatched ? <img src={image} /> : <div>placeholder</div>}
        </div>
    );
}

export default Card;