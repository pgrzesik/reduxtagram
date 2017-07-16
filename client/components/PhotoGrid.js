import React from 'react';

import Photo from './Photo';

class PhotoGrid extends React.Component {
  render () {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo />)}
      </div>
    )
  }
}

export default PhotoGrid;