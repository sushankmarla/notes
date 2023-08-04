import { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { parseISO, format } from 'date-fns';

import styles from './notesCard.module.css';

const settings = [
    {action:'open', value:'Open'},
    // {action:'select', value:'Select'},
    // {action:'select', value:'Deselect'},
    {action:'delete', value:'Delete'}
];

export default function NotesCard(props){
    const [selected, setSelected] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const notesDate = parseISO(props.date);

    const handleSelectChange = (event) => {
        setSelected(event.target.checked);
        props.handleShowCheckboxes(props.id);
    }

    const handleClickSettings = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }

    const handleClickSettingsItem = (event, action) => {
        if(action !== 'open'){
            event.preventDefault();
            event.stopPropagation();
        }

        setAnchorEl(null);
        switch(action){
            case 'open':
                break;
            case 'select':
                setSelected(prevState => !prevState);
                props.handleShowCheckboxes(props.id);
                break;
            case 'delete':
                break;
        }
    }

    const handleSettingsClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(null);
    };

    return(
        <Card id={props.id} style={{height:props.height}} className={`${styles.card} ${selected ? styles.selectedCard : ''}`}>
            <Checkbox
                className={`${styles.checkbox} ${props.showCheckboxes ? styles.checkboxSelected : ''}`}
                checked={selected}
                onChange={handleSelectChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        S
                    </Avatar>
                }
                action={(!props.showExpanded) &&
                    <IconButton aria-label="settings" onClick={handleClickSettings}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.title}
                subheader={format(notesDate, 'd MMM, yyyy')}
            />
            <Menu anchorEl={anchorEl} open={open} onClose={(e) => handleSettingsClose(e)} >
                {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={(e) => handleClickSettingsItem(e, setting.action)} >
                        {setting.value}
                    </MenuItem>
                ))}
            </Menu>
            <CardContent style={{paddingTop:4}}>
                <Typography variant="body2" color="text.secondary">{props.description}</Typography>
            </CardContent>
        </Card>
    );
}