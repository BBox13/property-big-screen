import { themeVars } from '@/theme/vars';
import { getRgb, getColorPalette } from '@/utils/color';
// 处理主题样式
export const handleThemeStyle = (theme: string) => {
  document.documentElement.style.setProperty('--el-color-primary', theme);
  for (let i = 1; i <= 9; i++) {
    document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(theme, i / 10)}`);
  }
  for (let i = 1; i <= 9; i++) {
    document.documentElement.style.setProperty(`--el-color-primary-dark-${i}`, `${getDarkColor(theme, i / 10)}`);
  }
};

// hex颜色转rgb颜色
export const hexToRgb = (str: string): string[] => {
  str = str.replace('#', '');
  const hexs = str.match(/../g);
  for (let i = 0; i < 3; i++) {
    if (hexs) {
      hexs[i] = String(parseInt(hexs[i], 16));
    }
  }
  return hexs ? hexs : [];
};

// rgb颜色转Hex颜色
export const rgbToHex = (r: string, g: string, b: string) => {
  const hexs = [Number(r).toString(16), Number(g).toString(16), Number(b).toString(16)];
  for (let i = 0; i < 3; i++) {
    if (hexs[i].length == 1) {
      hexs[i] = `0${hexs[i]}`;
    }
  }
  return `#${hexs.join('')}`;
};

// 变浅颜色值
export const getLightColor = (color: string, level: number) => {
  const rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) {
    const s = (255 - Number(rgb[i])) * level + Number(rgb[i]);
    rgb[i] = String(Math.floor(s));
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

// 变深颜色值
export const getDarkColor = (color: string, level: number) => {
  const rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) {
    rgb[i] = String(Math.floor(Number(rgb[i]) * (1 - level)));
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

/**
 * Get css var by tokens
 *
 * @param tokens Theme base tokens
 */
function getCssVarByTokens(tokens: any) {
  const styles: string[] = [];

  function removeVarPrefix(value: string) {
    return value.replace('var(', '').replace(')', '');
  }

  function removeRgbPrefix(value: string) {
    return value.replace('rgb(', '').replace(')', '');
  }

  for (const [key, tokenValues] of Object.entries(themeVars)) {
    for (const [tokenKey, tokenValue] of Object.entries(tokenValues)) {
      let cssVarsKey = removeVarPrefix(tokenValue);
      let cssValue = tokens[key][tokenKey];

      if (key === 'colors') {
        cssVarsKey = removeRgbPrefix(cssVarsKey);
        const { r, g, b } = getRgb(cssValue);
        cssValue = `${r} ${g} ${b}`;

        const regex = /^--(\w+)-(\d+)-(\w+)$/;
        const matches = cssVarsKey.match(regex);
        if (matches) {
          const [_, colorKey, colorNumber] = matches;
          if (['primary', 'info', 'success', 'warning', 'error'].includes(colorKey) && Number(colorNumber) <= 500) {
            let number = '';
            switch (colorNumber) {
              case '400':
                number = '-light-3';
                break;
              case '300':
                number = '-light-5';
                break;
              case '200':
                number = '-light-7';
                break;
              case '100':
                number = '-light-8';
                break;
              case '50':
                number = '-light-9';
                break;
            }

            if (colorKey === 'primary') {
              document.documentElement.style.setProperty(`--el-color-${colorKey}${number}`, `rgb(${cssValue})`);
            }

            let colorName = colorKey;
            if (colorName === 'error') {
              colorName = 'danger';
            }

            // styles.push(`--el-color-${colorName}${number}: rgb(${cssValue})`);
          }
        }
      }

      styles.push(`${cssVarsKey}: ${cssValue}`);
    }
  }

  const styleStr = styles.join(';');

  return styleStr;
}

/**
 * Add theme vars to global
 *
 * @param tokens
 */
export function addThemeVarsToGlobal() {
  const colors = createThemePaletteColors({
    primary: '#409eff',
    info: '#909399',
    success: '#67c23a',
    warning: '#e6a23c',
    error: '#f56c6c'
  });

  const cssVarStr = getCssVarByTokens({ colors });
  const darkCssVarStr = getCssVarByTokens({ colors });

  const css = `
    :root {
      ${cssVarStr}
    }
  `;

  const darkCss = `
    html.dark {
      ${darkCssVarStr}
    }
  `;

  const styleId = 'theme-vars';

  const style = document.querySelector(`#${styleId}`) || document.createElement('style');

  style.id = styleId;

  style.textContent = css + darkCss;

  document.head.appendChild(style);
}

/**
 * Create theme palette colors
 *
 * @param colors Theme colors
 * @param [recommended=false] Use recommended color. Default is `false`
 */
function createThemePaletteColors(colors: Record<string, string>, recommended = false) {
  const colorKeys = Object.keys(colors);
  const colorPaletteVar = {} as Record<string, string>;

  colorKeys.forEach((key) => {
    const colorMap = getColorPalette(colors[key], recommended);

    colorPaletteVar[key] = colorMap.get(500)!;

    colorMap.forEach((hex, number) => {
      colorPaletteVar[`${key}-${number}`] = hex;
    });
  });

  return colorPaletteVar;
}
