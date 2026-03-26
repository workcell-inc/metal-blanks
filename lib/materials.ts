export interface MaterialHub {
  name: string
  slug: string
  tagline: string
  intro: string
  priceLabel: string
  forms: { name: string; slug: string }[]
  grades: {
    grade: string
    type: string
    commonUse: string
    typicalForm: string
  }[]
  faqs: { question: string; answer: string }[]
}

export const materials: MaterialHub[] = [
  {
    name: "Steel",
    slug: "steel",
    tagline:
      "Hot rolled, cold rolled, and tool steel blanks for every application",
    intro:
      "Steel blanks are the foundation of modern metalworking, offering unmatched versatility across structural, industrial, and artisan applications. Whether you need hot rolled plate for heavy fabrication, cold rolled sheet for precise enclosures, or high carbon bar stock for knife making, steel blanks deliver the strength and workability that professionals demand. Our inventory spans mild steels like A36 and 1018 for general fabrication and welding, through high carbon grades such as 1084 favored by bladesmiths, to premium alloy and tool steels including 4140, D2, and O1 for demanding tooling and wear applications. Every blank is cut to order with tight tolerances, ensuring minimal waste and faster time to finished parts. From hobbyist workshops to production floors, steel blanks remain the most cost-effective starting point for machined components, welded assemblies, and heat-treated tools.",
    priceLabel: "Steel HRC",
    forms: [
      { name: "Sheet Blanks", slug: "sheet" },
      { name: "Plate Blanks", slug: "plate" },
      { name: "Bar Stock", slug: "bar" },
      { name: "Disc Blanks", slug: "disc" },
      { name: "Knife Blade Blanks", slug: "knife-blade" },
      { name: "Laser Cut Blanks", slug: "laser-cut" },
    ],
    grades: [
      {
        grade: "A36",
        type: "Structural",
        commonUse: "General fabrication",
        typicalForm: "Plate",
      },
      {
        grade: "1018",
        type: "Low Carbon",
        commonUse: "Machining & welding",
        typicalForm: "Bar",
      },
      {
        grade: "1084",
        type: "High Carbon",
        commonUse: "Knife making",
        typicalForm: "Bar",
      },
      {
        grade: "4140",
        type: "Alloy Steel",
        commonUse: "High-stress parts",
        typicalForm: "Bar",
      },
      {
        grade: "D2",
        type: "Tool Steel",
        commonUse: "Dies & cutting tools",
        typicalForm: "Bar",
      },
      {
        grade: "O1",
        type: "Tool Steel",
        commonUse: "Knife making & tooling",
        typicalForm: "Bar",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between hot rolled and cold rolled steel blanks?",
        answer:
          "Hot rolled steel is formed at high temperatures above 1,700\u00B0F, resulting in a rough mill scale surface and looser dimensional tolerances. Cold rolled steel undergoes additional processing at room temperature, producing a smoother finish, tighter tolerances, and slightly higher strength. For applications requiring precise dimensions and a clean surface, such as brackets or enclosures, cold rolled is the better choice. Hot rolled is more economical for structural work where surface finish is less critical.",
      },
      {
        question: "Which steel grade is best for knife making?",
        answer:
          "1084 high carbon steel is widely regarded as the best starting point for knife makers due to its simple heat treatment and excellent edge-holding properties. It achieves a working hardness of 60-62 HRC with a straightforward quench-and-temper process that does not require specialized equipment. For makers seeking higher wear resistance, O1 tool steel offers fine grain structure and predictable hardening, while D2 provides semi-stainless properties and superior edge retention at the cost of more difficult grinding.",
      },
      {
        question: "Can I weld A36 steel blanks without preheating?",
        answer:
          "Yes, A36 is one of the most weldable structural steels available and typically does not require preheating for material under one inch thick. Its low carbon content of approximately 0.26% makes it compatible with all common welding processes including MIG, TIG, and stick. For thicker sections above one inch or when welding in cold ambient conditions, a preheat of 50-100\u00B0F is recommended to reduce the risk of hydrogen-induced cracking.",
      },
      {
        question: "What tolerances can I expect on steel blanks?",
        answer:
          "Standard mill tolerances for hot rolled steel plate typically run plus or minus 0.01 to 0.03 inches on thickness depending on the size. Cold rolled sheet offers tighter control, usually within plus or minus 0.005 inches. Laser-cut blanks provide the most precise dimensions, with edge tolerances of plus or minus 0.005 inches and minimal kerf taper. If your project demands tolerances beyond standard mill specs, laser-cut or precision-ground blanks are the recommended option.",
      },
    ],
  },
  {
    name: "Aluminum",
    slug: "aluminum",
    tagline:
      "Lightweight, corrosion-resistant aluminum blanks for precision work",
    intro:
      "Aluminum blanks combine exceptional strength-to-weight ratio with natural corrosion resistance, making them indispensable for aerospace prototyping, CNC machining, marine hardware, and consumer product fabrication. Our aluminum blank inventory covers the most popular alloys in the industry, from the versatile 6061-T6 that machines beautifully and anodizes with consistent color, to marine-grade 5052-H32 that resists saltwater corrosion without sacrificing formability. For high-performance structural applications, 7075-T6 delivers tensile strengths rivaling many steels at one-third the weight. Every blank is precision-cut from certified domestic mill stock with full traceability. Whether you are prototyping a single bracket on a benchtop mill or running production batches on a CNC router, aluminum blanks offer the machinability, surface finish, and dimensional consistency your projects require.",
    priceLabel: "Aluminum",
    forms: [
      { name: "Sheet Blanks", slug: "sheet" },
      { name: "Plate Blanks", slug: "plate" },
      { name: "Bar Stock", slug: "bar" },
      { name: "Disc Blanks", slug: "disc" },
      { name: "Tube Stock", slug: "tube" },
      { name: "Laser Cut Blanks", slug: "laser-cut" },
    ],
    grades: [
      {
        grade: "6061-T6",
        type: "General Purpose",
        commonUse: "CNC machining & aerospace",
        typicalForm: "Sheet",
      },
      {
        grade: "5052-H32",
        type: "Marine Grade",
        commonUse: "Marine & chemical",
        typicalForm: "Sheet",
      },
      {
        grade: "7075-T6",
        type: "Aerospace",
        commonUse: "High-strength applications",
        typicalForm: "Bar",
      },
      {
        grade: "3003-H14",
        type: "Forming Grade",
        commonUse: "Formed parts",
        typicalForm: "Sheet",
      },
      {
        grade: "2024-T3",
        type: "Aerospace",
        commonUse: "Aircraft structures",
        typicalForm: "Sheet",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between 6061 and 7075 aluminum blanks?",
        answer:
          "6061-T6 is the most versatile aluminum alloy, offering good strength at 45 ksi tensile, excellent machinability, weldability, and anodizing response. 7075-T6 is significantly stronger at 83 ksi tensile but cannot be reliably welded and is more expensive. Choose 6061 for general machining, fixtures, and fabricated assemblies where welding is required. Choose 7075 when maximum strength-to-weight ratio is critical, such as aerospace fittings, high-performance brackets, or competition components.",
      },
      {
        question: "Can aluminum blanks be anodized?",
        answer:
          "Yes, but the alloy matters significantly. 6061 produces the most consistent and attractive anodized finish, making it the preferred choice for decorative and dyed anodizing. 5052 anodizes well with a slightly different appearance. 7075 can be anodized but tends to produce a yellowish tint. 2024 is the most difficult to anodize evenly and is generally not recommended for decorative finishes. For best results, specify 6061-T6 blanks when anodizing is part of your finishing plan.",
      },
      {
        question: "Which aluminum grade is best for marine applications?",
        answer:
          "5052-H32 is the standard choice for marine environments due to its outstanding resistance to saltwater corrosion. Unlike 6061, which can suffer from intergranular corrosion when continuously exposed to seawater, 5052 maintains its integrity in harsh marine conditions. It also offers excellent formability for boat components, tanks, and marine hardware. For structural marine parts that need higher strength, 5083 is another option, though 5052 covers most marine fabrication needs at a lower cost.",
      },
      {
        question:
          "What thicknesses are available for aluminum sheet blanks?",
        answer:
          "Aluminum sheet blanks are commonly available from 0.025 inches up through 0.250 inches, which is the standard boundary between sheet and plate. Plate thicknesses continue from 0.250 inches through 4 inches or more. For CNC machining, the most popular thicknesses are 0.250, 0.375, 0.500, and 0.750 inches in 6061-T6. Thinner gauges like 0.040 and 0.063 inches are popular for enclosures, panels, and formed parts.",
      },
    ],
  },
  {
    name: "Copper",
    slug: "copper",
    tagline:
      "High-conductivity copper blanks for electrical and thermal applications",
    intro:
      "Copper blanks deliver unmatched electrical and thermal conductivity, making them essential for busbar fabrication, heat sink manufacturing, electrical contacts, and grounding systems. Our copper blank selection features C110 ETP copper, the industry standard for electrical applications with 101% IACS conductivity, alongside C101 OFE copper for ultra-high-purity electronics and vacuum applications, and C122 DHP copper for plumbing, HVAC, and brazed assemblies. Copper's natural antimicrobial properties also make it increasingly popular for architectural hardware and touch surfaces. Each blank is sheared or sawn from certified mill stock with protective packaging to preserve the clean surface finish that copper applications demand. Whether you are fabricating custom busbars for a power distribution panel, machining heat exchangers, or crafting decorative hardware, our copper blanks provide the conductivity, workability, and consistency required for professional results.",
    priceLabel: "Copper",
    forms: [
      { name: "Sheet Blanks", slug: "sheet" },
      { name: "Plate Blanks", slug: "plate" },
      { name: "Bar Stock", slug: "bar" },
      { name: "Disc Blanks", slug: "disc" },
      { name: "Strip Stock", slug: "strip" },
    ],
    grades: [
      {
        grade: "C110",
        type: "ETP Copper",
        commonUse: "Electrical & busbar",
        typicalForm: "Sheet",
      },
      {
        grade: "C101",
        type: "OFE Copper",
        commonUse: "Electronics & vacuum",
        typicalForm: "Sheet",
      },
      {
        grade: "C122",
        type: "DHP Copper",
        commonUse: "Plumbing & HVAC",
        typicalForm: "Sheet",
      },
    ],
    faqs: [
      {
        question: "What is the difference between C110 and C101 copper?",
        answer:
          "C110 ETP (Electrolytic Tough Pitch) copper contains a minimum 99.9% copper with small amounts of oxygen, providing 101% IACS electrical conductivity at a reasonable price. C101 OFE (Oxygen-Free Electronic) copper is refined to 99.99% purity with virtually no oxygen content, achieving 101% IACS conductivity with superior performance in vacuum and high-frequency applications. For standard busbars and electrical work, C110 is the cost-effective choice. C101 is specified when oxygen embrittlement during brazing or outgassing in vacuum systems would be a concern.",
      },
      {
        question: "Can copper blanks be soldered and brazed?",
        answer:
          "Yes, copper is one of the easiest metals to solder and braze. Standard tin-lead and lead-free solders wet copper surfaces readily with appropriate flux. For higher-strength joints, silver brazing with BAg alloys produces excellent results. C122 DHP copper is specifically designed for brazed assemblies because its phosphorus content acts as a deoxidizer, allowing brazing without flux in many applications. C110 ETP copper should be brazed with care, as its oxygen content can cause embrittlement at brazing temperatures if a reducing atmosphere is present.",
      },
      {
        question: "How do I prevent copper blanks from tarnishing?",
        answer:
          "Copper naturally develops a patina when exposed to air and moisture. To prevent tarnishing during storage, keep blanks in their original sealed packaging until ready for use, and store them in a dry environment. For finished parts, clear lacquer coatings, Renaissance wax, or benzotriazole-based tarnish inhibitors provide effective long-term protection. If blanks have already tarnished, a mild acid solution such as diluted citric acid or a commercial copper cleaner will restore the bright finish before final processing.",
      },
      {
        question: "What is copper used for in electrical applications?",
        answer:
          "Copper blanks serve as the starting material for custom busbars that distribute power in electrical panels, switchgear, and battery systems. They are also machined into electrical contacts, terminal lugs, grounding plates, and heat sinks for power electronics. The combination of high conductivity, easy solderability, and mechanical workability makes copper the default material for any application where electrical or thermal performance is paramount. Aluminum is sometimes substituted for weight savings, but copper remains the benchmark for conductivity-critical designs.",
      },
    ],
  },
  {
    name: "Brass",
    slug: "brass",
    tagline: "Machinable brass blanks for decorative and industrial use",
    intro:
      "Brass blanks offer an outstanding combination of machinability, corrosion resistance, and visual appeal that few other metals can match. As a copper-zinc alloy, brass machines faster than steel or aluminum with excellent chip formation, making it the material of choice for screw machine products, precision fittings, and decorative hardware. Our brass blank selection includes C260 cartridge brass for stamping and forming, C360 free-machining brass for high-speed screw machine work and CNC turning, and C230 red brass for plumbing components and decorative applications where a warmer color is desired. Brass does not spark when struck, making it essential for tools used in explosive environments. Every blank is cut from certified mill stock with clean edges and consistent alloy composition. From engraving plates and instrument components to valve bodies and architectural trim, brass blanks deliver the workability and finish quality your projects demand.",
    priceLabel: "Brass",
    forms: [
      { name: "Sheet Blanks", slug: "sheet" },
      { name: "Plate Blanks", slug: "plate" },
      { name: "Bar Stock", slug: "bar" },
      { name: "Disc Blanks", slug: "disc" },
      { name: "Strip Stock", slug: "strip" },
    ],
    grades: [
      {
        grade: "C260",
        type: "Cartridge Brass",
        commonUse: "Stamping & hardware",
        typicalForm: "Sheet",
      },
      {
        grade: "C360",
        type: "Free Machining",
        commonUse: "Screw machine parts",
        typicalForm: "Bar",
      },
      {
        grade: "C230",
        type: "Red Brass",
        commonUse: "Plumbing & decorative",
        typicalForm: "Sheet",
      },
    ],
    faqs: [
      {
        question: "What makes C360 brass so easy to machine?",
        answer:
          "C360, also known as free-machining brass, contains approximately 3% lead which acts as a chip breaker during cutting operations. This lead content allows the material to form small, easily evacuated chips rather than long stringy ones, enabling higher cutting speeds and longer tool life. C360 achieves a machinability rating of 100, which is actually the benchmark against which all other copper alloys are measured. It is the default choice for any turned, drilled, or tapped brass component where maximum production speed is required.",
      },
      {
        question: "Is brass suitable for outdoor applications?",
        answer:
          "Yes, brass develops a natural protective patina when exposed to the elements that prevents further corrosion, similar to copper. This makes it excellent for marine hardware, architectural fixtures, and outdoor decorative elements. C230 red brass has the highest copper content of the common alloys and offers the best corrosion resistance for outdoor use. If you want to maintain the polished appearance, regular application of a protective lacquer or wax coating will prevent the patina from forming while still benefiting from the underlying corrosion resistance.",
      },
      {
        question: "Can brass blanks be soldered?",
        answer:
          "Brass is one of the easiest metals to solder, accepting both soft solder and silver braze alloys with standard rosin or acid fluxes. For decorative and jewelry work, soft soldering with tin-silver alloys produces clean, strong joints. For plumbing and higher-strength applications, silver brazing provides joints that exceed the strength of the base metal. The key is to ensure the surface is clean and free of oxidation before soldering. A light abrasion with fine sandpaper followed by flux application will produce reliable, well-wetted solder joints.",
      },
      {
        question:
          "What is the difference between yellow brass and red brass?",
        answer:
          "Yellow brass alloys like C260 contain approximately 70% copper and 30% zinc, giving them a bright golden color, high strength, and excellent formability for stamping and drawing operations. Red brass alloys like C230 contain about 85% copper and 15% zinc, producing a warmer reddish-gold tone with superior corrosion resistance and better resistance to dezincification. Red brass is preferred for plumbing, marine fittings, and decorative applications where corrosion resistance is critical. Yellow brass is the more economical option for general hardware, engraving plates, and formed parts.",
      },
    ],
  },
  {
    name: "Stainless Steel",
    slug: "stainless-steel",
    tagline:
      "Corrosion-resistant stainless steel blanks for demanding environments",
    intro:
      "Stainless steel blanks combine the structural strength of carbon steel with exceptional corrosion resistance, making them indispensable in food processing, medical devices, marine hardware, chemical handling, and architectural applications. Our stainless steel blank inventory spans the most widely specified grades in the industry. Type 304, the workhorse austenitic grade, covers everything from commercial kitchen equipment to chemical tanks. Type 316 adds molybdenum for superior chloride resistance in marine and pharmaceutical environments. For applications requiring hardness and wear resistance, 410 martensitic stainless can be heat treated to useful hardness levels. Precipitation-hardened 17-4 PH delivers aerospace-grade strength without sacrificing corrosion performance. Each blank is cut from certified domestic or prime import mill stock with full material traceability. From restaurant equipment to oil platform components, stainless steel blanks provide the performance and longevity that critical applications demand.",
    priceLabel: "Stainless Steel",
    forms: [
      { name: "Sheet Blanks", slug: "sheet" },
      { name: "Plate Blanks", slug: "plate" },
      { name: "Bar Stock", slug: "bar" },
      { name: "Disc Blanks", slug: "disc" },
      { name: "Tube Stock", slug: "tube" },
      { name: "Laser Cut Blanks", slug: "laser-cut" },
    ],
    grades: [
      {
        grade: "304",
        type: "Austenitic",
        commonUse: "Food & chemical processing",
        typicalForm: "Sheet",
      },
      {
        grade: "316",
        type: "Marine Grade",
        commonUse: "Marine & medical",
        typicalForm: "Sheet",
      },
      {
        grade: "410",
        type: "Martensitic",
        commonUse: "Cutlery & valves",
        typicalForm: "Bar",
      },
      {
        grade: "17-4 PH",
        type: "Precipitation Hardened",
        commonUse: "Aerospace & oil gas",
        typicalForm: "Bar",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between 304 and 316 stainless steel?",
        answer:
          "Both 304 and 316 are austenitic stainless steels with similar appearance and forming characteristics, but 316 contains 2-3% molybdenum which dramatically improves resistance to chloride pitting and crevice corrosion. For indoor food service, general chemical processing, and architectural trim, 304 provides excellent performance at lower cost. When the application involves saltwater exposure, chlorinated cleaning agents, pharmaceutical processing, or coastal environments, 316 is the grade to specify. The price premium for 316 is typically 20-30% over 304.",
      },
      {
        question: "Can stainless steel blanks be heat treated?",
        answer:
          "It depends on the grade. Austenitic grades like 304 and 316 cannot be hardened by heat treatment; they can only be strengthened through cold working. Martensitic grades like 410 can be hardened to approximately 40 HRC through austenitizing and tempering, making them suitable for cutlery and wear applications. 17-4 PH achieves its high strength through a precipitation hardening treatment at relatively low temperatures of 900-1150\u00B0F, which minimizes distortion and scaling compared to conventional hardening.",
      },
      {
        question: "Is stainless steel difficult to machine?",
        answer:
          "Stainless steel requires more attention than carbon steel or aluminum but is readily machinable with proper technique. The key challenges are work hardening, which means you must maintain positive feed rates and avoid dwelling, and heat generation, which requires adequate coolant flow. Use sharp carbide tooling with positive rake geometry, reduce cutting speeds by about 40% compared to mild steel, and maintain steady chip load. 304 and 316 have similar machinability ratings around 45% of B1112 free-machining steel. The free-machining variant 303 is available when maximum machinability is needed.",
      },
      {
        question: "Will stainless steel blanks rust?",
        answer:
          "Stainless steel resists rusting far better than carbon steel but is not completely immune to corrosion. The chromium content forms a passive oxide layer that self-repairs when damaged, but this protection can break down in certain conditions. Chloride exposure, contamination from carbon steel particles, crevice conditions, and heat tint from welding can all initiate corrosion on stainless surfaces. Proper grade selection for the environment, passivation treatment after fabrication, and avoiding contact with carbon steel tools will keep stainless blanks performing as intended for decades.",
      },
    ],
  },
  {
    name: "Titanium",
    slug: "titanium",
    tagline:
      "High-strength, lightweight titanium blanks for aerospace and medical",
    intro:
      "Titanium blanks represent the pinnacle of performance metal, offering the highest strength-to-weight ratio of any structural metal combined with exceptional corrosion resistance and full biocompatibility. Our titanium blank selection covers the grades most demanded by aerospace, medical, marine, and chemical processing industries. Grade 2 commercially pure titanium provides outstanding corrosion resistance for chemical tanks, heat exchangers, and marine components. Grade 5 Ti-6Al-4V, the aerospace workhorse, delivers tensile strengths exceeding 130 ksi at roughly 60% the weight of steel. Grade 23 Ti-6Al-4V ELI meets the stringent purity requirements for surgical implants and medical devices. Titanium is challenging to machine but rewards proper technique with components that outlast steel and aluminum alternatives by orders of magnitude in corrosive and cyclic-load environments. Every blank ships with full material certification and heat lot traceability.",
    priceLabel: "Titanium",
    forms: [
      { name: "Sheet Blanks", slug: "sheet" },
      { name: "Plate Blanks", slug: "plate" },
      { name: "Bar Stock", slug: "bar" },
      { name: "Disc Blanks", slug: "disc" },
    ],
    grades: [
      {
        grade: "Grade 2",
        type: "CP Titanium",
        commonUse: "Chemical & marine",
        typicalForm: "Sheet",
      },
      {
        grade: "Grade 5 (Ti-6Al-4V)",
        type: "Alpha-Beta Alloy",
        commonUse: "Aerospace & medical",
        typicalForm: "Bar",
      },
      {
        grade: "Grade 23 (Ti-6Al-4V ELI)",
        type: "Medical Grade",
        commonUse: "Implants & surgical",
        typicalForm: "Bar",
      },
    ],
    faqs: [
      {
        question: "Why is titanium so expensive compared to steel?",
        answer:
          "Titanium's cost reflects its complex extraction and processing rather than raw scarcity. The Kroll process used to convert titanium ore into usable metal is energy-intensive and batch-oriented, unlike the continuous processes used for steel. Titanium also requires vacuum or inert atmosphere melting, specialized forging equipment, and carbide tooling for machining. The raw material cost is roughly 10-15 times that of steel, but the total part cost difference narrows when you factor in titanium's longer service life, lower maintenance requirements, and weight savings that reduce costs elsewhere in the system.",
      },
      {
        question:
          "What is the difference between Grade 2 and Grade 5 titanium?",
        answer:
          "Grade 2 is commercially pure titanium with moderate strength around 50 ksi yield and exceptional corrosion resistance, particularly against reducing acids and chloride environments. Grade 5 Ti-6Al-4V is an alpha-beta alloy containing 6% aluminum and 4% vanadium, boosting yield strength to approximately 120 ksi while maintaining good corrosion resistance. Choose Grade 2 when corrosion resistance is the primary concern and moderate strength is adequate, such as chemical process equipment. Choose Grade 5 when high strength-to-weight ratio is critical, as in aerospace structures and high-performance sporting goods.",
      },
      {
        question: "Is titanium difficult to machine?",
        answer:
          "Titanium requires careful technique but is not as difficult as its reputation suggests. The main challenges are its low thermal conductivity, which concentrates heat at the cutting edge, and its tendency to gall and seize on tooling. Success requires sharp carbide or ceramic inserts with positive rake angles, lower cutting speeds of 100-200 SFM, aggressive chip loads to avoid work hardening, and abundant high-pressure coolant directed at the cutting zone. Climb milling is strongly preferred. With proper setup, titanium machines predictably and produces excellent surface finishes.",
      },
      {
        question: "Can titanium blanks be welded?",
        answer:
          "Yes, titanium welds beautifully but requires complete shielding from atmospheric contamination. TIG welding with pure argon shielding is the standard process, and both the weld puddle and the back side of the joint must be protected with trailing shields and backing gas until the metal cools below approximately 800\u00B0F. Any blue, purple, or white discoloration indicates oxygen contamination that compromises joint integrity. Proper titanium welds appear bright silver. Grade 2 and Grade 5 are both readily weldable with matching filler wire, though Grade 5 joints should be stress-relieved after welding for optimal fatigue life.",
      },
    ],
  },
]

export function getMaterialBySlug(slug: string): MaterialHub | undefined {
  return materials.find((m) => m.slug === slug)
}
