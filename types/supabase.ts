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
      ai_chats: {
        Row: {
          created_at: string
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      ai_messages: {
        Row: {
          content: string | null
          created_at: string
          id: number
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      asking: {
        Row: {
          created_at: string
          id: number
          name: string | null
          phone: string | null
          text: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          phone?: string | null
          text?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          phone?: string | null
          text?: string | null
          title?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      file: {
        Row: {
          created_at: string | null
          id: string
          key: string | null
          name: string | null
          updated_at: string | null
          upload_status: Database["public"]["Enums"]["upload_status"] | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          key?: string | null
          name?: string | null
          updated_at?: string | null
          upload_status?: Database["public"]["Enums"]["upload_status"] | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          key?: string | null
          name?: string | null
          updated_at?: string | null
          upload_status?: Database["public"]["Enums"]["upload_status"] | null
          url?: string | null
        }
        Relationships: []
      }
      post: {
        Row: {
          created_at: string
          id: string
          text: string | null
        }
        Insert: {
          created_at?: string
          id: string
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      real: {
        Row: {
          created_at: string
          id: number
          msg: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          msg?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          msg?: string | null
          name?: string | null
        }
        Relationships: []
      }
      temp_test: {
        Row: {
          created_at: string
          id: number
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          text?: string | null
        }
        Relationships: []
      }
      user_file: {
        Row: {
          file_id: string
          user_id: string
        }
        Insert: {
          file_id: string
          user_id: string
        }
        Update: {
          file_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_file_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "file"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_file_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          email: string | null
          id: string
          image: string | null
          name: string | null
          password: string | null
          vertified: boolean | null
        }
        Insert: {
          email?: string | null
          id?: string
          image?: string | null
          name?: string | null
          password?: string | null
          vertified?: boolean | null
        }
        Update: {
          email?: string | null
          id?: string
          image?: string | null
          name?: string | null
          password?: string | null
          vertified?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      match_documents: {
        Args: {
          query_embedding: string
          match_count?: number
          filter?: Json
        }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      upload_status: "PENDING" | "PROCESSING" | "FAILED" | "SUCCESS"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
