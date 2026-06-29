import { useEffect, useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import {
  Clock,
  ShieldCheck,
  Snowflake,
  Home as HomeIcon,
  Video,
  Car,
  Stethoscope,
  Sparkles,
  MessageCircle,
  Flame,
  TreeDeciduous,
  Users,
} from "lucide-react";



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Lightbox } from "@/components/Lightbox";

import hero from "@/assets/hero.jpg";
import serviceCatAsset from "@/assets/service-cat.jpg.asset.json";
import serviceDogAsset from "@/assets/service-dog.jpg.asset.json";
import serviceDayAsset from "@/assets/service-day.jpg.asset.json";
const serviceCat = serviceCatAsset.url;
const serviceDog = serviceDogAsset.url;
const serviceDay = serviceDayAsset.url;
import team1 from "@/assets/team-1.jpg.asset.json";
import team2 from "@/assets/team-2.jpg.asset.json";
import team3 from "@/assets/team-3.jpg.asset.json";
import team4 from "@/assets/team-4.jpg.asset.json";
import team5 from "@/assets/team-5.jpg.asset.json";
import team6 from "@/assets/team-6.jpg.asset.json";
import team7 from "@/assets/team-7.jpg.asset.json";
import team8 from "@/assets/team-8.jpg.asset.json";
import team9 from "@/assets/team-9.jpg.asset.json";
import team10 from "@/assets/team-10.jpg.asset.json";
import team11 from "@/assets/team-11.jpg.asset.json";
const teamPhotos = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11].map((a) => a.url);
import client from "@/assets/client.jpg";
const spacePhotos = Object.entries(
  import.meta.glob("@/assets/space-*.jpg.asset.json", { eager: true, import: "default" }) as Record<string, { url: string }>,
)
  .sort(([a], [b]) => {
    const n = (s: string) => parseInt(s.match(/space-(\d+)/)?.[1] ?? "0", 10);
    return n(a) - n(b);
  })
  .map(([, a]) => a.url);
const space1 = spacePhotos[0];
const space2 = spacePhotos[1];
const space3 = spacePhotos[2];
import client1 from "@/assets/client-1.jpg.asset.json";
import client2 from "@/assets/client-2.jpg.asset.json";
import client3 from "@/assets/client-3.jpg.asset.json";
import client4 from "@/assets/client-4.jpg.asset.json";
import client5 from "@/assets/client-5.jpg.asset.json";
import client6 from "@/assets/client-6.jpg.asset.json";
import client7 from "@/assets/client-7.jpg.asset.json";
import client8 from "@/assets/client-8.jpg.asset.json";
import client9 from "@/assets/client-9.jpg.asset.json";
import client10 from "@/assets/client-10.jpg.asset.json";
import client11 from "@/assets/client-11.jpg.asset.json";
import client12 from "@/assets/client-12.jpg.asset.json";
import qualityHero from "@/assets/quality-hero.jpg.asset.json";

import pressNewAge from "@/assets/press-newage.png";
import pressDailyStar from "@/assets/press-dailystar.svg";
import pressProthomAlo from "@/assets/press-prothomalo.png";

const MIRPUR = "https://www.facebook.com/Furryghor/";
const GULSHAN = "https://www.facebook.com/furryghorgulshan";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Furryghor — The First Dog & Cat Hostel in Dhaka" },
      {
        name: "description",
        content:
          "Furryghor Foster Home is a 5-star quality pet hotel in Dhaka. Cat & dog boarding, day stays, and 24/7 care across Mirpur and Gulshan.",
      },
      { property: "og:title", content: "Furryghor — The First Dog & Cat Hostel in Dhaka" },
      {
        property: "og:description",
        content: "A 5-star quality pet hotel in Dhaka. Mirpur & Gulshan branches.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <PressSection />
      <QualitySection />
      <ServicesSection />
      <FeaturesAmenitiesSection />
      <VideosSection />
      <ReviewSection />
      <TeamSection />
      <TourSection />
      <ClientsGallery />
      <FAQSection />
      <LocationSection />
      <Footer />
    </div>
  );
}


