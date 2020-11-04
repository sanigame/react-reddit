import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginBottom: 25
  },
  media: {
    height: 140,
  },
});

function MediaCard({title, detail, name}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/detail/${name}`}>
        <CardMedia
          className={classes.media}
          image="https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png"
          title={title}
          id="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default MediaCard
