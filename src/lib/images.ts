// Curated, verified stock imagery (Unsplash — free to use).
// Each URL returns a real optimized JPEG; checked before shipping.

const U = "https://images.unsplash.com/photo-";
const params = (w = 1200) => `?w=${w}&q=80&auto=format&fit=crop`;

export const img = {
  // Premium blue abstract — hero accent & video poster
  heroAbstract: `${U}1620712943543-bcc4688e7485${params(1400)}`,
  blueGradient: `${U}1635070041078-e363dbe005cb${params(1400)}`,

  // Developer-at-work — about section
  workspace: `${U}1517694712202-14dd9538aa97${params(1100)}`,

  // Project covers
  serverNetwork: `${U}1558494949-ef010cbdcc31${params(1000)}`, // proxy server / systems
  automation: `${U}1607799279861-4dd421887fb3${params(1000)}`, // automation bot

  // Texture / band backgrounds
  matrixCode: `${U}1526374965328-7f61d4dc18c5${params(1400)}`,
  networkEarth: `${U}1451187580459-43490279c0fa${params(1400)}`,
  circuit: `${U}1518770660439-4636190af475${params(1400)}`,
};

export const ambientVideo = "/ambient.mp4";