/* ─────────── Hero ─────────── */
function Hero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden sm:min-h-[520px] md:min-h-[580px]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="A happy dog and cat together at Furryghor"
          className="h-full w-full object-cover"
        />
        {/* Left-to-right gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-transparent" />
      </div>

      {/* Content — anchored left */}
      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-14 sm:px-6 md:py-20 lg:px-8 min-h-[480px] sm:min-h-[520px] md:min-h-[580px]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            5-Star Pet Hotel · Dhaka
          </span>
          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            The first <span className="text-accent">dog & cat hostel</span> in Dhaka
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Furryghor Foster Home is a 5-star quality pet hotel for your animal companions in Dhaka.
            When you are away, we take care of your furbabies with safety, security, privacy, and
            ensure a wonderful playful time for them!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GULSHAN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:scale-[1.02]"
            >
              Chat with Gulshan Branch
            </a>
            <a
              href={MIRPUR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-warm transition hover:scale-[1.02]"
            >
              Chat with Mirpur Branch
            </a>
          </div>
        </div>
      </div>

      {/* 24/7 floating badge */}
      <div className="absolute top-6 right-4 hidden rounded-2xl bg-white/90 px-5 py-4 shadow-warm backdrop-blur-sm sm:block sm:right-6 lg:right-8">
        <p className="font-display text-2xl font-bold text-primary">24/7</p>
        <p className="text-xs text-muted-foreground">Care & monitoring</p>
      </div>
    </section>
  );
}

