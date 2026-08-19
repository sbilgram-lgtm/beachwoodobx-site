const AIRBNB_URL = 'https://www.airbnb.com/rooms/1510938870969622013'

const HIGHLIGHTS = [
  { icon: '🏖️', title: 'Walk to Beach', desc: 'Short walk to the Corolla shoreline — no car needed for a beach day.' },
  { icon: '🏊', title: 'Heated Saltwater Pool', desc: 'Private heated saltwater pool open year-round, perfect for every season.' },
  { icon: '♨️', title: 'Hot Tub', desc: 'Relax in the hot tub after a long day on the water.' },
  { icon: '⚡', title: 'EV Charging', desc: 'Dedicated EV charger on-site — arrive, plug in, and unwind.' },
  { icon: '🏡', title: 'Newer Construction', desc: 'Modern finishes, open floor plan, and well-maintained throughout.' },
  { icon: '🦺', title: 'Corolla, NC', desc: 'Northern OBX — quieter beaches, wild horses, and stunning sunrises.' },
]

const BEDROOMS = [
  { label: 'Bedroom 1', desc: 'King bed' },
  { label: 'Bedroom 2', desc: 'King bed' },
  { label: 'Bedroom 3', desc: 'Queen bed' },
  { label: 'Bedroom 4', desc: 'Queen bed' },
  { label: 'Bedroom 5', desc: 'Twin beds' },
]

const AMENITIES = [
  'Full kitchen', 'Dishwasher', 'Coffee maker', 'Grill',
  'Smart TV in every room', 'High-speed WiFi', 'Washer & dryer',
  'Central A/C & heat', 'Outdoor shower', 'Beach gear',
  'Covered deck', 'Parking for 4+ vehicles', 'EV charger',
  'Heated saltwater pool', 'Hot tub', 'Walk to beach',
]

export default function App() {
  return (
    <div className="site">

      {/* ── NAV ── */}
      <nav className="nav">
        <span className="nav-brand">Beachwood<span className="nav-obx"> OBX</span></span>
        <a href={AIRBNB_URL} target="_blank" rel="noreferrer" className="nav-cta">Book on Airbnb</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="hero-location">Corolla, Outer Banks, NC</p>
          <h1 className="hero-title">Beachwood OBX</h1>
          <p className="hero-sub">
            Newer 5-bedroom retreat steps from the beach — heated saltwater pool,
            hot tub, EV charging, and everything the Outer Banks has to offer.
          </p>
          <div className="hero-badges">
            {['5 Bedrooms', '3 Full · 2 Half Baths', 'Heated Pool', 'Walk to Beach', 'EV Charging'].map(b => (
              <span className="hero-badge" key={b}>{b}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href={AIRBNB_URL} target="_blank" rel="noreferrer" className="btn-primary">Check Availability</a>
            <a href="#highlights" className="btn-secondary">Explore the Property</a>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section" id="highlights">
        <div className="section-inner">
          <h2 className="section-title">Why Beachwood OBX?</h2>
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
          <p className="section-sub">5 bedrooms · 3 full baths · 2 half baths · sleeps up to 12</p>
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
            <h2 className="section-title">Corolla, NC</h2>
            <p className="about-text">
              Corolla sits at the northern end of the Outer Banks — quieter and less
              crowded than the towns to the south, with wide open beaches and famous
              wild horses that roam the 4WD beaches just minutes away.
            </p>
            <p className="about-text">
              You're close to the Currituck Beach Lighthouse, Whalehead Club, TimBuck II
              shops, and some of the best fishing and kiteboarding on the East Coast.
              Whether you're here for the beach, the sunrises, the seafood, or just to
              unplug — Corolla delivers.
            </p>
          </div>
          <div className="location-stats">
            {[
              { value: '~500ft', label: 'Walk to Beach Access' },
              { value: '5 min', label: 'To Wild Horse Country' },
              { value: '10 min', label: 'To Currituck Lighthouse' },
              { value: '45 min', label: 'To Manteo / Nags Head' },
            ].map(s => (
              <div className="loc-stat" key={s.label}>
                <span className="loc-stat-value">{s.value}</span>
                <span className="loc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="section-inner">
          <h2 className="cta-title">Ready to book your OBX getaway?</h2>
          <p className="cta-sub">Check availability and rates on Airbnb — instant booking available.</p>
          <a href={AIRBNB_URL} target="_blank" rel="noreferrer" className="btn-primary btn-large">
            View on Airbnb →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span>© 2026 Beachwood OBX · Corolla, NC</span>
        <span>Listed on <a href={AIRBNB_URL} target="_blank" rel="noreferrer">Airbnb</a></span>
      </footer>

    </div>
  )
}
