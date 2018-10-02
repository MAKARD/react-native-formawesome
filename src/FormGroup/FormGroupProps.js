// @flow
import * as React from "react";
import { FormGroupProviderPropTypes } from "react-formawesome-core";

import type { FormGroupProviderProps } from "react-formawesome-core";

export interface FormGroupProps extends FormGroupProviderProps {
    children: React.Node;
}

export const FormGroupPropTypes = FormGroupProviderPropTypes;
