import { useState } from "react";
import Card from "./Card";

interface CardType {
    id: number;
    image: string;
    isFlipped: boolean;
    isMatched: boolean;
}

function createCards(images: string[]): CardType[] {
    return [...images, ...images]
    .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
        isMatched: false,
    }));
}

function MemoryGame( { images }: { images: string[] }) {

    const [cards, setCards] = useState<CardType[]>(createCards(images));
    const [firstCard, setFirstCard] = useState<CardType | null>(null);

    function handleCardClick(id: number) {

    }

    return(
        <div>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    isFlipped={card.isFlipped}
                    isMatched={card.isMatched}
                    onCardClick={handleCardClick}
                />
            ))}
        </div>
    );
}

export default MemoryGame;