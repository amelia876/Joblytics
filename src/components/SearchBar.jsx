import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
      <form action="/search" method="get">
        <input
          type="search"
          id="search-input"
          name="q"
          placeholder="Search..."
          aria-label="Search through site content"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
