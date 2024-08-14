import connectToDatabase from '../../../lib/mongodb';
import Post from '../../../models/Post';

export async function POST(request) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Adjust as needed
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    const data = await request.json();
    await connectToDatabase();
    const post = await Post.create(data);

    return new Response(JSON.stringify(post), { 
      status: 201, 
      headers 
    });
  } catch (error) {
    console.error('API POST Error:', error);
    return new Response('Internal Server Error', { 
      status: 500, 
      headers 
    });
  }
}
