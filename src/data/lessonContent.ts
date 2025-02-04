export const lessonContent = {
  'basics-1': {
    id: 'basics-1',
    title: 'Basics 1',
    exercises: [
      {
        type: 'select',
        question: ' What is the primary mechanism by which the nitrogen-fixing bacterium Rhizobia forms a symbiotic relationship with legume plants?',
        correctAnswer: 'Through the formation of nodules on the plants roots, where Rhizobia convert atmospheric nitrogen (N2) into a usable form',
        options: ['Through the production of ethylene, which promotes root growth and nodulation',' By secreting enzymes that break down cellulose in the plants cell walls, allowing for nutrient uptake','Through the formation of nodules on the plants roots, where Rhizobia convert atmospheric nitrogen (N2) into a usable form','By producing a toxin that inhibits the growth of competing microorganisms']
      },
      {
        type: 'select',
        question: 'Select the correct translation for "Good morning"',
        correctAnswer: 'Buenos días',
        options: ['Buenos días', 'Buenas noches', 'Buenas tardes', 'Adiós']
      },
      {
        type: 'select',
        question: 'Match the pairs',
        correctAnswer: 'Thank you',
        options: ['Gracias', 'Por favor', 'De nada'],
        translation: 'Thank you → Gracias'
      }
    ]
  },
  'basics-2': {
    id: 'basics-2',
    title: 'Basics 2',
    exercises: [
      {
        type: 'translate',
        question: 'Hello',
        correctAnswer: 'Hola',
        translation: 'Hello → Hola'
      },
      {
        type: 'select',
        question: 'Select the correct translation for "Good morning"',
        correctAnswer: 'Buenos días',
        options: ['Buenos días', 'Buenas noches', 'Buenas tardes', 'Adiós']
      },
      {
        type: 'match',
        question: 'Match the pairs',
        correctAnswer: 'Thank you',
        options: ['Gracias', 'Por favor', 'De nada'],
        translation: 'Thank you → Gracias'
      }
    ]
  },
  'basics-3': {
    id: 'basics-3',
    title: 'Basics 3',
    exercises: [
      {
        type: 'translate',
        question: 'Hello',
        correctAnswer: 'Hola',
        translation: 'Hello → Hola'
      },
      {
        type: 'select',
        question: 'Select the correct translation for "Good morning"',
        correctAnswer: 'Buenos días',
        options: ['Buenos días', 'Buenas noches', 'Buenas tardes', 'Adiós']
      },
      {
        type: 'match',
        question: 'Match the pairs',
        correctAnswer: 'Thank you',
        options: ['Gracias', 'Por favor', 'De nada'],
        translation: 'Thank you → Gracias'
      }
    ]
  },
  'basics-4': {
    id: 'basics-4',
    title: 'Basics 4',
    exercises: [
      {
        type: 'translate',
        question: 'Hello',
        correctAnswer: 'Hola',
        translation: 'Hello → Hola'
      },
      {
        type: 'select',
        question: 'Select the correct translation for "Good morning"',
        correctAnswer: 'Buenos días',
        options: ['Buenos días', 'Buenas noches', 'Buenas tardes', 'Adiós']
      },
      {
        type: 'match',
        question: 'Match the pairs',
        correctAnswer: 'Thank you',
        options: ['Gracias', 'Por favor', 'De nada'],
        translation: 'Thank you → Gracias'
      }
    ]
  }
} as const;