// app/api/auth/register/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(req: Request) {
    const { email, password, name, action } = await req.json()

    if (action === 'register') {
        // สมัครสมาชิก
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name } },
        })

        if (signUpError) {
            return NextResponse.json({ error: signUpError.message }, { status: 400 })
        }

        // ดึง user id จากข้อมูลที่สมัคร
        const userId = signUpData.user?.id
        if (!userId) {
            return NextResponse.json({ error: 'Failed to retrieve user ID' }, { status: 400 })
        }

        // ✅ บันทึกข้อมูล user ลงใน Table `users`
        const { error: insertError } = await supabase.from('users').insert([
            { id: userId, email, name }
        ])

        if (insertError) {
            return NextResponse.json({ error: insertError.message }, { status: 400 })
        }

        return NextResponse.json({ user: signUpData.user })
    }

    if (action === 'login') {
        // เข้าสู่ระบบ
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            return NextResponse.json({ error: `Error logging in: ${error.message}` }, { status: 401 })
        }

        return NextResponse.json({ user: data.user, token: data.session?.access_token })
    }

    if (action === 'logout') {
        // ออกจากระบบ
        const { error } = await supabase.auth.signOut()

        if (error) {
            return NextResponse.json({ error: `Error logging out: ${error.message}` }, { status: 401 })
        }
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })


    }
}