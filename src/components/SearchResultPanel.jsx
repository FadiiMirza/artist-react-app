import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { fetchArtists } from "../api/artist";

const SearchResutlCard = ({ image_url, facebook_page_url, name }) => {
  return (
    <div className="col-lg-4 mb-4">
      <Link className="text-decoration-none"
        to={{
          pathname: `/artist/${name}`,
          state: { image_url, facebook_page_url, name },
        }}
      >
        <div className="result-wrapper">
          <img src={image_url} alt="Profile Image" className="artist-profile" />
          <div className="result-info-wrapper">
            <h4 className="mb-0">{name}</h4>
            <a href={facebook_page_url}>{facebook_page_url}</a>
          </div>
        </div>
      </Link>
    </div>
  );
};

const SearchResultPanel = () => {
  const search = useLocation().search;
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const artist = new URLSearchParams(search).get("artist") || null;
  const mountEffect = () => {
    const _fetchArtists = async () => {
      try {
        if (artist) {
          setLoading(true);
          const res = await fetchArtists({ name: artist });
          console.log({ ...res });
          if (res.data) {
            const _artists = [...artists, res.data];
            const distinctItems = [
              ...new Map(_artists.map((item) => [item["id"], item])).values(),
            ];
            setArtists(distinctItems);
          }
        } else {
          setArtists([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    _fetchArtists();
  };
  useEffect(mountEffect, [artist]);
  return (
    <div className="container mt-5">
      <span className="result-message">
        {artists?.length} Result found for "{artist || ""}"
      </span>
      {loading && "loading..."}
      <div className="row mt-3">
        {artists?.map((x) => {
          return (
            <SearchResutlCard
              image_url={x.image_url}
              facebook_page_url={x.facebook_page_url}
              name={x?.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultPanel;
