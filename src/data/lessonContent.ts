export const lessonContent = {
  'basics-1': {
    id: 'basics-1',
    title: 'Basics 1',
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