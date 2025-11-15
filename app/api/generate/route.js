import { NextResponse } from 'next/server';
import { generateIdeas } from '../../../lib/ideas';

export async function POST(req) {
  try {
    const body = await req.json();
    const ideas = generateIdeas(body || {});
    return NextResponse.json({ ideas });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
}
