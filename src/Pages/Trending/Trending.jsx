import axios from "axios";
import React, { Component } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import './Trending.scss'
export default class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aipData: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=2b1d687ff77b9dccf46e1bd833a09953"
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          aipData:  res.data.results,
          error: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: error.mesage,
        });
      });
  }

  render() {
    const { aipData } = this.state;
    const srcLink = "https://image.tmdb.org/t/p/original/"
    const mylists = aipData.map((content) => {
      return (
        <MovieCard
          media={content.media_type}
          release={content.release_date}
          movieTitle={content.title}
          rating={content.vote_average}
          path={`${srcLink}${content.poster_path}`}
        />
      );
    });

    return <div className="trending-container">
      {mylists}
    </div>;
  }
}
