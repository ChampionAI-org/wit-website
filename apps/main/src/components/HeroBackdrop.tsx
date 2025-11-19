export default function HeroBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden select-none pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Fade out grid at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-wit-bg-light dark:to-zinc-950"></div>
    </div>
  );
}
