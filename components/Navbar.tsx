function Navbar() {
  return (
    <div className=" flex  p-[16px] justify-between   items-center bg-[rgb(22,29,47)] md:m-6 md:p-6 md:rounded-xl lg:h-screen    lg:m-[32px] lg:p-[28px] lg:w-[7vw] lg:min-w-[96px] lg:max-w-[120px] lg:flex-col  lg:rounded-[20px]">
      <a href="/">
        <img
          className="cursor-pointer h-[20px] w-[25px] md:w-8 md:h-6"
          src="../logo.svg"
          alt="logo"
        />
      </a>

      <div className="flex gap-[24px] md:gap-8 lg:flex-col lg:gap-10 lg:mb-auto lg:mt-[150px]">
        <img className="navIcons" src="../Shape.svg" alt="" />
        <img className="navIcons" src="../icon-category-movie.svg" alt="" />
        <img className="navIcons" src="../icon-category-tv.svg" alt="" />
        <img className="navIcons" src="../icon-bookmark-full.svg" alt="" />
      </div>
      <img
        className="cursor-pointer h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
        src="../image-avatar.png"
        alt=""
      />
    </div>
  );
}

export default Navbar;
