// ============================================================================
// CENTRAL IMAGE REGISTRY
// Stable, specific Unsplash URLs (NOT the deprecated source.unsplash.com).
// Each entry carries intrinsic width/height (to reserve layout space / avoid
// CLS) plus alt text. buildSrcSet() derives responsive widths.
// ============================================================================

const UNSPLASH = 'https://images.unsplash.com';
const WIDTHS = [480, 768, 1200, 1600];

// Build a responsive image descriptor from an Unsplash photo id.
function photo(id, alt, w, h) {
  const url = (width) =>
    `${UNSPLASH}/${id}?auto=format&fit=crop&q=70&w=${width}`;
  return {
    src: url(1200),
    srcset: WIDTHS.map((width) => `${url(width)} ${width}w`).join(', '),
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px',
    w,
    h,
    alt,
  };
}

export const IMAGES = {
  // ---- Brand / editorial ----
  brandHero: photo(
    'photo-1490481651871-ab68de25d43d',
    'Two models in considered everyday clothing against a warm neutral backdrop',
    1600,
    2000,
  ),
  brandStory: photo(
    'photo-1441984904996-e0b6ba687e04',
    'A calm retail interior with curated products on pale wooden shelving',
    1200,
    1500,
  ),
  brandWorld: photo(
    'photo-1483985988355-763728e1935b',
    'Editorial fashion flatlay of neutral garments and accessories',
    1600,
    1067,
  ),
  craft: photo(
    'photo-1604719312566-8912e9227c6a',
    'Close-up of hands carefully arranging a product display',
    1200,
    800,
  ),

  // ---- Pami Glow: skincare, beauty accessories, perfume ----
  glowHero: photo(
    'photo-1556228720-195a672e8a03',
    'Minimal skincare bottles arranged on a soft neutral surface',
    1600,
    2000,
  ),
  serum: photo(
    'photo-1620916566398-39f1143ab7be',
    'A glass dropper bottle of facial serum beside fresh botanicals',
    1000,
    1250,
  ),
  moisturizer: photo(
    'photo-1571781926291-c477ebfd024b',
    'An open jar of cream moisturizer with a soft shadow',
    1000,
    1250,
  ),
  cleanser: photo(
    'photo-1608248543803-ba4f8c70ae0b',
    'A pump bottle of gentle cleanser on a tiled bathroom shelf',
    1000,
    1250,
  ),
  perfume: photo(
    'photo-1541643600914-78b084683601',
    'A faceted glass perfume bottle catching warm light',
    1000,
    1250,
  ),
  perfumeTwo: photo(
    'photo-1592945403244-b3fbafd7f539',
    'An amber perfume flacon photographed against a plaster wall',
    1000,
    1250,
  ),
  beautyTools: photo(
    'photo-1596462502278-27bfdc403348',
    'A set of facial rollers and beauty accessories laid out neatly',
    1000,
    1250,
  ),
  lipCare: photo(
    'photo-1586495777744-4413f21062fa',
    'Tinted lip balms arranged in a small ceramic dish',
    1000,
    1250,
  ),

  // ---- Pami Style: fashion + accessories ----
  styleHero: photo(
    'photo-1487412720507-e7ab37603c6f',
    'A model wearing a tailored neutral outfit on a city street',
    1600,
    2000,
  ),
  dress: photo(
    'photo-1572804013309-59a88b7e92f1',
    'A flowing midi dress photographed on a plain studio backdrop',
    1000,
    1250,
  ),
  tee: photo(
    'photo-1521572163474-6864f9cf17ab',
    'A folded premium cotton T-shirt in oat white',
    1000,
    1250,
  ),
  jeans: photo(
    'photo-1542272604-787c3835535d',
    'A pair of straight-leg jeans folded on a wooden surface',
    1000,
    1250,
  ),
  officialWear: photo(
    'photo-1594938298603-c8148c4dae35',
    'A structured blazer styled for the office',
    1000,
    1250,
  ),
  bag: photo(
    'photo-1584917865442-de89df76afd3',
    'A minimalist leather tote bag standing upright',
    1000,
    1250,
  ),
  watch: photo(
    'photo-1523275335684-37898b6baf30',
    'A refined analog wristwatch with a leather strap',
    1000,
    1250,
  ),
  smartwatch: photo(
    'photo-1546868871-7041f2a55e12',
    'A smart watch displaying its face on a soft background',
    1000,
    1250,
  ),
  eyeglasses: photo(
    'photo-1574258495973-f010dfbb5371',
    'A pair of thin-framed eyeglasses resting on a book',
    1000,
    1250,
  ),

  // ---- Pami Corner: beverages ----
  cornerHero: photo(
    'photo-1600271886742-f049cd451bba',
    'Chilled bottled beverages lined up with condensation on the glass',
    1600,
    2000,
  ),
  juiceOrange: photo(
    'photo-1621506289937-a8e4df240d0b',
    'A glass of fresh orange juice beside whole oranges',
    1000,
    1250,
  ),
  juiceGreen: photo(
    'photo-1610970881699-44a5587cabec',
    'A cold-pressed green juice in a tall glass',
    1000,
    1250,
  ),
  softDrink: photo(
    'photo-1581006852262-e4307cf6283a',
    'A craft soft drink poured over ice with citrus garnish',
    1000,
    1250,
  ),
  sparkling: photo(
    'photo-1437418747212-8d9709afab22',
    'A sparkling fruit beverage in a chilled glass bottle',
    1000,
    1250,
  ),
  smoothie: photo(
    'photo-1502741224143-90386d7f8c82',
    'A berry smoothie topped with fresh fruit',
    1000,
    1250,
  ),
  lemonade: photo(
    'photo-1523677011781-c91d1bbe2f9e',
    'A jug of homemade lemonade with mint leaves',
    1000,
    1250,
  ),

  // ---- Lifestyle / supporting ----
  lifestyleOne: photo(
    'photo-1495121605193-b116b5b9c5fe',
    'A bright, airy living space styled with neutral textiles',
    1200,
    800,
  ),
  lifestyleTwo: photo(
    'photo-1469334031218-e382a71b716b',
    'A person walking in confident minimal streetwear',
    1200,
    1600,
  ),
  editorialWide: photo(
    'photo-1441986300917-64674bd600d8',
    'A considered retail space with products on display',
    1600,
    900,
  ),
  textileDetail: photo(
    'photo-1528459801416-a9e53bbf4e17',
    'A macro detail of folded natural-fibre fabric',
    1000,
    1250,
  ),
  bottleDetail: photo(
    'photo-1556228453-efd6c1ff04f6',
    'A detail shot of a frosted glass cosmetic bottle',
    1000,
    1250,
  ),

  // ---- Pami Glow: additional products ----
  glowOil: photo(
    'photo-1612817288484-6f916006741a',
    'A glass dropper bottle of facial treatment oil on a pale surface',
    1000,
    1250,
  ),
  glowSpf: photo(
    'photo-1631730486572-226d1f595b68',
    'A tube of mineral sunscreen resting in soft daylight',
    1000,
    1250,
  ),
  glowLotion: photo(
    'photo-1556228578-8c89e6adf883',
    'A pump bottle of body lotion on a clean bathroom shelf',
    1000,
    1250,
  ),
  glowPerfumeThree: photo(
    'photo-1611930022073-b7a4ba5fcccd',
    'A tall glass perfume bottle photographed in warm light',
    1000,
    1250,
  ),

  // ---- Pami Style: additional products ----
  styleSweater: photo(
    'photo-1576426863848-c21f53c60b19',
    'A folded chunky knit sweater in oatmeal',
    1000,
    1250,
  ),
  styleTrousers: photo(
    'photo-1551232864-3f0890e580d9',
    'A pair of tailored trousers styled on a neutral backdrop',
    1000,
    1250,
  ),
  styleShirt: photo(
    'photo-1596755094514-f87e34085b2c',
    'A crisp button-down shirt on a plain background',
    1000,
    1250,
  ),
  styleSneakers: photo(
    'photo-1606107557195-0e29a4b5b4aa',
    'A pair of minimal leather sneakers',
    1000,
    1250,
  ),
  styleScarf: photo(
    'photo-1520903920243-00d872a2d1c9',
    'A soft wool scarf folded on a neutral surface',
    1000,
    1250,
  ),

  // ---- Pami Corner: additional products ----
  cornerIcedTea: photo(
    'photo-1556905055-8f358a7a47b2',
    'A tall glass of iced tea with ice and a slice of citrus',
    1000,
    1250,
  ),
  cornerSparklingWater: photo(
    'photo-1622483767028-3f66f32aef97',
    'A bottle of sparkling spring water beading with bubbles',
    1000,
    1250,
  ),
  cornerColdBrew: photo(
    'photo-1571950006418-f226dc106482',
    'A glass of cold brew coffee poured over ice',
    1000,
    1250,
  ),
};

// Shared social/OG image (absolute path resolved against site origin at runtime).
export const OG_IMAGE = IMAGES.brandWorld.src;
