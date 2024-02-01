import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// combines tailwind CSS classes and provides a better utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
