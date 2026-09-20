import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mini Book Nook',
  description: 'Your tiny Next.js book app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}