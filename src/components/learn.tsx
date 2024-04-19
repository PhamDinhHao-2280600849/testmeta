"use client"
import React, { useEffect } from 'react';
import useSWR from "swr";
import TableManage from './Table';


  

export default function Learn() {
  const fetcher = (url: string) => fetch(url).
  then((res) => res.json());
  

const { data, error, isLoading } = useSWR("http://localhost:8000/blogs", fetcher,
  {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  if(!data){
    return <div>loading...</div>
  }
  return (

    <div>
      
      <TableManage blogs={data?.sort((a:any,b:any)=>b.id-a.id)}/>
    </div>

  );
}
