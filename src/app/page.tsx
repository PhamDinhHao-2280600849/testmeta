
import React, { useEffect } from 'react';


import Link from 'next/link';
import  { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'hao',
  description: 'pham',
}
 

export default function Learn() {
  
  return (

    <div>
      <Link href={"/blogs"} >blogs</Link>
      
    </div>

  );
}