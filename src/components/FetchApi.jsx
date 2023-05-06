import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const FetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  return(
    <div>
       {
        data.map((item,index) =>(
            <div key={index}>
                {item.title}
            </div>
        ))
       }
    </div>
  )
};
 
export default FetchApi;
