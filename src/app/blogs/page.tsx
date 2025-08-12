import Link from 'next/link';
import Image from 'next/image';
import styles from './blogs.module.css';
import Footer from '../components/Footer';

async function getBlogPosts() {
  // In a real app, this would fetch from your API or CMS
  return [
    {
      id: '1',
      slug: 'nextjs-intro',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn the basics of Next.js and how it can improve your React applications.',
      date: '2023-06-15',
      image: '/placeholder-blog1.jpg',
      category: 'Development',
      readTime: '5 min read'
    },
    {
      id: '2',
      slug: 'react-performance',
      title: 'Optimizing React Performance',
      excerpt: 'Key techniques to make your React applications faster and more efficient.',
      date: '2023-05-22',
      image: '/placeholder-blog2.jpg',
      category: 'Performance',
      readTime: '7 min read'
    },
    {
      id: '3',
      slug: 'css-modern',
      title: 'Modern CSS Techniques',
      excerpt: 'Explore the latest CSS features that can simplify your styling workflow.',
      date: '2023-04-10',
      image: '/placeholder-blog3.jpg',
      category: 'CSS',
      readTime: '4 min read'
    },
  ];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
    <main className={styles.main}>
      <div className={styles.blogcontainer}>
        <header className={styles.blogheader}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Latest articles and tutorials on web development
          </p>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={post.id === '1'}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.textContent}>
                  <p className={styles.category}>{post.category}</p>
                  <Link href={`/blogs/${post.slug}`} className={styles.link}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                  </Link>
                </div>
                <div className={styles.meta}>
                  <time dateTime={post.date} className={styles.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className={styles.separator}>·</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
    </main>
    <Footer/>
    </div>
  );
}
