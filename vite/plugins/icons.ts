import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import path from 'node:path';

export default (viteEnv: any) => {
  const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  /** The name of the local icon collection */
  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');
  return Icons({
    // 自动安装图标库
    autoInstall: true,
    compiler: 'vue3',
    customCollections: {
      [collectionName]: FileSystemIconLoader(localIconPath, (svg) => svg.replace(/^<svg\s/, '<svg width="1em" height="1em" '))
    },
    scale: 1,
    defaultClass: 'inline-block'
  });
};
