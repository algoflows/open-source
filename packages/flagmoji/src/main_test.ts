import { assert, assertEquals, assertThrows } from '@std/assert';
import { flagmoji } from './main.ts';
import type { Country } from './types/types.ts';

Deno.test('EmojiFlags - data', () => {
  assert(flagmoji.data.length > 0);
  const afghanistan = flagmoji.data.find((c) => c.code === 'AF');
  assertEquals(afghanistan?.name, 'Afghanistan');
  assertEquals(afghanistan?.code3, 'AFG');
});

Deno.test('EmojiFlags - emojis', () => {
  assert(flagmoji.emojis.length > 0);
  const gbIndex = flagmoji.data.findIndex((c) => c.code === 'GB');
  assertEquals(flagmoji.emojis[gbIndex], '🇬🇧');
});

Deno.test('EmojiFlags - codes', () => {
  assertEquals(flagmoji.codes.length, 251);
  assertEquals(flagmoji.codes[201], 'SJ');
});

Deno.test('EmojiFlags - names', () => {
  assertEquals(flagmoji.names.length, 251);
  assertEquals(flagmoji.names[151], 'Mauritania');
});

Deno.test('EmojiFlags - unicodes', () => {
  assertEquals(flagmoji.unicodes.length, 251);
  assertEquals(flagmoji.unicodes[102], 'U+1F1EE U+1F1EA');
});

Deno.test('EmojiFlags - countryCode', () => {
  const denmark: Country | undefined = flagmoji.countryCode('dk');
  assertEquals(denmark?.code, 'DK');
  assertEquals(denmark?.emoji, '🇩🇰');

  const nonExistent: Country | undefined = flagmoji.countryCode('xyz');
  assertEquals(nonExistent, undefined);
});

Deno.test('EmojiFlags - countryCode with alpha-3', () => {
  // Test alpha-3 code
  const denmark: Country | undefined = flagmoji.countryCode('DNK');
  assertEquals(denmark?.code, 'DK');
  assertEquals(denmark?.code3, 'DNK');
  assertEquals(denmark?.emoji, '🇩🇰');

  // Test that both alpha-2 and alpha-3 work
  const gbAlpha2 = flagmoji.countryCode('GB');
  const gbAlpha3 = flagmoji.countryCode('GBR');
  assertEquals(gbAlpha2, gbAlpha3);

  // Test case insensitivity
  const lowercase = flagmoji.countryCode('usa');
  const uppercase = flagmoji.countryCode('USA');
  assertEquals(lowercase, uppercase);
  assertEquals(lowercase?.code, 'US');
  assertEquals(lowercase?.code3, 'USA');
});

Deno.test('EmojiFlags - searchByName', () => {
  // Test exact match
  const unitedKingdom = flagmoji.searchByName('United Kingdom');
  assertEquals(unitedKingdom.length, 1);
  assertEquals(unitedKingdom[0].code, 'GB');
  assertEquals(unitedKingdom[0].emoji, '🇬🇧');

  // Test partial match
  const united = flagmoji.searchByName('United');
  assert(united.length > 1);
  assert(united.some((country) => country.name === 'United Kingdom'));
  assert(united.some((country) => country.name === 'United States'));

  // Test case insensitive
  const denmark = flagmoji.searchByName('denmark');
  assertEquals(denmark.length, 1);
  assertEquals(denmark[0].code, 'DK');
  assertEquals(denmark[0].emoji, '🇩🇰');

  // Test no match
  const nonExistent = flagmoji.searchByName('NonExistentCountry');
  assertEquals(nonExistent.length, 0);

  // Test empty input
  assertThrows(
    () => {
      flagmoji.searchByName('');
    },
    Error,
    'Expected a country name as the first argument'
  );
});
