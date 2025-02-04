export interface Lesson {
  title: string;
  description: string;
  isLocked: boolean;
  isCompleted: boolean;
  xp: number;
  completionPercentage?: number;
}

export interface Exercise {
  type: 'translate' | 'match' | 'select';
  question: string;
  correctAnswer: string;
  options?: string[];
  translation?: string;
}

export interface LessonContent {
  id: string;
  title: string;
  exercises: Exercise[];
}