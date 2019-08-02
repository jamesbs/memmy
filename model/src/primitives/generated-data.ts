export interface GeneratedData<T> {
  generated: T;
}

export function getGenerated<T>(generated: GeneratedData<T>): T {
  return generated.generated;
}