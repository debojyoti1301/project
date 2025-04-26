import { useState } from 'react';
import PostForm from '../components/posts/PostForm';
import PostList from '../components/posts/PostList';

const Home = () => {
  const [key, setKey] = useState(0);
  
  const handlePostCreated = () => {
    // Re-render PostList component to show the new post
    setKey(prev => prev + 1);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Environmental Feed</h1>
      <PostForm onPostCreated={handlePostCreated} />
      <PostList key={key} />
    </div>
  );
};

export default Home;