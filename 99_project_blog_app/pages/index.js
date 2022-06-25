import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-nextjs-blog-app',
    title: 'nextjs',
    image: 'getting-started-nextjs.jpg',
    excerpt: 'NextJS is awesome!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-nextjs-blog-app2',
    title: 'nextjs',
    image: 'getting-started-nextjs.jpg',
    excerpt: 'NextJS is awesome!',
    date: '2022-03-10',
  },
  {
    slug: 'getting-started-nextjs-blog-app3',
    title: 'nextjs',
    image: 'getting-started-nextjs.jpg',
    excerpt: 'NextJS is awesome!',
    date: '2022-04-10',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
