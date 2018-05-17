import { themr } from 'react-css-themr';
import { NAVIGATION } from '../identifiers';
import { navigationFactory } from './Navigation';
import theme from './theme.css';

const ThemedNavigation = themr(NAVIGATION, theme)(navigationFactory());
export default ThemedNavigation;
export { ThemedNavigation as Navigation };
