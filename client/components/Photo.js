import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {
  render () {
    const post = this.props.post;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            {post.caption}
          </Link>
        </div>
      </figure>
    )
  }
}

export default Photo;