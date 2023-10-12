import Image from "next/image";
import "./search.scss";
import SearchIcon from "@/app/assets/icons/search.svg";

function Search() {
  return (
    <div className="search-bar flex flex-row w-4/5 h-16">
      <input
        type="text"
        placeholder="Search..."
        className="w-11/12 search-input"
      />
      <div className="search-icon  w-1/12 flex justify-center items-center">
        <Image src={SearchIcon} alt="search" />
      </div>
    </div>
  );
}

export default Search;
