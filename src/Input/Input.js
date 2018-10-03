// @flow
import * as React from "react";
import { TextInput } from "react-native";
import { FormGroupContext } from "react-formawesome-core";
import type { FormGroupContextInterface } from "react-formawesome-core";

import { InputPropTypes, InputDefaultProps } from "./InputProps";
import type { InputProps } from "./InputProps";

export class Input extends React.Component<InputProps> {
    static propTypes = InputPropTypes;
    static defaultProps = InputDefaultProps;

    render(): React.Node {
        return (
            <FormGroupContext.Consumer>
                {this.renderChildren}
            </FormGroupContext.Consumer>
        );
    }

    renderChildren = (context: FormGroupContextInterface): React.Node => {
        const { onChangeText, onBlur, onFocus, value, style, ...inputProps } = this.props;

        return (
            <TextInput
                onChangeText={this.getHandleChange(context)}
                onFocus={this.getHandleFocus(context)}
                onBlur={this.getHandleBlur(context)}
                style={this.getStyle(context)}
                value={context.value}
                {...inputProps}
            />
        );
    }

    getHandleFocus = (context: FormGroupContextInterface) => (): void => {
        this.props.onFocus && this.props.onFocus();

        context.onFocus();
    }

    getHandleBlur= (context: FormGroupContextInterface) => (): void => {
        this.props.onBlur && this.props.onBlur();

        context.onBlur();
    }

    getHandleChange = (context: FormGroupContextInterface) => (value: string): void => {
        this.props.onChangeText && this.props.onChangeText(value);

        context.onChange(value);
    }

    getStyle = (context: FormGroupContextInterface) => {
        let style = this.props.style;

        if (context.isFocused) {
            style = {
                ...style,
                ...this.props.onFocusStyles
            };
        }

        if (context.error) {
            style = {
                ...style,
                ...this.props.onErrorStyles
            };
        }

        return style;
    }
}
