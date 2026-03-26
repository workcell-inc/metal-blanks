import glossaryData from "@/metal_blanks_glossary.json";

export interface GlossaryTerm {
  term: string;
  abbreviation: string | null;
  slug: string;
  natural_question: string;
  description: string;
  related_terms: string[];
}

export const glossaryTerms: GlossaryTerm[] = glossaryData as GlossaryTerm[];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getTermsBySlug(slugs: string[]): GlossaryTerm[] {
  return slugs
    .map((s) => glossaryTerms.find((t) => t.slug === s))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

/** Group terms alphabetically by first letter of term */
export function getGroupedTerms(): Record<string, GlossaryTerm[]> {
  const groups: Record<string, GlossaryTerm[]> = {};
  const sorted = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term)
  );
  for (const term of sorted) {
    const letter = term.term[0].toUpperCase();
    // Group numbers under "#"
    const key = /\d/.test(letter) ? "#" : letter;
    if (!groups[key]) groups[key] = [];
    groups[key].push(term);
  }
  return groups;
}
