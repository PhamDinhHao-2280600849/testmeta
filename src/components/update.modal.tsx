"use client"
import { ImgProps } from 'next/dist/shared/lib/get-img-props';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    showModalUpdate: boolean;
    setshowModalUpdate: (va: boolean) => void; 
    blog: IBlog|null;
    setBlog:(value :IBlog|null)=>void; 
}
function CreateModal(props: IProps) {
    const { showModalUpdate, setshowModalUpdate,blog,setBlog } = props;
    const [id , setId]=useState(0);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    useEffect(()=>{
        if(blog&&blog.id){
            setId(blog.id)
            setAuthor(blog.author)
            setContent(blog.content)
            setTitle(blog.title)
        }
    },[blog]);
    const handleSubmit = () => {
        if(!title||!author||!content){
            toast.error("error create")
            return;
        }
        fetch("http://localhost:8000/blogs/${id}",
            {
                headers: {
                    'Accept': 'application/json,text/plain,*/*',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({ title,author,content})
            })
            .then(res=>res.json())
            .then(res=>{
                if(res){
                    toast.warning("update succes");
                    handleCloseModal();
                    mutate("http://localhost:8000/blogs")
                }
            })
        // toast.success("Create succes");
        // console.log("check", title, author, content)
    }
    const handleCloseModal = () => {
        setTitle("")
        setAuthor("")
        setContent("")
        setTitle("")
        setBlog(null)
        setshowModalUpdate(false)
    }


    //   const [show, setShow] = useState(false);

    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);

    return (
        <>


            <Modal
                show={showModalUpdate}
                onHide={() => handleCloseModal()}
                size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="name@example.com"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="name@example.com"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;