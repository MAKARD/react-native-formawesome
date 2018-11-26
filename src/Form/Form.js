// @flow
import * as React from "react";
import { View } from "react-native";
import { FormProvider } from "react-formawesome-core";

import { FormPropTypes } from "./FormProps";
import type { FormProps } from "./FormProps";

export class Form extends React.Component<FormProps> {
    static propTypes = FormPropTypes;
    
    render(): React.Node {
        const { 
            onSubmit,
            validator,
            errorParser, 
            afterSubmit,
            beforeSubmit, 
            handleUnparsedErrors,
            ...viewProps
        } = this.props;

        return (
            <FormProvider
                onSubmit={onSubmit}
                validator={validator}
                errorParser={errorParser}
                afterSubmit={afterSubmit}
                beforeSubmit={beforeSubmit}
                handleUnparsedErrors={handleUnparsedErrors}
             >
              <View {...viewProps}>
                {this.props.children}
              </View>
            </FormProvider>
        );
    }
}
