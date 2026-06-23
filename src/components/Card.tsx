interface CardProps {
        id: number;
        image: string;
        isFlipped: boolean;
        isMatched: boolean;
        onCardClick: (id: number) => void;
    }

function Card({ id, image, isFlipped, isMatched, onCardClick }: CardProps) {
    return (
        <div 
            onClick={() => onCardClick(id)}
            style={{ width: "100px", height: "100px", cursor: "pointer" }}
        >
            {isFlipped || isMatched 
                ? <img src={image} style={{ width: "100px", height: "100px", objectFit: "cover" }} /> 
                : <div style={{ width: "100px", height: "100px", backgroundColor: "gray" }}></div>}
        </div>
    );
}

export default Card;