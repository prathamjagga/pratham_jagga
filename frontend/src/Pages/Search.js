import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Search.css";
import CardGrid from "../Components/CardGrid";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [fullText, setFullText] = useState("Search for Ads");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPlaceholder(placeholder + fullText[index]);
      setIndex(index + 1);
      if (index == fullText.length) {
        setPlaceholder("");
        setIndex(0);
      }
    }, 100);
  }, [index]);
  const loadResults = async () => {
    if (searchQuery == "") {
      setResults([]);
      return;
    }
    try {
      const tempQuery = searchQuery;
      setLoading(true);
      const data = await axios.get(
        `https://searchbackend.onrender.com/api/ads/search/${searchQuery}`
      );
      setLoading(false);
      if (tempQuery == searchQuery) setResults(data.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div
        className="searchContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <input
          autoFocus
          placeholder={placeholder + "🔎"}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            loadResults();
          }}
        />
      </div>
      {loading && <div className="loading fullwidth"></div>}
      {results.length == 0 && loading == false && (
        <div
          className="fullwidth"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "12rem",
          }}
        >
          🔍
        </div>
      )}
      {!loading && (
        <div className="resultContainer">
          <CardGrid ads={results} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
