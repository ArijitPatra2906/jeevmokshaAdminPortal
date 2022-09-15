import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Course.css"
import axios from "axios"
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react'


const columns = [
    {
        field: 'name',
        headerName: 'Name',
        width: 140,
        editable: false,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 140,
        editable: false,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        // type: 'number',
        width: 140,
        editable: false,
    },
    {
        field: 'country',
        headerName: 'Country',
        // type: 'number',
        width: 140,
        editable: false,
    },
    {
        field: 'course',
        headerName: 'Course',
        // type: 'number',
        width: 140,
        editable: false,
    },
    {
        field: 'duration',
        headerName: 'Duration',
        // type: 'number',
        width: 140,
        editable: false,
    },
    {
        field: 'room',
        headerName: 'Room Type',
        // type: 'number',
        width: 140,
        editable: false,
    },
    {
        field: 'reason',
        headerName: 'Reason',
        width: 140,
        editable: false,
    },
    {
        field: 'message',
        headerName: 'Message',
        // type: 'number',
        width: 140,
        editable: false,

    },
];

function Course() {
    const [course, setCourse] = useState([])

    useEffect(() => {
        const getContact = async () => {
            const result = await axios.get("http://localhost:7000/api/booking");
            setCourse(result.data)
            console.log(course)
        };
        getContact()
    })
    return (
        <div className='course'>
            <Sidebar />
            <div className="courseContainer">
                <Navbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid className='course_container' item xs={12}>
                            <Typography fontSize="26px" mt={1} pb={3} fontWeight="700">Course Details</Typography>

                            <Box sx={{ height: 500, width: '100%', margin: "0 auto" }}>
                                <DataGrid
                                    rows={course}
                                    columns={columns}
                                    getRowId={(row) => row.name + row.phone}
                                    pageSize={10}
                                    rowsPerPageOptions={[1]}
                                    experimentalFeatures={{ newEditingApi: true }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div >
    )
}

export default Course