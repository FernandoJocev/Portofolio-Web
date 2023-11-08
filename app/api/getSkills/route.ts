import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  if (req.method === 'GET') {
    const datas = await prisma.skills.findMany({})
    return NextResponse.json({ datas: datas })
  } else {
    return NextResponse.json({ message: 'Method Not Allowed!' })
  }
}
