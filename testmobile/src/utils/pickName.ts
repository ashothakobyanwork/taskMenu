export function pickName(uri: string): string {
  const uriSplit = uri.split('/');
  const name = uriSplit[uriSplit.length - 1];
  return name;
}
