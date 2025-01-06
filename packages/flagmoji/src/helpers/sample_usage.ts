import { emojiFlags } from "../main.ts";

// Using ISO 3166-1 alpha-2 code
const denmark = emojiFlags.countryCode("DK");
console.log(denmark);
// => { code: "DK", code3: "DNK", emoji: "🇩🇰", ... }

// Using ISO 3166-1 alpha-3 code
const usa = emojiFlags.countryCode("USA");
console.log(usa);
// => { code: "US", code3: "USA", emoji: "🇺🇸", ... }

// Case-insensitive search
const uk = emojiFlags.countryCode("gbr");
console.log(uk);
// => { code: "GB", code3: "GBR", emoji: "🇬🇧", ... }

const france = emojiFlags.countryCode("fr")?.emoji;
console.log(france);
// => "🇫🇷"

const spain = emojiFlags.countryCode("es")?.emoji;
console.log(spain);
// => "🇪🇸"

const argentina = emojiFlags.countryCode("ar")?.emoji;
console.log(argentina);
// => "🇦🇷"

const uganda = emojiFlags.searchByName("uganda")?.[0]?.emoji;
console.log(uganda);
// => "🇺🇬"

const unknown = emojiFlags.countryCode("unknown")?.emoji;
console.log(unknown);
// => undefined
