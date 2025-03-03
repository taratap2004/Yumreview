import { NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function GET() {
    const { data, error } = await supabase.from('reviews').select('*')
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data)
}

export async function POST(req: Request) {
    const { user_id, restaurant_id, rating, comment } = await req.json()
    const { data, error } = await supabase.from('reviews').insert([{ user_id, restaurant_id, rating, comment }])

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })

    return NextResponse.json(data)
}

export async function DELETE(req: Request) {
    const { id } = await req.json()
    const { data, error } = await supabase.from('reviews').delete().eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })

    return NextResponse.json(data)
}

export async function PUT(req: Request) {
    const { id, user_id, restaurant_id, rating, comment } = await req.json()
    const { data, error } = await supabase.from('reviews').update({ user_id, restaurant_id, rating, comment }).eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })

    return NextResponse.json(data)
}
