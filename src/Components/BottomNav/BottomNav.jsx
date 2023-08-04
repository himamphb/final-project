import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import "./BottomNav.scss";
import { Link } from "react-router-dom";

export default class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="bottom-container">
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>

          <Link to="/" exact><BottomNavigationAction label="Trending" icon={<WhatshotIcon/>}/></Link>
          <Link to="/movies"><BottomNavigationAction label="Movies"   icon={<LocalMoviesIcon/>}/></Link>
          <Link to="/tvseries"><BottomNavigationAction label="TV Series"  icon={<MovieIcon/>}/></Link>
          <Link to="/search"><BottomNavigationAction label="Search"  icon={<SearchIcon/>}/></Link>
          
          
        </BottomNavigation>
      </div>
    );
  }
}
