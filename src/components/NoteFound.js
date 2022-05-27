import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import "./Notefound.css"

const NoteFound = () => {
  return (
    <>
        <div id="notefound">
            <div className="notefound">
                <div className="notefound-404">
                    <h1>404</h1>
                </div>
                <h2>we are sorry, page not found</h2>
                <p className="lead mb-5">
                    The page you are looking for might have been removed had it's name changed or is temporarily unavailable. 
                </p>
                <Button variant="contained" size="large" component={Link} to={'/'} >Take me Home</Button>
            </div>
        </div>

    </>
  )
}

export default NoteFound