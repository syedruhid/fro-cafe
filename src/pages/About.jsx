const About = () => {
  const valuesData = [
    {
      title: "Friendliness",
      description:
        "A smile opens doors and hearts. We treat everyone with respect and warmth, whether guest or colleague. Friendliness is the first step toward true trust.",
    },
    {
      title: "Reliability",
      description:
        "You can rely on us—that's not an empty promise, but a lived reality. We stick together, meet deadlines, and keep our word. Trust grows when reliability does.",
    },
    {
      title: "Community",
      description:
        "We're like a crew on a sailboat — everyone counts. Together, we set the sails right and harness the wind to overcome challenges as one.",
    },
    {
      title: "Respect",
      description:
        "Everyone is valued for who they are. We celebrate diverse opinions and backgrounds — respect creates the ground for creativity and connection.",
    },
  ];

  return (
    <div className="bg-[var(--warm-beige)] py-20 px-6 md:px-16 font-[Inter]">
      {/* Main white card */}
      <div className="relative bg-white max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden">
        {/* Wavy top section */}
        <div className="absolute top-0 left-0 w-full h-20 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')] bg-repeat opacity-20"></div>

        {/* Content section */}
        <div className="grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHZiwOm-C03ds5VAxy6NbntKrSNSWsf9W4wTFjY-Lt9hoVglXEHogCvUG85qZ3dCfXITxMFxsctNefuubSLkMrAklFHy8Bk9sHWdkHRx1xQGFDTJ6ACXtIMfawxU8rTSyhjBaYuKJr1w3oqxFDkfSvBtYXH8Tu3JNLKgNPyROaL4fNJdTkjCqYiTHNPFXMXTe59XQ7tN8dvlYop8xONGk_YgVboUNvfYs2Klce8Dpbrc1O0Yc-gIxxNlyS_wQf9z5KWnaVcqJER8Sp"
              alt="Cafe Interior"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One Table, <span className="text-[var(--pastel-blue)]"> Many Stories.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
            "I'm Hayrettin Kaya, a proud father of two wonderful children and husband to a wonderful wife. Born and raised in Weidenau, in the heart of the Siegerland region, this region is much more than just a place for me—it's home, inspiration, and commitment all at once. The landscape, the people, and the spirit of Siegen not only shape my life, but also the heart of our café. Because one thing is certain: a Siegen resident who places their trust in us will remain loyal, just as we promise our guests. FRØ, the Danish word for seed represents a new beginning and the growth of something valuable. With our café, we are planting this seed in Siegen. We are creating a place where people meet, community thrives, and stories emerge, just as nature grows its forests: powerful, persistent, and deeply rooted. Our concept is clear and honest: We stand for down-to-earth, handmade quality that you can taste. We not only offer a broad, varied breakfast menu that makes the most important meal of the day a delight, but also homemade ice cream, prepared with the finest ingredients and lots of love. Like a seed that grows into a plant, our coffee begins with the world's finest green coffee beans, and we roast it ourselves to guarantee our guests the perfect taste. We love nature, we love people, and we love good food and drinks created with respect for the region and its producers. That's why we work closely with regional partners from Siegerland and North Rhine-Westphalia, who supply us with the freshest and best products. Our motto is: One Table. Many Stories. We are excited to see what stories will emerge at our tables: stories of encounters, friendship, and enjoyment. FRØ is more than just a café, it is a home for those seeking authenticity and community."
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-gray-100 mt-10 md:mt-16 p-10 md:p-16 bg-[#fafaf8]">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {valuesData.map(({ title, description }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-sm text-gray-600 leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
