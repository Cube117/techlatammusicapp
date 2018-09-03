import React, { Component } from 'react';
import './CSS/Content.css';
import Typography from '@material-ui/core/Typography';
import AlbumView from './AlbumView';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Typography variant="headline" gutterBottom>
          <h1>Los 100 Mejores Albums de Itunes</h1>
        </Typography>
        <AlbumView />
      </div>
    );
  }
}

export default Content;
