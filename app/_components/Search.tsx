const Search = () => {
  return (
    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        Search incidents
      </label>

      <span className="absolute inset-y-0 start-0 grid w-10 place-content-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-3.5 w-3.5 text-zinc-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>

      <input
        type="text"
        id="Search"
        placeholder="Search incidents..."
        className="w-full rounded bg-zinc-900/60 border border-zinc-800 text-zinc-300 placeholder-zinc-600 py-2.5 ps-10 font-data text-[11px] tracking-[0.1em] focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
      />
    </div>
  );
};
export default Search;
