import React from 'react';
import './style.css';
import Erroroutline from '../../icons/Erroroutline/Erroroutline';
import ExpandlessfilledLevel1 from '../../icons/ExpandlessfilledLevel1/ExpandlessfilledLevel1';
import Morevertfilled from '../../icons/Morevertfilled/Morevertfilled';
import IconSizes from '../IconSizes/IconSizes';

interface TocItemProps {
  hasChildren?: boolean;
  chkdOutContent?: boolean;
  state: 'focused' | 'hover' | 'selected' | 'default';
  type: 'folder' | 'l-c-doc' | 'document' | 'heading';
  level: 'two' | 'four' | 'three' | 'one';
  toggleState: 'closed' | 'open';
  className?: string;
  onSelectChapter: (parentId: string, id: string) => void;
  item: {
    parent_id: string;
    id: string;
  };
  
  lineClassName: string;
  iconSizesIcon: React.ReactElement;
  text: string;
  containerClassName?: string;
  chevronClassName: string;

}

const TocItem: React.FC<TocItemProps> = ({
  hasChildren = true,
  chkdOutContent = true,
  state,
  type,
  level,
  toggleState,
  className,
  onSelectChapter,
  item,
  lineClassName,
  iconSizesIcon = (
    <ExpandlessfilledLevel1 className="expand-less-filled" color="black" opacity="0.6" />
  ),
  text = 'Item',
  containerClassName,
  chevronClassName,
  
}) => {
  const handleClick = (parentId: string, id: string) => {
    onSelectChapter(parentId, id);
  };

  return (
    <div
      className={`TOC-item ${level} ${state} ${type} ${className}`}
      onClick={() => handleClick(item.parent_id, item.id)}
    >
     <img
  className={`line ${lineClassName}`}
  alt="Line"
  src={
    state === 'hover'
      ? 'https://c.animaapp.com/JwISsgBl/img/line-1-184.svg'
      : state === 'focused'
      ? 'https://c.animaapp.com/JwISsgBl/img/line-1-176.svg'
      : state === 'selected'
      ? '' 
      : ''
  }
/>
      <div className={`container ${containerClassName}`}>
        {hasChildren && (
          <div
            className={`icon-sizes-wrapper state-0-${state} ${toggleState} type-${type} level-0-${level} ${chevronClassName}`}
          >
            <IconSizes
              className={`${toggleState === 'open' ? 'class' : 'class-2'}`}
              icon={iconSizesIcon}
              size="inherit"
            />
          </div>
        )}

        <div className="icon-and-title">
          

          <div className="text-wrapper">{text}</div>
        </div>
        {state === 'default' && (
          <>
            <>
              {chkdOutContent && (
                <div className="right-icons">
                  <IconSizes
                    className="icon-sizes-instance"
                    icon={<Erroroutline className="instance-node-2" color="black" opacity="0.26" />}
                    size="inherit"
                  />
                </div>
              )}
            </>
          </>
        )}

        {['focused', 'hover', 'selected'].includes(state) && (
          <div className="right-icons">
            <IconSizes
              className="icon-sizes-instance"
              icon={
                <Morevertfilled
                  className="instance-node-2"
                  color={['focused', 'hover'].includes(state) ? 'black' : state === 'selected' ? 'white' : undefined}
                  opacity={['focused', 'hover'].includes(state) ? '0.6' : undefined}
                />
              }
              size="inherit"
            />
            {chkdOutContent && (
              <IconSizes
                className="icon-sizes-instance"
                icon={
                  <Erroroutline
                    className="instance-node-2"
                    color={['focused', 'hover'].includes(state) ? 'black' : state === 'selected' ? 'white' : undefined}
                    opacity={['focused', 'hover'].includes(state) ? '0.26' : undefined}
                  />
                }
                size="inherit"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TocItem;
