// @flow
import * as React from "react";
import { View } from "react-native";
import type { ViewProps } from "react-native";
import { UnparsedErrorProvider } from "react-formawesome-core";
import type { UnparsedErrorProviderProps } from "react-formawesome-core";

export class UnparsedErrorContainer extends React.Component<ViewProps & UnparsedErrorProviderProps> {
    render(): React.Node {
        const { children, ...viewProps } = this.props;

        return (
            <View {...viewProps}>
                <UnparsedErrorProvider>
                    {children}
                </UnparsedErrorProvider>
            </View>
        );
    }
}
