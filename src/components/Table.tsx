"use client"
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { mutate } from "swr"
interface IProps {
    blogs: IBlog[]
}

export default function Learn(props: IProps) {
    const { blogs } = props;
    const [showModalCreate,setshowModalCreate]=useState(false);

    // useEffect(()=>{
    //     const fetchData=async ()=>{
    //         const res = await fetch("http://localhost:8000/blogs");
    //         const data= await res.json();
    //         console.log(">>>>check data", data);
    //     }
    //     fetchData();
    // },[])

    return (

        <div>
            <div>
                <button className='btn btn-primary' onClick={()=>setshowModalCreate(true)}> Add new</button>
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
                    {blogs.map(blog => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant='warning' className='mx-3'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
            <CreateModal
            showModalCreate={showModalCreate}
            setshowModalCreate={setshowModalCreate}
            />
            </div>

    );
}
