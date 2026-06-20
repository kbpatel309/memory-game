interface CardProps {
        id: number;
        image: string;
        isFlipped: boolean;
        isMatched: boolean;
        onCardClick: (id: number) => void;
    }

function Card({ id, image, isFlipped, isMatched, onCardClick }: CardProps) {

    return (
        <div>
            Card goes here
        </div>
    );
}

export default Card;