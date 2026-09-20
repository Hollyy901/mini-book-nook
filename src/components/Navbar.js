import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      position: 'sticky', 
      top: 0, 
      backgroundColor: '#1f2937', 
      color: '#fff', 
      padding: '12px 24px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      gap: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
      zIndex: 1000 
    }}>
      {/* Brand Logo */}
      <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>📚 Book Nook</h2>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#e5e7eb', textDecoration: 'none', fontWeight: '500' }}>
          Home
        </Link>
        <Link href="/books" style={{ color: '#e5e7eb', textDecoration: 'none', fontWeight: '500' }}>
          All Books
        </Link>
        <Link href="/about" style={{ color: '#e5e7eb', textDecoration: 'none', fontWeight: '500' }}>
          About Us
        </Link>
      </div>

      {/* Search Input */}
      <div style={{ flex: '0 1 250px' }}>
        <input 
          type="text" 
          placeholder="Search books..." 
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: '6px',
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            backgroundColor: '#374151',
            color: '#fff'
          }}
        />
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button style={{
          backgroundColor: 'transparent',
          color: '#fff',
          border: '1px solid #4b5563',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          Log In
        </button>
        <button style={{
          backgroundColor: '#3b82f6',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}