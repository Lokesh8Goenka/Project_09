import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Check, X, Star, Trophy } from 'lucide-react';
import { Exercise } from '../types';
import ProgressBar from './ProgressBar';

interface LessonInterfaceProps {
  exercises: Exercise[];
  onClose: () => void;
  onComplete: (correctAnswers: number, totalExercises: number) => void;
}

const Confetti = () => {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      style: {
        '--confetti-color': colors[Math.floor(Math.random() * colors.length)],
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        transform: `rotate(${Math.random() * 360}deg)`,
        animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
      } as React.CSSProperties,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map(particle => (
        <div key={particle.id} className="confetti" style={particle.style} />
      ))}
    </>
  );
};

const LessonInterface: React.FC<LessonInterfaceProps> = ({
  exercises,
  onClose,
  onComplete,
}) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [answer, setAnswer] = useState('');
  const [hearts, setHearts] = useState(5);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const exercise = exercises[currentExercise];
  const progress = ((currentExercise) / exercises.length) * 100;

  const handleSubmit = () => {
    const correct = answer.toLowerCase() === exercise.correctAnswer.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    } else {
      setHearts(h => h - 1);
      if (hearts <= 1) {
        onClose();
        return;
      }
    }

    setTimeout(() => {
      if (currentExercise === exercises.length - 1) {
        onComplete(correct ? correctAnswers + 1 : correctAnswers, exercises.length);
      } else {
        setCurrentExercise(c => c + 1);
        setAnswer('');
        setIsCorrect(null);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {showCelebration && <Confetti />}
      
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 animate-bounce-slow" />
              <span className="font-bold text-lg">{hearts}</span>
            </div>
            <ProgressBar progress={progress} />
          </div>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 transform transition-all duration-300">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800">{exercise.question}</h2>
            
            {exercise.translation && (
              <p className="text-gray-600 text-center text-lg">{exercise.translation}</p>
            )}

            {exercise.type === 'select' ? (
              <div className="grid grid-cols-1 gap-4">
                {exercise.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setAnswer(option)}
                    className={`p-6 rounded-xl border-3 text-left transition-all duration-300 transform hover:scale-105 ${
                      answer === option
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <span className="text-lg">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer..."
                className="w-full p-6 rounded-xl border-3 border-gray-200 text-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300"
              />
            )}
          </div>

          {isCorrect !== null && (
            <div className={`flex items-center justify-center p-6 rounded-xl ${
              isCorrect ? 'bg-green-100' : 'bg-red-100'
            } animate-celebrate`}>
              {isCorrect ? (
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-yellow-500 animate-wiggle" />
                  <span className="text-xl font-bold text-green-700">Amazing! You got it right!</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <X className="w-8 h-8 text-red-500" />
                  <div>
                    <span className="text-xl font-bold text-red-700">Keep trying!</span>
                    <p className="text-red-600 mt-1">The correct answer is: {exercise.correctAnswer}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={!answer || isCorrect !== null}
            className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              !answer || isCorrect !== null
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonInterface;