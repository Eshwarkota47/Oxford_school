# Oxford English Medium School - Bukkapatna (572115) 🏫✨

A state-of-the-art educational web platform built with **Next.js 16 (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons** for **Oxford English Medium School, Bukkapatna - 572115** (Sira Taluk, Tumakuru District, Karnataka).

![Oxford School Banner](/assets/images/campus_hero.jpg)

---

## 🌟 Interactive Features & Highlights

- ⚡ **Next.js 16 App Router & SSR/SSG**: Blazing-fast page load times, optimized images, and SEO metadata.
- 🌐 **Bilingual Kannada (ಕನ್ನಡ) & English Engine**: Instant language toggle with React Context.
- 📢 **Live Breaking News & Circular Ticker**: Real-time announcements for admissions, board exam results, and science expo.
- 🧮 **Interactive Dynamic Fee & Bus Estimator Tool**: Live fee calculation for all grades (Nursery to 10th Standard / SSLC) and 7 bus commute routes across Bukkapatna, Tavarekere, Sira, Borasandra & Chelur with 3-term installment breakdowns.
- 📄 **Online Admission Registration Modal**: Instant registration with dynamic token generation (`#OEMS-XXXXXX`), celebration confetti, and printable application slip.
- 🔐 **Parent & Student Portal Demo**: Attendance tracking, marks cards, homework diaries, and fee payment receipts.
- 🔬 **Campus Infrastructure**: Smart Classrooms, Composite Science Labs, Computer & AI literacy Lab, Sports Arena, and 24/7 CCTV & RO water plant.
- 🖼️ **HD Photo Gallery with Lightbox**: Interactive category filters (Campus, Academics, Sports, Cultural Fest *Samskruthi*) with fullscreen lightbox preview.
- 💬 **WhatsApp Direct Inquiry**: Floating action button with pre-filled inquiry text.
- 📍 **Interactive Location & Directions**: Campus coordinates, bus route chips, and embedded Google Maps.

---

## 📂 Project Architecture

```text
oxford-school-bukkapatna/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── campus_hero.jpg
│   │       ├── classroom.jpg
│   │       ├── cultural.jpg
│   │       └── sports.jpg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind & custom scrollbar / animations
│   │   ├── layout.tsx          # Root layout with SEO metadata & LanguageProvider
│   │   └── page.tsx            # Main dynamic single-page portal
│   ├── components/
│   │   ├── AboutSection.tsx        # School heritage & 4 core pillars
│   │   ├── AcademicsSection.tsx    # KG, Primary, Middle, High School tabs
│   │   ├── AchievementsSection.tsx # Board exam toppers & state medals
│   │   ├── AdmissionModal.tsx      # Registration form & token generator
│   │   ├── AdmissionSection.tsx    # 4-Step guide & Fee Calculator
│   │   ├── AnnouncementTicker.tsx  # Live sliding alert ticker
│   │   ├── ContactSection.tsx      # Direct inquiry form & helpdesk
│   │   ├── FacilitiesSection.tsx   # Smart class, labs, transport
│   │   ├── FaqSection.tsx          # FAQ accordions
│   │   ├── Footer.tsx              # Full sitemap & downloads
│   │   ├── GallerySection.tsx      # Lightbox photo gallery
│   │   ├── HeroSection.tsx         # Hero banner & quick admissions
│   │   ├── LocationSection.tsx     # Bus routes & Google Map embed
│   │   ├── Navbar.tsx              # Sticky header & mobile drawer
│   │   ├── NoticeBoard.tsx         # Filterable circulars & calendar
│   │   ├── ParentPortalModal.tsx   # Student/parent attendance login
│   │   ├── StatsCounter.tsx        # Key metrics counter
│   │   ├── TestimonialsSection.tsx # Parent reviews & ratings
│   │   ├── TopBar.tsx              # Contact bar & EN/KN language toggle
│   │   └── WhatsAppWidget.tsx      # Floating chat widget
│   └── context/
│       └── LanguageContext.tsx     # English & Kannada bilingual context
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Eshwarkota47/Oxford_school.git
   cd Oxford_school
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website!

---

## 📍 School Address & Recognition

- **Institution**: Oxford English Medium School
- **Address**: Main Road, Near Bus Stand, Bukkapatna - 572115, Sira Taluk, Tumakuru District, Karnataka
- **Recognition**: Govt. of Karnataka Recognised Co-Educational English Medium School
- **Admission Helplines**: +91 94482 15689 / +91 98450 78214
