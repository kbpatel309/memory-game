// Memory Game

import { useState } from "react";
import Card from "./Card";
import { shuffle } from "lodash";

interface CardType {
    id: number;
    image: string;
    isFlipped: boolean;
    isMatched: boolean;
}

function createCards(images: string[]): CardType[] {
    return shuffle([...images, ...images])
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
            const secondCard = cards.find((card) => card.id === id);
            if (secondCard) {
                
                if (secondCard.image === firstCard.image) {
                        const updatedCards = cards.map((card) => {
                            if (card.id === id) {
                                // second clicked card - flip and match it
                                return { ...card, isFlipped: true, isMatched: true };
                            }
                            if (card.id === firstCard.id) {
                                // first clicked card, already flipped, need to match it
                                return { ...card, isMatched: true };
                            }
                            // other cards stay the same
                            return card;
                        });
                        setCards(updatedCards);
                        setFirstCard(null); // reset after everything is done
                } else {
                    const updatedCards = cards.map((card) => {
                        if (card.id === id) {
                            return { ...card, isFlipped: true };
                        }
                        return card;
                    });
                    setCards(updatedCards);
                    setTimeout(() => {
                        // update cards here
                        const updatedCards = cards.map((card) => {
                            if (card.id === id || card.id === firstCard.id) {
                                // flip card back down
                                return { ...card, isFlipped: false };
                            }
                            return card;
                        });
                        setCards(updatedCards);
                    }, 1000);
                    setFirstCard(null);
                }
            }
        }
    }

    return(
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            minHeight: "100vh", 
            paddingTop: "20px",
            width: "100%" 
        }}>
            <h1>Memory Game</h1>
            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: "10px",
                width: "90%",
                maxWidth: "500px"
            }}>
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
        </div>
    );
}

export default MemoryGame;