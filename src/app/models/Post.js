import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
//   image: { type: String }, // Add this line
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
