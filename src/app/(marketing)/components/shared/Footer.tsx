"use client";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big Call to Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              READY FOR YOUR <br />
              <span className="text-blue-500">SPOTLIGHT?</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-blue-600 rounded-full hover:bg-white transition-all duration-500"
          >
            <span className="text-white group-hover:text-black font-black text-center text-sm md:text-base leading-tight uppercase tracking-tighter transition-colors">
              Book <br /> Now
            </span>
            <ArrowUpRight
              className="absolute top-6 right-6 text-white group-hover:text-black transition-colors"
              size={20}
            />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-t border-white/5 pt-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black text-white tracking-tighter block">
                MOMENT OF
              </span>
              <span className="text-[10px] tracking-[0.4em] text-blue-500 uppercase font-bold -mt-1 block">
                Spotlight
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              The premier media platform for professional athletes and creators
              to share their authentic stories through cinematic 4K production.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-blue-500 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Social
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Youtube size={16} /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Twitter size={16} /> Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@momentofspotlight.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={16} /> Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium gap-4 text-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© {currentYear} Moment Of Spotlight. All rights reserved.</p>
            <span className="hidden md:block text-white/10">|</span>
            <p className="text-gray-400">
              Developed & Maintained by{" "}
              <Link
                href="https://nexico.com"
                className="text-white hover:text-blue-500 transition-colors font-bold"
              >
                Nexico
              </Link>
            </p>
          </div>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
