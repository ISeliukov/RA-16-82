import React from "react";
import { useFetchJson } from "./hooks.js";

function Loading() {
  const [data, loading, error] = useFetchJson("http://localhost:7070/loading");
  return (
    <React.Fragment>
      {loading ? <div className="loading">Загрузка...</div> : null}
    </React.Fragment>
  );
}

export { Loading };
