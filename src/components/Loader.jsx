export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-hero">
      <div className="flex flex-col items-center gap-4">
        <div className="loader-ring" />
        <div className="font-display text-sm tracking-widest text-muted">LOADING PORTFOLIO</div>
      </div>
    </div>
  );
}
