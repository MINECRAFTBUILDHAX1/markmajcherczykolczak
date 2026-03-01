// Game Configuration
const gameTypes = {
    quiz: {
        difficulties: {
            easy: {
                questions: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1
                    },
                    {
                        question: "What is the largest mammal in the world?",
                        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                        correct: 1
                    },
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                        correct: 2
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Ag", "Au", "Fe", "Cu"],
                        correct: 1
                    }
                ]
            },
            medium: {
                questions: [
                    {
                        question: "Which element has the atomic number 79?",
                        options: ["Silver", "Platinum", "Gold", "Mercury"],
                        correct: 2
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3
                    },
                    {
                        question: "Which country invented tea?",
                        options: ["India", "China", "Japan", "England"],
                        correct: 1
                    },
                    {
                        question: "What is the speed of light in meters per second?",
                        options: ["299,792,458", "199,792,458", "399,792,458", "499,792,458"],
                        correct: 0
                    },
                    {
                        question: "Who wrote 'The Theory of Relativity'?",
                        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
                        correct: 1
                    }
                ]
            },
            hard: {
                questions: [
                    {
                        question: "What is the molecular formula for glucose?",
                        options: ["C6H12O6", "C12H22O11", "CH3COOH", "NaHCO3"],
                        correct: 0
                    },
                    {
                        question: "Which ancient wonder was located in Alexandria?",
                        options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse", "Great Pyramid"],
                        correct: 2
                    },
                    {
                        question: "What is the atomic number of Uranium?",
                        options: ["92", "93", "94", "95"],
                        correct: 0
                    },
                    {
                        question: "Who discovered penicillin?",
                        options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Joseph Lister"],
                        correct: 1
                    },
                    {
                        question: "What is the capital of Bhutan?",
                        options: ["Kathmandu", "Thimphu", "Dhaka", "Vientiane"],
                        correct: 1
                    }
                ]
            }
        }
    },
    picture: {
        difficulties: {
            easy: {
                questions: [
                    {
                        question: "What animal is this?",
                        image: "images/animals/lion.jpg",
                        options: ["Lion", "Tiger", "Leopard", "Cheetah"],
                        correct: 0
                    },
                    {
                        question: "Which famous landmark is this?",
                        image: "images/landmarks/eiffel.jpg",
                        options: ["Big Ben", "Eiffel Tower", "Statue of Liberty", "Taj Mahal"],
                        correct: 1
                    },
                    {
                        question: "What type of food is this?",
                        image: "images/food/pizza.jpg",
                        options: ["Burger", "Pizza", "Sandwich", "Taco"],
                        correct: 1
                    },
                    {
                        question: "Which sport is this?",
                        image: "images/sports/soccer.jpg",
                        options: ["Basketball", "Soccer", "Tennis", "Baseball"],
                        correct: 1
                    },
                    {
                        question: "What vehicle is this?",
                        image: "images/vehicles/car.jpg",
                        options: ["Car", "Truck", "Bus", "Van"],
                        correct: 0
                    }
                ]
            },
            medium: {
                questions: [
                    {
                        question: "Which famous painting is this?",
                        image: "images/art/mona-lisa.jpg",
                        options: ["The Scream", "Mona Lisa", "Starry Night", "The Persistence of Memory"],
                        correct: 1
                    },
                    {
                        question: "What type of flower is this?",
                        image: "images/flowers/rose.jpg",
                        options: ["Rose", "Tulip", "Daisy", "Sunflower"],
                        correct: 0
                    },
                    {
                        question: "Which musical instrument is this?",
                        image: "images/instruments/piano.jpg",
                        options: ["Piano", "Organ", "Harpsichord", "Synthesizer"],
                        correct: 0
                    },
                    {
                        question: "What type of tree is this?",
                        image: "images/trees/oak.jpg",
                        options: ["Oak", "Maple", "Pine", "Birch"],
                        correct: 0
                    },
                    {
                        question: "Which planet is this?",
                        image: "images/planets/mars.jpg",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1
                    }
                ]
            },
            hard: {
                questions: [
                    {
                        question: "Which famous building's architecture style is this?",
                        image: "images/architecture/gothic.jpg",
                        options: ["Gothic", "Romanesque", "Baroque", "Renaissance"],
                        correct: 0
                    },
                    {
                        question: "What type of cloud formation is this?",
                        image: "images/weather/cumulonimbus.jpg",
                        options: ["Cumulonimbus", "Stratus", "Cirrus", "Altostratus"],
                        correct: 0
                    },
                    {
                        question: "Which species of bird is this?",
                        image: "images/birds/eagle.jpg",
                        options: ["Bald Eagle", "Golden Eagle", "Harpy Eagle", "Philippine Eagle"],
                        correct: 0
                    },
                    {
                        question: "What type of rock formation is this?",
                        image: "images/geology/granite.jpg",
                        options: ["Granite", "Basalt", "Limestone", "Sandstone"],
                        correct: 0
                    },
                    {
                        question: "Which constellation is this?",
                        image: "images/astronomy/orion.jpg",
                        options: ["Orion", "Ursa Major", "Cassiopeia", "Leo"],
                        correct: 0
                    }
                ]
            }
        }
    },
    word: {
        difficulties: {
            easy: {
                words: [
                    { word: "CAT", scrambled: "ATC" },
                    { word: "DOG", scrambled: "OGD" },
                    { word: "SUN", scrambled: "NUS" },
                    { word: "MOON", scrambled: "ONMO" },
                    { word: "STAR", scrambled: "TSAR" }
                ]
            },
            medium: {
                words: [
                    { word: "PLANET", scrambled: "LAPNET" },
                    { word: "FLOWER", scrambled: "FOWLER" },
                    { word: "RIVER", scrambled: "RIVRE" },
                    { word: "BEACH", scrambled: "CHEAB" },
                    { word: "CLOUD", scrambled: "COULD" }
                ]
            },
            hard: {
                words: [
                    { word: "VOLCANO", scrambled: "VOCLANO" },
                    { word: "JUNGLE", scrambled: "JUNGEL" },
                    { word: "DESERT", scrambled: "DESTER" },
                    { word: "ISLAND", scrambled: "SILAND" },
                    { word: "FOREST", scrambled: "FOSTER" }
                ]
            }
        }
    },
    maths: {
        difficulties: {
            easy: {
                questions: [
                    { question: "What is 5 + 3?", answer: 8 },
                    { question: "What is 10 - 4?", answer: 6 },
                    { question: "What is 6 × 2?", answer: 12 },
                    { question: "What is 15 ÷ 3?", answer: 5 },
                    { question: "What is 7 + 8?", answer: 15 }
                ]
            },
            medium: {
                questions: [
                    { question: "What is 25 × 4?", answer: 100 },
                    { question: "What is 150 ÷ 5?", answer: 30 },
                    { question: "What is 12 × 8?", answer: 96 },
                    { question: "What is 200 - 75?", answer: 125 },
                    { question: "What is 45 + 55?", answer: 100 }
                ]
            },
            hard: {
                questions: [
                    { question: "What is 13 × 17?", answer: 221 },
                    { question: "What is 256 ÷ 8?", answer: 32 },
                    { question: "What is 15²?", answer: 225 },
                    { question: "What is 1000 - 247?", answer: 753 },
                    { question: "What is 7 × 8 × 9?", answer: 504 }
                ]
            }
        }
    }
}; 
