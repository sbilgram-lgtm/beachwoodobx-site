const AIRBNB_URL = 'https://www.airbnb.com/rooms/1510938870969622013'
const HOUFY_URL  = 'https://www.houfy.com/lodging/5br-corolla-oceanside-pool-hot-tub-game-room/249324'
const VRBO_URL   = 'https://www.vrbo.com/4938792'
const EMAIL      = 'beechwoodobx@yahoo.com'

const HIGHLIGHTS = [
  { icon: '🏖️', title: 'Walk to Beach',          desc: '~3 min walk to private Ocean Sands beach access — bring the beach trolley included with your stay.' },
  { icon: '🏊', title: 'Heated Saltwater Pool',  desc: 'Private saltwater pool open April–October. Optional heat available ($45/night or $275/week).' },
  { icon: '♨️', title: 'Hot Tub',                desc: 'Year-round hot tub — perfect for cool OBX evenings after a day at the beach.' },
  { icon: '🕹️', title: 'Game Room',              desc: '60-game multicade arcade, foosball table, flat-screen TV, and beverage fridge. Ping pong under the carport.' },
  { icon: '⚡', title: 'EV Charging',            desc: 'Dedicated EV charger in the carport — arrive, plug in, and unwind.' },
  { icon: '🏡', title: 'Custom-Built 2023',      desc: '2,300 sq ft of modern finishes, open floor plan, and deck access from every bedroom.' },
]

const BEDROOMS = [
  { label: 'Bedroom 1', desc: 'King bed' },
  { label: 'Bedroom 2', desc: 'King bed' },
  { label: 'Bedroom 3', desc: 'King bed' },
  { label: 'Bedroom 4', desc: 'Queen bed' },
  { label: 'Bedroom 5', desc: 'Twin beds (×2)' },
]

const AMENITIES = [
  'Full kitchen', 'Dishwasher', 'K-Cup + drip coffee maker', 'Gas grill',
  'Smart TV in every room', 'High-speed WiFi', 'Washer & dryer',
  'Central A/C & heat', 'Outdoor shower', 'Beach gear & trolley',
  'Covered deck', 'Deck access from every bedroom', 'Parking for 4+ vehicles',
  'EV charger', 'Heated saltwater pool (Apr–Oct)', 'Year-round hot tub',
  'Game room (arcade, foosball)', 'Ping pong table', 'Community tennis & basketball',
  'Pack \'n Play & high chair', 'Beverage & wine fridge',
]

const BOOKING_OPTIONS = [
  {
    platform: 'Houfy',
    logo: '🔑',
    desc: 'Book through Houfy — a secure booking platform with lower fees than Airbnb, same great property.',
    url: HOUFY_URL,
    cta: 'Book on Houfy',
    featured: true,
  },
  {
    platform: 'Airbnb',
    logo: '🏠',
    desc: 'Book with Airbnb\'s secure payment, guest protection, and instant booking.',
    url: AIRBNB_URL,
    cta: 'View on Airbnb',
  },
  {
    platform: 'VRBO',
    logo: '🏖️',
    desc: 'Book through VRBO — trusted vacation rental platform with secure payments and 24/7 support.',
    url: VRBO_URL,
    cta: 'View on VRBO',
  },
]

