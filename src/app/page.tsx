import HeadphoneScroll from "@/components/HeadphoneScroll";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-gradient-to-b from-[#050505] to-transparent">
        <div className="text-white font-bold text-xl tracking-tight">
          ZENITH<span className="text-white/60">X</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/60 text-sm tracking-wide">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#specs" className="hover:text-white transition-colors">Specs</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
        </div>
        <button className="px-5 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all">
          Buy Now
        </button>
      </nav>

      {/* Scrolling Headphone Experience */}
      <HeadphoneScroll />

      {/* Features Section */}
      <section id="features" className="relative bg-[#050505] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              Engineered for Excellence
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Every detail meticulously crafted for the ultimate listening experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon="🎧"
              title="Active Noise Cancellation"
              description="Advanced ANC technology blocks out 99% of ambient noise, immersing you in pure sound."
            />
            <FeatureCard
              icon="🔊"
              title="Spatial Audio"
              description="360° immersive soundstage that adapts to your head movements in real-time."
            />
            <FeatureCard
              icon="⚡"
              title="40-Hour Battery"
              description="All-day listening with quick charge — 5 minutes gives you 3 hours of playback."
            />
            <FeatureCard
              icon="🎤"
              title="Crystal Clear Calls"
              description="6-microphone array with AI-powered noise reduction for pristine voice clarity."
            />
            <FeatureCard
              icon="📱"
              title="Seamless Connectivity"
              description="Bluetooth 5.3 with multipoint connection — switch between devices effortlessly."
            />
            <FeatureCard
              icon="✨"
              title="Premium Materials"
              description="Memory foam cushions wrapped in genuine leather, titanium headband for durability."
            />
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="relative bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              Technical Specifications
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              The numbers behind the magic.
            </p>
          </div>

          {/* Hero Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            <SpecCard value="50mm" label="Driver Size" />
            <SpecCard value="40hr" label="Battery Life" />
            <SpecCard value="20Hz-40kHz" label="Frequency Range" />
            <SpecCard value="32Ω" label="Impedance" />
          </div>

          {/* Detailed Specs Table */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-6 md:p-8">
                <h3 className="text-white/40 text-sm uppercase tracking-wider mb-6">Audio</h3>
                <div className="space-y-4">
                  <SpecRow label="Driver Type" value="Dynamic, Titanium-coated" />
                  <SpecRow label="Driver Size" value="50mm" />
                  <SpecRow label="Frequency Response" value="20Hz - 40kHz" />
                  <SpecRow label="Impedance" value="32Ω" />
                  <SpecRow label="Sensitivity" value="105dB @ 1kHz" />
                  <SpecRow label="THD" value="<0.05%" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-white/40 text-sm uppercase tracking-wider mb-6">Connectivity & Power</h3>
                <div className="space-y-4">
                  <SpecRow label="Bluetooth Version" value="5.3" />
                  <SpecRow label="Bluetooth Codecs" value="LDAC, aptX HD, AAC, SBC" />
                  <SpecRow label="Battery Life (ANC On)" value="40 hours" />
                  <SpecRow label="Battery Life (ANC Off)" value="60 hours" />
                  <SpecRow label="Charging Time" value="2 hours (USB-C)" />
                  <SpecRow label="Quick Charge" value="5 min = 3 hours" />
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 p-6 md:p-8">
              <h3 className="text-white/40 text-sm uppercase tracking-wider mb-6">Physical</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SpecRow label="Weight" value="285g" />
                <SpecRow label="Foldable" value="Yes" />
                <SpecRow label="Ear Cushions" value="Memory Foam" />
                <SpecRow label="Headband" value="Titanium + Leather" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative bg-[#050505] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              What Critics Say
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Praised by the world's leading audio publications.
            </p>
          </div>

          {/* Press Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <ReviewCard
              publication="The Verge"
              rating="9.5/10"
              quote="The Zenith X sets a new standard for wireless headphones. Unmatched sound quality."
            />
            <ReviewCard
              publication="Wired"
              rating="★★★★★"
              quote="Audiophile-grade sound in a wireless package. The noise cancellation is black magic."
            />
            <ReviewCard
              publication="TechRadar"
              rating="Editor's Choice"
              quote="Premium build, premium sound, premium experience. Worth every penny."
            />
          </div>

          {/* User Reviews */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Loved by Listeners</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <span className="text-white/60 text-lg">4.9 out of 5</span>
            </div>
            <p className="text-white/40">Based on 12,847 reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UserReviewCard
              name="Alex M."
              verified={true}
              rating={5}
              title="Best headphones I've ever owned"
              review="The sound quality is absolutely incredible. I'm hearing details in my favorite songs I never knew existed. Battery life is insane too."
              date="2 days ago"
            />
            <UserReviewCard
              name="Sarah K."
              verified={true}
              rating={5}
              title="Game changer for my commute"
              review="The noise cancellation is so good I forget I'm on a crowded train. Super comfortable for long listening sessions."
              date="1 week ago"
            />
            <UserReviewCard
              name="David L."
              verified={true}
              rating={5}
              title="Worth the premium price"
              review="As an audio engineer, I'm extremely picky about sound. These headphones deliver studio-quality audio wirelessly. Impressed."
              date="2 weeks ago"
            />
            <UserReviewCard
              name="Emma R."
              verified={true}
              rating={4}
              title="Almost perfect"
              review="Amazing sound and build quality. Only minor complaint is I wish the case was a bit more compact. Otherwise, flawless."
              date="3 weeks ago"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-[#050505] via-[#0f0f0f] to-[#050505] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Ready to Hear Everything?
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Experience sound the way it was meant to be heard. Free shipping worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
              Buy Now — $499
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-white font-semibold text-lg rounded-full border border-white/30 hover:bg-white/10 transition-all">
              Compare Models
            </button>
          </div>
          <p className="text-white/40 text-sm mt-6">
            30-day money-back guarantee · 2-year warranty
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#050505] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/40 text-sm">
                <li><a href="#features" className="hover:text-white/60 transition-colors">Features</a></li>
                <li><a href="#specs" className="hover:text-white/60 transition-colors">Specifications</a></li>
                <li><a href="#reviews" className="hover:text-white/60 transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Compare</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white/60 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white/60 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white/60 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white/60 transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white font-bold text-2xl tracking-tight">
              ZENITH<span className="text-white/60">X</span>
            </div>
            <div className="flex items-center gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white/60">Privacy</a>
              <a href="#" className="hover:text-white/60">Terms</a>
              <a href="#" className="hover:text-white/60">Cookies</a>
            </div>
            <p className="text-white/40 text-sm">
              © 2024 Zenith Audio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group p-6 md:p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Spec Card Component
function SpecCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
        {value}
      </div>
      <div className="text-white/40 text-sm tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

// Spec Row Component
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white/60 text-sm">{label}</span>
      <span className="text-white font-medium text-sm">{value}</span>
    </div>
  );
}

// Review Card Component (Press)
function ReviewCard({ publication, rating, quote }: { publication: string; rating: string; quote: string }) {
  return (
    <div className="p-6 md:p-8 bg-white/5 rounded-2xl border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white font-semibold">{publication}</span>
        <span className="text-white/80 font-bold">{rating}</span>
      </div>
      <p className="text-white/60 text-sm leading-relaxed italic">"{quote}"</p>
    </div>
  );
}

// User Review Card Component
function UserReviewCard({
  name,
  verified,
  rating,
  title,
  review,
  date
}: {
  name: string;
  verified: boolean;
  rating: number;
  title: string;
  review: string;
  date: string;
}) {
  return (
    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">{name}</span>
          {verified && (
            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
              Verified
            </span>
          )}
        </div>
        <span className="text-white/40 text-sm">{date}</span>
      </div>
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-white/20'}`}>★</span>
        ))}
      </div>
      <h4 className="text-white font-medium mb-2">{title}</h4>
      <p className="text-white/60 text-sm leading-relaxed">{review}</p>
    </div>
  );
}
