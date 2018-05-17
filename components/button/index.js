import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';
import { buttonFactory } from './Button';
import { browseButtonFactory } from './BrowseButton';
import { iconButtonFactory } from './IconButton';
import themedRippleFactory from '../ripple';
import theme from './theme.css';

const Button = buttonFactory(themedRippleFactory({ centered: false }));
const IconButton = iconButtonFactory(themedRippleFactory({ centered: true }));
const BrowseButton = browseButtonFactory(themedRippleFactory({ centered: false }));
const ThemedButton = themr(BUTTON, theme)(Button);
const ThemedIconButton = themr(BUTTON, theme)(IconButton);
const ThemedBrowseButton = themr(BUTTON, theme)(BrowseButton);

export default ThemedButton;
export { ThemedButton as Button };
export { ThemedIconButton as IconButton };
export { ThemedBrowseButton as BrowseButton };
