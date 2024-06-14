import React, { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get(url)
      .then((res) => setData(res.data))
      .catch((errors) => setErrors(errors.message));
  }, []);

  return { data, errors };
};

export default useData;
