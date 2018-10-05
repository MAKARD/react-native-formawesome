// @flow
import * as React from "react";
import { Picker } from "react-native";
import { FormGroupContext } from "react-formawesome-core";
import type { FormGroupContextInterface } from "react-formawesome-core";

import { SelectPropTypes, SelectDefaultProps } from "./SelectProps";
import type { SelectProps } from "./SelectProps";

export class Select extends React.PureComponent<SelectProps> {
    static propTypes = SelectPropTypes;
    static defaultProps = SelectDefaultProps;

    render(): React.Node {
        return (
            <FormGroupContext.Consumer>
                {this.renderChildren}
            </FormGroupContext.Consumer>
        );
    }

    renderChildren = (context: FormGroupContextInterface): React.Node => {
        const { options, selectedValue, onValueChange, style, onErrorStyles, ...pickerProps } = this.props;

        return (
            <Picker
                onValueChange={this.getHandleChange(context)}
                style={this.getStyle(context)}
                selectedValue={context.value}
                {...pickerProps}
            >
                {this.mappedOptions}
            </Picker>
        );
    }

    get mappedOptions(): Array<React.Node> {
        return this.props.options.map((item, index) => (
            <Picker.Item key={`${item.label}_${index}`} {...item} />
        ));
    }

    getHandleChange = (context: FormGroupContextInterface) => 
        (value: string | number | boolean, index: number): void => {
        this.props.onValueChange && this.props.onValueChange(value, index);

        context.onChange(value);
    }

    getStyle = (context: FormGroupContextInterface) => {
        const style = [this.props.style];

        context.error && style.push(this.props.onErrorStyles);

        return style;
    }
}
