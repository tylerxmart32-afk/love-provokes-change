export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          body_md: string | null
          cover_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          published: boolean
          published_at: string | null
          slug: string
          title: string
        }
        Insert: {
          body_md?: string | null
          cover_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published?: boolean
          published_at?: string | null
          slug: string
          title: string
        }
        Update: {
          body_md?: string | null
          cover_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published?: boolean
          published_at?: string | null
          slug?: string
          title?: string
        }
        Relationships: []
      }
      books: {
        Row: {
          buy_url: string | null
          cover_url: string | null
          created_at: string
          description: string | null
          gains: string | null
          id: string
          order_index: number | null
          published: boolean
          sample_url: string | null
          subtitle: string | null
          title: string
          updated_at: string
          who_for: string | null
          why_written: string | null
        }
        Insert: {
          buy_url?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          gains?: string | null
          id?: string
          order_index?: number | null
          published?: boolean
          sample_url?: string | null
          subtitle?: string | null
          title: string
          updated_at?: string
          who_for?: string | null
          why_written?: string | null
        }
        Update: {
          buy_url?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          gains?: string | null
          id?: string
          order_index?: number | null
          published?: boolean
          sample_url?: string | null
          subtitle?: string | null
          title?: string
          updated_at?: string
          who_for?: string | null
          why_written?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          organization: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          organization?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          organization?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      devotionals: {
        Row: {
          body_md: string | null
          created_at: string
          id: string
          published: boolean
          published_at: string | null
          scripture: string | null
          slug: string
          title: string
        }
        Insert: {
          body_md?: string | null
          created_at?: string
          id?: string
          published?: boolean
          published_at?: string | null
          scripture?: string | null
          slug: string
          title: string
        }
        Update: {
          body_md?: string | null
          created_at?: string
          id?: string
          published?: boolean
          published_at?: string | null
          scripture?: string | null
          slug?: string
          title?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string
          cta_url: string | null
          description: string | null
          event_date: string | null
          id: string
          location: string | null
          published: boolean
          title: string
        }
        Insert: {
          created_at?: string
          cta_url?: string | null
          description?: string | null
          event_date?: string | null
          id?: string
          location?: string | null
          published?: boolean
          title: string
        }
        Update: {
          created_at?: string
          cta_url?: string | null
          description?: string | null
          event_date?: string | null
          id?: string
          location?: string | null
          published?: boolean
          title?: string
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          caption: string | null
          created_at: string
          id: string
          image_url: string
          order_index: number | null
          published: boolean
          tags: string[] | null
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url: string
          order_index?: number | null
          published?: boolean
          tags?: string[] | null
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: string
          image_url?: string
          order_index?: number | null
          published?: boolean
          tags?: string[] | null
        }
        Relationships: []
      }
      speaking_engagements: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          order_index: number | null
          published: boolean
          type: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          order_index?: number | null
          published?: boolean
          type: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          order_index?: number | null
          published?: boolean
          type?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author: string
          avatar_url: string | null
          created_at: string
          featured: boolean
          id: string
          order_index: number | null
          published: boolean
          quote: string
          rating: number
          role: string | null
        }
        Insert: {
          author: string
          avatar_url?: string | null
          created_at?: string
          featured?: boolean
          id?: string
          order_index?: number | null
          published?: boolean
          quote: string
          rating?: number
          role?: string | null
        }
        Update: {
          author?: string
          avatar_url?: string | null
          created_at?: string
          featured?: boolean
          id?: string
          order_index?: number | null
          published?: boolean
          quote?: string
          rating?: number
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
