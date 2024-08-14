import connectToDatabase from '../../lib/mongodb'; // Adjust path if necessary
import Post from '../../models/Post';

export async function GET({ params }) {
  try {
    await connectToDatabase();
    const post = await Post.findById(params.id);
    if (post) {
      return new Response(JSON.stringify(post), { status: 200 });
    } else {
      return new Response('Post Not Found', { status: 404 });
    }
  } catch (error) {
    console.error('API GET [id] Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    const data = await request.json();
    const post = await Post.findByIdAndUpdate(params.id, data, { new: true });
    if (post) {
      return new Response(JSON.stringify(post), { status: 200 });
    } else {
      return new Response('Post Not Found', { status: 404 });
    }
  } catch (error) {
    console.error('API PUT [id] Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function DELETE({ params }) {
  try {
    await connectToDatabase();
    const post = await Post.findByIdAndDelete(params.id);
    if (post) {
      return new Response('Post Deleted', { status: 204 });
    } else {
      return new Response('Post Not Found', { status: 404 });
    }
  } catch (error) {
    console.error('API DELETE [id] Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
