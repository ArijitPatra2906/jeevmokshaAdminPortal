import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
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
            const result = await axios.get("/api/booking");
            setCourse(result.data)
            // console.log(course)
        };
        getContact()
    })
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid className='course_container' item xs={12}>
                    <Typography color="red" fontSize="26px" mt={1} pb={3} fontWeight="700">Course Details</Typography>
                    <Box sx={{ height: 500, width: '100%', margin: "0 auto" }}>
                        <DataGrid
                            rows={course}
                            columns={columns}
                            getRowId={(row) => row.name + row.phone}
                            pageSize={6}
                            rowsPerPageOptions={[1]}
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Course
