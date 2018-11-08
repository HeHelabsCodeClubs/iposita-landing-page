import React from 'react';
import ImageComponent from './ImageComponent';

const renderTextContainer = (containerClass, containerContent, isBlur) => {
    if (isBlur) {
        return (
            <div className={containerClass}>
                &nbsp;
            </div>
        );
    }

    return (
        <div className={containerClass}>
             {containerContent}
        </div>
     );
};

const Jumbo = (props) => {
    const className = (props.addc !== undefined) ? (`image-c ${props.addc}`) : 'image-c';
    const blurClass = props.backgroundImageIsBlur ? 'has-blur' : '';
    const isBlur = props.backgroundImageIsBlur ? true : false;
    const textContainerClass = `text-container ${blurClass}`;
    const textContainerChildren = props.children;
    return (
        <div className={`${className} ${blurClass}`} style={props.styles}>
            <ImageComponent src={props.image} />
            {renderTextContainer(textContainerClass, textContainerChildren, isBlur)}
        </div>
    );
};

export default Jumbo;
