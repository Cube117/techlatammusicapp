import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';
import './CSS/AlbumView.css';

const styles = theme => ({

  card: {
    maxWidth: 367,
    float: 'left',
    marginRight: 10,
    height: 664.533,
    marginBotton: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class AlbumView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topAlbums: []
    }
  }

  componentWillMount() {
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(response => response.json())
      .then(topAlbums => {

        topAlbums.feed.entry.forEach(album => {
          let data = {
            nameAlbum: album["im:name"].label,
            imageAlbum: album["im:image"][2].label,
            image2Album: album["im:image"][0].label,
            dateAlbum: album["im:releaseDate"].attributes.label,
            rightsAlbum: album.rights.label,
            songAlbum: album["im:itemCount"].label,
            priceAlbum: album["im:price"].label,
            coinAlbum: album["im:price"].attributes.height,
            linkAlbum: album.link.attributes.href,
            artistAlbum: album["im:artist"].label

          }
          this.setState({ topAlbums: this.state.topAlbums.concat([data]) })
        });

      });
  }

  render() {
    const { classes } = this.props;

    console.log(this.state.topAlbums.length)
    if (this.state.topAlbums.length > 0) {
      return (
        <div id="myAlbums" className="TopAlbums">
          {this.state.topAlbums.map(album =>
            <Card id="Album" className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" src={album.image2Album} className={classes.avatar}>R</Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={album.nameAlbum}
                subheader={album.artistAlbum}

              />
              <CardMedia
                className={classes.media}
                image={album.imageAlbum}
                title=""
              />
              <CardContent>
                <Typography component="p">
                  {album.rightsAlbum}
                </Typography>
                <hr />
                <Typography component="p">
                  {album.songAlbum} Canciones
               </Typography>
                <hr />
                <Typography component="p">
                  Precio: {album.priceAlbum} {album.coinAlbum}
                </Typography>
                <hr />
                <Typography component="p">
                  Fecha de Salida: {album.dateAlbum}
                </Typography>
                <br />
                <Button id="boton" variant="outlined" href={album.linkAlbum} target="blank" className={classes.button}>
                 Ver en iTunes
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      );
    } else {
      return (
        <p>Cargando Albums... <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} /> </p>
      );

    }

  }
}

AlbumView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumView);
