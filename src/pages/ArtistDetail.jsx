import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { fethEvents } from "../api/artist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ArtistDetail = () => {
  const history = useHistory();
  const artist = useLocation().state;
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const mountEffect = () => {
    const fetchWithDetail = async () => {
      try {
        setLoading(true);
        const res = await fethEvents({ name, date: "upcoming" });
        setEvents(res.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchWithDetail();
  };

  useEffect(mountEffect, []);

  return (
    <div>
      {" "}
      {loading && "loading..."}
      <div className="container mt-5">
        <span className="back-to-result" onClick={history.goBack}>
          <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} className="mr-1"/> Back to results
        </span>

        <div className="row mt-3">
          <div className="col-lg-4 mb-3">
            <div className="result-wrapper">
              <img
                src={artist?.image_url}
                alt="Profile Image"
                className="artist-profile"
              />
              <div className="result-info-wrapper">
                <h4 className="mb-0">{artist?.name}</h4>
                <a href="">{artist?.facebook_page_url}</a>
              </div>
            </div>
          </div>
        </div>

        <span className="result-message d-block mt-5">
          {events?.length} upcoming events
        </span>
        <div className="row mt-3">
          {events?.map((event) => {
            return (
              <div className="col-lg-4 pb-4">
                <div className="event-wrapper">
                  <h4>event details</h4>
                  <div className="row">
                    <div className="col-6 mt-3">
                      <h5>country</h5>
                      <h6>{event?.venue?.country || "--"}</h6>
                    </div>
                    <div className="col-6 mt-3">
                      <h5>city</h5>
                      <h6>{event?.venue?.city || "--"}</h6>
                    </div>
                    <div className="col-6 mt-3">
                      <h5>venue</h5>
                      <h6>{event?.venue?.location}</h6>
                    </div>
                    <div className="col-6 mt-3">
                      <h5>date</h5>
                      <h6>{moment(event?.datetime).format("ll")}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
