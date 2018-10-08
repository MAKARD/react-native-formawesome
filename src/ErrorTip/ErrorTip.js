// @flow
import * as React from "react";
import { Text, View, TextProps } from "react-native";
import { FormGroupContext } from "react-formawesome-core";
import type { FormGroupContextInterface } from "react-formawesome-core";

export class ErrorTip extends React.Component<TextProps> {
    render(): React.Node {
        return (
            <FormGroupContext.Consumer>
                {this.renderChildren}
            </FormGroupContext.Consumer>
        );
    }

    renderChildren = (context: FormGroupContextInterface): React.Node => {
        if (!context.error) {
            return null;
        }

        return <Text {...this.props}>{context.error}</Text>;
    }
}