/* ─────────── Press ─────────── */
function PressSection() {
  const press = [
    {
      logo: pressNewAge,
      alt: "New Age logo",
      quote: "“A home for pets away from home”",
      url: "https://www.newagebd.net/article/163715/furryghor-a-home-for-pets-away-from-home",
    },
    {
      logo: pressDailyStar,
      alt: "The Daily Star logo",
      quote: "“A home — For your pets”",
      url: "https://www.thedailystar.net/news/bangladesh/news/pit-stop-your-pets-2971486",
    },
    {
      logo: pressProthomAlo,
      alt: "Prothom Alo logo",
      quote: "“ইলি-বিলিদের হোটেল ‘ফারিঘর’”",
      url: "https://www.prothomalo.com/bangladesh/capital/%E0%A6%87%E0%A6%B2%E0%A6%BF-%E0%A6%AC%E0%A6%BF%E0%A6%B2%E0%A6%BF%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%B9%E0%A7%8B%E0%A6%9F%E0%A7%87%E0%A6%B2-%E0%A6%AB%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%98%E0%A6%B0",
    },
  ];
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          As featured in
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {press.map((p) => (
            <a
              key={p.alt}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:border-accent hover:shadow-warm"
            >
              <img
                src={p.logo}
                alt={p.alt}
                className="h-10 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-12"
                loading="lazy"
              />
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-primary group-hover:text-accent">
                {p.quote}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Quality ─────────── */
function QualitySection() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div className="flex justify-center">
          <img src={qualityHero.url} alt="Furryghor pet hostel interior" loading="lazy" width={900} height={900}
            className="aspect-square w-full max-w-md rounded-full object-cover shadow-warm" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Why Furryghor
          </span>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight text-primary sm:text-5xl">
            Quality pet hostel in Dhaka
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Furryghor Foster Home is a 5-star quality hotel for your animal companions. When you are
            away, we take care of your furbabies with safety, security, privacy and ensure a
            wonderful playful time for them.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["24/7 caregivers", "Private cabins", "Daily playtime", "Reasonable fees"].map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl bg-background px-4 py-3 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent">★</span>
                <span className="font-medium text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Services ─────────── */
function ServicesSection() {
  const services = [
    {
      title: "Cat Boarding",
      img: serviceCat,
      desc:
        "We provide short and long term (per night basis) stay for our furry cat friends here at Furryghor. From just a night to as many nights you need, your cat buddy will be safe & healthy with us.",
    },
    {
      title: "Dog Boarding",
      img: serviceDog,
      desc:
        "Keep your dog at our sky view mini dog apartments. Your dog gets 24/7 monitoring, a buddy to play with & his/her own litter station along with a dedicated play area.",
    },
    {
      title: "Day Stay",
      img: serviceDay,
      desc:
        "Fancy going out on a quick date or have an urgent \"thing\" to take care of and need a place for a few hours for your cat or dog? We got you covered!!",
    },
  ];
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">What we do</span>
          <h2 className="mt-3 font-display text-4xl font-black text-primary sm:text-5xl">Our services</h2>
          <p className="mt-4 text-lg text-muted-foreground">Here's a quick look of Furryghor services…</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-2 hover:shadow-warm"
            >
              <div className="relative overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={800} height={800}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Features & Amenities ─────────── */
function FeaturesAmenitiesSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Care",
      desc: "Round-the-clock caregivers keep every pet safe, fed, and comforted day and night.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      desc: "Fully monitored premises with controlled access so your pet stays protected.",
    },
    {
      icon: Snowflake,
      title: "Air-Conditioned Rooms",
      desc: "Climate-controlled cabins keep pets cool and cozy during Dhaka's hot days.",
    },
    {
      icon: HomeIcon,
      title: "Private Cabins",
      desc: "Clean, personal spaces for each guest to rest and relax without stress.",
    },
    {
      icon: Video,
      title: "CCTV Monitoring",
      desc: "Live camera coverage across our facilities for constant oversight.",
    },
    {
      icon: Car,
      title: "Pickup & Drop",
      desc: "Convenient transport options to bring your pet in and take them home safely.",
    },
    {
      icon: Stethoscope,
      title: "Vet Support",
      desc: "On-call veterinary assistance for check-ups, meds, and emergencies.",
    },
    {
      icon: Flame,
      title: "Fire Safety",
      desc: "Fire extinguishers, smoke detectors, and an emergency plan keep every guest safe.",
    },
    {
      icon: TreeDeciduous,
      title: "Rooftop Garden",
      desc: "Open-air green space for supervised play, fresh air, and sunshine breaks.",
    },
    {
      icon: Users,
      title: "Client Profiles",
      desc: "Individual pet profiles track diet, meds, habits, and owner preferences for tailored care.",
    },
  ];
  return (
    <section id="amenities" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Comfort & care</span>
          <h2 className="mt-3 font-display text-4xl font-black text-primary sm:text-5xl">Features & Amenities</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything your pet needs for a comfortable, safe, and happy stay.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-warm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Videos ─────────── */
function VideosSection() {
  const videos = ["cFYp6FPByh4", "2PfqkNvcKgw"];

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Watch</span>
          <h2 className="mt-3 font-display text-4xl font-black text-primary sm:text-5xl">
            A day at Furryghor
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {videos.map((id) => (
            <div key={id} className="overflow-hidden rounded-3xl border-4 border-background shadow-soft">
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Furryghor video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Review ─────────── */
function ReviewSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-5 md:items-center lg:px-8">
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-3xl border-4 border-background shadow-warm">
            <img src={client} alt="Munia Husnaeen" loading="lazy" width={900} height={1000}
              className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Loved by pet parents
          </span>
          <p className="mt-4 font-display text-xl leading-relaxed text-primary sm:text-2xl">
            <span className="text-5xl text-accent">“</span>
            A nice holiday home for furr babies. I found the best place where I can keep my cat safe
            and also happy while I am travelling. I kept Sophie at Furryghor for 3 nights as I went
            outside the city. She loved the place so much that when I came here, she kept playing
            totally ignoring me. She was under the care of two expert attendants for 24/7. Fee is
            very reasonable considering the care they give. If you really love your pet, you can
            spend for their best treatment, right? Best wishes for Furryghor.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <p className="font-display text-lg font-bold text-primary">— Munia Husnaeen</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Team ─────────── */
function TeamSection() {
  const slides = teamPhotos;
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <section id="team" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div className="order-2 md:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our team</span>
          <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Amazing team</h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">
            Caregiver uncles treat every pet as if it were their own. From feeding and cleaning to
            playtime and cuddles, they always go the extra mile to make every stay safe, comfortable,
            and stress-free.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
            Manager uncle and aunties are the bridge between pet parents and their furry companions,
            sharing regular updates, answering questions, and ensuring you're always connected,
            even when you're apart.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent/30 blur-2xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-4 border-primary-foreground/10 shadow-warm">
              {slides.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Furryghor team ${idx + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    idx === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === i ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Tour (Carousel) ─────────── */
function TourSection() {
  const photos = spacePhotos.map((src, i) => ({ src, alt: `Furryghor space ${i + 1}` }));
  const [open, setOpen] = useState<number | null>(null);
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false })).current;
  return (
    <section id="tour" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Step inside</span>
          <h2 className="mt-3 font-display text-4xl font-black text-primary sm:text-5xl">
            Tour our space
          </h2>
        </div>
        <div className="mt-12">
          <Carousel
            plugins={[autoplay]}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 3,
              breakpoints: {
                "(max-width: 1023px)": { slidesToScroll: 1 },
              },
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {photos.map((p, i) => (
                <CarouselItem key={i} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className="block w-full overflow-hidden rounded-3xl border-4 border-background shadow-soft transition hover:scale-[1.02]"
                  >
                    <img src={p.src} alt={p.alt} loading="lazy"
                      className="aspect-[4/3] w-full object-cover" />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-background" />
            <CarouselNext className="right-2 bg-background" />
          </Carousel>
        </div>
      </div>
      <Lightbox images={photos} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* ─────────── Clients Gallery ─────────── */
function ClientsGallery() {
  const clientAssets = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12];
  const pets = clientAssets.map((a, i) => ({
    src: a.url,
    alt: `Furryghor client pet ${i + 1}`,
  }));
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Hall of fame</span>
          <h2 className="mt-3 font-display text-4xl font-black text-primary sm:text-5xl">
            Our precious clients
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {pets.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpen(i)}
              className="group overflow-hidden rounded-2xl shadow-sm"
            >
              <img src={p.src} alt={p.alt} loading="lazy"
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
            </button>
          ))}
        </div>
      </div>
      <Lightbox images={pets} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

/* ─────────── FAQ ─────────── */
function FAQSection() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "How do I book Furryghor?",
      a: (
        <>
          You can contact{" "}
          <a href={MIRPUR} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">
            Mirpur Branch here
          </a>{" "}
          or{" "}
          <a href={GULSHAN} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline-offset-4 hover:underline">
            Gulshan Branch here
          </a>
          .
        </>
      ),
    },
    {
      q: "Do I need to provide food and litter?",
      a: "You just need to provide food (treat is on us). We also take care of the litter situation. Don't worry about that bit!",
    },
    {
      q: "I have multiple cats — will they stay in one cabin?",
      a: "If the cats are from one family, we allow them to stay together in one cabin. However, if you have more than 3 cats, we wouldn't be able to let them stay in one as the cabin will be cramped.",
    },
    {
      q: "Will my cats or dogs play with other cats / dogs?",
      a: "No. We don't allow pets from one household to play with another household's pets to avoid sudden fights, injuries and their happiness. However, they will play and cuddle with us all day.",
    },
    {
      q: "Can I get access to the CCTV?",
      a: "At this moment, we don't allow access to CCTV, however, you can message or video call us anytime and we will be able to share photos / videos. Our caregivers are in Furryghor 24/7.",
    },
    {
      q: "What do I need to have for booking?",
      a: "Parent's ID is needed (NID / Passport). And the cat / dog must be vaccinated, and should not have any disease.",
    },
  ];
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">FAQ</span>
          <h2 className="mt-3 font-display text-4xl font-black text-primary sm:text-5xl">
            Frequently asked questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-background px-5 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-bold text-primary hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─────────── Location ─────────── */
function LocationSection() {
  const locations = [
    {
      name: "Furryghor Mirpur",
      address: "80 Zoo Road, Mirpur 1216, Dhaka",
      map: "https://www.google.com/maps?q=80+Zoo+Road+Mirpur+1216+Dhaka&output=embed",
      cta: MIRPUR,
    },
    {
      name: "Furryghor Gulshan",
      address: "205/1 Tejgaon Link Road, Dhaka",
      map: "https://www.google.com/maps?q=205/1+Tejgaon+Link+Road+Dhaka&output=embed",
      cta: GULSHAN,
    },
  ];
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Visit us</span>
          <h2 className="mt-3 font-display text-4xl font-black text-primary sm:text-5xl">Our location</h2>
          <p className="mt-4 text-lg text-muted-foreground">Two branches across Dhaka. Drop by anytime.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.name} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={loc.map}
                  title={loc.name}
                  loading="lazy"
                  className="h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary">{loc.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{loc.address}</p>
                </div>
                <a
                  href={loc.cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-warm transition hover:scale-[1.03]"
                >
                  Chat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
