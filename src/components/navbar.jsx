const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-black/70 backdrop-blur-md text-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-red-500">FakeFitZone</h1>

      <ul className="hidden md:flex gap-8">
        <li><a href="#home" className="hover:text-red-500">Home</a></li>
        <li><a href="#programs" className="hover:text-red-500">Programs</a></li>
        <li><a href="#pricing" className="hover:text-red-500">Pricing</a></li>
        <li><a href="#contacts" className="hover:text-red-500">Contact</a></li>
      </ul>

      <button className="bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:opacity-90">
        Join Now
      </button>
    </nav>
  );
};

export default Navbar;