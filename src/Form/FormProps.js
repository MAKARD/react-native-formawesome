// @flow
import * as React from "react";
import type { ViewProps } from "react-native";
import { FormProviderPropTypes } from "react-formawesome-core";
import type { FormProviderProps } from "react-formawesome-core";

export interface FormProps extends FormProviderProps, ViewProps {
    children: React.Node;
}

export const FormPropTypes = FormProviderPropTypes;
