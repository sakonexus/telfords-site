const AboutPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-10 mb-16 xs:mt-4">
      <div className="flex w-full">
        <img
          src="/i/telfords-mural.jpg"
          alt="Telford's Lounge Mural"
          className="w-full"
        />
      </div>
      <div className="flex flex-col ml-0 md:ml-8 mt-10 xs:px-4">
        <h1 className="font-MonteCarlo text-6xl">Our story</h1>
        <div className="border-t border-slate-400 mt-0">&nbsp;</div>
        <p className="font-Baskerville text-xl pt-4">
          Family owned and operated business from the start, Telford's Pipe &
          Cigar is one of the finest tobacco stores in the country. Serving the
          Bay Area since 1970.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
