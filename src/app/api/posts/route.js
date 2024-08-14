import connectToDatabase from '../../lib/mongodb'; // Adjust path if necessary
import Post from '../../models/Post'; // Adjust path to match your folder structure


export async function GET() {
  try {
    await connectToDatabase();
    const posts = await Post.find({});
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error('API GET Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    const post = await Post.create(data);
    return new Response(JSON.stringify(post), { status: 201 });
  } catch (error) {
    console.error('API POST Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
