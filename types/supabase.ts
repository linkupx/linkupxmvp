export type User = {
  id: string;
  name: string;
  email: string;
  profile_image?: string;
  handicap?: number;
  points: number;
  created_at: string;
};

export type Pro = {
  id: string;
  user_id: string;
  certification?: string;
  main_lesson?: string;
  experience?: string;
  intro?: string;
  area?: string;
  fee?: string;
  is_public: boolean;
  created_at: string;
  user?: User;
};

export type Lesson = {
  id: string;
  pro_id: string;
  user_id: string;
  title: string;
  lesson_date: string;
  lesson_time: string;
  location?: string;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled';
  created_at: string;
  pro?: Pro;
  user?: User;
};

export type Review = {
  id: string;
  lesson_id: string;
  user_id: string;
  rating: number;
  comment?: string;
  verified: boolean;
  created_at: string;
  lesson?: Lesson;
  user?: User;
};

export type PointHistory = {
  id: string;
  user_id: string;
  type: string;
  amount: number;
  description?: string;
  created_at: string;
  user?: User;
}; 