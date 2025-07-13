const Button = () => {
  return (
    <div>
      <a href="/auth/google">
        <button className="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all ease-in duration-200">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            height={20}
            width={20}
            alt="google"
          />
          Continue with Google
        </button>
      </a>
    </div>
  );
};

export default Button;
