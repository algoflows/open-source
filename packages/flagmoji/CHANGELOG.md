# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-03-XX

### Added

- Initial release
- Support for all country flags (251 countries/territories)
- Conversion between country codes and flag emojis
- Search countries by name
- Support for both ISO 3166-1 alpha-2 and alpha-3 codes
- Country dial codes
- Full TypeScript support
- 100% test coverage
- Zero dependencies

### Features

- `countryCode()` method to get country data by ISO code
- `searchByName()` method to search countries by name
- Getters for emojis, codes, names, and unicode representations
- Complete country data including:
  - ISO 3166-1 alpha-2 codes
  - ISO 3166-1 alpha-3 codes
  - Flag emojis
  - Unicode representations
  - Country names
  - Flag titles
  - International dial codes