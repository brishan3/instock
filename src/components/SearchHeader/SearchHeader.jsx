import "./SearchHeader.scss";
import MainButton from "../MainButton/MainButton";
import SearchField from "../SearchField/SearchField";

function SearchHeader() {
  return (
    <>
      <div className="inventory">
        <h1 className="inventory__title">Inventory</h1>
        <SearchField />
        <MainButton>
          <h3 className="inventory__content btn">+ Add New Item</h3>
        </MainButton>
      </div>
    </>
  );
}

export default SearchHeader;
