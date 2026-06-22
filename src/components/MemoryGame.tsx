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
        if (firstCard === null) {
            // first click - flip the card
            const updatedCards = cards.map((card) => {
                if (card.id === id) {
                    return { ...card, isFlipped: true };
                }
                return card;
            });
            setCards(updatedCards);
            // store the clicked card
            const clickedCard = cards.find((card) => card.id === id);
            if (clickedCard) {
                setFirstCard(clickedCard);
            }
        } else {
            // second click
        }
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