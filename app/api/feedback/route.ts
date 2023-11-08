import { NextResponse } from 'next/server'

export function POST(req: Request) {
  if (req.method === 'POST') {
    return NextResponse.json({ message: 'Comment' })
  } else {
    return NextResponse.json({ message: 'Method Not Allowed!' })
  }
}
