/**
 * DISOM — Jharkhand Tribal Digital Museum
 * Marketplace Catalog Engine & Filtering (ES6+)
 * 29 Prototype Catalogue Products with Real Photography & Multi-Angle Galleries
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Only run if marketplace elements exist on the page
  const productsGrid = document.querySelector('#productsGrid');
  if (!productsGrid) return;

  /* ==========================================================================
     1. COMPLETE 29-ITEM PROTOTYPE CATALOG DATASET WITH REAL PHOTOGRAPHY
     ========================================================================== */
  const PRODUCTS = [
    {
      id: 'disom-01',
      name: 'Sacred Hand-Forged Hansuli Torque Choker',
      price: 1499,
      category: 'Jewellery & Ornaments',
      community: 'Santhal',
      shortDesc: 'Solid collar torque featuring traditional ribbed terminal ends and protective symbolic carvings.',
      fullDesc: 'The Hansuli is a distinguished traditional choker worn by indigenous women across Chotanagpur during agricultural festivities and assemblies. Forged with heavy-gauge white bell metal, featuring intricate geometric chasing along the collar arc.',
      material: 'White Bell Metal (Traditional Alloy)',
      dimensions: 'Diameter 13.5 cm, Width 1.8 cm',
      provenance: 'East Singhbhum Artisan Collective, Jharkhand',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-silver-hansuli-set.jpg',
      gallery: [
        'assets/products/prod-silver-hansuli-set.jpg',
        'assets/products/prod-silver-hansuli-set-1.jpg',
        'assets/products/prod-silver-hansuli-set-2.jpg',
        'assets/products/prod-silver-hansuli-set-3.jpg'
      ]
    },
    {
      id: 'disom-02',
      name: 'Multi-Coin Sikka Mala Necklace',
      price: 1350,
      category: 'Jewellery & Ornaments',
      community: 'Ho',
      shortDesc: 'Multi-layered ceremonial necklace strung with embossed historical motifs and braided cotton thread.',
      fullDesc: 'Reflecting generations of plateau adornment traditions, the Sikka Mala integrates embossed metallic discs strung on reinforced dark cotton cord, worn during Mage Parab ceremonies.',
      material: 'Embossed Nickel-Silver & Natural Cotton Cord',
      dimensions: 'Length 48 cm, Disc diameter 2.4 cm',
      provenance: 'West Singhbhum Cultural Craft Group',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-sikka-mala.jpg',
      gallery: [
        'assets/products/prod-sikka-mala.jpg',
        'assets/products/prod-sikka-mala-1.jpg',
        'assets/products/prod-sikka-mala-2.jpg',
        'assets/products/prod-sikka-mala-3.jpg'
      ]
    },
    {
      id: 'disom-03',
      name: 'Crescent Choker with Chandbali Earrings',
      price: 1290,
      category: 'Jewellery & Accessories',
      community: 'Munda',
      shortDesc: 'Handcrafted crescent neckpiece with matching floral-crescent drop earrings for festive wear.',
      fullDesc: 'Inspired by lunar motifs honored in indigenous forest cosmologies, this set includes a filigree crescent choker with matching chandbali drop earrings with ghungroo bells.',
      material: 'Brass-Silver Alloy with Antique Polish',
      dimensions: 'Choker 14 cm, Earrings 5.2 cm drop',
      provenance: 'Khunti Metal Smiths Workshop',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-crescent-choker-set.jpg',
      gallery: [
        'assets/products/prod-crescent-choker-set.jpg',
        'assets/products/prod-crescent-choker-set-1.jpg',
        'assets/products/prod-crescent-choker-set-3.jpg',
        'assets/products/prod-crescent-choker-set-4.jpg',
        'assets/products/prod-crescent-choker-set-5.jpg'
      ]
    },
    {
      id: 'disom-04',
      name: 'Mirror-Work Embroidered Wrist Cuff',
      price: 990,
      category: 'Jewellery & Accessories',
      community: 'Oraon',
      shortDesc: 'Geometric needlework cuff set with reflective mica-style mirrors and earthen thread borders.',
      fullDesc: 'A celebratory wrist ornament combining hand-dyed cotton canvas, dense geometric back-stitch needlework, and reflective mirrors that catch the glow of festival evening fires.',
      material: 'Handspun Cotton Canvas, Thread, Reflective Glass',
      dimensions: '19 cm x 5.5 cm with adjustable tie-up',
      provenance: 'Gumla Women Weavers Cooperative',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-cuff-watch.jpg',
      gallery: [
        'assets/products/prod-cuff-watch.jpg',
        'assets/products/prod-cuff-watch-1.jpg',
        'assets/products/prod-cuff-watch-2.jpg',
        'assets/products/prod-cuff-watch-3.jpg',
        'assets/products/prod-cuff-watch-4.jpg'
      ]
    },
    {
      id: 'disom-05',
      name: 'Conical Karanphool Ear Studs',
      price: 680,
      category: 'Jewellery & Ornaments',
      community: 'Santhal',
      shortDesc: 'Conical flower-motif ear ornaments adorned with delicate micro-bead wirework.',
      fullDesc: 'Shaped like the auspicious Mahua bud, Karanphool ear studs are worn during Baha and Sohrai celebrations. Hand-soldered with meticulous attention to floral symmetry.',
      material: 'German Silver with protective patina',
      dimensions: 'Diameter 2.8 cm',
      provenance: 'Dumka Metalcraft Cluster',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-tarpat-earrings.jpg',
      gallery: [
        'assets/products/prod-tarpat-earrings.jpg',
        'assets/products/prod-tarpat-earrings-1.jpg',
        'assets/products/prod-tarpat-earrings-2.jpg'
      ]
    },
    {
      id: 'disom-06',
      name: 'Aarsi Shield Ring',
      price: 620,
      category: 'Jewellery & Ornaments',
      community: 'Ho',
      shortDesc: 'Statement thumb ring with central polished reflective dome and sunburst border detailing.',
      fullDesc: 'Traditionally worn on the thumb or index finger, the Aarsi ring functioned both as a personal adornment and ceremonial reflection piece in traditional bridal assemblies.',
      material: 'Cast Bell Metal',
      dimensions: 'Shield diameter 3.2 cm, Adjustable shank',
      provenance: 'Chaibasa Artisan Circle',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-aarsi-ring.jpg',
      gallery: [
        'assets/products/prod-aarsi-ring.jpg',
        'assets/products/prod-aarsi-ring-1.jpg',
        'assets/products/prod-aarsi-ring-2.jpg',
        'assets/products/prod-aarsi-ring-3.jpg',
        'assets/products/prod-aarsi-ring-4.jpg'
      ]
    },
    {
      id: 'disom-07',
      name: 'Heavy Painjana Anklets',
      price: 1320,
      category: 'Jewellery & Ornaments',
      community: 'Munda',
      shortDesc: 'Traditional cast anklets with gentle acoustic resonance for ritual dance steps.',
      fullDesc: 'Painjana anklets produce a balanced melodic tone that accompanies folk dance rhythms during harvest festivals. Cast in durable bell metal with hinged screw pin fastenings.',
      material: 'Hollow-cast bell metal with acoustic balls',
      dimensions: 'Internal diameter 8 cm, Width 1.4 cm',
      provenance: 'Tamar Region Brass Guild',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-banki-painjana.jpg',
      gallery: [
        'assets/products/prod-banki-painjana.jpg',
        'assets/products/prod-banki-painjana-1.jpg',
        'assets/products/prod-banki-painjana-2.jpg',
        'assets/products/prod-banki-painjana-3.jpg',
        'assets/products/prod-banki-painjana-4.jpg',
        'assets/products/prod-banki-painjana-5.jpg'
      ]
    },
    {
      id: 'disom-08',
      name: 'Twisted Rope Silver Bangles',
      price: 790,
      category: 'Jewellery & Ornaments',
      community: 'Oraon',
      shortDesc: 'Pair of intertwined rope-patterned bangles with carved chevron terminal accents.',
      fullDesc: 'Worn in pairs or multiples, these bangles feature twisted cord relief inspired by forest creepers and traditional rope making, symbolizing community solidarity.',
      material: 'White Metal Alloy',
      dimensions: 'Inner diameter 6.2 cm (Size 2.6)',
      provenance: 'Lohardaga Guild',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-twisted-bangles.jpg',
      gallery: ['assets/products/prod-twisted-bangles.jpg']
    },
    {
      id: 'disom-09',
      name: 'Carved Terminal-Head Kadas',
      price: 1280,
      category: 'Jewellery & Ornaments',
      community: 'Kharia',
      shortDesc: 'Sturdy open-cuff bracelet featuring stylized animal guardian heads at both ends.',
      fullDesc: 'Hand-chased open bracelet depicting tiger or deer terminal motifs representing woodland guardian spirits. Sturdy profile with deeply textured body bands.',
      material: 'Cast Bronze & White Metal',
      dimensions: 'Thickness 1 cm, Flexible open-fit cuff',
      provenance: 'Simdega Forest Artisans',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-carved-bala-kadas.jpg',
      gallery: [
        'assets/products/prod-carved-bala-kadas.jpg',
        'assets/products/prod-carved-bala-kadas-1.jpg',
        'assets/products/prod-carved-bala-kadas-2.jpg',
        'assets/products/prod-carved-bala-kadas-3.jpg'
      ]
    },
    {
      id: 'disom-10',
      name: 'Lac-Core Ghungroo Kada',
      price: 850,
      category: 'Jewellery & Accessories',
      community: 'Mahli',
      shortDesc: 'Resin-core wrist bracelet enveloped with rhythmic miniature brass ghungroo bells.',
      fullDesc: 'Utilizing natural lac resin collected sustainably from Palash trees, this kada is overlaid with miniature brass bells that chime subtly with everyday movements.',
      material: 'Natural Lac Resin Core & Brass Ghungroos',
      dimensions: 'Width 2.2 cm, Diameter 6.5 cm',
      provenance: 'Bundu Forest Resin Craft Guild',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-lac-kada.jpg',
      gallery: ['assets/products/prod-lac-kada.jpg']
    },
    {
      id: 'disom-11',
      name: 'Multi-Row Beaded Cuff',
      price: 890,
      category: 'Jewellery & Accessories',
      community: 'Bhumij',
      shortDesc: 'Vibrant loom-woven seed bead cuff displaying sacred geometric diamond patterns.',
      fullDesc: 'Woven with high-durability cotton warp and glass seed beads, featuring traditional diamond and water-wave emblems that signify life-giving monsoon streams.',
      material: 'Glass Seed Beads & Handspun Cotton Warp',
      dimensions: '18 cm x 4.2 cm with brass loop clasp',
      provenance: 'Potka Tribal Craft Collective',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-beaded-kada.jpg',
      gallery: ['assets/products/prod-beaded-kada.jpg']
    },
    {
      id: 'disom-12',
      name: 'Filigree Floral Bajuband',
      price: 880,
      category: 'Jewellery & Ornaments',
      community: 'Santhal',
      shortDesc: 'Flexible upper-arm band featuring filigree floral rosette and tasseled cords.',
      fullDesc: 'An upper-arm ornament (Bajuband) worn during wedding ceremonies and community dances. The central rosette echoes the open petals of the Sal flower.',
      material: 'Fine White Brass with Braided Cord Ties',
      dimensions: 'Central motif 6 cm x 4 cm',
      provenance: 'Santhal Parganas Artisan Network',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-floral-bajuband.jpg',
      gallery: [
        'assets/products/prod-floral-bajuband.jpg',
        'assets/products/prod-floral-bajuband-1.jpg',
        'assets/products/prod-floral-bajuband-2.jpg',
        'assets/products/prod-floral-bajuband-3.jpg',
        'assets/products/prod-floral-bajuband-4.jpg'
      ]
    },
    {
      id: 'disom-13',
      name: 'Filigree Hair Pins & Brooches',
      price: 540,
      category: 'Jewellery & Accessories',
      community: 'Munda',
      shortDesc: 'Set of two decorative hair pins with coiled wirework and dangling leaf charms.',
      fullDesc: 'Fastened into traditional hair buns (jurā) during festive dances, these filigree pins hold blossoms securely while swaying rhythmically with movement.',
      material: 'White Metal Alloy',
      dimensions: 'Length 11.5 cm each',
      provenance: 'Torpa Village Crafts',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-filigree-hairpins.jpg',
      gallery: [
        'assets/products/prod-filigree-hairpins.jpg',
        'assets/products/prod-filigree-hairpins-1.jpg',
        'assets/products/prod-filigree-hairpins-2.jpg',
        'assets/products/prod-filigree-hairpins-3.jpg'
      ]
    },
    {
      id: 'disom-14',
      name: 'Baha Festival Hair Pom-Poms',
      price: 520,
      category: 'Jewellery & Accessories',
      community: 'Santhal',
      shortDesc: 'Hand-wound crimson and marigold wool tassels with miniature brass bell accents.',
      fullDesc: 'Worn by women dancers during the springtime Baha Parab to welcome new Sal blossoms. Crafted with vibrant naturally-dyed yarn and small musical chiming accents.',
      material: 'Spun Wool, Cotton & Brass Miniature Bells',
      dimensions: 'Pair, Drop length 16 cm',
      provenance: 'Pakur Community Workshop',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-baha-kalgi.jpg',
      gallery: [
        'assets/products/prod-baha-kalgi.jpg',
        'assets/products/prod-baha-kalgi-1.jpg',
        'assets/products/prod-baha-kalgi-2.jpg'
      ]
    },
    {
      id: 'disom-15',
      name: 'Lal-Paad Handloom Cotton Saree',
      price: 1399,
      category: 'Textiles & Apparel',
      community: 'Santhal',
      shortDesc: 'Iconic unbleached cotton saree with solid vermilion red borders and temple pallu.',
      fullDesc: 'The quintessential Santhali handloom weave characterized by natural unbleached ecru cotton body, bold madder-red side borders (Lal-Paad), and geometric arrow temple borders.',
      material: '100% Organic Handspun Cotton',
      dimensions: 'Length 5.5 meters x Width 1.15 meters',
      provenance: 'Ghatshila Weavers Handloom Society',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-lal-paad-saree.jpg',
      gallery: [
        'assets/products/prod-lal-paad-saree.jpg',
        'assets/products/prod-lal-paad-saree-1.jpg',
        'assets/products/prod-lal-paad-saree-2.jpg'
      ]
    },
    {
      id: 'disom-16',
      name: 'Hara-Paad Handwoven Cotton Saree',
      price: 1420,
      category: 'Textiles & Apparel',
      community: 'Oraon',
      shortDesc: 'Natural ecru cotton body with deep forest-green woven border and fish-spine motifs.',
      fullDesc: 'Celebrating the green canopy of the Chotanagpur forest, this handwoven saree incorporates dark green selvedges and geometric fish-spine (Jiyont) symbols denoting vitality.',
      material: 'Pure Handloom Cotton, Natural Dyes',
      dimensions: 'Length 5.5 meters x Width 1.15 meters',
      provenance: 'Mandar Weavers Cooperative, Ranchi',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-hara-paad-saree.jpg',
      gallery: [
        'assets/products/prod-hara-paad-saree.jpg',
        'assets/products/prod-hara-paad-saree-1.jpg',
        'assets/products/prod-hara-paad-saree-2.jpg',
        'assets/products/prod-hara-paad-saree-3.jpg',
        'assets/products/prod-hara-paad-saree-4.jpg'
      ]
    },
    {
      id: 'disom-17',
      name: 'Karam Tree of Life Handloom Saree',
      price: 1450,
      category: 'Textiles & Apparel',
      community: 'Munda',
      shortDesc: 'Special commemorative handloom saree with extra-weft Karam bough tree motifs.',
      fullDesc: 'Created in honour of the sacred Karam tree worshipped for fertility and prosperity. Woven on pit-looms with intricate extra-weft branch motifs traversing the pallu.',
      material: 'Unbleached Combed Cotton & Earth Pigments',
      dimensions: 'Length 5.5 meters, With blouse piece',
      provenance: 'Khunti Handloom Weavers Union',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-karam-tree-saree.jpg',
      gallery: [
        'assets/products/prod-karam-tree-saree.jpg',
        'assets/products/prod-karam-tree-saree-1.jpg',
        'assets/products/prod-karam-tree-saree-2.jpg',
        'assets/products/prod-karam-tree-saree-3.jpg',
        'assets/products/prod-karam-tree-saree-4.jpg'
      ]
    },
    {
      id: 'disom-18',
      name: 'Tree of Life Handwoven Sadri',
      price: 1190,
      category: 'Textiles & Apparel',
      community: 'Santhal',
      shortDesc: 'Traditional sleeveless vest with handloom body and embroidered Tree of Life emblem.',
      fullDesc: 'A cultural vest (Sadri) worn over shirts during cultural convocations and community meetings. Lined with breathable cotton and adorned with stylized hand-embroidered branches.',
      material: 'Handwoven Heavy Cotton, Wooden Coconut Buttons',
      dimensions: 'Size M / L / XL available (Chest 40-44 in)',
      provenance: 'Saraikela Tailors Collective',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-red-sadri-waistcoat.jpg',
      gallery: [
        'assets/products/prod-red-sadri-waistcoat.jpg',
        'assets/products/prod-red-sadri-waistcoat-1.jpg',
        'assets/products/prod-red-sadri-waistcoat-2.jpg',
        'assets/products/prod-red-sadri-waistcoat-3.jpg',
        'assets/products/prod-red-sadri-waistcoat-4.jpg',
        'assets/products/prod-red-sadri-waistcoat-5.jpg',
        'assets/products/prod-red-sadri-waistcoat-6.jpg'
      ]
    },
    {
      id: 'disom-19',
      name: 'Green Geometric Sadri',
      price: 1150,
      category: 'Textiles & Apparel',
      community: 'Oraon',
      shortDesc: 'Olive-forest green waistcoat featuring diamond jacquard weave and Mandarin collar.',
      fullDesc: 'Tailored from artisan-woven diamond jacquard cotton fabric in muted forest shades. Features three functional front welt pockets and hand-carved bone/wood buttons.',
      material: '100% Handloom Cotton Twill',
      dimensions: 'Standard Regular Fit (Chest 42 in)',
      provenance: 'Ranchi Artisan Stitching Hub',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-green-sadri-waistcoat.jpg',
      gallery: [
        'assets/products/prod-green-sadri-waistcoat.jpg',
        'assets/products/prod-green-sadri-waistcoat-1.jpg'
      ]
    },
    {
      id: 'disom-20',
      name: 'Johar Handwoven Cultural Scarf',
      price: 590,
      category: 'Textiles & Apparel',
      community: 'Ho',
      shortDesc: 'Greeting scarf with woven "Johar" greeting symbol and red tasseled hems.',
      fullDesc: 'Offered as a sign of mutual honor and warm hospitality across indigenous Jharkhand. Lightweight and breathable, woven with soft handspun yarn.',
      material: '100% Fine Handspun Cotton',
      dimensions: '180 cm x 35 cm',
      provenance: 'Kolhan Heritage Crafts',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-johar-welcome-scarf.jpg',
      gallery: [
        'assets/products/prod-johar-welcome-scarf.jpg',
        'assets/products/prod-johar-welcome-scarf-1.jpg',
        'assets/products/prod-johar-welcome-scarf-2.jpg'
      ]
    },
    {
      id: 'disom-21',
      name: 'Peacock Motif Chadar / Gamcha',
      price: 950,
      category: 'Textiles & Apparel',
      community: 'Santhal',
      shortDesc: 'Dual-purpose shoulder wrap featuring jacquard peacock dance sequences.',
      fullDesc: 'The peacock (Mara) is celebrated in Santhal lore as the herald of life-giving rains. This comfortable shoulder wrap features dancing peacock motifs woven into both borders.',
      material: 'Handloom Cotton with madder yarn',
      dimensions: '220 cm x 85 cm',
      provenance: 'Jamtara Handloom Guild',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-peacock-chadar.jpg',
      gallery: [
        'assets/products/prod-peacock-chadar.jpg',
        'assets/products/prod-peacock-chadar-1.jpg',
        'assets/products/prod-peacock-chadar-2.jpg'
      ]
    },
    {
      id: 'disom-22',
      name: 'Red-Striped Handspun Gamcha',
      price: 500,
      category: 'Textiles & Apparel',
      community: 'Munda',
      shortDesc: 'All-weather traditional handspun cotton utility towel and headscarf.',
      fullDesc: 'An indispensable item of everyday plateau life, functioning as a head-wrap against the noon sun, shoulder cloth, and durable quick-drying wrap.',
      material: 'Handspun Rough-Spun Pure Cotton',
      dimensions: '190 cm x 75 cm',
      provenance: 'Ranchi Rural Weaving Unit',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-red-striped-gamcha.jpg',
      gallery: [
        'assets/products/prod-red-striped-gamcha.jpg',
        'assets/products/prod-red-striped-gamcha-1.jpg',
        'assets/products/prod-red-striped-gamcha-2.jpg'
      ]
    },
    {
      id: 'disom-23',
      name: 'Diamond Geometric Stole / Shawl',
      price: 920,
      category: 'Textiles & Apparel',
      community: 'Kharia',
      shortDesc: 'Warm shoulder stole featuring rhythmic zigzag hill-and-valley geometric bands.',
      fullDesc: 'Combining soft warm cotton and blended woolen weft, this stole depicts the repeating ridgelines of the Chotanagpur plateau in warm earth and charcoal dyes.',
      material: 'Warm Cotton & Woolen Blend Handloom',
      dimensions: '200 cm x 70 cm with frayed fringes',
      provenance: 'Latehar Weavers Group',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-diamond-tribal-stole.jpg',
      gallery: [
        'assets/products/prod-diamond-tribal-stole.jpg',
        'assets/products/prod-diamond-tribal-stole-1.jpg',
        'assets/products/prod-diamond-tribal-stole-3.jpg',
        'assets/products/prod-diamond-tribal-stole-4.jpg'
      ]
    },
    {
      id: 'disom-24',
      name: 'Embroidered Crossbody Jhola',
      price: 780,
      category: 'Accessories & Bags',
      community: 'Oraon',
      shortDesc: 'Sturdy cotton canvas shoulder satchel with indigenous village life embroidery.',
      fullDesc: 'Embroidered with chain-stitch threadwork depicting birds in Sal trees. Fitted with a wide, comfortable shoulder strap that distributes weight effortlessly.',
      material: 'Heavyweight Handspun Canvas & Cotton Floss',
      dimensions: '38 cm x 32 cm, Strap length 105 cm',
      provenance: 'Bishunpur Rural Development Cell',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-boho-sling-bag.jpg',
      gallery: [
        'assets/products/prod-boho-sling-bag.jpg',
        'assets/products/prod-boho-sling-bag-1.jpg',
        'assets/products/prod-boho-sling-bag-2.jpg',
        'assets/products/prod-boho-sling-bag-3.jpg',
        'assets/products/prod-boho-sling-bag-5.jpg',
        'assets/products/prod-boho-sling-bag-6.jpg',
        'assets/products/prod-boho-sling-bag-7.jpg',
        'assets/products/prod-boho-sling-bag-9.jpg'
      ]
    },
    {
      id: 'disom-25',
      name: 'Embroidered Canvas Tote',
      price: 580,
      category: 'Accessories & Bags',
      community: 'Santhal',
      shortDesc: 'Eco-friendly unbleached cotton tote bag printed with Sohrai animal silhouettes.',
      fullDesc: 'A versatile daily tote bag featuring Sohrai mud-wall art adaptations (horned bulls, dancing birds) screen-printed with plant-based natural inks.',
      material: '100% Unbleached Cotton Canvas',
      dimensions: '42 cm x 38 cm x 10 cm base gusset',
      provenance: 'Hazaribagh Art Foundation Collaborative',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-embroidered-tote.jpg',
      gallery: [
        'assets/products/prod-embroidered-tote.jpg',
        'assets/products/prod-embroidered-tote-1.jpg'
      ]
    },
    {
      id: 'disom-26',
      name: 'Sarna Grove Wooden Wall Art',
      price: 1100,
      category: 'Home Decor & Sacred Art',
      community: 'Munda',
      shortDesc: 'Carved reclaimed hardwood relief panel celebrating the sacred Sarna Sal grove.',
      fullDesc: 'Carved by master wood artisans from salvaged timber, depicting Sal tree trunks reaching towards the skies with forest animals nestled in the roots.',
      material: 'Reclaimed Gamhar Hardwood & Beeswax Finish',
      dimensions: '30 cm x 22 cm x 2.5 cm depth',
      provenance: 'Khunti Woodcraft Cooperative',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/prod-sarna-wall-clock.jpg',
      gallery: [
        'assets/products/prod-sarna-wall-clock.jpg',
        'assets/products/prod-sarna-wall-clock-1.jpg',
        'assets/products/product-wooden-craft.jpg',
        'assets/products/product-traditional-wall-art.jpg'
      ]
    },
    {
      id: 'disom-27',
      name: 'Terracotta Mandar Drum',
      price: 1480,
      category: 'Traditional Instruments',
      community: 'Oraon',
      shortDesc: 'Handmade clay double-headed ceremonial drum with hand-braided leather bindings.',
      fullDesc: 'The rhythmic heart of Jharkhand community dances. The acoustic body is thrown on a potters wheel using riverbed clay, sun-baked, and fitted with goat hide membranes tuned with iron slag paste.',
      material: 'Baked Riverbed Terracotta, Parchment & Leather Thongs',
      dimensions: 'Length 42 cm, Diameter 24 cm / 18 cm',
      provenance: 'Murhu Potters & Instrument Makers Guild',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/product-mandar-drum.jpg',
      gallery: ['assets/products/product-mandar-drum.jpg']
    },
    {
      id: 'disom-28',
      name: 'Sohrai Natural-Pigment Canvas',
      price: 1350,
      category: 'Traditional Art',
      community: 'Santhal',
      shortDesc: 'Original hand-painted canvas using wild white kaolin clay and yellow ochre pigments.',
      fullDesc: 'Authentic expression of the ancient Sohrai winter harvest painting tradition. Painted using natural chew-stick twigs and clay pigments (Dhudhi mitti, Lal mitti, Charak mitti) on primed canvas.',
      material: 'Wild Earth Clays & Natural Binders on Cotton Canvas',
      dimensions: '45 cm x 30 cm (Unframed, Rolled)',
      provenance: 'Hazaribagh Tribal Women Artists Collective',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/product-tribal-art.jpg',
      gallery: [
        'assets/products/product-tribal-art.jpg',
        'assets/products/product-traditional-wall-art.jpg'
      ]
    },
    {
      id: 'disom-29',
      name: 'Dokra Lost-Wax Brass Figurine',
      price: 1250,
      category: 'Handicrafts',
      community: 'Mahli',
      shortDesc: 'Lost-wax bell metal bronze casting depicting a traditional musician with drum.',
      fullDesc: 'Dokra is a 4,000-year-old hollow-casting metallurgical art form utilizing beeswax coils and clay molds. Each piece is unique, as the mold is intentionally broken to liberate the cooled bronze figure.',
      material: 'Recycled Bell Metal / Brass Alloy',
      dimensions: 'Height 16 cm, Width 8 cm, Weight ~450g',
      provenance: 'Deoghar Dokra Metalcraft Artisan Cluster',
      verificationStatus: 'Prototype listing — Details to be verified with maker/community.',
      image: 'assets/products/product-decorative-items.jpg',
      gallery: [
        'assets/products/product-decorative-items.jpg',
        'assets/products/product-bamboo-basket.jpg',
        'assets/products/product-bamboo-furniture.jpg'
      ]
    }
  ];

  /* ==========================================================================
     2. FILTER & SORT STATE
     ========================================================================== */
  let activeCategory = 'all';
  let activeCommunity = 'all';
  let searchQuery = '';
  let maxPrice = 2000;
  let currentSort = 'default';

  /* ==========================================================================
     3. RENDER FUNCTION
     ========================================================================== */
  function renderProducts() {
    let filtered = PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesCommunity =
        activeCommunity === 'all' || product.community.toLowerCase() === activeCommunity.toLowerCase();
      const matchesPrice = product.price <= maxPrice;
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery) ||
        product.shortDesc.toLowerCase().includes(searchQuery) ||
        product.material.toLowerCase().includes(searchQuery) ||
        product.community.toLowerCase().includes(searchQuery);

      return matchesCategory && matchesCommunity && matchesPrice && matchesSearch;
    });

    // Apply Sorting
    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update product count label
    const countEl = document.querySelector('#productsCount');
    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} craft items`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--paper-card); border-radius: var(--radius-md); border: 1px dashed var(--border);">
          <h3 style="font-size: 1.4rem; color: var(--forest-dark); margin-bottom: 0.5rem;">No craft items match your criteria</h3>
          <p style="color: var(--muted); margin-bottom: 1.5rem;">Try adjusting your search terms, increasing the maximum price, or resetting filters.</p>
          <button type="button" class="btn btn-outline btn-sm" id="emptyResetBtn">Reset All Filters</button>
        </div>
      `;
      const emptyResetBtn = document.querySelector('#emptyResetBtn');
      if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);
      return;
    }

    productsGrid.innerHTML = filtered
      .map(
        (p) => `
      <div class="product-card" data-id="${p.id}">
        <div class="product-media">
          <img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="handleImageError(this, '${escapeHTML(p.name)}')">
          <span class="product-prototype-badge">Prototype Listing</span>
          <span class="product-community-badge">${escapeHTML(p.community)}</span>
        </div>
        <div class="product-body">
          <div class="product-category">${escapeHTML(p.category)}</div>
          <h3 class="product-title">${escapeHTML(p.name)}</h3>
          <p class="product-desc">${escapeHTML(p.shortDesc)}</p>
          <div class="product-price-bar">
            <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
            <span style="font-size: 0.75rem; color: var(--muted); font-weight: 500;">Fair-Trade Context</span>
          </div>
          <div class="product-actions">
            <button type="button" class="btn btn-outline btn-sm view-details-btn" data-id="${p.id}">Details</button>
            <button type="button" class="btn btn-forest btn-sm add-basket-btn" data-id="${p.id}">Add to Basket</button>
          </div>
        </div>
      </div>
    `
      )
      .join('');

    // Attach click events
    productsGrid.querySelectorAll('.view-details-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        openProductModal(id);
      });
    });

    productsGrid.querySelectorAll('.add-basket-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const prod = PRODUCTS.find((item) => item.id === id);
        if (prod && window.addToCart) {
          window.addToCart(prod);
        }
      });
    });
  }

  /* ==========================================================================
     4. PRODUCT DETAILS MODAL CONTROLLER WITH THUMBNAIL GALLERY
     ========================================================================== */
  const modalOverlay = document.querySelector('#productDetailsModal');
  const modalCloseBtn = document.querySelector('#modalCloseBtn');

  function openProductModal(productId) {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (!prod || !modalOverlay) return;

    const modalMainImg = modalOverlay.querySelector('#modalProductImg');
    const modalThumbnails = modalOverlay.querySelector('#modalThumbnails');
    const modalCategory = modalOverlay.querySelector('#modalProductCategory');
    const modalTitle = modalOverlay.querySelector('#modalProductTitle');
    const modalPrice = modalOverlay.querySelector('#modalProductPrice');
    const modalDesc = modalOverlay.querySelector('#modalProductDesc');
    const modalCommunity = modalOverlay.querySelector('#modalProductCommunity');
    const modalMaterial = modalOverlay.querySelector('#modalProductMaterial');
    const modalDimensions = modalOverlay.querySelector('#modalProductDimensions');
    const modalProvenance = modalOverlay.querySelector('#modalProductProvenance');
    const modalVerification = modalOverlay.querySelector('#modalProductVerification');
    const modalAddToCartBtn = modalOverlay.querySelector('#modalAddToCartBtn');

    if (modalMainImg) {
      modalMainImg.src = prod.image;
      modalMainImg.alt = prod.name;
    }

    // Populate thumbnail strip
    if (modalThumbnails) {
      if (prod.gallery && prod.gallery.length > 1) {
        modalThumbnails.style.display = 'flex';
        modalThumbnails.innerHTML = prod.gallery
          .map(
            (imgUrl, idx) => `
          <img src="${imgUrl}" alt="${escapeHTML(prod.name)} view ${idx + 1}" class="modal-thumb ${imgUrl === prod.image ? 'active' : ''}" data-src="${imgUrl}" onerror="handleImageError(this)">
        `
          )
          .join('');

        modalThumbnails.querySelectorAll('.modal-thumb').forEach((thumb) => {
          thumb.addEventListener('click', () => {
            modalThumbnails.querySelectorAll('.modal-thumb').forEach((t) => t.classList.remove('active'));
            thumb.classList.add('active');
            if (modalMainImg) {
              modalMainImg.style.opacity = '0.3';
              setTimeout(() => {
                modalMainImg.src = thumb.dataset.src;
                modalMainImg.style.opacity = '1';
              }, 120);
            }
          });
        });
      } else {
        modalThumbnails.innerHTML = '';
        modalThumbnails.style.display = 'none';
      }
    }

    if (modalCategory) modalCategory.textContent = prod.category;
    if (modalTitle) modalTitle.textContent = prod.name;
    if (modalPrice) modalPrice.textContent = `₹${prod.price.toLocaleString('en-IN')}`;
    if (modalDesc) modalDesc.textContent = prod.fullDesc;
    if (modalCommunity) modalCommunity.textContent = prod.community;
    if (modalMaterial) modalMaterial.textContent = prod.material;
    if (modalDimensions) modalDimensions.textContent = prod.dimensions;
    if (modalProvenance) modalProvenance.textContent = prod.provenance;
    if (modalVerification) modalVerification.textContent = prod.verificationStatus;

    if (modalAddToCartBtn) {
      modalAddToCartBtn.onclick = () => {
        if (window.addToCart) {
          window.addToCart(prod);
          closeProductModal();
        }
      };
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  /* ==========================================================================
     5. FILTER CONTROLS & LISTENERS
     ========================================================================== */
  // Category Pills
  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      categoryPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category || 'all';
      renderProducts();
    });
  });

  // Community Pills
  const communityPills = document.querySelectorAll('.community-pill');
  communityPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      communityPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeCommunity = pill.dataset.community || 'all';
      renderProducts();
    });
  });

  // Search Input
  const searchInput = document.querySelector('#marketplaceSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Price Slider
  const priceSlider = document.querySelector('#priceRangeSlider');
  const priceMaxLabel = document.querySelector('#priceMaxLabel');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      maxPrice = Number(e.target.value);
      if (priceMaxLabel) priceMaxLabel.textContent = `₹${maxPrice.toLocaleString('en-IN')}`;
      renderProducts();
    });
  }

  // Sorting
  const sortSelect = document.querySelector('#sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Reset Button
  const resetBtn = document.querySelector('#resetFiltersBtn');
  function resetAllFilters() {
    activeCategory = 'all';
    activeCommunity = 'all';
    searchQuery = '';
    maxPrice = 2000;
    currentSort = 'default';

    if (searchInput) searchInput.value = '';
    if (priceSlider) priceSlider.value = 2000;
    if (priceMaxLabel) priceMaxLabel.textContent = '₹2,000';
    if (sortSelect) sortSelect.value = 'default';

    categoryPills.forEach((p) => {
      p.classList.toggle('active', p.dataset.category === 'all');
    });
    communityPills.forEach((p) => {
      p.classList.toggle('active', p.dataset.community === 'all');
    });

    renderProducts();
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }

  // Initial render
  renderProducts();

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
