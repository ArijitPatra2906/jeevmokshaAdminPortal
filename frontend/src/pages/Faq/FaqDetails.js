import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function FaqDetails() {
    const [faqDetails, setfaqDetails] = useState({});
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [updateMode, setUpdatMode] = useState(false);


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const location = useLocation();

    const path = location.pathname.split("/")[2];
    useEffect(() => {
        const getFaq = async () => {
            const result = await axios.get("/api/faq/" + path);

            setfaqDetails(result.data);
            setQuestion(result.data.question);
            setAnswer(result.data.answer);
            console.log(result.data.answer)
        };
        getFaq();
    }, [path]);


    const handleDelete = async () => {
        try {
            await axios.delete("/api/faq/" + path);
            setUpdatMode(false);
            toast.success('Faq deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            window.location.replace("/faq")
        } catch (err) { }
    };
    const handleUpdate = async () => {
        try {
            await axios.put("/api/faq/" + path, {
                // username: user.username,
                question,
                answer,
            });
            toast.success('Faq updated successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            window.location.replace("/faq");
        } catch (err) { }
    };

    return (
        <>
            {updateMode ? (
                <form style={{ margin: "160px" }}>
                    <h3 className='headline' style={{ textAlign: "center", color: "black", marginTop: "-40px" }}>Update Your FAQ</h3>
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
                    <Button style={{ margin: "5px", width: "150px" }} variant="contained" color="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </form>
            ) : (
                <Accordion style={{ marginTop: "100px", width: "600px", margin: "30px auto" }}
                    onChange={handleChange()}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <h4 sx={{ color: 'text.secondary' }}>{question}</h4>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
                        <h5>
                            {answer}
                        </h5>
                        <div>
                            <DeleteIcon
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={handleDelete} />
                            <EditIcon
                                style={{ color: "red", cursor: "pointer" }}

                                onClick={() => setUpdatMode(true)}
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            )}
            <ToastContainer />
        </>
    )
}

export default FaqDetails
