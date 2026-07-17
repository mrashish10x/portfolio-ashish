export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="blob h-[380px] w-[380px] bg-purple"
        style={{ top: "-80px", left: "-60px", animation: "blobFloat 14s ease-in-out infinite" }}
      />
      <div
        className="blob h-[320px] w-[320px] bg-mint"
        style={{ top: "120px", right: "-80px", animation: "blobFloat 18s ease-in-out infinite reverse" }}
      />
      <div
        className="blob h-[260px] w-[260px] bg-sky"
        style={{ bottom: "-60px", left: "30%", animation: "blobFloat 16s ease-in-out infinite" }}
      />
    </div>
  );
}
