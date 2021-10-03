import React from "react";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBar = () => {
  const search = useLocation().search;
  const artist = new URLSearchParams(search).get("artist") || '';
  const history = useHistory();
 
  return (
    <div className="search-wrapper">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <input
              type="text"
              className="form-control"
              value={artist}
              data-search-testid="search"
              onChange={(event) => {
                if (!event.target?.value) {
                  history.push({
                    pathname: window.location.pathname,
                  });
                } else {
                  history.push({
                    pathname: window.location.pathname,
                    search: `?artist=${event.target.value}`,
                  });
                }
              }}
              placeholder="Search Artist ..."
            />
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={['fas', 'search']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
