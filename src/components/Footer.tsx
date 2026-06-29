import { Facebook, Instagram } from "lucide-react";
import { navItems } from "@/components/TopBar";
import logo from "@/assets/logo.png";

const MIRPUR = "https://www.facebook.com/Furryghor";
const GULSHAN = "https://www.facebook.com/furryghorgulshan";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          Ready to book or want to talk to us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
          Reach out to our team — we'll get back to you faster than a happy puppy on a treat.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={MIRPUR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-base font-semibold text-accent-foreground shadow-warm transition hover:scale-[1.02]"
          >
            Talk to Mirpur Branch
          </a>
          <a
            href={GULSHAN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3 text-base font-semibold text-coral-foreground shadow-soft transition hover:scale-[1.02]"
          >
            Talk to Gulshan Branch
          </a>
        </div>

        <div className="mt-16 grid gap-10 border-t border-primary-foreground/15 pt-10 text-left sm:grid-cols-3">
          <div>
            <img src={logo} alt="Furryghor" className="h-12 w-auto brightness-0 invert" />
            <p className="mt-3 text-sm text-primary-foreground/70">
              Dhaka's first 5-star hostel for dogs and cats.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold">Explore</h4>
            <ul className="mt-3 flex flex-col gap-2">
              {navItems.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="inline-flex rounded-full px-3 py-1.5 text-sm font-medium text-primary-foreground/80 transition hover:bg-accent/15 hover:text-primary-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold">Follow Us</h4>
            <div className="mt-3 flex gap-3">
              <a
                href={MIRPUR}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/furryghor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Mirpur · Gulshan, Dhaka
            </p>
          </div>
        </div>
        <p className="mt-10 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Furryghor. Made with love for furbabies.
        </p>
      </div>
    </footer>
  );
}
