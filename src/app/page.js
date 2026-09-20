import Image from 'next/image';

const BOOKS = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Classic',
    price: '$10.99',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    price: '$12.50',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    price: '$16.20',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian',
    price: '$9.99',
    cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
  },
  {
    id: 5,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    price: '$14.00',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80',
  },
];

export default function Home() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
      {/* Hero Banner */}
      <section style={{
        textAlign: 'center',
        padding: '50px 20px',
        backgroundColor: '#f3f4f6',
        borderRadius: '12px',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '36px', color: '#111827', marginBottom: '12px' }}>
          Welcome to Mini Book Nook
        </h1>
        <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
          Discover your next cozy read from our handpicked featured collection.
        </p>
      </section>

      {/* Featured Books Grid */}
      <section>
        <h2 style={{ fontSize: '24px', color: '#1f2937', marginBottom: '20px' }}>
          Featured Books
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {BOOKS.map((book) => (
            <div 
              key={book.id} 
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              {/* Cover Image Container */}
              <div style={{ position: 'relative', width: '100%', height: '260px', backgroundColor: '#e5e7eb' }}>
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 220px"
                />
              </div>

              {/* Book Details */}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ 
                    fontSize: '11px', 
                    fontWeight: 'bold', 
                    color: '#2563eb', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {book.category}
                  </span>
                  <h3 style={{ fontSize: '16px', margin: '6px 0 4px', color: '#111827' }}>
                    {book.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 12px 0' }}>
                    {book.author}
                  </p>
                  <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', display: 'block', marginBottom: '14px' }}>
                    {book.price}
                  </span>
                </div>

                {/* Action Buttons Row */}
                <div style={{ display: 'flex', gap: '6px', marginTop: 'auto' }}>
                  <button style={{
                    flex: 1,
                    backgroundColor: '#111827',
                    color: '#fff',
                    border: 'none',
                    padding: '6px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    Details
                  </button>

                  <button style={{
                    flex: 1,
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    border: 'none',
                    padding: '6px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    Read
                  </button>

                  <button style={{
                    flex: 1,
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    padding: '6px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    ♡ Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}