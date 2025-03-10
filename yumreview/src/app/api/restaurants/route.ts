import { NextResponse } from 'next/server'
import { supabase } from '../../lib/supabase'

export async function GET() {
    const { data, error } = await supabase.from('restaurants').select('*')
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data)
}

export async function POST(req: Request) {
    const { name, description, image_url } = await req.json()
    const { data, error } = await supabase.from('restaurants').insert([{ name, description, image_url }])

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })

    return NextResponse.json(data)
}

export async function PUT(req: Request) {
    const { id, name, description, image_url } = await req.json()
    const { data, error } = await supabase.from('restaurants').update({ name, description, image_url }).eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })

    return NextResponse.json(data)
}
export async function DELETE(req: Request) {
    const { id } = await req.json()
    const { data, error } = await supabase.from('restaurants').delete().eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })

    return NextResponse.json(data)
}

