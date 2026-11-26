import Link from "next/link";
import { getTrail } from "@/data/trails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EndPage({ params }: Props) {
  const { id } = await params;
  const trail = getTrail(id);

  if (!trail) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href={`/trail/${trail.id}/hike`} className="text-sm text-[var(--muted)]">
        ← Back to prompts
      </Link>

      <header className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          End checkpoint
        </p>
        <h1 className="text-2xl font-semibold">Shape your story</h1>
        <p className="text-[var(--muted)] text-sm">
          Use what you noticed to make a post that actually helps the next person.
        </p>
      </header>

      {/* Human-written tips */}
      <div className="card space-y-3">
        <h2 className="font-medium">A few simple reminders</h2>
        <ul className="space-y-2 text-sm">
          {trail.endTips.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--accent)]">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Simple form for the final post */}
      <div className="card space-y-4">
        <h2 className="font-medium">Your post draft</h2>

        <div>
          <label className="block text-xs font-medium text-[var(--muted)] mb-1">
            Short title or first line
          </label>
          <input
            type="text"
            placeholder="e.g. Muddy boots and big skies on the South Downs"
            className="w-full border border-gray-200 rounded-lg p-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[var(--muted)] mb-1">
            Caption — try to include one practical detail
          </label>
          <textarea
            rows={5}
            placeholder="What was the ground like? How hard did it feel? What would you tell a beginner?"
            className="w-full border border-gray-200 rounded-lg p-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[var(--muted)] mb-1">
            Add the photos you want to keep
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="block w-full text-sm text-[var(--muted)]"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button className="btn w-full">
          Save my story (coming soon)
        </button>
        <Link
          href={`/trail/${trail.id}/stories`}
          className="btn-outline btn w-full block text-center"
        >
          See stories from this trail
        </Link>
      </div>

      <p className="text-xs text-center text-[var(--muted)]">
        In the next version we will actually store and show the stories.
      </p>
    </div>
  );
}
