'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
export default function Home() {
  const [data, setData] = useState(null);

    useEffect(() => {
      fetch('/api/posts')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  return (
    
    <div>
      <h1>Welcome to Next.js</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
