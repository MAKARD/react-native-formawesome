// @flow
import * as React from "react";
import PropTypes from "prop-types";

const StylePropType = PropTypes.oneOf([PropTypes.object, PropTypes.array, PropTypes.number]);
type StyleType = {[key: string]: any} | Array<number> | Array<{[key: string]: any}> | number;

export interface ThemeSchema {
    form?: ?{
        style?: ?StyleType;
    };
    formGroup?: ?{
        style?: ?StyleType;
    };
    input?: ?{
        style?: ?StyleType;
        onErrorStyles?: ?StyleType;
        onFocusStyles?: ?StyleType;
    };
    submitButton?: ?{
        style?: ?StyleType;
    };
    select?: ?{
        style?: ?StyleType;
        onErrorStyles?: ?StyleType;
    };
    errorTip?: ?{
        style?: ?StyleType;
    };
    unparsedErrorContainer?: ?{
        style?: ?StyleType;
    };
}

export const ThemeSchemaPropTypes = {
    form: PropTypes.shape({
        style: StylePropType
    }),
    formGroup: PropTypes.shape({
        style: StylePropType
    }),
    input: PropTypes.shape({
        style: StylePropType,
        onErrorStyles: StylePropType,
        onFocusStyles: StylePropType,
    }),
    submitButton: PropTypes.shape({
        style: StylePropType
    }),
    select: PropTypes.shape({
        style: StylePropType,
        onErrorStyles: StylePropType
    }),
    errorTip: PropTypes.shape({
        style: StylePropType
    }),
    unparsedErrorContainer: PropTypes.shape({
        style: StylePropType
    })
};

export interface ThemeProviderProps {
    theme: ThemeSchema;
    children: React.Node;
}

export const ThemeProviderPropTypes = {
    theme: PropTypes.shape(ThemeSchemaPropTypes).isRequired
};

export const ThemeContext = React.createContext<ThemeSchema>({});

export function wrapIntoTheme(type: $Keys<ThemeSchema>) {
    return function (WrappedComponent: any) {
        return class extends React.Component<void> {
            wrapped = false;

            render() {
                return (
                    <ThemeContext.Consumer>
                        {this.renderChildren}
                    </ThemeContext.Consumer>
                );
            }
            
            renderChildren = (context: any) => {
                if (!Object.keys(context).length) {
                    return <WrappedComponent {...this.props} />;
                }

                if (!this.wrapped) {
                    const originDefaultProps = WrappedComponent.defaultProps || {};
                    // Makes sure that all defaults are copied
                    WrappedComponent.defaultProps = {
                        ...originDefaultProps,
                        ...(context[type] || {})
                    };

                    this.wrapped = true;
                }

                return <WrappedComponent {...this.props} />;
            }
        };
    }
}
