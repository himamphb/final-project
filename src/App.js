import React, { Component } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TvSeries from "./Pages/TvSeries/TvSeries";
import BottomNav from "./Components/BottomNav/BottomNav";
import Search from "./Pages/Search/Search";
import MovieCard from "./Components/MovieCard/MovieCard";
export default class App extends Component {
  render() {
    return (
      <>
       <Header/>
       <BrowserRouter>
       
       <Routes>
        <Route path="/" element={<Trending/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvseries" element={<TvSeries/>}/>
        <Route path="/search" element={<Search/>}/>
       </Routes>
       <BottomNav/>
       </BrowserRouter>
      
       
      </>
    );
  }
}
