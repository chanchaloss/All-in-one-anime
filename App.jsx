import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      title: 'Top 10 Anime Releasing in July 2025',
      excerpt: 'A look at the most anticipated anime shows releasing this July.',
      content: `Here are the top 10 anime expected to release in July 2025:

1. *DAN DA DAN Season 2*: A supernatural anime that follows Momo and Okarun's adventures, releasing on July 3, 2025, on Netflix and Crunchyroll.

2. *The Rising of the Shield Hero Season 4*: A fantasy anime that continues Naofumi Iwatani's story, releasing on July 9, 2025, on Crunchyroll.

3. *Gachiakuta*: A dystopian revenge story set in a world with a corrupt system, releasing on July 6, 2025, on Crunchyroll.

4. *Kaiju No. 8 Season 2*: A sci-fi anime that follows Kafka Hibino's journey, releasing on July 19, 2025.

5. *My Dress-Up Darling Season 2*: A romantic comedy anime that explores Marin Kitagawa and Wakana Gojo's relationship, releasing on July 2025 on Crunchyroll.

6. *Sakamoto Days Season 2*: An action-comedy anime that follows Takeru Sakamoto's adventures, releasing on July 15, 2025.

7. *City The Animation*: A comedy anime that showcases city life, releasing on July 7, 2025.

8. *Karaoke Iko!*: A music anime that follows Satomi Oka and Kyouji Narita's story, releasing on July 24, 2025.

9. *Leviathan*: A steampunk anime set in a world with airships, releasing on July 10, 2025, on Netflix.

10. *Dr. Stone: Science Future Part 2*: A sci-fi anime that continues Senku Ishigami's adventures, releasing on July 10, 2025.`,
      video: ''
    }
  ]);
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    video: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, form]);
    setForm({ title: '', excerpt: '', content: '', video: '' });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-pink-400 mb-6">All in One Anime</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-4 rounded-lg">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 rounded" />
        <input name="excerpt" value={form.excerpt} onChange={handleChange} placeholder="Excerpt" className="w-full p-2 rounded" />
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" className="w-full p-2 rounded" />
        <input name="video" value={form.video} onChange={handleChange} placeholder="Video Path (e.g., /videos/sample.mp4)" className="w-full p-2 rounded" />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Add Post</button>
      </form>
      <div className="mt-8 space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-300">{post.title}</h2>
            <p className="italic">{post.excerpt}</p>
            <p className="mt-2 whitespace-pre-line">{post.content}</p>
            {post.video && (
              <video controls className="mt-4 w-full rounded">
                <source src={post.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;