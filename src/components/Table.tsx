"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import UpdateModal from './update.modal';
import { mutate } from "swr"

interface IProps {
    blogs: IBlog[]
}

export default function Learn(props: IProps) {
    const { blogs } = props;
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [showModalCreate, setshowModalCreate] = useState(false);
    const [showModalUpdate, setshowModalUpdate] = useState(false);
    const handleDeleteBlog=(id:number)=>{
        if(confirm(`Do you want to delete this blog (id = ${id})`)){
            fetch(`http://localhost:8000/blogs/${id}`,{
                method:"DELETE",
                headers: {
                    'Accept': 'application/json,text/plain,*/*',
                    'Content-Type': 'application/json'
                },
                
            })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    mutate("http://localhost:8000/blogs")
                }
            })
        
        }
    }

    // useEffect(()=>{
    //     const fetchData=async ()=>{
    //         const res = await fetch("http://localhost:8000/blogs");
    //         const data= await res.json();
    //         console.log(">>>>check data", data);
    //     }
    //     fetchData();
    // },[])
    const setBlogAndShowUpDate = (item: IBlog) => {
        setBlog(item);
        setshowModalUpdate(true)
    }

    return (

        <div>
            <div>
                <button className='btn btn-primary' onClick={() => setshowModalCreate(true)}> Add new</button>
            </div>
            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    
                                        <Link className='btn btn-primary' href={`/blogs/${item.id}`}>View</Link>
                                    
                                    <Button variant='warning' className='mx-3' onClick={() => setBlogAndShowUpDate(item)}>Edit</Button>
                                    <Button variant='danger' onClick={()=>handleDeleteBlog(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
            <CreateModal
                onshowModalCreate={showModalCreate}
                onsetshowModalCreate={setshowModalCreate}
            />
            <UpdateModal
                onshowModalUpdate={showModalUpdate}
                onsetshowModalUpdate={setshowModalUpdate}
                onblog={blog}
                onsetBlog={setBlog}
            />
        </div>

    );
}
