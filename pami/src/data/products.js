// ============================================================================
// STATIC CATALOG — 30+ products across collections.
// No pricing logic; `price` is display-only. `details` feeds the Accordion.
// ============================================================================
import { IMAGES } from './images.js';

export const PRODUCTS = [
  // ---------------------------- PAMI GLOW ---------------------------------
  {
    id: 'glow-radiance-serum',
    collection: 'pami-glow',
    category: 'Skincare',
    name: 'Radiance Facial Serum',
    blurb: 'A weightless vitamin-C serum that wakes up tired skin.',
    details:
      'Formulated with stabilised vitamin C, hyaluronic acid and squalane, this serum absorbs in seconds and layers cleanly under moisturiser. Use two to three drops morning and evening on clean skin. Dermatologist tested, fragrance-light, never sticky.',
    image: IMAGES.serum,
    price: 38,
  },
  {
    id: 'glow-quench-moisturizer',
    collection: 'pami-glow',
    category: 'Skincare',
    name: 'Quench Daily Moisturiser',
    blurb: 'A cushiony cream that holds hydration all day.',
    details:
      'A ceramide-rich daily cream that restores the skin barrier and leaves a soft matte finish. Suitable for normal to dry skin and safe under makeup. Free from drying alcohols and synthetic dyes.',
    image: IMAGES.moisturizer,
    price: 34,
  },
  {
    id: 'glow-clarify-cleanser',
    collection: 'pami-glow',
    category: 'Skincare',
    name: 'Clarify Gentle Cleanser',
    blurb: 'A pH-balanced gel that cleanses without stripping.',
    details:
      'A low-foam gel cleanser that lifts sunscreen, sweat and impurities while keeping the barrier intact. Massage over damp skin and rinse. Gentle enough for twice-daily use.',
    image: IMAGES.cleanser,
    price: 24,
  },
  {
    id: 'glow-amber-eau',
    collection: 'pami-glow',
    category: 'Perfume',
    name: 'Amber Eau de Parfum',
    blurb: 'Warm amber, soft woods, a whisper of vanilla.',
    details:
      'An everyday signature scent built on amber and sandalwood with a clean musk drydown. Long-wearing, never overpowering. Presented in a refillable faceted-glass flacon, 50ml.',
    image: IMAGES.perfume,
    price: 72,
  },
  {
    id: 'glow-neroli-mist',
    collection: 'pami-glow',
    category: 'Perfume',
    name: 'Neroli Hair & Body Mist',
    blurb: 'A bright citrus-floral mist for skin and hair.',
    details:
      'A light neroli and bergamot mist that refreshes throughout the day. Alcohol-reduced and conditioning, so it is kind to hair lengths. Keep one in your bag for an instant lift.',
    image: IMAGES.perfumeTwo,
    price: 28,
  },
  {
    id: 'glow-sculpt-roller',
    collection: 'pami-glow',
    category: 'Beauty Accessories',
    name: 'Sculpt Facial Roller Set',
    blurb: 'A cool stone roller and gua sha duo.',
    details:
      'Hand-finished stone tools that help depuff and ease tension along the jaw and brow. Chill before use for an extra-cooling ritual. Arrives in a protective travel pouch.',
    image: IMAGES.beautyTools,
    price: 32,
  },
  {
    id: 'glow-tint-lip',
    collection: 'pami-glow',
    category: 'Beauty Accessories',
    name: 'Tinted Lip Treatment',
    blurb: 'A sheer balm with a hint of warm colour.',
    details:
      'A nourishing lip balm tinted in three wearable shades. Shea and jojoba soften while a buildable wash of colour keeps things easy. Available in Clay, Rose and Bare.',
    image: IMAGES.lipCare,
    price: 18,
  },

  {
    id: 'glow-treatment-oil',
    collection: 'pami-glow',
    category: 'Skincare',
    name: 'Overnight Treatment Oil',
    blurb: 'A fast-absorbing facial oil for overnight repair.',
    details:
      'A blend of rosehip, jojoba and squalane that sinks in without a greasy film. Press a few drops over serum at night to wake up to softer, more supple skin. Non-comedogenic and fragrance-free.',
    image: IMAGES.glowOil,
    price: 44,
  },
  {
    id: 'glow-mineral-spf',
    collection: 'pami-glow',
    category: 'Skincare',
    name: 'Mineral Daily SPF 30',
    blurb: 'A weightless mineral sunscreen with no white cast.',
    details:
      'Broad-spectrum SPF 30 built on zinc oxide with a soft, skin-tone-adapting finish. Sits cleanly under makeup and doubles as a primer. Reef-conscious formula, suitable for sensitive skin.',
    image: IMAGES.glowSpf,
    price: 30,
  },
  {
    id: 'glow-body-lotion',
    collection: 'pami-glow',
    category: 'Skincare',
    name: 'Everyday Body Lotion',
    blurb: 'A lightweight lotion that hydrates without the wait.',
    details:
      'Shea butter and glycerin in a fast-sinking lotion that leaves skin soft, never tacky. Lightly scented with the same warm amber notes as our signature fragrance. 300ml pump.',
    image: IMAGES.glowLotion,
    price: 26,
  },
  {
    id: 'glow-cedar-eau',
    collection: 'pami-glow',
    category: 'Perfume',
    name: 'Cedar & Vetiver Eau de Toilette',
    blurb: 'A cool, woody counterpart to our amber signature.',
    details:
      'Dry cedar and smoky vetiver over a clean citrus opening — understated and unisex. A lighter concentration for everyday wear that layers well with the Amber Eau de Parfum. 50ml.',
    image: IMAGES.glowPerfumeThree,
    price: 64,
  },

  // ---------------------------- PAMI STYLE --------------------------------
  {
    id: 'style-midi-dress',
    collection: 'pami-style',
    category: 'Dresses',
    name: 'The Everyday Midi Dress',
    blurb: 'A fluid midi that moves from desk to dinner.',
    details:
      'Cut from a drapey TENCEL-blend twill with a self-tie waist and side pockets. Falls just below the knee. Machine washable cold, hang to dry. Available in Sand, Olive and Ink.',
    image: IMAGES.dress,
    price: 118,
  },
  {
    id: 'style-supima-tee',
    collection: 'pami-style',
    category: 'T-Shirts',
    name: 'Supima Crew T-Shirt',
    blurb: 'The weighty, never-see-through everyday tee.',
    details:
      'Knit from long-staple Supima cotton at a substantial 220gsm with a clean-finished crew neck. Pre-washed for minimal shrinkage. Six core colours, sizes XS–XXL.',
    image: IMAGES.tee,
    price: 42,
  },
  {
    id: 'style-straight-jeans',
    collection: 'pami-style',
    category: 'Jeans',
    name: 'Straight-Leg Rigid Jean',
    blurb: 'A clean straight leg in authentic rigid denim.',
    details:
      'Made from 13oz rigid Japanese denim that breaks in beautifully over time. Mid-rise with a straight leg and a full-length inseam you can hem to taste. Button fly, copper hardware.',
    image: IMAGES.jeans,
    price: 128,
  },
  {
    id: 'style-tailored-blazer',
    collection: 'pami-style',
    category: 'Official Wear',
    name: 'Tailored Single-Breasted Blazer',
    blurb: 'A softly structured blazer for the working week.',
    details:
      'Half-canvassed construction with a natural shoulder and a touch of stretch for ease. Fully lined, two-button front, functional cuffs. Tailored to layer over knitwear or a shirt.',
    image: IMAGES.officialWear,
    price: 198,
  },
  {
    id: 'style-leather-tote',
    collection: 'pami-style',
    category: 'Bags',
    name: 'Structured Leather Tote',
    blurb: 'A clean-lined tote that holds a 15" laptop.',
    details:
      'Vegetable-tanned full-grain leather that patinas with use. Fits a 15-inch laptop, a folder and the everyday essentials. Reinforced base, magnetic closure, interior zip pocket.',
    image: IMAGES.bag,
    price: 168,
  },
  {
    id: 'style-classic-watch',
    collection: 'pami-style',
    category: 'Accessories',
    name: 'Classic Analog Watch',
    blurb: 'A slim, legible watch on a leather strap.',
    details:
      'A 38mm case with a sapphire-coated crystal and a quiet quartz movement. Interchangeable Italian-leather strap. Water resistant to 30m for everyday confidence.',
    image: IMAGES.watch,
    price: 145,
  },
  {
    id: 'style-smart-watch',
    collection: 'pami-style',
    category: 'Smart Watches',
    name: 'Pami Smart Watch',
    blurb: 'Health tracking with a refined, restrained face.',
    details:
      'An AMOLED display with always-on mode, multi-day battery, heart-rate and sleep tracking. Swappable bands and a design that reads more wristwatch than gadget.',
    image: IMAGES.smartwatch,
    price: 189,
  },
  {
    id: 'style-thin-eyeglasses',
    collection: 'pami-style',
    category: 'Eyeglasses',
    name: 'Thin-Frame Optical Glasses',
    blurb: 'Lightweight frames with a timeless silhouette.',
    details:
      'Hand-polished acetate in a slim profile with sprung hinges for comfort. Sold frame-only or with prescription and blue-light lenses. Includes a hard case and microfibre cloth.',
    image: IMAGES.eyeglasses,
    price: 96,
  },

  {
    id: 'style-merino-sweater',
    collection: 'pami-style',
    category: 'Knitwear',
    name: 'Merino Crew Sweater',
    blurb: 'A mid-weight merino knit for three seasons.',
    details:
      'Knit from 100% extra-fine merino wool that resists pilling and regulates temperature. A clean crew neck and a slightly relaxed body. Machine washable on wool cycle. Sizes XS–XXL.',
    image: IMAGES.styleSweater,
    price: 124,
  },
  {
    id: 'style-tailored-trousers',
    collection: 'pami-style',
    category: 'Trousers',
    name: 'Pleated Tailored Trousers',
    blurb: 'A single-pleat trouser with a clean, tapered line.',
    details:
      'Cut from a wrinkle-resistant wool-blend suiting with a single forward pleat and a tapered leg. Hook-and-bar closure, slant pockets, half-lined. Pairs with the Single-Breasted Blazer.',
    image: IMAGES.styleTrousers,
    price: 138,
  },
  {
    id: 'style-oxford-shirt',
    collection: 'pami-style',
    category: 'Shirts',
    name: 'Everyday Oxford Shirt',
    blurb: 'A washed oxford that works tucked or loose.',
    details:
      'Woven from a substantial garment-washed oxford cotton with a soft, lived-in hand from day one. Button-down collar, single chest pocket, a relaxed-but-tidy fit. Five colours.',
    image: IMAGES.styleShirt,
    price: 68,
  },
  {
    id: 'style-leather-sneakers',
    collection: 'pami-style',
    category: 'Footwear',
    name: 'Minimal Leather Sneakers',
    blurb: 'A clean low-top that goes with everything.',
    details:
      'Full-grain leather uppers on a cushioned, resoleable sole. Hand-finished with tonal laces and a padded collar for all-day comfort. Made in Portugal. Whole and half sizes.',
    image: IMAGES.styleSneakers,
    price: 158,
  },
  {
    id: 'style-wool-scarf',
    collection: 'pami-style',
    category: 'Accessories',
    name: 'Lambswool Scarf',
    blurb: 'A soft, generously sized scarf for cold mornings.',
    details:
      'Brushed lambswool woven in a quiet herringbone, finished with a hand-knotted fringe. Generously oversized so it doubles as a wrap. Available in Camel, Charcoal and Forest.',
    image: IMAGES.styleScarf,
    price: 58,
  },

  // ---------------------------- PAMI CORNER -------------------------------
  {
    id: 'corner-orange-juice',
    collection: 'pami-corner',
    category: 'Juices',
    name: 'Cold-Pressed Orange Juice',
    blurb: 'Pure pressed oranges, nothing added.',
    details:
      'Pressed from sun-ripened oranges and bottled within hours. No added sugar, no concentrate, no preservatives. Keep refrigerated and shake before pouring. 750ml.',
    image: IMAGES.juiceOrange,
    price: 7,
  },
  {
    id: 'corner-green-juice',
    collection: 'pami-corner',
    category: 'Juices',
    name: 'Green Garden Cold-Press',
    blurb: 'Cucumber, apple, spinach and lime.',
    details:
      'A crisp, lightly sweet cold-pressed blend of cucumber, green apple, spinach, celery and lime. Vegan and unpasteurised for a fresh-from-the-press taste. 500ml.',
    image: IMAGES.juiceGreen,
    price: 8,
  },
  {
    id: 'corner-craft-cola',
    collection: 'pami-corner',
    category: 'Soft Drinks',
    name: 'Craft Cola',
    blurb: 'A botanical cola with real spice and citrus.',
    details:
      'A small-batch cola brewed with kola nut, citrus peel, vanilla and warming spice. Less sweet than the mainstream, with a clean finish. Best served very cold over ice. 330ml.',
    image: IMAGES.softDrink,
    price: 4,
  },
  {
    id: 'corner-sparkling-fruit',
    collection: 'pami-corner',
    category: 'Soft Drinks',
    name: 'Sparkling Fruit Soda',
    blurb: 'Lightly sparkling, lightly sweet, fruit-led.',
    details:
      'Real fruit juice, sparkling water and a whisper of cane sugar. A grown-up soda that refreshes without the sugar crash. Available in Pear, Blood Orange and Raspberry. 330ml.',
    image: IMAGES.sparkling,
    price: 4,
  },
  {
    id: 'corner-berry-smoothie',
    collection: 'pami-corner',
    category: 'Juices',
    name: 'Mixed Berry Smoothie',
    blurb: 'Thick, fruit-packed and naturally sweet.',
    details:
      'A blend of strawberry, blueberry, banana and oat milk with no added sugar. A satisfying on-the-go breakfast or afternoon pick-me-up. Keep chilled, shake well. 500ml.',
    image: IMAGES.smoothie,
    price: 6,
  },
  {
    id: 'corner-classic-lemonade',
    collection: 'pami-corner',
    category: 'Soft Drinks',
    name: 'Cloudy Lemonade',
    blurb: 'Real lemons, mint and still water.',
    details:
      'A cloudy, properly tart lemonade made with whole pressed lemons and a hint of mint. Lightly sweetened and never artificial. Wonderful over ice on a warm afternoon. 750ml.',
    image: IMAGES.lemonade,
    price: 5,
  },
  {
    id: 'corner-peach-iced-tea',
    collection: 'pami-corner',
    category: 'Coffee & Tea',
    name: 'Peach Iced Tea',
    blurb: 'Brewed black tea, real peach, lightly sweetened.',
    details:
      'Cold-brewed black tea with pressed peach and a touch of cane sugar — far from the syrupy stuff. Bright, balanced and not too sweet. Serve over plenty of ice. 500ml.',
    image: IMAGES.cornerIcedTea,
    price: 5,
  },
  {
    id: 'corner-sparkling-water',
    collection: 'pami-corner',
    category: 'Soft Drinks',
    name: 'Sparkling Spring Water',
    blurb: 'Just water and bubbles — fine, lasting carbonation.',
    details:
      'Naturally sourced spring water with a soft, persistent sparkle. Zero sugar, zero anything else. Available plain or with a whisper of lime or grapefruit essence. 330ml.',
    image: IMAGES.cornerSparklingWater,
    price: 3,
  },
  {
    id: 'corner-cold-brew',
    collection: 'pami-corner',
    category: 'Coffee & Tea',
    name: 'Cold Brew Coffee',
    blurb: 'Slow-steeped 18 hours for a smooth, low-acid cup.',
    details:
      'Single-origin beans steeped cold for eighteen hours, giving a naturally sweet, low-acid concentrate. Drink it black over ice or cut with your milk of choice. Unsweetened. 330ml.',
    image: IMAGES.cornerColdBrew,
    price: 4,
  },
];

export const getProductsByCollection = (slug) =>
  PRODUCTS.filter((p) => p.collection === slug);

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);
