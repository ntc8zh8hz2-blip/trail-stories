import Link from "next/link";
import { trails } from "@/data/trails";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="text-center space-y-2 pt-4">
        <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
          Trail Stories
        </p>
        <h1 className="text-2xl font-semibold leading-tight">
          Walk. Notice. Tell the story properly.
        </h1>
        <p className="text-[var(--muted)] text-sm">
          A simple guide that helps you create more useful and responsible hiking content.
        </p>
      </header>

      {/* Trail list */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wide">
          Choose a trail
        </h2>

        {trails.map((trail) => (
          <Link
            key={trail.id}
            href={`/trail/${trail.id}`}
            className="block card hover:shadow-md transition-shadow"
          >
            <h3 className="font-medium text-lg">{trail.name}</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              {trail.shortDescription}
            </p>
            <div className="flex gap-3 mt-3 text-xs text-[var(--muted)]">
              <span>{trail.difficulty}</span>
              <span>·</span>
              <span>{trail.length}</span>
            </div>
          </Link>
        ))}
      </section>

      <p className="text-center text-xs text-[var(--muted)] pt-4">
        First draft — made for simplicity
      </p>
    </div>
  );
}
