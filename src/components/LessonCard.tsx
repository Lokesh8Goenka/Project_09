import React from 'react';
import { Lock, Check, Star, Gift } from 'lucide-react';

interface LessonCardProps {
  title: string;
  description: string;
  isLocked: boolean;
  isCompleted: boolean;
  xp: number;
  completionPercentage?: number;
  onStart: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  isLocked,
  isCompleted,
  xp,
  completionPercentage,
  onStart,
}) => {
  const randomGif = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDM3YTMyZTE3YmZiMjQxMDM4MzM5NDI4YjY5ZjBkYzFhZDY0ZTZlYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kBZBlLVlfECvOQAVno/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjI5NzBkYzVkYTY4ZWM5ZWY4ZjM4ZjM5ZWJjNzY0ZmM1ZTM1ZTM3YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Ken6Yg5n7bYzNxO6NN/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJjMzE4ZWM4YjE4ZTM4ZjM4M2JjYzM4ZWJjM2M4M2JjYzM4ZWJjMyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/h8HmN0UcEKR0xR3SqX/giphy.gif"
  ][Math.floor(Math.random() * 3)];

  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg border-4 transform transition-all duration-300 hover:scale-105 ${
        isCompleted
          ? 'border-green-500 hover:border-green-600'
          : isLocked
          ? 'border-gray-200 opacity-75'
          : 'border-blue-500 hover:border-blue-600'
      } p-6 hover:shadow-xl`}
    >
      {isLocked && (
        <div className="absolute inset-0 bg-gray-50 bg-opacity-90 rounded-xl flex flex-col items-center justify-center">
          <Lock className="w-12 h-12 text-gray-400 animate-bounce-slow" />
          <p className="mt-2 text-gray-500 font-medium">Complete previous lessons to unlock!</p>
        </div>
      )}
      
      {isCompleted && (
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <div className="flex items-center bg-green-100 rounded-full px-3 py-1">
            <Check className="w-5 h-5 text-green-500" />
            <span className="ml-1 text-sm font-bold text-green-600">
              {completionPercentage}%
            </span>
          </div>
        </div>
      )}

      <div className="flex items-start gap-4">
        <img 
          src={randomGif} 
          alt="Lesson mascot" 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 animate-wiggle" />
          <span className="text-sm font-bold text-yellow-600">{xp} XP</span>
        </div>
        <button
          onClick={onStart}
          className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
            isCompleted
              ? 'bg-green-500 text-white hover:bg-green-600'
              : isLocked
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          } transform hover:scale-105`}
          disabled={isLocked}
        >
          {isCompleted ? (
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>Practice</span>
            </div>
          ) : (
            'Start Learning!'
          )}
        </button>
      </div>
    </div>
  );
};

export default LessonCard;