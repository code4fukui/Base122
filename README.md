# Base122

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A space efficient UTF-8 binary-to-text encoding created as an alternative to base-64 in data URIs. Base-122 is ~14% smaller than equivalent base-64 encoded data.

## Demo
The web decoder is included as a proof-of-concept, but base-122 is not recommended for use in web pages.

## Features
- More compact than base-64 encoding
- Encodes binary data to valid UTF-8 characters

## Usage
Base-122 encoding produces UTF-8 characters, but encodes more bits per byte than base-64.
```javascript
import { Base122 } from "https://code4fukui.github.io/Base122/Base122.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";
const inputData = await Deno.readFile("test/example.jpg");
const base64Encoded = Base64.encode(inputData);
const base122Encoded = Base122.encode(inputData);
console.log("Original size = " + inputData.length); // Original size = 1429
console.log("Base-64 size = " + base64Encoded.length); // Base-64 size = 1908
console.log("Base-122 size = " + base122Encoded.length); // Base-122 size = 1634
console.log("Saved " + (base64Encoded.length - base122Encoded.length) + " bytes") // Saved 274 bytes
```

## License
Not specified.