import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData().catch(() => null);

  if (!formData) {
    return NextResponse.json({ error: 'Invalid upload payload' }, { status: 400 });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return NextResponse.json({ error: 'Unsupported file type. Only JPG, PNG, and WebP are allowed.' }, { status: 400 });
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json({ error: 'File exceeds 5MB limit.' }, { status: 400 });
  }

  return NextResponse.json({
    message: 'Demo file accepted and validated. Replace with secure cloud storage in production.',
    file: {
      name: file.name,
      type: file.type,
      size: file.size,
      uploadedBy: session.user.email,
    },
  });
}
