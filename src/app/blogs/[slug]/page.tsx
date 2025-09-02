import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import styles from '../blogs.module.css';
import posts from './data/blogPosts.json';
import Footer from '@/app/components/Footer';

type Post = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  content: string;
  keywords: string[];
  published: boolean;
  date: string;
};

async function getPostData(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug && post.published);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 150),
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 150),
    },
  };
}

export async function generateStaticParams() {
  return posts
    .filter((post) => post.published)
    .map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <main className={styles.singlepostContainer}>
        <header className={styles.singlepostHeader}>
          <img src={post.image} alt={post.title} className={styles.singlepostImage} />
          <h1 className={styles.singlepostTitle}>{post.title}</h1>
          <p className={styles.postDate}>
            <em>Published on {new Date(post.date).toLocaleDateString()}</em>
          </p>
        </header>

        <article className={styles.singlepostContent}>{post.content}</article>

        <footer className={styles.singlepostFooter}>
          <strong>Keywords:</strong>
          <div className={styles.keywords}>
            {post.keywords.map((keyword, index) => (
              <span key={index} className={styles.keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </footer>
      </main>
      <Footer />
    </div>
  );
}