import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kyljbcnphhvymklrfnfj.supabase.co/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5bGpiY25waGh2eW1rbHJmbmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMzE5NjMsImV4cCI6MjA1NTgwNzk2M30.Pf8T5pyWvZb1PxDLGgm60cys5nMq5ITVkmR5RfSPInk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
