import Image from 'next/image';
import Link from 'next/link';

// Sample database (matches our featured books)
const BOOKS = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Classic',
    price: '$10.99',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    pages: 208,
    publishedYear: 1925
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    price: '$12.50',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
    description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960.',
    pages: 281,
    publishedYear: 1960
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    price: '$16.20',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    pages: 320,
    publishedYear: 2018
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian',
    price: '$9.99',
    cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
    description: 'Winston Smith toes the Party line, rewriting history to satisfy the Ministry of Truth. With each lie he writes, Winston comes to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrime.',
    pages: 328,
    publishedYear: 1949
  },
  {
    id: 5,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    price: '$14.00',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80',
    description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of thirteen dwarves arrive on his doorstep.',
    pages: 310,
    publishedYear: 1937
  },
];

export default async function BookDetailPage({ params }) {
  const { id } = await params;
  const book = BOOKS.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <main style={{ maxWidth: '800px', margin: '40px auto', textAlign: 'center' }}>
        <h2>Book Not Found</h2>
        <p>We couldn't find a book matching that ID.</p>
        <Link href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>
        ← Back to Featured Books
      </Link>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        flexWrap: 'wrap'
      }}>
        {/* Cover Image */}
        <div style={{ position: 'relative', width: '280px', height: '380px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#e5e7eb' }}>
          <Image
            src={book.cover}
            alt={book.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Detailed Info */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <span style={{ 
            fontSize: '12px', 
            fontWeight: 'bold', 
            color: '#2563eb', 
            textTransform: 'uppercase',
            letterSpacing: '0.5px' 
          }}>
            {book.category}
          </span>

          <h1 style={{ fontSize: '32px', margin: '8px 0', color: '#111827' }}>
            {book.title}
          </h1>

          <p style={{ fontSize: '18px', color: '#4b5563', margin: '0 0 16px 0' }}>
            By {book.author}
          </p>

          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: '0 0 20px 0' }}>
            {book.price}
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            marginBottom: '20px', 
            padding: '12px 16px', 
            backgroundColor: '#f9fafb', 
            borderRadius: '6px',
            fontSize: '14px',
            color: '#374151'
          }}>
            <div><strong>Pages:</strong> {book.pages}</div>
            <div><strong>Published:</strong> {book.publishedYear}</div>
          </div>

          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#374151', marginBottom: '30px' }}>
            {book.description}
          </p>

          <button style={{
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}