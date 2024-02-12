import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const About = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="/dumbbell.jpeg"
          alt="fitness"
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Husky Leaderboards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Blah Blah Blah
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default About