import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/dataFetch";

const PieDonut = () => {
  const { GetData } = useContext(DataContext);
  const [fetchedData, setFetchedData] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // To track if the button is clicked

  // useEffect(() => {
   
  // }, [GetData]); // Fetch data on component mount

  const handleOnClick = () => {
    const fetchData = async () => {
      const data = await GetData();
      setFetchedData(data);
      console.log(data)
    };

    fetchData();
    
    setShowDetails(true); // Change state when button is clicked
  };
  useEffect(() => {
    console.log("fetchedData updated:", fetchedData);
  }, [fetchedData]);

  return (
    <figure className="charts">
      <div className="pie donut">
        <button className="btn-3d" onClick={handleOnClick}>
          {showDetails ? (
            fetchedData ? (
              <span className="percentage">{fetchedData} %</span>
            ) : (
              <div className="name">Loading...</div>
            )
          ) : (
            <div className="name">OxyTrack</div>
          )}
        </button>
      </div>
    </figure>
  );
  
};

export default PieDonut;
