export function computeCompleteness(completed: number, total: number): number {
  if (total <= 0) return 0;
  const percent = Math.round((completed / total) * 100);
  return Math.max(0, Math.min(100, percent));
}
