# AlgoFlows Open Source Monorepo

This monorepo contains various packages and applications maintained by
AlgoFlows.

## Structure

```
monorepo/
├── packages/          # Open source libraries
│   ├── flagmoji/      # Country flag emoji utilities for Deno
│   └── [other-libs]/  # Other library packages
│
└── apps/              # Applications
    └── flagmoji-demo/ # Application projects (e.g. a demo web app)
```

## Packages

### [@algoflows/flagmoji](packages/flagmoji)

[![JSR Score](https://jsr.io/badges/@algoflows/flagmoji/score)](https://jsr.io/@algoflows/flagmoji)
[![JSR Version](https://jsr.io/badges/@algoflows/flagmoji/version)](https://jsr.io/@algoflows/flagmoji)

A comprehensive library for working with country flag emojis in Deno. Provides
utilities for:

- Converting between country codes and flag emojis
- Searching countries by name
- Supporting ISO 3166-1 alpha-2 and alpha-3 codes
- Including country dial codes

[View Package →](packages/flagmoji)

### [Other Package Name]

Brief description of other packages...

## Apps

### Flagmoji Demo

A demo web application showcasing the @algoflows/flagmoji package capabilities -
coming soon!

## Development

```bash
# Install dependencies
deno task setup

# Run tests across all packages
deno task test

# Format code
deno task fmt

# Lint code
deno task lint
```

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of
conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
