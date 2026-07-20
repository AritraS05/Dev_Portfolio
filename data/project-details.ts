export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectSection {
  label: string;
  heading: string;
  body: string[];
}

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  short: string; // one-liner for cards
  accent: string;
  dates?: string;
  categories: string;
  cover: string;
  tech: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
  features: ProjectFeature[];
  stats?: ProjectStat[];
  diagramSrc?: string;
  featured: boolean;
}

export const PROJECT_DETAILS: ProjectDetail[] = [
  // ─────────────────────────── Featured ───────────────────────────
  {
    slug: "venue-ops-platform",
    name: "Venue Ops Platform",
    short:
      "A nightlife booking and venue-operations product built alongside two working industry engineers — I own the business dashboard: real-time messaging, a Konva floor-plan editor and nine feature verticals.",
    accent: "#7B2FF7",
    dates: "Dec 2025 – Present",
    categories: "Team Project | Real-Time | Production",
    cover: "/covers/venue-ops-platform.svg",
    tech: [
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "WebSockets",
      "Konva",
      "Tailwind",
    ],
    links: [
      {
        label: "Overview",
        href: "https://docs.google.com/document/d/e/2PACX-1vR20E1BKfCTtJOmwDjtfgaprc3FjayfmRInX-DvdGuEL4wxuGF11qD7GPZ621DRPYiv7O90tPWQ492E/pub",
      },
      { label: "Live", href: "https://nightsync.io" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Learning how software actually gets built",
        body: [
          "This is a two-surface nightlife product: a customer-facing site where people book tables and tickets for club events, and an internal dashboard where venue teams run the business behind it — events, inventory, artists, menus, merch and a floor plan of the room itself.",
          "I joined it as a collaborative build alongside two working industry engineers, specifically to see how things are done outside coursework: pull requests, review cycles, a shared branch, a real deployment target and a codebase nobody can hold entirely in their head. I own the business dashboard end to end and shipped two feature PRs on the public site.",
        ],
      },
      {
        label: "Real-time",
        heading: "One socket, many features",
        body: [
          "Messaging, issue tracking and presence all ride a single multiplexed WebSocket rather than a connection per feature. I wrote it as a singleton service that fans inbound frames out to per-event listener sets, so any component can subscribe and get a teardown closure back.",
          "It reconnects on exponential backoff capped at thirty seconds, resets its attempt counter on open, and suppresses reconnection when the client disconnects deliberately. The Go backend streams JSON-Lines, so the client splits frames on newlines and tolerates two different envelope shapes — the kind of thing you only discover by integrating against a service somebody else owns.",
        ],
      },
      {
        label: "Hard parts",
        heading: "A chat window that scrolls both ways",
        body: [
          "The message list paginates bi-directionally: older messages load upward, newer ones downward, and jump-to-search-result replaces the window entirely. That combination breaks naively — a slow page request can land after the window has already moved and merge duplicate ids into a virtualized list, corrupting React keys.",
          "I fixed it with an epoch counter per chat space. Any fetch that replaces the window bumps the epoch; load-more requests capture the epoch when they start and discard their response if it changed. On top of that sit request-dedup guards with short cooldowns, because React StrictMode double-effects and socket bursts were firing the same fetch two and three times.",
          "Sending is optimistic: a temporary message appears immediately, mirrors into any open reply thread, bumps the parent's reply count in three places at once, then promotes to the server id — or gets filtered back out if the write fails. Reactions work the same way, and every mutation falls back to HTTP when the socket is down.",
        ],
      },
      {
        label: "Canvas",
        heading: "Drawing the room",
        body: [
          "Venue staff need to map tables onto a photo of their floor so bookings can point at a real place. I built that as a Konva canvas with rectangle, circle and polygon tools over the uploaded floor plan.",
          "Coordinates are stored normalized between zero and one rather than in pixels, so a plan drawn on a laptop renders correctly on a phone and survives an image swap. Tables owned by another booking category render in a disabled state, and the editor deliberately allows only one unsaved shape at a time — a constraint that removed a whole class of ambiguous-save bugs.",
        ],
      },
      {
        label: "Working in a team",
        heading: "What the group project actually taught me",
        body: [
          "The engineering I'm proudest of here is mostly unglamorous. Query keys became a hierarchical factory per feature because ad-hoc string keys stopped being invalidatable once several people were writing mutations. Form modules got split into schema, change detection and payload builder so edits send only dirty fields. A Vite plugin patches out the HMR reconnect reload because mobile backgrounding was wiping in-progress composer state during testing on real phones.",
          "I also learned what a codebase looks like when it is shipping rather than finished. There are 2000-line components that want decomposing, debug logging still in production paths, and no automated test suite — all things I would push on with more time, and all things I could not see from the outside before working on something at this size.",
        ],
      },
    ],
    features: [
      {
        title: "Multiplexed WebSocket",
        desc: "One connection carrying messaging, issues and presence, with backoff reconnect and per-event listener fan-out.",
      },
      {
        title: "Epoch-guarded pagination",
        desc: "Bi-directional cursor paging plus jump-to-message, with stale responses discarded by epoch comparison.",
      },
      {
        title: "Virtualized chat",
        desc: "TanStack Virtual list with manual scroll anchoring so prepending older messages doesn't jump the viewport.",
      },
      {
        title: "Floor-plan editor",
        desc: "Konva canvas with rect, circle and polygon tools over resolution-independent normalized coordinates.",
      },
      {
        title: "Issue tracker",
        desc: "Internal Jira-lite: eight statuses, priority and severity, duplicate and blocked-by relations, live comments.",
      },
      {
        title: "QR redemption",
        desc: "Door-scan workflow parsing a custom payload format, guarded by in-flight lock, cooldown and duplicate dedupe.",
      },
      {
        title: "Merch variant SKUs",
        desc: "Variant dimensions like size and colour expanded into a per-SKU matrix editor linked to inventory.",
      },
      {
        title: "Ticket transfer flow",
        desc: "On the public site: shareable transfer links with a six-state view machine and third-party detail redaction.",
      },
    ],
    stats: [
      { value: "9", label: "feature verticals owned end to end" },
      { value: "2", label: "surfaces: customer booking site and ops dashboard" },
      { value: "Live", label: "in production for real venues" },
    ],
    featured: true,
  },
  {
    slug: "algora",
    name: "Algora",
    short:
      "A competitive programming platform with a Dockerized judge, static Big-O estimation, an AI tutor and WebRTC pair-programming rooms.",
    accent: "#0D8BFF",
    dates: "June – July 2026",
    categories: "Full-Stack Platform | Systems | Real-Time",
    cover: "/covers/algora.svg",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "WebRTC"],
    links: [{ label: "GitHub", href: "https://github.com/AritraS05/Algora" }],
    sections: [
      {
        label: "Introduction",
        heading: "A judge you can trust with strangers' code",
        body: [
          "Algora is a competitive-programming practice platform: a browser IDE built on Monaco where you solve authored problems — or free-form playground code — in C++, Python and JavaScript, submitted to a judge that runs them against hidden test cases and reports verdict, runtime and peak memory.",
          "Around that core it grows a whole ecosystem: user-authored problems with hidden tests, per-problem leaderboards, an AI tutor that knows your code and your last run, and live WebRTC rooms for pairing on a problem together.",
        ],
      },
      {
        label: "Architecture",
        heading: "An asynchronous judging pipeline",
        body: [
          "Submissions never block the API. A POST writes a Processing row, runs a static complexity estimate, then pushes a JSON job onto a Redis queue. A decoupled worker pops jobs, executes the code inside an ephemeral Docker sandbox, and updates the row with per-test verdicts plus runtime and memory stats while the frontend polls for results.",
          "Leaderboards rank each user's best submission by estimated time complexity first, then raw runtime — so an O(n log n) solution beats a faster-on-tiny-inputs O(n²) one.",
        ],
      },
      {
        label: "Security",
        heading: "Sandboxed to the teeth",
        body: [
          "Every run is a throwaway container: no network, 256 MB memory with swap pinned, one CPU, a 64-process PID limit, all capabilities dropped and no-new-privileges set. Solution runs go further — read-only root filesystem, a 16 MB tmpfs, and execution as the nobody user with the code mounted read-only.",
          "Time limits are enforced twice: an in-container kill timer plus a host-side backstop. Out-of-memory kills are disambiguated from time-limit kills by checking wall-clock on exit code 137.",
        ],
      },
      {
        label: "Beyond judging",
        heading: "Tutoring and pairing built in",
        body: [
          "An AI tutor endpoint proxies to Gemini with a system prompt embedding the problem statement, your current code and the last run's summary — hints, not answers.",
          "Meetings are full-mesh WebRTC: camera, mic and screen-share negotiated peer-to-peer through a WebSocket signaling relay, with glare avoided by making existing peers always initiate offers. Media never touches the server.",
        ],
      },
    ],
    features: [
      {
        title: "Browser IDE",
        desc: "Monaco-powered editor with a free playground path and a judged path over hidden test cases.",
      },
      {
        title: "Problem authoring",
        desc: "Create problems with visible and hidden test cases; authors keep exclusive delete rights.",
      },
      {
        title: "Static Big-O estimator",
        desc: "Infers time/space complexity from loop nesting, recursion fan-out and halving patterns — without executing code.",
      },
      {
        title: "Complexity-first leaderboards",
        desc: "Best submission per user, sorted by estimated complexity class before raw runtime.",
      },
      {
        title: "AI tutor",
        desc: "Gemini-backed chat that sees the problem, your code and your last verdict.",
      },
      {
        title: "WebRTC meetings",
        desc: "Full-mesh video, voice and screen-share rooms with shareable join links per problem.",
      },
      {
        title: "Hardened auth",
        desc: "JWT + bcrypt, and password resets stored hashed in Redis with a 1-hour TTL consumed atomically.",
      },
      {
        title: "Growth charts",
        desc: "Profiles plot solve stats and complexity trends as SVG Big-O curves over time.",
      },
    ],
    stats: [
      { value: "256 MB · 1 CPU", label: "hard sandbox limits on every untrusted run" },
      { value: "3", label: "languages judged end to end: C++, Python, JavaScript" },
      { value: "P2P", label: "WebRTC media never touches the server" },
    ],
    diagramSrc: "/diagrams/algora-architecture.svg",
    featured: true,
  },
  {
    slug: "pharmaflow",
    name: "PharmaFlow",
    short:
      "A B2B pharmacy inventory and point-of-sale platform with an OCR + GenAI invoice pipeline — in closed testing with 30 stores.",
    accent: "#00A550",
    dates: "Feb – Mar 2026",
    categories: "React Native | B2B | OCR + GenAI",
    cover: "/covers/pharmaflow.svg",
    tech: ["React Native", "Expo", "Node.js", "Prisma", "PostgreSQL", "GenAI"],
    links: [
      {
        label: "Overview",
        href: "https://docs.google.com/document/d/e/2PACX-1vSXsiHnodUtbTmP-w6GRGLsBlFLORtPkdnzZ0nuI3-sjXQ3-foXrUNUb9afDFz81e_AJQ8q734y3aaL/pub",
      },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Running a medical shop from a phone",
        body: [
          "PharmaFlow digitizes the daily grind of a pharmacy: stock levels, purchase bills, supplier books, expiry tracking and the sales counter — as a React Native app backed by a JWT-secured API. It's in closed testing with 30 pharmacy stores.",
          "The dashboard answers the questions an owner actually asks each morning: what's low, what's expiring within 30 days, what needs reordering, and how sales are moving.",
        ],
      },
      {
        label: "The pipeline",
        heading: "Invoices that type themselves",
        body: [
          "Suppliers hand over dense paper invoices; typing them in is the single most hated chore in the shop. PharmaFlow captures the bill with the camera and runs it through an OCR pipeline — PaddleOCR for extraction with GenAI post-processing to normalize batch numbers, expiry dates and MRPs.",
          "Extracted line items land in an editable review screen before anything is committed, so the human stays in charge — then a confirmed bill updates inventory lots in one tap.",
        ],
      },
      {
        label: "The counter",
        heading: "Two point-of-sale modes",
        body: [
          "Stores on the automated tier tag products with QR codes: the camera scans a tag, pulls the product, and builds the cart with a debounce lock so double-scans never double-bill. The manual tier gets a fast search-driven cart instead — same sale preview and confirm flow.",
          "Access is role-scoped end to end: JWT bearer auth with automatic logout on expiry, role checks in the client, and subscription packages gating which POS mode a store unlocks.",
        ],
      },
    ],
    features: [
      {
        title: "QR point-of-sale",
        desc: "Camera-scanned product tags build the cart, with a scan lock to prevent double-billing.",
      },
      {
        title: "Bill scanning",
        desc: "Photograph a supplier invoice → OCR + GenAI extraction → editable line review → posted bill.",
      },
      {
        title: "Owner's dashboard",
        desc: "Low stock, expiring-soon (30 days), deficit reorder list and stock totals at a glance.",
      },
      {
        title: "Inventory with lots",
        desc: "Per-product stock expands into batch lots with expiry-aware disposal flows.",
      },
      {
        title: "Bills & payments",
        desc: "Purchase bills with record-payment, confirm and delete lifecycles.",
      },
      {
        title: "Sales history",
        desc: "Every sale kept with a full invoice detail view.",
      },
      {
        title: "Products & suppliers",
        desc: "Full CRUD for the catalog and the supplier book.",
      },
      {
        title: "Tiered access",
        desc: "JWT auth, role checks and subscription packages that gate QR vs manual POS.",
      },
    ],
    stats: [
      { value: "30", label: "pharmacy stores in closed testing" },
      { value: "2 tiers", label: "subscription packages gating POS capabilities" },
      { value: "180s", label: "OCR budget — big invoices parse without timeouts" },
    ],
    diagramSrc: "/diagrams/pharmaflow-pipeline.svg",
    featured: true,
  },
  {
    slug: "buyceps",
    name: "Buyceps",
    short:
      "A multimodal AI shopping assistant — text, voice or image queries answered by a multi-agent pipeline over hybrid semantic search.",
    accent: "#FA3C23",
    dates: "Jul – Aug 2025",
    categories: "AI | Multi-Agent | Semantic Search",
    cover: "/p_ai.png",
    tech: ["Next.js", "FastAPI", "Python", "GenAI"],
    links: [
      { label: "GitHub", href: "https://github.com/sparkathon221/spark-app" },
      { label: "Watch demo", href: "https://www.youtube.com/watch?v=hm43M7nThAg" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Ask for a product like you'd ask a friend",
        body: [
          "Buyceps is an AI shopping assistant that accepts text, voice and image queries and returns ranked, personalized product recommendations — type a vibe, describe it out loud, or snap a photo of the thing you want.",
          "It was built as a full-stack system: a Next.js storefront talking to a FastAPI backend that orchestrates the AI pipeline behind a single endpoint.",
        ],
      },
      {
        label: "Architecture",
        heading: "Three agents behind one endpoint",
        body: [
          "A CrewAI multi-agent pipeline splits the work: a vision-analysis agent interprets images, a product-search agent queries the catalog, and a response-generation agent writes the final recommendation — all coordinated behind one /agent/query API with parallel execution via thread pooling.",
          "Search is hybrid: MiniLM sentence-transformer embeddings indexed in FAISS, fused with Llama-4 vision features, then ranked by multi-factor relevance scoring over an Amazon catalog.",
        ],
      },
    ],
    features: [
      {
        title: "Multimodal input",
        desc: "Text, voice and image queries all resolve to the same recommendation pipeline.",
      },
      {
        title: "Multi-agent orchestration",
        desc: "Vision, search and response agents cooperate through CrewAI with parallel execution.",
      },
      {
        title: "Hybrid semantic search",
        desc: "MiniLM embeddings in FAISS fused with Llama-4 vision features.",
      },
      {
        title: "Multi-factor ranking",
        desc: "Results scored on relevance signals, not just vector distance.",
      },
      {
        title: "Single API surface",
        desc: "Everything behind one /agent/query endpoint the frontend can call simply.",
      },
      {
        title: "Personalized output",
        desc: "Recommendations phrased and ranked for the individual query, not generic lists.",
      },
    ],
    stats: [
      { value: "3", label: "cooperating CrewAI agents" },
      { value: "3 modes", label: "query by text, voice or image" },
      { value: "FAISS", label: "hybrid semantic index over an Amazon catalog" },
    ],
    diagramSrc: "/diagrams/buyceps-pipeline.svg",
    featured: true,
  },
  {
    slug: "veloxel",
    name: "VeloXel",
    short:
      "A native C++20 image-processing engine with hand-written SIMD kernels — a measured 9.6× speedup story, plus a Resolve-style grading GUI.",
    accent: "#7C3AED",
    categories: "C++20 | SIMD | Systems Engineering",
    cover: "/covers/veloxel.svg",
    tech: ["C++", "CMake", "OpenGL"],
    links: [{ label: "GitHub", href: "https://github.com/AritraS05/VeloXel" }],
    sections: [
      {
        label: "Introduction",
        heading: "How fast can one machine really go",
        body: [
          "VeloXel is a native C++20 image/frame-processing engine built around a rigorous optimization story: start from a clean scalar baseline, then earn every speedup — tiled multithreading, then hand-written SIMD — with benchmarks proving each step.",
          "The engine applies a fixed color-grading chain (ColorGrade → 3D LUT → BoxBlur → Gamma) to float-RGBA frames, and ships VeloXel Studio, a DaVinci-Resolve-styled grading GUI on top.",
        ],
      },
      {
        label: "Architecture",
        heading: "Tiles, ops and a hand-rolled thread pool",
        body: [
          "Frames live in 64-byte-aligned flat float buffers. Every processing stage implements a tile interface with an explicit aliasing contract separating in-place point ops from spatial ops that need scratch memory. A pipeline runs the chain either as a scalar reference or fanned out over 128×128 tiles through a custom condition-variable thread pool — with byte-identical output guaranteed between the two.",
          "Correctness is enforced by tooling: an image-diff utility holds every optimized path to within one 8-bit step of the scalar reference.",
        ],
      },
      {
        label: "Going wide",
        heading: "NEON and AVX2, dispatched at runtime",
        body: [
          "Per-architecture kernels are hand-vectorized: NEON on arm64 using structured de-interleaving loads, AVX2 + FMA on x86 with in-register interleaving and gathers — selected by runtime CPU detection, never coexisting in one binary.",
          "The flagship trick: a vectorized polynomial pow for gamma correction (exp2(k·log2 x) with a degree-5 minimax polynomial) that beats the libm call the auto-vectorizer can't touch — 4× on that kernel alone. The 3D LUT stage does gather-based trilinear interpolation with Resolve/Adobe .cube parsing.",
        ],
      },
      {
        label: "The studio",
        heading: "A grading UI that never blocks",
        body: [
          "VeloXel Studio is an ImGui + GLFW/OpenGL app styled after DaVinci Resolve: Lift/Gamma/Gain color wheels, a node graph with live per-stage thumbnails, RGB parade and histogram scopes, drag-and-drop images and .cube LUTs, and live switches for SIMD level and tile size.",
          "Rendering runs on a worker thread with a latest-wins mailbox, so dragging a color wheel re-renders continuously without ever freezing the UI thread.",
        ],
      },
    ],
    features: [
      {
        title: "Custom thread pool",
        desc: "Condition-variable pool fanning the frame out over 128×128 tiles with a barrier between stages.",
      },
      {
        title: "Hand-written SIMD",
        desc: "NEON and AVX2+FMA kernel translation units behind runtime CPUID dispatch.",
      },
      {
        title: "Vectorized pow",
        desc: "Degree-5 minimax polynomial gamma — 4× over libm on the same hardware.",
      },
      {
        title: "3D LUT engine",
        desc: "Gather-based trilinear interpolation with industry-standard .cube file parsing.",
      },
      {
        title: "Benchmark suite",
        desc: "Google Benchmark per-kernel and full-chain runs reporting MPix/s at 720p, 1080p and 4K.",
      },
      {
        title: "Bit-exact verification",
        desc: "img_diff tooling enforces ≤1 8-bit step deviation between scalar and optimized paths.",
      },
      {
        title: "VeloXel Studio",
        desc: "Resolve-style GUI: color wheels, node graph, scopes, drag-drop LUTs, live SIMD toggles.",
      },
      {
        title: "Cross-ISA builds",
        desc: "arm64-native with x86_64 AVX2 correctness validated under Rosetta 2.",
      },
    ],
    stats: [
      { value: "9.6×", label: "full-chain speedup at 1080p — 25 → 241 MPix/s" },
      { value: "250 MPix/s", label: "full grading chain at 4K on Apple silicon" },
      { value: "4.0×", label: "gamma kernel gain from the NEON minimax pow" },
    ],
    diagramSrc: "/diagrams/veloxel-pipeline.svg",
    featured: true,
  },

  // ─────────────────────────── Additional ───────────────────────────
  {
    slug: "aritradocs",
    name: "AritraDocs",
    short:
      "Live collaborative document tool — storing, sharing, commenting and live chat in one place.",
    accent: "#0D8BFF",
    categories: "Full-Stack | Real-Time Collaboration",
    cover: "/p1.png",
    tech: ["React", "TypeScript", "Tailwind"],
    links: [
      { label: "Live site", href: "https://docs.aritras.in" },
      { label: "GitHub", href: "https://github.com/AritraS05/AritraDocs" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Documents that feel alive",
        body: [
          "AritraDocs is a live collaborative document tool ready for storing, sharing, commenting and live chatting — everything a small team needs to work on text together, all in one place.",
        ],
      },
    ],
    features: [],
    featured: true,
  },
  {
    slug: "encrypted-chat",
    name: "Encrypted Chat",
    short: "Fully encrypted one-to-one chats on the go.",
    accent: "#00A550",
    categories: "Real-Time | Security",
    cover: "/p2.png",
    tech: ["React", "Socket.io"],
    links: [{ label: "Live site", href: "https://whatsup-u96e.onrender.com/" }],
    sections: [
      {
        label: "Introduction",
        heading: "Private by default",
        body: [
          "A chat application where one-to-one conversations are fully encrypted — enjoy private messaging on the go without trusting the middleman with your words.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
  {
    slug: "cabify",
    name: "Cabify",
    short: "Android and iOS cab-booking app with built-in live location tracking.",
    accent: "#FA3C23",
    categories: "Mobile | Geolocation",
    cover: "/p_cabify.jpg",
    tech: ["React Native"],
    links: [{ label: "GitHub", href: "https://github.com/AritraS05/cabify_app" }],
    sections: [
      {
        label: "Introduction",
        heading: "Hail a ride, watch it arrive",
        body: [
          "Cabify is a cross-platform cab-booking app for Android and iOS with built-in live location fetching — book a ride and follow it on the map in real time.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
  {
    slug: "feather",
    name: "Feather",
    short: "Make PDFs talk to you and enjoy reading interactively.",
    accent: "#7C3AED",
    categories: "AI | Documents",
    cover: "/p3.png",
    tech: ["React", "Tailwind"],
    links: [{ label: "GitHub", href: "https://github.com/AritraS05/feather" }],
    sections: [
      {
        label: "Introduction",
        heading: "Reading, but interactive",
        body: [
          "Feather turns static PDFs into something you can talk to — ask questions, get answers grounded in the document, and enjoy reading interactively instead of scrolling endlessly.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
  {
    slug: "voting-dapp",
    name: "Voting Dapp",
    short: "A decentralized voting application built on the Solana blockchain.",
    accent: "#0D8BFF",
    categories: "Web3 | Solana",
    cover: "/p4.png",
    tech: ["Solana", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/AritraS05/voting-dapp" }],
    sections: [
      {
        label: "Introduction",
        heading: "Votes nobody can quietly edit",
        body: [
          "A decentralized voting dapp built on Solana — ballots live on-chain, so results are verifiable by anyone and tamperable by no one.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
  {
    slug: "onchain-journal",
    name: "Onchain Journal",
    short: "Publish journals permanently on the Solana blockchain.",
    accent: "#00A550",
    categories: "Web3 | Solana",
    cover: "/p5.png",
    tech: ["Solana", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/AritraS05/onchain-journal" }],
    sections: [
      {
        label: "Introduction",
        heading: "Words that outlive servers",
        body: [
          "An on-chain journaling app: entries are published to the Solana blockchain, making them permanent, timestamped and censorship-resistant.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
  {
    slug: "subscription-tracker",
    name: "Subscription Tracker API",
    short:
      "An API that tracks subscriptions and emails alerts before renewals hit your card.",
    accent: "#FA3C23",
    categories: "Backend | API",
    cover: "/p6.png",
    tech: ["Node.js", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "https://github.com/AritraS05/subscription-tracker" }],
    sections: [
      {
        label: "Introduction",
        heading: "Never pay for a forgotten trial again",
        body: [
          "A custom API that maintains your subscriptions and sends email alerts before each one expires — so unwanted renewals get cancelled in time and you stay in control of the recurring bills.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
  {
    slug: "code-execution-engine",
    name: "Code Execution Engine",
    short: "A custom sandboxed environment for executing code in multiple languages.",
    accent: "#7C3AED",
    categories: "Systems | Sandboxing",
    cover: "/p_edit.png",
    tech: ["Node.js"],
    links: [
      { label: "GitHub", href: "https://github.com/AritraS05/code-execution-engine" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Run untrusted code, safely",
        body: [
          "A custom sandboxed environment for executing code in various programming languages — the same class of problem Algora's judge solves, explored as a standalone engine.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
  {
    slug: "document-validator",
    name: "Document Validator",
    short: "A data-driven document validator using GenAI models.",
    accent: "#0D8BFF",
    categories: "AI | Backend",
    cover: "/p_validator.png",
    tech: ["Python", "GenAI"],
    links: [
      { label: "GitHub", href: "https://github.com/AritraS05/ai-document-validator-backend" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Paperwork that checks itself",
        body: [
          "A data-driven document validator powered by GenAI models — documents are parsed and validated against expected structure and content automatically.",
        ],
      },
    ],
    features: [],
    featured: false,
  },
];

// Explicit display order for the featured "Selected work" grid; membership is
// still driven by the `featured` flag, this only controls sequence.
const FEATURED_ORDER = [
  "venue-ops-platform",
  "algora",
  "veloxel",
  "buyceps",
  "aritradocs",
  "pharmaflow",
];
const featuredIndex = (slug: string) => {
  const i = FEATURED_ORDER.indexOf(slug);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

export const FEATURED_PROJECTS = PROJECT_DETAILS.filter((p) => p.featured).sort(
  (a, b) => featuredIndex(a.slug) - featuredIndex(b.slug)
);
export const ADDITIONAL_PROJECTS = PROJECT_DETAILS.filter((p) => !p.featured);
