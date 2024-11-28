import { useDictStore } from '@/store/modules/dict';
import type { UnwrapNestedRefs } from 'vue';

/**
 * 获取字典数据
 */
export const useDict = <T extends string>(...args: T[]): UnwrapNestedRefs<{ [key in T]: DictDataOption[] }> => {
  const res = {} as { [key in T]: DictDataOption[] };
  return (() => {
    args.forEach(async (dictType) => {
      res[dictType] = [];
      const dicts = useDictStore().getDict(dictType);
      if (dicts) {
        res[dictType] = dicts;
      } else {
        await getDicts(dictType).then((resp) => {
          res[dictType] = resp.data.map(
            (p): DictDataOption => ({
              label: p.dictLabel,
              value: !isNaN(Number(p.dictValue)) ? Number(p.dictValue) : p.dictValue,
              elTagType: p.listClass,
              elTagClass: p.cssClass
            })
          );
          useDictStore().setDict(dictType, res[dictType]);
        });
      }
    });
    return reactive(res);
  })();
};
