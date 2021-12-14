import { InjectionKey, VNodeTypes } from 'vue';
import { MenuData, MenuProps } from './interface';

export const MenuInjectionKey: InjectionKey<MenuContext> =
  Symbol('MenuInjectionKey');

export type MenuContext = Readonly<
  Pick<
    MenuProps,
    | 'mode'
    | 'theme'
    | 'levelIndent'
    | 'autoScrollIntoView'
    | 'scrollConfig'
    | 'inTrigger'
    | 'triggerProps'
    | 'tooltipProps'
  > & {
    selectedKeys: string[];
    openKeys: string[];
    prefixCls: string;
    collapsed: boolean;
    expandIconDown?: () => VNodeTypes;
    expandIconRight?: () => VNodeTypes;
    onSubMenuClick?: (key: string, level: number) => void;
    onMenuItemClick?: (key: string) => void;
  }
>;

export const LevelInjectionKey: InjectionKey<LevelContext> =
  Symbol('LevelInjectionKey');

export type LevelContext = Readonly<{
  level: number;
}>;

export type MenuMapType = Map<string, string[]>;

export const DataCollectorInjectionKey: InjectionKey<DataCollectorContext> =
  Symbol('DataCollectorInjectionKey');

export type DataCollectorContext = Readonly<{
  collectSubMenu: (key: string, children: MenuData) => void;
  removeSubMenu: (key: string) => void;
  collectMenuItem: (key: string) => void;
  removeMenuItem: (keys: string) => void;
  reportMenuData: (data: MenuData) => void;
}>;
