import React, { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useData = (endpoint, customConfig, deps) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get(endpoint, customConfig)
        .then((res) => {
          if (
            endpoint === "/products" &&
            data &&
            data.products &&
            customConfig.params.page !== 1
          ) {
            setData((prev) => ({
              ...prev,
              products: [...prev.products, ...res.data.products],
            }));
          } else {
            setData(res.data);
          }
          setIsLoading(false);
        })
        .catch((errors) => {
          setErrors(errors.message);
          setIsLoading(false);
        });
    },
    deps ? deps : []
  );

  return { data, errors, isLoading };
};

export default useData;
