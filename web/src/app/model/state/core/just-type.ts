export function justType<T>(type: T) {
  return () => ({ type });
}
