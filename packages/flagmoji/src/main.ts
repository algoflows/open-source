import type { Country } from "./types/types.ts";
import data from "./data/data.json" with { type: "json" };

/**
 * A class for working with country flag emojis.
 */
export class EmojiFlags {
  /**
   * The entire dataset of countries.
   */
  readonly data: Country[] = data as Country[];

  /**
   * Get the country object for a given country code.
   * @param code The ISO 3166-1 alpha-2 or alpha-3 country code.
   * @returns The country object, or undefined if not found.
   */
  countryCode(code: string): Country | undefined {
    if (!code) {
      throw new Error("Expected a country code as the first argument");
    }

    const upperCode = code.toUpperCase();
    return this.data.find((country) =>
      country.code === upperCode || country.code3 === upperCode
    );
  }

  /**
   * Search for countries by name.
   * @param name The country name to search for.
   * @returns An array of matching country objects.
   */
  searchByName(name: string): Country[] {
    if (!name) {
      throw new Error("Expected a country name as the first argument");
    }
    const searchTerm = name.toLowerCase();
    return this.data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Get an array of all emojis.
   */
  get emojis(): string[] {
    return this.data.map((country) => country.emoji);
  }

  /**
   * Get an array of all country codes.
   */
  get codes(): string[] {
    return this.data.map((country) => country.code);
  }

  /**
   * Get an array of all country names.
   */
  get names(): string[] {
    return this.data.map((country) => country.name);
  }

  /**
   * Get an array of all emojis represented as unicode.
   */
  get unicodes(): string[] {
    return this.data.map((country) => country.unicode);
  }
}

/**
 * A singleton instance of the EmojiFlags class.
 */
export const emojiFlags = new EmojiFlags();
