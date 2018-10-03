// @flow
import * as React from "react";
import { ViewProps } from "react-native";
import { FormGroupProviderPropTypes } from "react-formawesome-core";
import type { FormGroupProviderProps } from "react-formawesome-core";

export interface FormGroupProps extends FormGroupProviderProps, ViewProps {
    children: React.Node;
}

export const FormGroupPropTypes = FormGroupProviderPropTypes;
