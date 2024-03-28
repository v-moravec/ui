export function truncate(text: string, length: number): string {
  const clamp = '...'
  return text.length > length ? text.slice(0, length).trim() + clamp : text
}
