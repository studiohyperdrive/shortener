<h1 align="center">
Shortener
</h1>

<p align="center">
<a href="#"><img src="https://img.shields.io/npm/v/@studiohyperdrive/shortener.svg?colorB=1C1676"></a>
<a href="#"><img src="https://img.shields.io/npm/dt/@studiohyperdrive/shortener.svg?colorB=785FC8"></a>
<a href="#"><img src="https://img.shields.io/bundlephobia/min/@studiohyperdrive/shortener.svg?colorB=82BBED"></a>
<a href="#"><img src="https://img.shields.io/badge/coverage-100%25-green.svg?colorB=FB9ED8"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=F342D7"></a>
</p>

<br>

<p align="center">
  <b>Light-weight JavaScript utility to create an url shortener with</b>
  <br>
  <sub>Only ~3.5kb, no external dependencies, supports NodeJS 6+ and ES2015+</sub>
</p>

<br>

-   **Lightweight:** ~3.5kb in size, vanilla JavaScript and no external dependencies 🐜
-   **Fast:** generates 100 shortened urls in less than 5ms 🚤
-   **Configurable:** lends ultimate control over the output format of the shortened urls 🛠️
-   **Tested:** 100% code coverage 🎉
-   **MIT Licensed:** free for personal and commercial use ❤️

* * *

## How to install

Install with:
- NPM: `npm install @studiohyperdrive/shortener`
- Yarn: `yarn add @studiohyperdrive/shortener`

## How to use

### CommonJS (Node 6+)

```javascript
const Shortener = require("@studiohyperdrive/shortener")
```

### ESModule  (ES2015+)

```javascript
import Shortener from "@studiohyperdrive/shortener"
```

### Configuration

An instance of the shortener can be created by calling the constructor with a configuration.

```javascript
const shortener = new Shortener(configuration)
```

The following parameters are accepted in the configuration:

| Key                         | Description                                                                                                                                                                                                                                                         | Default  |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| `target`<sup>required</sup> | A valid url to append the shortened id to, by default the id is added at the end of the url. <br><br> Optionally, you can pass a placeholder `{id}` to reposition the id anywhere in the url. <br> Example: `https://short.er?id={0}` → `https://shorter?id=SP4C3`  | none     |
| `length`                    | Length of the shortened id.                                                                                                                                                                                                                                         | 5        |
| `alphabet`                  | Alphabet with allowed characters for generating the shortened id, <br> you can also choose one of the included [presets](#presets).                                                                                                                                 | `base58` |

Example:

```javascript
const shortener = new Shortener({
  target: "https://short.er"
  length: 6,
  alphabet: "0123456789abcdefABCDEF"
})
```

### Presets

The `alphabet` parameter accepts multiple presets:

| Name           | Value                                                            |
| -------------- | ---------------------------------------------------------------- |
| `alphanumeric` | `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789` |
| `alphabetic`   | `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`           |
| `numeric`      | `0123456789`                                                     |
| `base58`       | `abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789`     |
| `base56`       | `abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789`       |
| `base32`       | `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`                           |
| `base16`       | `ABCDEF0123456789`                                               |

Example:

```javascript
const shortener = new Shortener({
  target: "https://short.er"
  alphabet: "alphanumeric"
})
```

### `.shorten(url)`

Shortens a given url.

Example:

```javascript
const result = shortener.shorten("https://www.google.com");
```

`result` output:

```javascript
{
  id: "6VYN9",
  original: "https://www.google.com",
  target: "https://short.er/6VYN9"
}
```

### `.getInfo()`

Gets information about the current configuration

Example:

```javascript
const info = shortener.getInfo();
```

`info` output:

```javascript
{
  config: {
    target: 'https://short.er',
    length: 5,
    alphabet: 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789'
  },
  collisionInfo: {
    // The amount of unique shortened id's that can be generated
    // with the current configuration of length & alphabet
    possibilities: 656356768,

    //The probability of generating a non-unique shortened id
    probability: 1.5235616493254474e-9
  }
}
```

## Examples

A minimal usage example for Express + Mongoose can be found [here](./examples/express-mongoose/README.MD)

## Contributing

Feel free to provide feedback, open issues or create pull-requests to this repository.

## License

Shortener is [MIT licensed](./LICENSE) by [Studio Hyperdrive](https://www.studiohyperdrive.be/).
