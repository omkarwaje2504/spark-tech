export const archivedServiceSlugs = ['deodorization', 'bleaching'] as const;

export function isArchivedServiceSlug(slug: string) {
    return archivedServiceSlugs.includes(slug as (typeof archivedServiceSlugs)[number]);
}
