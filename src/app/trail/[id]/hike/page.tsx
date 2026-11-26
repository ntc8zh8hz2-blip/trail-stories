import Link from "next/link";
import { getTrail } from "@/data/trails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HikePage({ params }: Props) {
  const { id } = await params;
  const trail = getTrail(id);

  if (!trail) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href={`/trail/${trail.id}`} className="text-sm text-[var(--muted)]">
        ← Back to start
      </Link>

      <header className="space-y-1">
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          During the walk
        </p>
        <h1 className="text-xl font-semibold">{trail.name}</h1>
        <p className="text-sm text-[var(--muted)]">
          Respond to each prompt when it feels right. No need to do them all.
        </p>
      </header>

      {/* Prompts */}
      <div className="space-y-5">
        {trail.prompts.map((prompt, index) => (
          <article key={prompt.id} className="card space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-medium text-[var(--muted)]">
                Prompt {index + 1}
              </span>
              <span className="text-xs text-[var(--muted)]">{prompt.title}</span>
            </div>

            {/* The landscape speaking */}
            <p className="text-base leading-relaxed italic text-[var(--accent)]">
              “{prompt.voice}”
            </p>

            {/* Why this matters */}
            <p className="text-xs text-[var(--muted)] border-t border-gray-100 pt-2">
              Why this helps: {prompt.why}
            </p>

            {/* Simple placeholder for photo + note (first draft) */}
            <div className="pt-2 space-y-2">
              <label className="block text-xs font-medium text-[var(--muted)]">
                Your photo (optional for now)
              </label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="block w-full text-sm text-[var(--muted)]"
              />
              <label className="block text-xs font-medium text-[var(--muted)] pt-1">
                Short note (optional)
              </label>
              <textarea
                rows={2}
                placeholder="A few words about what you noticed..."
                className="w-full border border-gray-200 rounded-lg p-2 text-sm"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Go to end */}
      <div className="pt-4">
        <Link
          href={`/trail/${trail.id}/end`}
          className="btn w-full block text-center"
        >
          I’ve finished walking → End checkpoint
        </Link>
      </div>
    </div>
  );
}
