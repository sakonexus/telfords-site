import Headline from '@components/Headline';

const AboutPage = ({ headerImg, ownersImg }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-16 md:mt-[-2rem] xs:mt-0 ">
      <div className="flex w-full max-w-7xl">
        <img
          src={headerImg.src}
          alt="Telford's Lounge Mural"
          className="w-full md:rounded-md xs:rounded-none"
        />
      </div>
      <div className="flex flex-col ml-0 mt-8 xs:px-4 max-w-7xl">
        <Headline>Our story</Headline>
        <div className="border-t border-slate-400">&nbsp;</div>
        <div className="prose max-w-none">
          <p className="font-Baskerville text-lg">
            Since 1970, Telford's Pipe & Cigar has grown into a
            2,730&#8209;square-foot haven for tobacco enthusiasts. For three
            generations, we have specialized in cigars, pipes, and luxury
            tobacco accessories, offering a curated experience for connoisseurs
            and newcomers&nbsp;alike.
            <br />
            <br />
            Our collection boasts over 2,000 cigars, more than 1,000 new and
            estate pipes, 250+ tinned tobaccos, 40 house blends, and the finest
            accessories, including lighters, humidors, cigar cases, tobacco
            pouches, and walking sticks. Telford's Pipe & Cigar is truly the
            premier destination for those who appreciate the art
            of&nbsp;smoking.
          </p>
          <img
            src={ownersImg.src}
            alt="Susan and Brian Telford"
            className="md:float-right md:ml-12 md:mt-4 md:w-1/2 md:rounded-md xs:w-full xs:block xs:mt-4 xs:rounded-none"
          />
          <p className="font-Baskerville text-lg pt-4">
            We also offer a selection of luxury cigarettes free of additives. As
            one of only 80 elite tobacconists in the{' '}
            <a
              target="_blank"
              href="https://www.thetaa.org/"
              className="underline"
            >
              Tobacconist Association of America ( TAA )
            </a>
            , we carry exclusive limited-series products available only to TAA
            members. As a Davidoff Appointed Merchant, we are proud to offer the
            full line of Davidoff luxury products, a distinction shared with a
            select group of tobacconists&nbsp;worldwide.
            <br />
            <br />
            Visiting Telford's is like stepping into a living museum of tobacco.
            A place where your eyes are delighted with the finest offerings, yet
            everything is available for purchase. Let all your senses be
            indulged: enjoy our welcoming staff, whose combined experience
            exceeds 160 years, and explore the perfect gift, whether carefully
            selected or conveniently a gift&nbsp;card.
            <br />
            <br />
            <br className="md:visible md:block xs:hidden" />
            Our environment encourages enjoyment of tobacco both inside and out.
            Relax on the rocking chairs of our porch or sink into the oversized
            leather chairs by the fireplace in our&nbsp;lounge.
            <br />
            <br />
            In Northern California, no one matches the selection, service, and
            unique items that Telford's offers. Locals and visitors alike make
            Telford's a must&#8209;see destination. Just six miles north of the
            Golden Gate Bridge, we are ready to welcome you daily from
            10&nbsp;a.m. to 6&nbsp;p.m., except on major&nbsp;holidays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
