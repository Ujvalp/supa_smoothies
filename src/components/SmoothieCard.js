import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const SmoothieCard = ({ smoothie, onDelete, sdetails }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id);

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      onDelete(smoothie.id);
    }
  };
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      {/* <ul>
        {sdetails.map((detail) =>
          detail.method
            .split("\n")
            .map((line, index) => <li key={index}>{line}</li>)
        )}
      </ul> */}
      <p>{smoothie.method}</p>
      <div className="rating"> {smoothie.rating}</div>
      <div className="button">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

export default SmoothieCard;
