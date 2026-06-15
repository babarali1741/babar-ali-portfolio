import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 bg-[#04050b] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <div className="font-display text-lg font-bold">
          BABAR <span className="gradient-text">ALI</span>
        </div>
        <p className="text-sm text-muted">Let's build something amazing.</p>
        <p className="text-xs text-muted">
          Designed & Developed by Babar Ali <Heart className="inline -mt-0.5" size={12} /> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
