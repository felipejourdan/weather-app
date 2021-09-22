import React from 'react';

export const FetchContext = React.createContext();

export const UseFetch = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [weatherStorage, setWeatherStorage] = React.useState(data);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    if (url !== null)
      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        setData((data) => [...data, json]);
      } catch (err) {
        json = null;
        setError(err.message);
      } finally {
        setLoading(false);
        return { response, json };
      }
    else return null;
  }, []);

  return (
    <FetchContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        loading,
        setLoading,
        request,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
