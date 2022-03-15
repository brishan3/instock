import "./SearchHeader.scss";
import MainButton from "../MainButton/MainButton";
import SearchField from "../SearchField/SearchField";

function SearchHeader(props) {
  return (
    <>
      <div className="inventory">
        <h1 className="inventory__title">{props.title}</h1>
        <SearchField />
        <MainButton>
          <h3 className="inventory__content btn">{props.content}</h3>
        </MainButton>
      </div>
    </>
  );
}

export default SearchHeader;
