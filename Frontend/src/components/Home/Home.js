import React, { useState, useContext, useEffect } from "react";
import HomeRender from "./HomeRender";
import Context from "../Context/HomeContext/Context";
import DotLoader from "react-spinners/DotLoader"
export default function Home() {
  const music = (item) => {
    if (item.track != null) {
      return <HomeRender key={item.track.id} item={item} />;
    }
  };
  const a = useContext(Context);
  useEffect(() => {
    a.api();
  }, []);

  if (a.isLoading) {
    return (
      <div className="loader">
      <DotLoader color="red"/>
      </div>
    );
  }
  
  return (
    <div>
      {a.Data && (
        <div className="container mt-4">
          <div
            className="row row-cols-1 row-cols-md-2 g-4"
            style={{ zIndex: "1" }}
          >
            {a.Data.map(music)}
          </div>
        </div>
      )}
    </div>
  );
}
