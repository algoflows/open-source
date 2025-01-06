# @algoflows/flagmoji

A comprehensive library for working with country flag emojis in Deno. Get flag
emojis, country codes, and country information using ISO 3166-1 alpha-2 and
alpha-3 codes.

[![JSR Score](https://jsr.io/badges/@algoflows/flagmoji/score)](https://jsr.io/@algoflows/flagmoji)
[![JSR Score](https://jsr.io/badges/@algoflows/flagmoji)](https://jsr.io/@algoflows/flagmoji)
[![JSR Scope](https://jsr.io/badges/@algoflows)](https://jsr.io/@algoflows)

## Features

- 🌍 Support for all country flags (251 countries/territories)
- 🔄 Convert between country codes and flag emojis
- 🔍 Search countries by name
- 🏷️ Support for both ISO 3166-1 alpha-2 and alpha-3 codes
- 📱 Includes country dial codes
- 💪 Full TypeScript support with type definitions
- 🎯 Zero dependencies
- ✅ 100% test coverage

## Installation

```bash
deno add @algoflows/flagmoji
```

## Usage

```typescript
import { flagmoji } from "@algoflows/flagmoji";

// Get a country using ISO 3166-1 alpha-2 code (2 letters)
const denmark = flagmoji.countryCode("DK");
console.log(denmark);
// => {
//   code: "DK",
//   code3: "DNK",
//   emoji: "🇩🇰",
//   name: "Denmark",
//   unicode: "U+1F1E9 U+1F1F0",
//   title: "flag for Denmark",
//   dialCode: "+45"
// }

// Get a country using ISO 3166-1 alpha-3 code (3 letters)
const usa = flagmoji.countryCode("USA");
console.log(usa?.emoji);
// => "🇺🇸"

// Search countries by name (case-insensitive)
const islands = flagmoji.searchByName("island");
// Returns array of countries containing "island" in their name

// Get all flag emojis
console.log(flagmoji.emojis);
// => ["🇦🇨", "🇦🇩", "🇦🇪", ...]
```

## API Reference

### Types

```typescript
interface Country {
  code: string; // ISO 3166-1 alpha-2 code
  code3: string; // ISO 3166-1 alpha-3 code
  emoji: string; // Flag emoji
  unicode: string; // Unicode representation
  name: string; // Country name
  title: string; // Flag title
  dialCode?: string | null; // International dial code
}
```

### Methods

#### `flagmoji.countryCode(code: string): Country | undefined`

- Looks up a country by its ISO 3166-1 alpha-2 or alpha-3 code
- Case-insensitive
- Returns undefined if not found

#### `flagmoji.searchByName(name: string): Country[]`

- Searches countries by name
- Case-insensitive, partial match
- Returns array of matching countries

### Properties

#### `flagmoji.data: Country[]`

- Access to the complete dataset of all countries

#### `flagmoji.emojis: string[]`

- Array of all flag emojis

#### `flagmoji.codes: string[]`

- Array of all ISO 3166-1 alpha-2 codes

#### `flagmoji.names: string[]`

- Array of all country names

#### `flagmoji.unicodes: string[]`

- Array of all unicode representations

## Development

```bash
# Run tests
deno test

# Format code
deno fmt

# Lint code
deno lint
```

## License

MIT

## Author

Created by Sean Knowles ([@seanknowles](https://github.com/algoflows))
