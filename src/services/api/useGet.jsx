import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const api_url = import.meta.env.VITE_API_URL;

export const useGet = (endpoint, trigger = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios
      .get(api_url + endpoint)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData, trigger]);

  return { data, loading, error, refetch: fetchData };
};
