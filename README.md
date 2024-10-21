
# All Color Converter

A versatile color converter package that supports conversions between RGB, Hex, and HSL color formats.

## Features

- Convert RGB to Hex
- Convert Hex to RGB
- Convert RGB to HSL
- Convert HSL to RGB

## Installation

To install this package, use npm:

```bash
npm install all-color-converter
```

## Usage

Once installed, you can import the `ColorConverter` class and use its methods to convert between color formats.

### Example Usage:

```javascript
const ColorConverter = require('all-color-converter');


// Convert RGB to Hex
console.log(ColorConverter.rgbToHex(255, 99, 71)); // Output: #FF6347

// Convert Hex to RGB
console.log(ColorConverter.hexToRgb('#FF6347'));   // Output: { r: 255, g: 99, b: 71 }

// Convert RGB to HSL
console.log(ColorConverter.rgbToHsl(255, 99, 71)); // Output: { h: 9, s: 100, l: 64 }

// Convert HSL to RGB
console.log(ColorConverter.hslToRgb(9, 100, 64));  // Output: { r: 255, g: 99, b: 71 }
```

### Conversion Functions

1. **RGB to Hex**
   - Converts RGB values (r, g, b) to a hexadecimal color code.
   - Example: `rgbToHex(255, 99, 71)` returns `#FF6347`.

2. **Hex to RGB**
   - Converts a hexadecimal color code to RGB values.
   - Example: `hexToRgb('#FF6347')` returns `{ r: 255, g: 99, b: 71 }`.

3. **RGB to HSL**
   - Converts RGB values (r, g, b) to HSL format.
   - Example: `rgbToHsl(255, 99, 71)` returns `{ h: 9, s: 100, l: 64 }`.

4. **HSL to RGB**
   - Converts HSL values (h, s, l) to RGB format.
   - Example: `hslToRgb(9, 100, 64)` returns `{ r: 255, g: 99, b: 71 }`.


## Version

**1.0.0**  
-- Initial release

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contribution

Feel free to open issues or submit pull requests for any improvements. All contributions are welcome!

---

### Author

**Masum Billah**

*Software Developer*