interface Session {
  /** The theme color */
  themeColor: string;
  // /**
  //  * the theme settings
  //  */
  // themeSettings: App.Theme.ThemeSetting;
}

interface Local {
  /** The i18n language */
  lang: App.I18n.LangType;
  /** The token */
  token: string;
  /** Fixed sider with mix-menu */
  mixSiderFixed: 'Y' | 'N';
  /** The refresh token */
  refreshToken: string;
  /** The theme color */
  themeColor: string;
  /** The theme settings */
  themeSettings: App.Theme.ThemeSetting;
  /**
   * The override theme flags
   *
   * The value is the build time of the project
   */
  overrideThemeFlag: string;
  /** The global tabs */
  globalTabs: App.Global.Tab[];
  /** The backup theme setting before is mobile */
  backupThemeSettingBeforeIsMobile: {
    layout: UnionKey.ThemeLayoutMode;
    siderCollapse: boolean;
  };
}

/** The storage type */
type StorageType = 'local' | 'session';

function createStorage<T extends object>(type: StorageType, storagePrefix: string) {
  const stg = type === 'session' ? window.sessionStorage : window.localStorage;

  const storage = {
    /**
     * Set session
     *
     * @param key Session key
     * @param value Session value
     */
    set<K extends keyof T>(key: K, value: T[K]) {
      const json = JSON.stringify(value);

      stg.setItem(`${storagePrefix}${key as string}`, json);
    },
    /**
     * Get session
     *
     * @param key Session key
     */
    get<K extends keyof T>(key: K): T[K] | null {
      const json = stg.getItem(`${storagePrefix}${key as string}`);
      if (json) {
        let storageData: T[K] | null = null;

        try {
          storageData = JSON.parse(json);
        } catch {}

        if (storageData) {
          return storageData as T[K];
        }
      }

      stg.removeItem(`${storagePrefix}${key as string}`);

      return null;
    },
    remove(key: keyof T) {
      stg.removeItem(`${storagePrefix}${key as string}`);
    },
    clear() {
      stg.clear();
    }
  };
  return storage;
}

const storagePrefix = import.meta.env.VITE_STORAGE_PREFIX || '';

export const localStg = createStorage<Local>('local', storagePrefix);

export const sessionStg = createStorage<Session>('session', storagePrefix);
