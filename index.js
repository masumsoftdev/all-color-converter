class ColorConverter {
    // Convert RGB to Hex
    static rgbToHex(r, g, b) {
      if ([r, g, b].some(x => x < 0 || x > 255)) {
        throw new Error('Invalid RGB color component');
      }
      return `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
    }
  
    // Convert Hex to RGB
    static hexToRgb(hex) {
      if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        throw new Error('Invalid hex color');
      }
  
      let expandedHex = hex.length === 4
        ? `#${[1, 2, 3].map(i => hex[i] + hex[i]).join('')}`
        : hex;
  
      let bigint = parseInt(expandedHex.slice(1), 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;
  
      return { r, g, b };
    }
  
    // Convert RGB to HSL
    static rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
  
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
  
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
          default: break;
        }
  
        h /= 6;
      }
  
      return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
      };
    }
  
    // Convert HSL to RGB
    static hslToRgb(h, s, l) {
      s /= 100;
      l /= 100;
  
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = l - c / 2;
  
      let r = 0, g = 0, b = 0;
      if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
      } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
      } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
      } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
      } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
      } else if (h >= 300 && h < 360) {
        r = c; g = 0; b = x;
      }
  
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
  
      return { r, g, b };
    }
  
    // Add more conversions if needed, such as RGB to CMYK, etc.
  }
  
  module.exports = ColorConverter;
  