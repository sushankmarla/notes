'use client'

import { useState, useEffect } from 'react';

import Link from 'next/link';
import dynamic from "next/dynamic";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import NotesCard from '@/components/notesCard/notesCard';
const Editor = dynamic(() => import('@/components/editor/editor'), {ssr:false});

export default function EachVideo({ params, searchParams }){
    const noteId = params.noteId;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../api?noteId='+noteId)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
                setData(data.data)
            })
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Box mb={2}>
                <Link href="/" >Back to Homepage</Link>
            </Box>
            <Grid container spacing={2} maxWidth={1200} mx={'auto'} >
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    {(data.length > 0) &&
                        <NotesCard
                            id={data[0].id}
                            title={data[0].title}
                            date={data[0].date}
                            description={data[0].description}
                            height={'auto'}
                            showCheckboxes = {false}
                            handleShowCheckboxes = {null}
                            showExpanded={true}
                        />
                    }
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={9}>
                    <Editor />
                </Grid>
            </Grid>
        </Box>
    )
}
