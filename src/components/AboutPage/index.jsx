const AboutPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-16 md:mt-[-2rem] xs:mt-4 ">
      <div className="flex w-full max-w-7xl">
        <img
          src="/i/telfords-mural.jpg"
          alt="Telford's Lounge Mural"
          className="w-full md:rounded-md xs:rounded-none"
        />
      </div>
      <div className="flex flex-col ml-0 mt-10 xs:px-4 max-w-7xl">
        <h1 className="font-MonteCarlo text-6xl">Our story</h1>
        <div className="border-t border-slate-400 mt-0">&nbsp;</div>
        <p className="font-Baskerville text-xl pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pellentesque faucibus pharetra. Aenean ac porta lectus. Suspendisse
          potenti. Pellentesque quis magna id velit porttitor pretium. Phasellus
          vel suscipit odio. Morbi consequat metus sed pharetra placerat. Sed ut
          vulputate mauris. Sed a ullamcorper nisl. Fusce maximus ligula at est
          placerat eleifend. Vivamus a fermentum lectus. Duis at venenatis
          massa. Pellentesque facilisis vestibulum dolor sit amet egestas. Nulla
          ultrices tempus leo quis aliquam.
          <br />
          <br />
          Morbi fermentum a nunc et porta. Vivamus fermentum risus lobortis
          felis mollis accumsan. Morbi lorem neque, auctor suscipit ultrices
          non, rutrum ut neque. Pellentesque tempor lectus ac dictum faucibus.
          Nunc semper at sapien pulvinar elementum. Suspendisse potenti. Aenean
          lobortis cursus ante, vitae pulvinar lectus tincidunt nec. Cras et
          tellus condimentum, euismod ante et, sagittis ligula. Nam feugiat odio
          et quam ornare porttitor nec et augue. Sed varius, metus nec tempor
          interdum, velit ipsum sagittis ex, quis malesuada diam dui nec turpis.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
