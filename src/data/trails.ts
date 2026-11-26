// Simple data for the first draft.
// You can easily add more trails later by copying this pattern.

export type Prompt = {
  id: string;
  title: string;          // short label
  voice: string;          // the landscape speaking
  why: string;            // how this helps create better, more responsible content
};

export type Trail = {
  id: string;
  name: string;
  shortDescription: string;
  difficulty: string;
  length: string;
  elevation: string;
  bestStart: string;
  prompts: Prompt[];
  endTips: string[];      // human-written tips shown at the end
};

export const trails: Trail[] = [
  {
    id: "south-downs-example",
    name: "South Downs Way (Sample Section)",
    shortDescription: "A rolling chalk ridge with big skies and open views.",
    difficulty: "Moderate",
    length: "8–12 km (depending on section)",
    elevation: "Gentle climbs, some steeper sections",
    bestStart: "Check the National Trail website for the nearest car park or station",
    prompts: [
      {
        id: "p1",
        title: "The path under your feet",
        voice: "Look down. What is the ground made of right now? Chalk, mud, gravel, grass? Take a photo that shows the surface clearly.",
        why: "This helps future hikers choose the right footwear and understand what the terrain actually feels like."
      },
      {
        id: "p2",
        title: "What the sky is doing",
        voice: "Look up. Is the weather changing? Are there clouds gathering or is it staying clear? Capture the sky as it is in this moment.",
        why: "Weather is one of the biggest surprises for beginners. Real photos of conditions are more useful than perfect blue-sky shots."
      },
      {
        id: "p3",
        title: "The climb or the flat",
        voice: "Are you going up, down, or along the level? Photograph the path ahead so someone can see how steep or gentle it really is.",
        why: "Many beginners ask ‘Is the land flat?’ A photo of the actual gradient answers that better than words alone."
      },
      {
        id: "p4",
        title: "What you are carrying",
        voice: "Pause and look at your bag or the gear you brought. Take a simple photo of what you decided to bring today.",
        why: "Gear questions come up constantly. Showing real, practical kit (not just the perfect Instagram setup) helps others pack better."
      },
      {
        id: "p5",
        title: "A quiet detail",
        voice: "Find one small thing most people would walk past — a plant, a mark on a gate, the way light hits a stone. Photograph it closely.",
        why: "This slows the pace and encourages noticing the place, not just collecting views. It leads to more thoughtful posts."
      },
      {
        id: "p6",
        title: "How your body feels",
        voice: "After a while of walking, stop. How are your feet, legs, energy? Write a short note or take a photo that somehow shows how the walk is feeling.",
        why: "Honesty about effort and difficulty helps others judge whether a trail matches their fitness."
      }
    ],
    endTips: [
      "Include at least one practical detail (footwear, weather, how steep it felt, how long it took).",
      "Say what surprised you — beginners learn most from the unexpected.",
      "Avoid making the trail look easier or harder than it was.",
      "If you show gear, show what you actually used, not just the ideal kit list.",
      "A short honest caption is more useful than a long poetic one that leaves out the basics."
    ]
  }
];

export function getTrail(id: string): Trail | undefined {
  return trails.find((t) => t.id === id);
}
