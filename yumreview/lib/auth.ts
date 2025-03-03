import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://kyljbcnphhvymklrfnfj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5bGpiY25waGh2eW1rbHJmbmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMzE5NjMsImV4cCI6MjA1NTgwNzk2M30.Pf8T5pyWvZb1PxDLGgm60cys5nMq5ITVkmR5RfSPInk')

export async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error('Error logging in:', error.message)
        return
    }

    // ดึง JWT Token จาก session
    const jwtToken = data?.session?.access_token

    if (jwtToken) {
        // สามารถเก็บ JWT token ใน LocalStorage หรือ Cookie ถ้าต้องการ
        localStorage.setItem('jwt_token', jwtToken)
    }

    return jwtToken // คืนค่า JWT token
}

export async function getUserFromToken(token: string) {
    const { data, error } = await supabase.auth.getUser(token)

    if (error) return null
    return data.user
}
