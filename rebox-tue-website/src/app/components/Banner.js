const Banner = () => {
    return (
      <section
        className="relative bg-[url(https://uvn-brightspot.s3.amazonaws.com/assets/vixpt/k/kickboxing-mulher-soco-1400x800.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"
        ></div>
      
        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
              Re
              <strong className=" font-extrabold text-rose-700">
                Box
              </strong>
            </h1>
      
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black">
              Revolutionizing boxing with technology.
            </p>
      
           
          </div>
        </div>
      </section>
    );
  };
  export default Banner;
  