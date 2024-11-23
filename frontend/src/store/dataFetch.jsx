import { createContext, useState } from "react";

export const DataContext = createContext({
  Getdata: () => {},
});

const DataProvider = ({ children }) => {
  const [fetching, setFetching] = useState(false);

  // const GetData = () => {
  //   setFetching(true);

  //   fetch("http://localhost:8080/oxyTrack/oxygen")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFetching(false);
  //       return data;
  //     });
  // };
  const GetData = async () => {
    setFetching(true);
  
    try {
      const response = await fetch("http://localhost:8080/oxyTrack/oxygen");
      const data = await response.json();
      console.log(data); // Log the data
      setFetching(false);
      return data; // Return the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetching(false);
      return null; // Handle errors gracefully
    }
  };
  

  return (
    <DataContext.Provider
      value={{
        GetData,
        fetching,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
