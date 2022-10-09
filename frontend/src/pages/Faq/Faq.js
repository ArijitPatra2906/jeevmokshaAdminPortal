import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Faq.css"
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import FaqModal from './FaqModal';
import { Link } from "react-router-dom";

function Faq() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [faq, setFaq] = useState([])

    useEffect(() => {
        const getFaq = async () => {
            const result = await axios.get("/api/faq");
            setFaq(result.data)
            // console.log(faq)
        };
        getFaq()
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='faq_container' item xs={12}>
                    <div className="faq_top">
                        <Button onClick={handleOpen} className='btn_faq' variant="contained" endIcon={<AddIcon />}>
                            Create
                        </Button>
                        <Typography fontSize="30px" mt={3} mb={3}>Frequently asked question</Typography>
                    </div>
                    {faq && faq?.map((f) => (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Link to={`/faq/${f._id}`} style={{ textDecoration: "none" }}>
                                <Accordion className='accordion'
                                    onChange={handleChange()}>
                                    <AccordionSummary
                                        expandIcon={<AddIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <h4 sx={{ color: 'text.secondary' }}>{f.question}</h4>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <h5>
                                            {f.answer}
                                        </h5>
                                        {/* <DeleteIcon onClick={handleDelete} /> */}
                                    </AccordionDetails>
                                </Accordion>
                            </Link>
                            {/* <Button onClick={handleDelete} className='btn_faq' variant="contained" endIcon={<DeleteIcon />}>
                                {f._id}
                            </Button> */}
                            {/* <DeleteIcon onClick={handleDelete} /> */}
                        </div>

                    ))}
                </Grid>
            </Grid>
            {open && <FaqModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} />}

        </Box>
    )
}

export default Faq
