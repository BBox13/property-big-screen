import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'node:path';
export default (viteEnv: any) => {
  const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  /** The name of the local icon collection */
  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');

  return createSvgIconsPlugin({
    iconDirs: [localIconPath],
    symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
    inject: 'body-last',
    customDomId: '__SVG_ICON_LOCAL__'
  });
};
