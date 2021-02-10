import { useEffect, useState, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";

const Autocomplete = ({ openSearch, setOpenSearch, isMobile }) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([
    { name: "produkt1", url: "slika1" },
    { name: "opravilo", url: "slika2" },
    { name: "izbiralnik", url: "slika3" },
    { name: "uporabnost", url: "slika4" },
    { name: "zaposlenost", url: "slika5" },
  ]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const startSearch = () => {
    console.log("SEARCH FUNCTION");
  };

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  const setPokeDex = (poke) => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <SearchIcon onClick={(e) => setOpenSearch(!openSearch)} />
          <div
            ref={wrapperRef}
            className={
              openSearch
                ? "search-box sb-mobile active"
                : "search-box sb-mobile"
            }>
            <div className='search-box-wrapper'>
              <input
                type='text'
                name='search'
                onClick={() => setDisplay(!display)}
                id='search'
                value={search}
                placeholder='Search...'
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type='submit' onClick={startSearch}>
                Search
              </button>
            </div>
            {display && (
              <div className='autocomplete-container'>
                {options
                  .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                  .map((v, i) => {
                    return (
                      <div
                        onClick={() => setPokeDex(v.name)}
                        className='option'
                        key={i}
                        tabIndex='0'>
                        <span>{v.name}</span>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className='search-box'>
          <div className='search-box-wrapper'>
            <input
              type='text'
              name='search'
              id='search'
              value={search}
              placeholder='Search...'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' onClick={startSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Autocomplete;
