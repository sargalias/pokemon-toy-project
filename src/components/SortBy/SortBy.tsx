type SortByProps = {};

const SortBy = () => {
  return (
    <div className="SortBy">
      <select>
        <option value="hp">HP</option>
        <option value="attack">Attack</option>
        <option value="defence">Defence</option>
        <option value="specialAttack">Special Attack</option>
        <option value="specialDefence">Special Defence</option>
        <option value="speed">Speed</option>
      </select>
    </div>
  );
};

export default SortBy;
