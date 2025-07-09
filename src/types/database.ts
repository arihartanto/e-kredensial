export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          role: 'nurse' | 'admin' | 'supervisor' | 'director'
          unit: string | null
          employee_id: string
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          role: 'nurse' | 'admin' | 'supervisor' | 'director'
          unit?: string | null
          employee_id: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: 'nurse' | 'admin' | 'supervisor' | 'director'
          unit?: string | null
          employee_id?: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      credentials: {
        Row: {
          id: string
          user_id: string
          title: string
          type: 'license' | 'certificate' | 'training' | 'education'
          issuer: string
          issue_date: string
          expiry_date: string | null
          document_url: string | null
          status: 'active' | 'expired' | 'pending_renewal'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          type: 'license' | 'certificate' | 'training' | 'education'
          issuer: string
          issue_date: string
          expiry_date?: string | null
          document_url?: string | null
          status?: 'active' | 'expired' | 'pending_renewal'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          type?: 'license' | 'certificate' | 'training' | 'education'
          issuer?: string
          issue_date?: string
          expiry_date?: string | null
          document_url?: string | null
          status?: 'active' | 'expired' | 'pending_renewal'
          created_at?: string
          updated_at?: string
        }
      }
      applications: {
        Row: {
          id: string
          user_id: string
          type: 'new' | 'renewal' | 'update'
          status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
          submitted_at: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'new' | 'renewal' | 'update'
          status?: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
          submitted_at?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'new' | 'renewal' | 'update'
          status?: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
          submitted_at?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: 'info' | 'warning' | 'success' | 'error'
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          message: string
          type?: 'info' | 'warning' | 'success' | 'error'
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          message?: string
          type?: 'info' | 'warning' | 'success' | 'error'
          read?: boolean
          created_at?: string
        }
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
  }
}