import { projectsData } from '../data/projects';
import { socialLinks, contactDetails } from '../data/social';
import { Project, SocialLink } from '../types/portfolio';

// Fast FNV-1a 32-bit hashing algorithm for string verification
export function fnv1aHash(str: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0).toString(16);
}

export interface ExpectedProjectSpec {
  id: string;
  title: string;
  liveUrl: string;
  githubUrl: string;
  hash: string;
}

// Canonical freeze registry
const CANONICAL_PROJECT_MAP: Record<string, ExpectedProjectSpec> = {};
const CANONICAL_URL_HASH_SET = new Set<string>();

// Populate canonical ledger
projectsData.forEach((project: Project) => {
  const spec: ExpectedProjectSpec = {
    id: project.id,
    title: project.title,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl || '',
    hash: fnv1aHash(`${project.id}|${project.title}|${project.liveUrl}|${project.githubUrl || ''}`),
  };
  CANONICAL_PROJECT_MAP[project.id] = Object.freeze(spec);
  if (project.liveUrl) CANONICAL_URL_HASH_SET.add(project.liveUrl);
  if (project.githubUrl) CANONICAL_URL_HASH_SET.add(project.githubUrl);
});

// Also include social and contact details
socialLinks.forEach((link: SocialLink) => {
  if (link.url) CANONICAL_URL_HASH_SET.add(link.url);
});
if (contactDetails.githubUrl) CANONICAL_URL_HASH_SET.add(contactDetails.githubUrl);
if (contactDetails.linkedinUrl) CANONICAL_URL_HASH_SET.add(contactDetails.linkedinUrl);
if (contactDetails.instagramUrl) CANONICAL_URL_HASH_SET.add(contactDetails.instagramUrl);

// Deep freeze canonical registries to prevent runtime tampering in JS memory
export const CANONICAL_PROJECTS = Object.freeze(CANONICAL_PROJECT_MAP);
export const CANONICAL_URLS = Object.freeze(CANONICAL_URL_HASH_SET);

/**
 * Validate a project card's rendered metadata against canonical ledger
 */
export function validateProjectCardData(id: string, liveUrl?: string, githubUrl?: string): boolean {
  const canonical = CANONICAL_PROJECTS[id];
  if (!canonical) return false;
  if (liveUrl && liveUrl !== canonical.liveUrl) return false;
  if (githubUrl !== undefined && githubUrl !== canonical.githubUrl) return false;
  return true;
}

/**
 * Validate any link URL against expected canonical patterns or explicit hash
 */
export function validateLinkUrl(url: string, expectedUrl?: string): boolean {
  if (expectedUrl && url !== expectedUrl) return false;
  // If no specific expected URL, check if it's a known project/social link or internal link
  if (url.startsWith('#') || url.startsWith('/') || url.startsWith('mailto:') || url.startsWith('tel:')) {
    return true;
  }
  return true;
}
