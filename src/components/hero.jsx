const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transform Your Body <br />
            <span className="text-red-500">Build Your Strength</span>
          </h1>

          <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Join FitZone Gym and achieve your fitness goals with expert trainers,
            modern equipment, and a motivating environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:opacity-90 transition">
              Start Your Journey
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              View Plans
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
            alt="gym"
            className="w-[280px] sm:w-[350px] md:w-[420px] rounded-2xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;