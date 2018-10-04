// @flow
import * as React from "react";
import { View } from "react-native";
import { FormGroupProvider } from "react-formawesome-core";

import { FormGroupPropTypes } from "./FormGroupProps";
import type { FormGroupProps } from "./FormGroupProps";

export class FormGroup extends React.PureComponent<FormGroupProps> {
    static propTypes = FormGroupPropTypes;

    render(): React.Node {
        const { validateOn, attribute ,...viewProps } = this.props;

        return (
            <FormGroupProvider attribute={attribute} validateOn={validateOn}>
                <View {...viewProps}>
                    {this.props.children}
                </View>
            </FormGroupProvider>
        );
    }
}
