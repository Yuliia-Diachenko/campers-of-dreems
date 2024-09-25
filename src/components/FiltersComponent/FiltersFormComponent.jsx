import { useSelector } from "react-redux";

export const FiltersFormComponent= () => {

  const filter = useSelector(state => state.filters.form);

  return (
    <div>
      <button>Van {filter === "van" && "is active"}</button>
      <button>Fully Integrated {filter === "fully Integrated" && "is active"}</button>
      <button>Alcove {filter === "alcove" && "is active"}</button>
    </div>
  );
};
