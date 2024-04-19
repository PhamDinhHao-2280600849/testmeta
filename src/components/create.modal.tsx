"use client"
import { ImgProps } from 'next/dist/shared/lib/get-img-props';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    showModalCreate: boolean;
    setshowModalCreate: (va: boolean) => void;
}
function CreateModal(props: IProps) {
    const { showModalCreate, setshowModalCreate } = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = () => {
        if(!title||!author||!content){
            toast.error("error create")
            return;
        }
        fetch("http://localhost:8000/blogs",
            {
                headers: {
                    'Accept': 'application/json,text/plain,*/*',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ title,author,content})
            })
            .then(res=>res.json())
            .then(res=>{
                if(res){
                    toast.success("Create succes");
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
        setshowModalCreate(false)
    }


    //   const [show, setShow] = useState(false);

    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);

    return (
        <>


            <Modal
                show={showModalCreate}
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