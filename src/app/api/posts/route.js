import connectToDatabase from '../../lib/mongodb';
import Post from '../../models/Post';

// Handle GET requests
export async function GET(request) {
  try {
    await connectToDatabase();
    const posts = await Post.find({});
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://coffe-next-eight.vercel.app/', // Adjust with your frontend domain
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('API GET Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// Handle POST requests
export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    const post = await Post.create(data);
    return new Response(JSON.stringify(post), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://coffe-next-eight.vercel.app/', // Adjust with your frontend domain
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('API POST Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://coffe-next-eight.vercel.app//', // Adjust with your frontend domain
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
