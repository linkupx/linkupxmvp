import { supabase } from '@/lib/supabase';
import type { User, Pro, Lesson, Review, PointHistory } from '@/types/supabase';

// 사용자 관련 함수
export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data as User;
}

export async function createUser(user: Omit<User, 'id' | 'created_at' | 'points'>) {
  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .select()
    .single();
  
  if (error) throw error;
  return data as User;
}

// 프로 관련 함수
export async function getProById(id: string) {
  const { data, error } = await supabase
    .from('pros')
    .select(`
      *,
      user:users(*)
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data as Pro & { user: User };
}

export async function createPro(pro: Omit<Pro, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('pros')
    .insert([pro])
    .select()
    .single();
  
  if (error) throw error;
  return data as Pro;
}

// 레슨 관련 함수
export async function getLessonById(id: string) {
  const { data, error } = await supabase
    .from('lessons')
    .select(`
      *,
      pro:pros(*),
      user:users(*)
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data as Lesson & { pro: Pro; user: User };
}

export async function createLesson(lesson: Omit<Lesson, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('lessons')
    .insert([lesson])
    .select()
    .single();
  
  if (error) throw error;
  return data as Lesson;
}

// 리뷰 관련 함수
export async function getReviewsByLessonId(lessonId: string) {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      user:users(*)
    `)
    .eq('lesson_id', lessonId);
  
  if (error) throw error;
  return data as (Review & { user: User })[];
}

export async function createReview(review: Omit<Review, 'id' | 'created_at' | 'verified'>) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([review])
    .select()
    .single();
  
  if (error) throw error;
  return data as Review;
}

// 포인트 관련 함수
export async function getPointHistoryByUserId(userId: string) {
  const { data, error } = await supabase
    .from('points_history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data as PointHistory[];
}

export async function createPointHistory(pointHistory: Omit<PointHistory, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('points_history')
    .insert([pointHistory])
    .select()
    .single();
  
  if (error) throw error;
  return data as PointHistory;
} 