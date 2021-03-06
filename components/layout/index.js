import { themr } from 'react-css-themr';
import { LAYOUT } from '../identifiers';
import { sidebarFactory } from './Sidebar';
import { navDrawerFactory } from './NavDrawer';
import { Panel } from './Panel';
import { Drawer } from '../drawer';
import theme from './theme.css';

const injectTheme = component => themr(LAYOUT, theme)(component);
const ThemedNavDrawer = injectTheme(navDrawerFactory(Drawer));
const ThemedSidebar = injectTheme(sidebarFactory(Drawer));
const ThemedPanel = injectTheme(Panel);

export { ThemedSidebar as Sidebar };
export { ThemedNavDrawer as NavDrawer };
export { ThemedPanel as Panel };
