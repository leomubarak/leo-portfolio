/**
 * Joins class names and drops falsy values. Accepts nested arrays so a
 * component can group related classes without building strings by hand.
 * Deliberately dependency-free — the project does not need clsx for this.
 */
export type ClassValue = string | number | null | undefined | false | ClassValue[];

export function cn(...classes: ClassValue[]): string {
  const output: string[] = [];

  for (const entry of classes) {
    if (!entry) continue;
    if (Array.isArray(entry)) {
      const nested = cn(...entry);
      if (nested) output.push(nested);
    } else {
      output.push(String(entry));
    }
  }

  return output.join(' ');
}
