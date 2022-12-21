import { Card, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPlaces } from "../redux/PlaceAction";

function Places() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const [matchPlaces, setMatchPlaces] = useState([]);

  const searchPlace = (text) => {
    if (!text) {
      setMatchPlaces([]);
    } else {
        //dispatch 
      let matches = state.items.filter((place) => {
        const regex = new RegExp(`${text}`, "gi");
        return place.name.common.match(regex) || place.region.match(regex);
      });
      setMatchPlaces(matches);
    }
  };

  const renderView = () => {
    if (state.loading) {
      return <div>Loading</div>;
    } else if (state.error) {
      return <div>Error in fetching places</div>;
    }
    return (
      <>
        <div>Places</div>
        <div>
          <Input
            style={{ width: "40%", marginTop: "10px" }}
            placeholder="Enter Country or Region name"
            onChange={(e) => searchPlace(e.target.value)}
          />
          {matchPlaces &&
            matchPlaces.map((item, index) => (
              <div key={index} style={{ marginLeft: "35%", marginTop: "5px" }}>
                <Card
                  style={{ width: "50%" }}
                  title={`Country : ${item.name.common}`}
                >
                  Region : {item.region}
                </Card>
              </div>
            ))}
        </div>
      </>
    );
  };

  useEffect(() => {
    dispatch(getPlaces());
  }, []);

  return <>{renderView()}</>;
}

export default Places;
