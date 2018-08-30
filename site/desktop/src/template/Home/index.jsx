import React from 'react';
import { Redirect } from "react-router-dom";

export default class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <h2>desktop</h2>
        <Redirect to={'/Documentation-$about-ost'} />
        {/* <Link to={'/Documentation-$about-ost'} > start </Link> */}
      </div>
    );
  }
}