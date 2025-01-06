/**
 * Represents a country with its associated flag emoji and other details.
 */
export interface Country {
  code: string;
  code3: string;
  emoji: string;
  unicode: string;
  name: string;
  title: string;
  dialCode?: string | null;
}
