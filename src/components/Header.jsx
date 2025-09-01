const Header = () => {

  return (
    <header className="bg-chocolate-dark py-8 text-white sticky top-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center text-xl hidden lg:inline">Portfolio</div>
        <div className="text-center text-xl hidden md:inline lg:inline">Johannes Haapanen ◯ Student</div>
        <div className="text-xl flex justify-center gap-4">
          <a href="#about" className="cursor-pointer hover:text-chocolate-white">About</a>
          <span>◯</span>
          <a href="#skills" className="cursor-pointer hover:text-chocolate-white">Skills</a>
          <span>◯</span>
          <a href="#projects" className="cursor-pointer hover:text-chocolate-white">Projects</a>
        </div>
      </div>
    </header>
  )
}

export default Header