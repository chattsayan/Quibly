import Button from "./Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-500 shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {/* Logo/Icon */}
        <span className="bg-white rounded-full p-2 shadow-md">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g fill="none" fill-rule="evenodd">
                {" "}
                <circle cx="16" cy="16" r="16" fill="#a6ff00"></circle>{" "}
                <path
                  fill="#FFF"
                  d="M23.683 12.886c.057-.057.17-.057.281-.057 1.687 0 3.036 1.428 3.036 3.143 0 1.6-1.18 2.857-2.698 3.142h-.338c-.562 0-1.124-.171-1.63-.457a.939.939 0 00-.562-.171c-.225 0-.45.057-.618.171-.394.229-.562.629-.562 1.086v.514a3.08 3.08 0 01-2.699 2.8h-.337c-.562 0-1.124-.171-1.63-.457-.225-.114-.393-.171-.618-.171-.225 0-.45.057-.619.171-.393.229-.562.629-.562 1.086v.514c-.112 1.486-1.293 2.629-2.754 2.8h-.281c-1.687 0-3.036-1.429-3.036-3.143.056-1.6 1.18-2.914 2.698-3.086h.338c.562 0 1.124.172 1.63.458a.939.939 0 00.562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.069-3.143 2.699-3.314h.337c.562 0 1.124.171 1.63.457.225.114.394.171.619.171.224 0 .45-.057.618-.171.393-.229.562-.629.562-1.086-.112-1.657 1.124-3.143 2.754-3.314zM17.22 8.943c.112-.057.169-.057.337-.057 1.687 0 3.036 1.428 3.036 3.143-.056 1.6-1.18 2.914-2.699 3.085h-.337c-.562 0-1.124-.171-1.63-.457a.939.939 0 00-.562-.171c-.225 0-.45.057-.618.171-.394.229-.563.629-.563 1.086v.514c-.112 1.485-1.292 2.628-2.754 2.8h-.281c-1.686 0-3.036-1.428-3.036-3.143 0-1.542 1.125-2.8 2.642-3.028h.338c.562 0 1.124.171 1.63.457a.939.939 0 00.562.171c.225 0 .45-.057.618-.171.394-.229.562-.629.562-1.086-.112-1.657 1.125-3.143 2.755-3.314zM11.036 5c1.676 0 3.035 1.382 3.035 3.086s-1.36 3.085-3.035 3.085C9.359 11.171 8 9.79 8 8.086S9.36 5 11.036 5z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </span>
        <h1 className="text-3xl font-extrabold italic text-white tracking-tight drop-shadow-lg select-none">
          Quibly
        </h1>
      </div>
      {/* Navigation */}
      {/* <nav className="hidden md:flex gap-8">
        <a href="#" className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200">Home</a>
        <a href="#" className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200">Dashboard</a>
        <a href="#" className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200">About</a>
      </nav> */}
      <div className="flex items-center gap-2">
        <Button />
      </div>
      {/* Mobile nav icon (optional, for future expansion) */}
      {/* <div className="md:hidden">
        <button className="text-white focus:outline-none">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div> */}
    </header>
  );
};

export default Header;
