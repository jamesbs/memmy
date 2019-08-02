export interface Identifiable {
  id: string
}

export function id(identifiable: Identifiable) {
  return identifiable.id;
}
