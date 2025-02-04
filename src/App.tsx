import React, { useState } from 'react';
import { Languages, BookOpen, Trophy, Siren as Fire, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import LessonCard from './components/LessonCard';
import LessonInterface from './components/LessonInterface';
import { lessons as initialLessons } from './data/lessons';
import { lessonContent } from './data/lessonContent';
import { Lesson } from './types';

function App() {
  const [streak, setStreak] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [xp, setXp] = useState(0);
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);

  const handleStartLesson = (lessonId: string) => {
    setCurrentLesson(lessonId);
  };

  const handleCompleteLesson = (correctAnswers: number, totalExercises: number) => {
    const percentage = Math.round((correctAnswers / totalExercises) * 100);
    
    setLessons(prevLessons => 
      prevLessons.map(lesson => 
        lesson.title === lessonContent[currentLesson as keyof typeof lessonContent].title
          ? { ...lesson, isCompleted: true, completionPercentage: percentage }
          : lesson
      )
    );
    
    setXp(prev => prev + 10);
    setStreak(prev => prev + 1);
    setCurrentLesson(null);
  };

  if (currentLesson && lessonContent[currentLesson as keyof typeof lessonContent]) {
    return (
      <LessonInterface
        exercises={lessonContent[currentLesson as keyof typeof lessonContent].exercises}
        onClose={() => setCurrentLesson(null)}
        onComplete={handleCompleteLesson}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Stats Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Fire className="w-5 h-5 text-orange-500" />
              <span className="font-bold">{streak} day streak</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="font-bold">{hearts}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-bold">{xp} XP</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-blue-500" />
            <span className="font-bold">Spanish</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Unit 1 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Unit 1 - Basics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lessons.slice(0, 3).map((lesson, index) => (
                <LessonCard 
                  key={index} 
                  {...lesson} 
                  onStart={() => handleStartLesson('basics-1')}
                />
              ))}
            </div>
          </div>

          {/* Unit 2 */}
          <div>
            <h2 className="text-xl font-bold mb-4">Unit 2 - Phrases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lessons.slice(3, 6).map((lesson, index) => (
                <LessonCard 
                  key={index} 
                  {...lesson}
                  onStart={() => handleStartLesson('basics-1')}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;