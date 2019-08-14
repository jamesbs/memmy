export function props<P extends object>() {
  return <T extends string>(type: T) => (props: P) => ({
    type,
    ...props
  });
}
