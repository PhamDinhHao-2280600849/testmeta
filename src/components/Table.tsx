"use client"
import React, { useState,useEffect } from 'react';
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
    const [blog,setBlog]=useState<IBlog|null>(null);
    const [showModalCreate,setshowModalCreate]=useState(false);
    const [showModalUpdate,setshowModalUpdate]=useState(false);

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
                    {blogs.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant='warning' className='mx-3' onClick={()=>{setBlog(item);setshowModalUpdate(true)}}>Edit</Button>
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
            <UpdateModal
            showModalUpdate={showModalUpdate}
            setshowModalUpdate={setshowModalUpdate}
            blog={blog}
            setBlog={setBlog}
            />
            </div>

    );
}
