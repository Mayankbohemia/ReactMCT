import "./Header.css";
import youtubeLogo from "../images/youtube.png";

const Header = (props) => {
  const inputText = (event) => {
    const input = event.target.value;
    props.searchFilter(input);
  };

  return (
    <>
      <div className="headerContainer">
        <div className="youtubeLogo">
          <img className="image" src={youtubeLogo} alt="Youtube Logo" />
        </div>
        <div className="search">
          <input
            onChange={inputText}
            className="searchInput"
            type="text"
            placeholder="search"
          />
        </div>
        <div>SignUp</div>
      </div>
    </>
  );
};
export default Header;
