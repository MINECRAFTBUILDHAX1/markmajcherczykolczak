const quizDatabase = {
    general: {
        easy: {
            points: 10,
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
                    question: "Which country is famous for its pyramids?",
                    options: ["Greece", "Egypt", "Mexico", "India"],
                    correct: 1
                },
                {
                    question: "What is the largest continent by land area?",
                    options: ["Asia", "Africa", "Europe", "North America"],
                    correct: 0
                },
                {
                    question: "What is the primary language spoken in Brazil?",
                    options: ["Spanish", "Portuguese", "English", "French"],
                    correct: 1
                },
                {
                    question: "Which ocean is the largest?",
                    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                    correct: 3
                },
                {
                    question: "What is the largest desert in the world?",
                    options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
                    correct: 3
                },
                {
                    question: "Who invented the lightbulb?",
                    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
                    correct: 1
                },
                {
                    question: "Which country is known as the Land of the Rising Sun?",
                    options: ["South Korea", "China", "Japan", "Thailand"],
                    correct: 2
                }
            ]
        },
        medium: {
            points: 15,
            questions: [
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correct: 2
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Ag", "Au", "Fe", "Cu"],
                    correct: 1
                },
                {
                    question: "Which country invented tea?",
                    options: ["India", "China", "Japan", "England"],
                    correct: 1
                },
                {
                    question: "Who was the first human in space?",
                    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
                    correct: 2
                },
                {
                    question: "What is the tallest mountain in the world?",
                    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
                    correct: 1
                },
                {
                    question: "What year did the Titanic sink?",
                    options: ["1900", "1912", "1920", "1935"],
                    correct: 1
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Diamond", "Iron", "Platinum"],
                    correct: 1
                },
                {
                    question: "Which animal is known as the king of the jungle?",
                    options: ["Lion", "Tiger", "Elephant", "Bear"],
                    correct: 0
                },
                {
                    question: "What is the currency of Japan?",
                    options: ["Yuan", "Won", "Yen", "Ringgit"],
                    correct: 2
                },
                {
                    question: "What is the capital of Australia?",
                    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
                    correct: 3
                }
            ]
        },
        hard: {
            points: 20,
            questions: [
                {
                    question: "What is the speed of light in meters per second?",
                    options: ["299,792,458", "199,792,458", "399,792,458", "499,792,458"],
                    correct: 0
                },
                {
                    question: "Who wrote 'The Theory of Relativity'?",
                    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
                    correct: 1
                },
                {
                    question: "What is the atomic number of carbon?",
                    options: ["4", "6", "8", "10"],
                    correct: 1
                },
                {
                    question: "What is the chemical symbol for potassium?",
                    options: ["K", "P", "Po", "Pb"],
                    correct: 0
                },
                {
                    question: "What is the term for the fear of long words?",
                    options: ["Hippopotomonstrosesquipedaliophobia", "Xenophobia", "Claustrophobia", "Acrophobia"],
                    correct: 0
                },
                {
                    question: "What element has the atomic number 79?",
                    options: ["Gold", "Platinum", "Silver", "Copper"],
                    correct: 0
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
                    correct: 0
                },
                {
                    question: "In which year did the Berlin Wall fall?",
                    options: ["1987", "1988", "1989", "1990"],
                    correct: 2
                },
                {
                    question: "What is the second most abundant element in the Earth's crust?",
                    options: ["Silicon", "Oxygen", "Aluminum", "Iron"],
                    correct: 0
                },
                {
                    question: "Which element is represented by the symbol Na?",
                    options: ["Sodium", "Nitrogen", "Nickel", "Neon"],
                    correct: 0
                }
            ]
        }
    },
    maths: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is 5 + 7?",
                    options: ["10", "11", "12", "13"],
                    correct: 2
                },
                {
                    question: "What is 8 × 6?",
                    options: ["40", "42", "48", "50"],
                    correct: 2
                },
                {
                    question: "What is the square root of 81?",
                    options: ["7", "8", "9", "10"],
                    correct: 2
                },
                {
                    question: "What is 15 ÷ 3?",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "What is the sum of 10 and 10?",
                    options: ["15", "18", "20", "22"],
                    correct: 2
                },
                {
                    question: "What is 20 − 4?",
                    options: ["12", "14", "16", "18"],
                    correct: 2
                },
                {
                    question: "What is 3 × 5?",
                    options: ["12", "13", "14", "15"],
                    correct: 3
                },
                {
                    question: "What is the square of 6?",
                    options: ["30", "36", "40", "42"],
                    correct: 2
                },
                {
                    question: "What is 50 ÷ 5?",
                    options: ["9", "10", "12", "15"],
                    correct: 2
                },
                {
                    question: "What is the result of 7 × 9?",
                    options: ["57", "62", "63", "72"],
                    correct: 3
                }
            ]
        },
        medium: {
            points: 20,
            questions: [
                {
                    question: "What is the derivative of 3x²?",
                    options: ["3x", "6x", "9x", "x²"],
                    correct: 2
                },
                {
                    question: "What is 10 to the power of 3?",
                    options: ["100", "1000", "10000", "100000"],
                    correct: 2
                },
                {
                    question: "What is the product of 5 and 8?",
                    options: ["40", "35", "50", "45"],
                    correct: 1
                },
                {
                    question: "What is the value of π (pi) to 2 decimal places?",
                    options: ["3.14", "3.15", "3.16", "3.13"],
                    correct: 1
                },
                {
                    question: "What is the square of 12?",
                    options: ["122", "136", "144", "120"],
                    correct: 3
                },
                {
                    question: "What is the integral of 1/x?",
                    options: ["x", "ln(x)", "1", "e^x"],
                    correct: 2
                },
                {
                    question: "What is the value of 16 − 9?",
                    options: ["5", "6", "7", "8"],
                    correct: 3
                },
                {
                    question: "What is 25 ÷ 5?",
                    options: ["4", "5", "6", "7"],
                    correct: 1
                },
                {
                    question: "What is the logarithm of 100 to base 10?",
                    options: ["1", "2", "3", "4"],
                    correct: 2
                },
                {
                    question: "What is the sum of 22 and 18?",
                    options: ["40", "35", "42", "45"],
                    correct: 0
                }
            ]
        },
        hard: {
            points: 30,
            questions: [
                {
                    question: "What is the derivative of x²?",
                    options: ["x", "2x", "3x", "x²"],
                    correct: 2
                },
                {
                    question: "What is the integral of 1/x?",
                    options: ["x", "ln(x)", "1", "e^x"],
                    correct: 2
                },
                {
                    question: "What is the solution to the equation x² - 4 = 0?",
                    options: ["x = ±1", "x = ±2", "x = ±4", "x = 4"],
                    correct: 2
                },
                {
                    question: "What is the value of π to 5 decimal places?",
                    options: ["3.14159", "3.14200", "3.14157", "3.14162"],
                    correct: 1
                },
                {
                    question: "What is the value of e to 3 decimal places?",
                    options: ["2.718", "2.710", "2.720", "2.800"],
                    correct: 1
                },
                {
                    question: "What is the derivative of sin(x)?",
                    options: ["cos(x)", "sin(x)", "tan(x)", "sec(x)"],
                    correct: 1
                },
                {
                    question: "What is the sum of the interior angles of a triangle?",
                    options: ["180", "360", "90", "270"],
                    correct: 1
                },
                {
                    question: "What is the volume of a sphere with radius r?",
                    options: ["πr²", "4/3πr³", "2πr³", "πr³"],
                    correct: 2
                },
                {
                    question: "What is the logarithm of 1000 to base 10?",
                    options: ["1", "2", "3", "4"],
                    correct: 3
                },
                {
                    question: "What is the solution to the equation 2x + 3 = 7?",
                    options: ["x = 1", "x = 2", "x = 3", "x = 4"],
                    correct: 2
                }
            ]
        }
    },
    science: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "O2", "N2"],
                    correct: 0
                },
                {
                    question: "What planet is closest to the Sun?",
                    options: ["Earth", "Mars", "Venus", "Mercury"],
                    correct: 3
                },
                {
                    question: "What is the process by which plants make their own food?",
                    options: ["Respiration", "Fermentation", "Photosynthesis", "Digestion"],
                    correct: 2
                },
                {
                    question: "How many states of matter are there?",
                    options: ["1", "2", "3", "4"],
                    correct: 3
                },
                {
                    question: "What is the chemical symbol for oxygen?",
                    options: ["O", "O2", "H", "H2O"],
                    correct: 0
                },
                {
                    question: "Which gas do plants absorb from the air for photosynthesis?",
                    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                    correct: 1
                },
                {
                    question: "What part of the plant conducts photosynthesis?",
                    options: ["Roots", "Leaves", "Flowers", "Stems"],
                    correct: 1
                },
                {
                    question: "What is the boiling point of water?",
                    options: ["100°F", "0°C", "100°C", "50°C"],
                    correct: 2
                },
                {
                    question: "What is the largest organ in the human body?",
                    options: ["Heart", "Liver", "Skin", "Brain"],
                    correct: 2
                },
                {
                    question: "What is the main function of red blood cells?",
                    options: ["Carry oxygen", "Fight infection", "Help digestion", "Regulate temperature"],
                    correct: 0
                }
            ]
        },
        medium: {
            points: 20,
            questions: [
                {
                    question: "What is the formula for the area of a rectangle?",
                    options: ["Length × Width", "Length × Height", "Height × Width", "Length × Length"],
                    correct: 0
                },
                {
                    question: "Which planet is known as the 'Red Planet'?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correct: 1
                },
                {
                    question: "What is the chemical symbol for sodium?",
                    options: ["Na", "S", "So", "Ne"],
                    correct: 0
                },
                {
                    question: "What is the atomic number of carbon?",
                    options: ["6", "12", "8", "14"],
                    correct: 0
                },
                {
                    question: "What is the process of cell division in humans called?",
                    options: ["Mitosis", "Meiosis", "Binary Fission", "Fermentation"],
                    correct: 0
                },
                {
                    question: "What is the primary gas in Earth's atmosphere?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                    correct: 1
                },
                {
                    question: "What is the process by which a solid turns into a gas?",
                    options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
                    correct: 0
                },
                {
                    question: "Which of the following is a renewable source of energy?",
                    options: ["Coal", "Natural Gas", "Wind", "Nuclear"],
                    correct: 2
                },
                {
                    question: "Which organ system is responsible for transporting blood throughout the body?",
                    options: ["Nervous System", "Digestive System", "Respiratory System", "Circulatory System"],
                    correct: 3
                },
                {
                    question: "What is the chemical formula for methane?",
                    options: ["CH3", "CH4", "CO2", "C2H6"],
                    correct: 1
                }
            ]
        },
        hard: {
            points: 30,
            questions: [
                {
                    question: "What is the atomic number of uranium?",
                    options: ["92", "88", "96", "105"],
                    correct: 0
                },
                {
                    question: "Which element has the highest atomic number?",
                    options: ["Uranium", "Plutonium", "Oganesson", "Neptunium"],
                    correct: 2
                },
                {
                    question: "What is the process of nuclear fusion?",
                    options: ["Splitting atoms", "Combining atoms", "Breaking down molecules", "Releasing energy from the nucleus"],
                    correct: 1
                },
                {
                    question: "What is the main difference between mitosis and meiosis?",
                    options: ["Mitosis produces two daughter cells, meiosis produces four", "Mitosis happens in sex cells, meiosis in body cells", "Mitosis is faster than meiosis", "There is no difference"],
                    correct: 0
                },
                {
                    question: "What is the main function of the mitochondria?",
                    options: ["Control movement", "Produce energy", "Digest food", "Transport oxygen"],
                    correct: 1
                },
                {
                    question: "What is the chemical formula for sulfuric acid?",
                    options: ["H2SO3", "H2SO4", "H2O2", "SO2"],
                    correct: 1
                },
                {
                    question: "What is the process of photosynthesis?",
                    options: ["Converting glucose into oxygen", "Converting light into energy", "Converting light into glucose", "Converting glucose into light"],
                    correct: 2
                },
                {
                    question: "What is the most common element in the human body?",
                    options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
                    correct: 1
                },
                {
                    question: "What is the pH level of pure water?",
                    options: ["7", "5", "8", "10"],
                    correct: 0
                },
                {
                    question: "What type of bond is formed when electrons are shared between atoms?",
                    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
                    correct: 1
                }
            ]
        }
    },
    history: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "Who was the first President of the United States?",
                    options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
                    correct: 0
                },
                {
                    question: "What year did World War I begin?",
                    options: ["1912", "1914", "1916", "1918"],
                    correct: 1
                },
                {
                    question: "What empire was ruled by Julius Caesar?",
                    options: ["Roman Empire", "Ottoman Empire", "British Empire", "Byzantine Empire"],
                    correct: 0
                },
                {
                    question: "Which country was the first to land a man on the moon?",
                    options: ["USA", "Soviet Union", "China", "India"],
                    correct: 0
                },
                {
                    question: "Which civilization built the pyramids?",
                    options: ["Romans", "Greeks", "Egyptians", "Mayans"],
                    correct: 2
                },
                {
                    question: "Who discovered America in 1492?",
                    options: ["Vasco da Gama", "Christopher Columbus", "Marco Polo", "Ferdinand Magellan"],
                    correct: 1
                },
                {
                    question: "Who was the famous queen of ancient Egypt?",
                    options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Ramses II"],
                    correct: 0
                },
                {
                    question: "In which country did the industrial revolution begin?",
                    options: ["Germany", "France", "United States", "Great Britain"],
                    correct: 3
                },
                {
                    question: "Which war was fought between the North and South in the United States?",
                    options: ["World War I", "Civil War", "Vietnam War", "Cold War"],
                    correct: 1
                },
                {
                    question: "Which famous ship sank in 1912?",
                    options: ["The Lusitania", "The Titanic", "The Queen Mary", "The Mayflower"],
                    correct: 1
                }
            ]
        },
        medium: {
            points: 20,
            questions: [
                {
                    question: "What year did the French Revolution begin?",
                    options: ["1789", "1791", "1776", "1800"],
                    correct: 0
                },
                {
                    question: "Which empire was the largest in history?",
                    options: ["Roman Empire", "Ottoman Empire", "British Empire", "Mongol Empire"],
                    correct: 3
                },
                {
                    question: "Who was the longest-reigning monarch of the United Kingdom?",
                    options: ["Queen Victoria", "King George III", "Queen Elizabeth II", "King Henry VIII"],
                    correct: 2
                },
                {
                    question: "Which ancient civilization is known for creating the first written language?",
                    options: ["Sumerians", "Egyptians", "Greeks", "Romans"],
                    correct: 0
                },
                {
                    question: "What was the main cause of World War II?",
                    options: ["Treaty of Versailles", "The rise of Nazism", "The assassination of Archduke Ferdinand", "Invasion of Poland"],
                    correct: 1
                },
                {
                    question: "In which battle did Napoleon Bonaparte suffer his final defeat?",
                    options: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Leipzig", "Battle of Austerlitz"],
                    correct: 0
                },
                {
                    question: "Who was the first emperor of China?",
                    options: ["Qin Shi Huang", "Emperor Gaozu", "Han Wudi", "Tang Taizong"],
                    correct: 0
                },
                {
                    question: "Which ancient civilization built Machu Picchu?",
                    options: ["Aztecs", "Mayans", "Incans", "Olmecs"],
                    correct: 2
                },
                {
                    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
                    options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
                    correct: 0
                },
                {
                    question: "Who was the first African-American President of the United States?",
                    options: ["Barack Obama", "Martin Luther King Jr.", "Malcolm X", "Colin Powell"],
                    correct: 0
                }
            ]
        },
        hard: {
            points: 30,
            questions: [
                {
                    question: "Which treaty ended World War I?",
                    options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Utrecht"],
                    correct: 0
                },
                {
                    question: "What year did the Berlin Wall fall?",
                    options: ["1989", "1990", "1987", "1991"],
                    correct: 0
                },
                {
                    question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
                    options: ["Leonid Brezhnev", "Mikhail Gorbachev", "Nikita Khrushchev", "Joseph Stalin"],
                    correct: 2
                },
                {
                    question: "Which was the last country to abolish slavery?",
                    options: ["United States", "Brazil", "Great Britain", "France"],
                    correct: 1
                },
                {
                    question: "What year did the Titanic sink?",
                    options: ["1910", "1911", "1912", "1913"],
                    correct: 2
                },
                {
                    question: "Which empire is known for the Pax Romana?",
                    options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Byzantine Empire"],
                    correct: 0
                },
                {
                    question: "What was the primary reason for the collapse of the Mayan Civilization?",
                    options: ["Invasion by the Spanish", "Environmental factors", "Disease", "Internal conflict"],
                    correct: 1
                },
                {
                    question: "Who led the famous revolt known as the Spartacus Rebellion?",
                    options: ["Julius Caesar", "Spartacus", "Hannibal", "Augustus"],
                    correct: 1
                },
                {
                    question: "Which U.S. President signed the Emancipation Proclamation?",
                    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Andrew Johnson"],
                    correct: 0
                },
                {
                    question: "In what year did the Roman Empire officially fall?",
                    options: ["476 AD", "400 AD", "300 AD", "500 AD"],
                    correct: 0
                }
            ]
        }
    }
}; 
