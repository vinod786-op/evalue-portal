import React from 'react'
import {Container, Grid, Button, Typography, Card, CardContent, CardActions, CardMedia  } from '@mui/material'
import {makeStyles} from '@mui/styles'



const useStyles = makeStyles(theme => ({
   root: {
       minWidth: "200",
       backgroundColor: "theme.palette.green[200]",
       paddingTop: "theme.spacing(5)",
   },
}))


export default function Cardcom() {
    
    const classes = useStyles();
  return (
  
    <div> 
    <Container className={classes.root}>
        <Grid container spacing={3}>
            {/* First card */}
         <Grid item xs={12} sm={6} md={6}>
             <Card variant="outlined" sx={{boxShadow: 5}}>
                <CardMedia component="img" height="300"  image="https://res.cloudinary.com/vinod-op/image/upload/v1644838810/content_production_f7xpgo.jpg" />
                
                <CardContent>
                        <Typography variant="h4">Content Production </Typography>
                        <Typography variant="subbtitle2"> With changing user habits and expanding mediums in which content could be consumed, the need for enrichment—adding abstracts, keywords, and indexes for ease of reading and search engine optimization, accessibility, interactivity (embedding responsive multimedia components), repurposing, and adaption—has been growing exponentially. </Typography>
                    </CardContent>
                <CardActions>
                    <Button>Read More</Button>
                </CardActions>    
             </Card>
         </Grid>
              {/* second card */}
         <Grid item xs={12} sm={6} md={6}>
             <Card variant="outlined" sx={{boxShadow: 5}}>
                <CardMedia component="img" height="300"  image="https://res.cloudinary.com/vinod-op/image/upload/v1644837214/tranformation_jt4jvd.jpg" />
                
                <CardContent>
                        <Typography variant="h4">Content Transformation </Typography>
                        <Typography variant="subbtitle1"> Technology has been evolving continuously and so have the standards to store and exchange content. The trend has created an ever-growing need to transform content from one standard to another. Every organization that deals in content may require one or the other form of transformation services to remain relevant in this competitive market. </Typography>
                    </CardContent>
                <CardActions>
                    <Button>Read More</Button>
                </CardActions>    
             </Card>
         </Grid>

               {/* Third card */}
         <Grid item xs={12} sm={6} md={6}>
             <Card variant="outlined" sx={{boxShadow: 5}}>
                <CardMedia component="img" height="300"  image="https://res.cloudinary.com/vinod-op/image/upload/v1644837166/Enrichment_epyfbk.svg" />
                
                <CardContent>
                        <Typography variant="h4">Content Enrichment </Typography>
                        <Typography variant="subbtitle1"> With changing user habits and expanding mediums in which content could be consumed, the need for enrichment—adding abstracts, keywords, and indexes for ease of reading and search engine optimization, accessibility, interactivity (embedding responsive multimedia components), repurposing, and adaption—has been growing exponentially. </Typography>
                    </CardContent>
                <CardActions>
                    <Button>Read More</Button>
                </CardActions>    
             </Card>
         </Grid>
                {/* For card */}
         <Grid item xs={12} sm={6} md={6}>
             <Card variant="outlined" sx={{boxShadow: 5}}>
                <CardMedia component="img" height="300"  image="https://res.cloudinary.com/vinod-op/image/upload/v1644837212/software_ljcuvk.jpg" />
                
                <CardContent>
                        <Typography variant="h4">Software Solutions for Content </Typography>
                        <Typography variant="subbtitle1"> The ability to reassess one’s accomplishments and find new ways of doing things better using latest technologies is key to staying relevant in this everchanging world. That has been our strength in our own business and we would love to extend it to others, that is, our clients. We understand that not all clients would be keen on spending a lot upfront to get their businesses evaluated. </Typography>
                    </CardContent>
                <CardActions>
                    <Button>Read More</Button>
                </CardActions>    
             </Card>
         </Grid>
        </Grid>
         </Container>
    </div>
  )
}
