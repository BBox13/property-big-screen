import type { ComponentInternalInstance as ComponentInstance, PropType as VuePropType } from 'vue';

declare global {
  /** vue Instance */
  declare type ComponentInternalInstance = ComponentInstance;
  /**vue */
  declare type PropType<T> = VuePropType<T>;

  /**
   * 界面字段隐藏属性
   */
  declare interface FieldOption {
    key: number;
    label: string;
    visible: boolean;
    children?: Array<FieldOption>;
  }

  /**
   * 弹窗属性
   */
  declare interface DialogOption {
    /**
     * 弹窗标题
     */
    title?: string;
    /**
     * 是否显示
     */
    visible: boolean;
  }

  declare interface UploadOption {
    /** 设置上传的请求头部 */
    headers: { [key: string]: any };

    /** 上传的地址 */
    url: string;
  }

  /**
   * 导入属性
   */
  declare interface ImportOption extends UploadOption {
    /** 是否显示弹出层 */
    open: boolean;
    /** 弹出层标题 */
    title: string;
    /** 是否禁用上传 */
    isUploading: boolean;

    /** 其他参数 */
    [key: string]: any;
  }

  /**
   * 字典数据  数据配置
   */
  declare interface DictDataOption {
    label: string;
    value: string | number;
    elTagType?: ElTagType | '';
    elTagClass?: string;
  }

  export interface BaseVo {
    createBy?: string;
    createName?: string;
    createTime?: string;
    updateName?: string;
    updateBy?: string;
    updateTime?: string;
    createDept?: string;
    createDeptName?: string;
  }

  declare interface BaseEntity {
    createBy?: string;
    createDept?: string;
    createTime?: string;
    updateBy?: string;
    updateTime?: string;
  }

  /**
   * 分页数据
   * T : 表单数据
   * D : 查询参数
   */
  declare interface PageData<T, D> {
    form: T;
    queryParams: D;
    rules: ElFormRules;
  }
  /**
   * 分页查询参数
   */
  declare interface PageQuery {
    pageNum: number;

    pageSize: number;

    createBy?: string;

    createDept?: string;

    updateBy?: string;
    /**
     * 日期范围参数
     */
    params?: any;

    /**
     * 创建时间排序
     */
    orderByCreateTime?: boolean;

    /**
     * 更新时间排序
     */
    orderByUpdateTime?: boolean;
  }

  declare interface SelectQuery {
    searchValue: string;
    pageNum: number;
    pageSize: number;
  }
}
export {};
