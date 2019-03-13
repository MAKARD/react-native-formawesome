// @flow
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { FormContext } from "react-formawesome-core";
import type { FormContextInterface } from "react-formawesome-core";

import type { SubmitButtonProps } from "./SubmitButtonProps";

import { SubmitButtonPropTypes, SubmitButtonDefaultProps } from "./SubmitButtonProps";

export class SubmitButton extends React.PureComponent<SubmitButtonProps> {
    static propTypes = SubmitButtonPropTypes;
    static defaultProps = SubmitButtonDefaultProps;

    render(): React.Node {
        return (
            <FormContext.Consumer>
                {this.renderChildren}
            </FormContext.Consumer>
        );
    }

    renderChildren = (context: FormContextInterface): React.Node => {
        const { loadingComponent, onPress, disableOnSubmit, ...touchableOpacityProps } = this.props;

        return (
            <TouchableOpacity 
                {...touchableOpacityProps}
                onPress={this.getHandleSubmit(context)}
            >
                {loadingComponent && context.loading ? loadingComponent : this.props.children}
            </TouchableOpacity>
        );
    }

    getHandleSubmit = (context: FormContextInterface) => (event: any): void => {
        this.props.onPress && this.props.onPress(event);

        if (this.props.disableOnSubmit && context.loading) {
            return;
        }

        context.onSubmit();
    }
}
