'use client'

import { useState, useEffect } from 'react';

import Link from 'next/link'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import NotesCard from '@/components/notesCard/notesCard';

export default async function Homepage() {
    const [data, setData] = useState([])
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    useEffect(() => {
        fetch('./api')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data);
                setData(data.data)
            })
    }, [])

    const handleShowCheckboxes = (checkboxId) =>{
        let tempCheckboxes = [...selectedCheckboxes];
        (!tempCheckboxes.includes(checkboxId)) ? tempCheckboxes.push(checkboxId) : tempCheckboxes.splice(tempCheckboxes.indexOf(checkboxId), 1);
        setSelectedCheckboxes(tempCheckboxes);
        console.log(tempCheckboxes);
    }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} maxWidth={1200} mx={'auto'} >
                {data.map((note) => (
                    // (note.id == 1) && 
                    <Grid item xs={12} sm={6} md={4} lg={3} key={note.id} >
                        <Link href={`/note/${note.id}`} style={{textDecoration:'none'}}>
                            <NotesCard
                                id={note.id}
                                title={note.title}
                                date={note.date}
                                description={note.description}
                                height={'100%'}
                                showCheckboxes={!!selectedCheckboxes.length}
                                handleShowCheckboxes={handleShowCheckboxes}
                                showExpanded={false}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}