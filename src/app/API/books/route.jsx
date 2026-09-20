import { NextResponse } from 'next/server';


const books = [
  { id: "1", title: "The Next.js Handbook", author: "Lee Robinson", pages: 220, description: "Everything you need to master Next.js App Router." },
  { id: "2", title: "Mastering React", author: "Dan Abramov", pages: 350, description: "A deep dive into state management, hooks, and React internals." },
  { id: "3", title: "JavaScript Secrets", author: "Brendan Eich", pages: 280, description: "Uncover core JS mechanics, closures, and async programming." },
  { id: "4", title: "CSS for Designers", author: "Rachel Andrew", pages: 180, description: "Master Flexbox, Grid, and modern UI layouts effortlessly." },
  { id: "5", title: "Clean Code", author: "Robert C. Martin", pages: 464, description: "A handbook of agile software craftsmanship and best practices." }
];

export async function GET() {
  return NextResponse.json(books);
}