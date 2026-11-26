import Link from "next/link";
import { getTrail } from "@/data/trails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function TrailStartPage({ params }: Props) {
  const { id } = await params;
  const trail = getTrail(id);

  if (!trail) {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link href="/" className="text-sm text-[var(--muted)]">
        ← All trails
      </Link>

      {/* Intro from the landscape */}
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          Start checkpoint
        </p>
        <h1 className="text-2xl font-semibold">{trail.name}</h1>
        <p className="text-[var(--muted)]">{trail.shortDescription}</p>
      </header>

      {/* Quick facts — answers common beginner questions */}
      <div className="card space-y-2 text-sm">
        <p><span className="font-medium">Difficulty:</span> {trail.difficulty}</p>
        <p><span className="font-medium">Length:</span> {trail.length}</p>
        <p><span className="font-medium">Elevation:</span> {trail.elevation}</p>
        <p><span className="font-medium">Best place to start:</span> {trail.bestStart}</p>
      </div>

      {/* The invitation */}
      <div className="card bg-[var(--accent)] text-white space-y-3">
        <p className="text-sm opacity-80">The landscape says:</p>
        <p className="text-lg leading-relaxed">
          “Walk slowly. Notice what is actually here. Take a few photos that
          tell the truth about this place — the ground, the weather, the effort —
          so the next person can prepare properly.”
        </p>
      </div>

      {/* What you will do */}
      <div className="space-y-2">
        <h2 className="font-medium">What happens next</h2>
        <ol className="text-sm text-[var(--muted)] space-y-1 list-decimal list-inside">
          <li>You receive a few simple photography prompts</li>
          <li>You walk and respond to them with photos + short notes</li>
          <li>At the end you shape a clear, useful story to share</li>
        </ol>
      </div>

      {/* Start button */}
      <Link
        href={`/trail/${trail.id}/hike`}
        className="btn w-full block text-center"
      >
        Begin the walk
      </Link>
    </div>
  );
}