export default function App() {
  return (
    <div className="site">

      {/* ── NAV ── */}
      <nav className="nav">
        <span className="nav-brand">Beachwood<span className="nav-obx"> OBX</span></span>
        <div className="nav-links">
          <a href="#book" className="nav-cta">Check Availability</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="hero-location">Corolla · Ocean Sands Section F · Outer Banks, NC</p>
          <h1 className="hero-title">Beach Wood OBX</h1>
          <p className="hero-sub">
            Custom-built 2023 · 5 bedrooms · sleeps 10 · private saltwater pool,
            hot tub, game room, and a 3-minute walk to private beach access.
          </p>
          <div className="hero-badges">
            {['5 BR · Sleeps 10', '3 Kings · 1 Queen · 2 Twins', 'Heated Pool', 'Game Room', 'EV Charging', 'Walk to Beach'].map(b => (
              <span className="hero-badge" key={b}>{b}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#book" className="btn-primary">Check Availability</a>
            <a href="#highlights" className="btn-secondary">Explore the Property</a>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section" id="highlights">
        <div className="section-inner">
          <h2 className="section-title">Why Beach Wood OBX?</h2>
          <p className="section-sub">Everything you need for the perfect Outer Banks vacation.</p>
          <div className="highlights-grid">
            {HIGHLIGHTS.map(h => (
              <div className="highlight-card" key={h.title}>
                <span className="highlight-icon">{h.icon}</span>
                <h3 className="highlight-title">{h.title}</h3>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEDROOMS ── */}
      <section className="section section-alt" id="bedrooms">
        <div className="section-inner">
          <h2 className="section-title">Sleeping Arrangements</h2>
          <p className="section-sub">5 bedrooms · 3 full baths · 2 half baths · sleeps 10 · 2,300 sq ft</p>
          <div className="bedrooms-grid">
            {BEDROOMS.map(b => (
              <div className="bedroom-card" key={b.label}>
                <span className="bedroom-icon">🛏️</span>
                <p className="bedroom-label">{b.label}</p>
                <p className="bedroom-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="section" id="amenities">
        <div className="section-inner">
          <h2 className="section-title">Amenities</h2>
          <div className="amenities-grid">
            {AMENITIES.map(a => (
              <div className="amenity-item" key={a}>
                <span className="amenity-check">✓</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="section section-alt" id="location">
        <div className="section-inner location-inner">
          <div className="location-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Corolla, NC</h2>
            <p className="about-text">
              Corolla sits at the northern end of the Outer Banks — quieter and less
              crowded than the towns to the south, with wide open beaches and famous
              wild horses that roam the 4WD beaches just minutes away.
            </p>
            <p className="about-text">
              Beach Wood OBX is in Ocean Sands Section F, with private beach access
              just a 3-minute walk away. You're also close to the Currituck Beach
              Lighthouse, Whalehead Club, TimBuck II shops, and some of the best
              fishing and kiteboarding on the East Coast.
            </p>
          </div>
          <div className="location-stats">
            {[
              { value: '~3 min',  label: 'Walk to Private Beach' },
              { value: '5 min',   label: 'To Wild Horse Country' },
              { value: '10 min',  label: 'To Currituck Lighthouse' },
              { value: '45 min',  label: 'To Manteo / Nags Head' },
            ].map(s => (
              <div className="loc-stat" key={s.label}>
                <span className="loc-stat-value">{s.value}</span>
                <span className="loc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="section" id="book">
        <div className="section-inner">
          <h2 className="section-title">Reserve Your Stay</h2>
          <p className="section-sub">Book through your preferred platform — same property, same great experience.</p>
          <div className="booking-grid">
            {BOOKING_OPTIONS.map(b => (
              <div className={`booking-card${b.featured ? ' booking-card-featured' : ''}`} key={b.platform}>
                {b.featured && <span className="booking-badge">Best Rate</span>}
                <span className="booking-logo">{b.logo}</span>
                <h3 className="booking-platform">{b.platform}</h3>
                <p className="booking-desc">{b.desc}</p>
                <a href={b.url} target="_blank" rel="noreferrer" className={b.featured ? 'btn-primary' : 'btn-outline'}>
                  {b.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section section-alt" id="contact">
        <div className="section-inner contact-inner">
          <h2 className="section-title">Questions? Get in Touch</h2>
          <p className="section-sub">
            Have a question about the property, availability, or want to discuss a longer stay?
            Reach out directly — we'd love to hear from you.
          </p>
          <a href={`mailto:${EMAIL}`} className="contact-email">
            <span className="contact-icon">✉️</span>
            {EMAIL}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span>© 2026 Beach Wood OBX · Corolla, NC</span>
        <span>
          <a href={HOUFY_URL} target="_blank" rel="noreferrer">Houfy</a>
          {' · '}
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer">Airbnb</a>
          {' · '}
          <a href={VRBO_URL} target="_blank" rel="noreferrer">VRBO</a>
          {' · '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </span>
      </footer>

    </div>
  )
}
