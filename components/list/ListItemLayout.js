import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { LIST } from '../identifiers';
import InjectListItemContent from './ListItemContent';
import InjectListItemActions from './ListItemActions';

const factory = (ListItemContent, ListItemActions) => {
  const ListItemLayout = (props) => {
    const className = classnames(props.theme.item, {
      [props.theme.disabled]: props.disabled,
      [props.theme.selectable]: props.selectable,
    }, props.className);

    const leftActions = [
      ...props.leftActions,
    ];
    const rightActions = [
      ...props.rightActions,
    ];
    const emptyActions = item => !item[0] && !item[1] && !item[2];
    const content = props.itemContent || (
      <ListItemContent theme={props.theme} caption={props.caption} legend={props.legend} />
    );

    return (
      <span className={className}>
        {!emptyActions(leftActions) > 0 && <ListItemActions type="left" theme={props.theme}>{leftActions}</ListItemActions>}
        {content}
        {!emptyActions(rightActions) > 0 && <ListItemActions type="right" theme={props.theme}>{rightActions}</ListItemActions>}
      </span>
    );
  };

  ListItemLayout.propTypes = {
    caption: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    itemContent: PropTypes.element,
    leftActions: PropTypes.arrayOf(PropTypes.node),
    legend: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    rightActions: PropTypes.arrayOf(PropTypes.node),
    selectable: PropTypes.bool,
    theme: PropTypes.shape({
      disabled: PropTypes.string,
      item: PropTypes.string,
      selectable: PropTypes.string,
    }),
  };

  ListItemLayout.defaultProps = {
    disabled: false,
    selectable: false,
  };

  return ListItemLayout;
};

const ListItemLayout = factory(InjectListItemContent, InjectListItemActions);
export default themr(LIST)(ListItemLayout);
export { factory as listItemLayoutFactory };
export { ListItemLayout };
