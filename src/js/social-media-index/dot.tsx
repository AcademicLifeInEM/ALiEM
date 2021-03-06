import * as React from 'react';

export default class Dot extends React.PureComponent<any> {
    render() {
        const {
            cx,
            cy,
            opacity,
            id,
            fill,
            onMouseOver,
            onMouseOut,
            value,
        } = this.props;
        return value ? (
            <circle
                onClick={onMouseOver}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                r={10}
                id={id}
                opacity={opacity}
                cx={cx}
                cy={cy}
                strokeWidth={3}
                stroke={fill}
                fill={fill}
            />
        ) : null;
    }
}
