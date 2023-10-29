import React from "react";
import { useFetchJson } from "./hooks.js";

function Error() {
  const [data, loading, error] = useFetchJson("http://localhost:7070/error");
  return (
    <React.Fragment>
      {error ? <div className="error">{error}</div> : null}
    </React.Fragment>
  );
}

export { Error };
