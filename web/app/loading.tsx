export default function Loading() {
  return (
    <div
      className="grid place-items-center gap-3 py-24"
      role="status"
      aria-live="polite"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-brand-400" />
      {/* Hidden by default so the no-preference experience is unchanged;
          revealed only when the user prefers reduced motion, where a static
          spinner on its own is not enough to communicate "loading". */}
      <span className="sr-only motion-reduce:not-sr-only text-sm text-slate-400">
        Loading…
      </span>
    </div>
  );
}
