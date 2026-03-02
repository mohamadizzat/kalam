export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          display_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          display_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          display_name?: string | null
          avatar_url?: string | null
          updated_at?: string
        }
      }
      user_settings: {
        Row: {
          user_id: string
          font_size: string
          arabic_size: string
          updated_at: string
        }
        Insert: {
          user_id: string
          font_size?: string
          arabic_size?: string
        }
        Update: {
          font_size?: string
          arabic_size?: string
          updated_at?: string
        }
      }
      user_streaks: {
        Row: {
          user_id: string
          current_streak: number
          longest_streak: number
          last_visit: string | null
          updated_at: string
        }
        Insert: {
          user_id: string
          current_streak?: number
          longest_streak?: number
          last_visit?: string | null
        }
        Update: {
          current_streak?: number
          longest_streak?: number
          last_visit?: string | null
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          category: string
          item_slug: string
          completed_at: string
        }
        Insert: {
          user_id: string
          category: string
          item_slug: string
        }
        Update: {
          completed_at?: string
        }
      }
      user_bookmarks: {
        Row: {
          id: string
          user_id: string
          type: string
          reference: string
          note: string | null
          created_at: string
        }
        Insert: {
          user_id: string
          type: string
          reference: string
          note?: string | null
        }
        Update: {
          note?: string | null
        }
      }
      user_journal: {
        Row: {
          id: string
          user_id: string
          entry_date: string
          emotion: string | null
          reflection: string | null
          gratitude: string | null
          created_at: string
        }
        Insert: {
          user_id: string
          entry_date: string
          emotion?: string | null
          reflection?: string | null
          gratitude?: string | null
        }
        Update: {
          emotion?: string | null
          reflection?: string | null
          gratitude?: string | null
        }
      }
      user_data: {
        Row: {
          user_id: string
          key: string
          value: Json
          updated_at: string
        }
        Insert: {
          user_id: string
          key: string
          value: Json
        }
        Update: {
          value?: Json
          updated_at?: string
        }
      }
      user_preferences: {
        Row: {
          user_id: string
          persona_id: string
          onboarding_completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          persona_id?: string
          onboarding_completed_at?: string | null
        }
        Update: {
          persona_id?: string
          onboarding_completed_at?: string | null
          updated_at?: string
        }
      }
      user_memberships: {
        Row: {
          id: string
          user_id: string
          tier: string
          status: string
          started_at: string | null
          expires_at: string | null
          stripe_subscription_id: string | null
          stripe_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          tier?: string
          status?: string
          started_at?: string | null
          expires_at?: string | null
          stripe_subscription_id?: string | null
          stripe_customer_id?: string | null
        }
        Update: {
          tier?: string
          status?: string
          started_at?: string | null
          expires_at?: string | null
          stripe_subscription_id?: string | null
          stripe_customer_id?: string | null
          updated_at?: string
        }
      }
      kids_progress: {
        Row: {
          user_id: string
          stars: number
          streak: number
          last_activity: string | null
          completed_stories: string[]
          completed_pillars: string[]
          completed_faith_pillars: string[]
          completed_surahs: string[]
          completed_duas: string[]
          completed_adab: string[]
          completed_quizzes: string[]
          completed_activities: string[]
          completed_heroes: string[]
          badges: string[]
          updated_at: string
        }
        Insert: {
          user_id: string
          stars?: number
          streak?: number
        }
        Update: {
          stars?: number
          streak?: number
          last_activity?: string | null
          completed_stories?: string[]
          completed_pillars?: string[]
          completed_faith_pillars?: string[]
          completed_surahs?: string[]
          completed_duas?: string[]
          completed_adab?: string[]
          completed_quizzes?: string[]
          completed_activities?: string[]
          completed_heroes?: string[]
          badges?: string[]
          updated_at?: string
        }
      }
    }
  }
}
