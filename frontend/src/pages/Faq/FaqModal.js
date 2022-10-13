import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Modal, TextField } from '@mui/material';
import "./Faq.css"
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function FaqModal({ open, handleClose, }) {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const create = async () => {
        if (!question || !answer) {
            toast.warning('Please Fill all the required fields', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            // alert("Please Fill all the required fields")
            return;
        }
        try {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "https://jeevmokshayogaadmin.herokuapp.com/api/faq",
                { question, answer },
                config
            );
            console.log(data);
            // alert("Faq created successfully")
            toast.success('Faq created successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // navigate("/faq");
            window.location.reload()


        } catch (error) {
            console.log(error)
            toast.error('Something went wrong,try again!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal_main' p={5}>
                    <CloseIcon onClick={handleClose} className="modal_icon" />
                    <form >
                        <h3 className='headline' style={{ textAlign: "center", color: "black", marginTop: "-40px" }}>Create New FAQ</h3>
                        <TextField
                            required
                            className='faq_textfield'
                            type="text"
                            label="Faq Question"
                            variant="outlined"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <br />
                        <TextField
                            required
                            className='faq_textfield'
                            type="text"
                            label="Faq Answer"
                            variant="outlined"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        <br />
                        <Button style={{ margin: "5px", width: "150px" }} variant="contained" color="primary" onClick={create}>
                            Create
                        </Button>
                    </form>
                </Box>
            </Modal>
            <ToastContainer />

        </div>
    )
}

export default FaqModal
