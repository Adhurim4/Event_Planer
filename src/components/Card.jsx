import Button from "./Button";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/place/${props.id}`}>
    <div className="bg-white p-1 rounded shadow w-[300px] h-[400px]">
      <img src={props.imageUrl} alt={props.title} className="w-[100%] h-[65%] object-cover " />
      <h2 className="text-lg font-bold my-1 ml-2">{props.title}</h2>
      <p className="text-gray-600 mb-[10px] ml-2">{props.description}</p>
      <Button />
    </div>
    </Link>
  );
};

export default Card
 





