// @flow
import * as React from "react";
import { FormProviderPropTypes } from "react-formawesome-core";

import type { FormProviderProps } from "react-formawesome-core";

export interface FormProps extends FormProviderProps {
    [key: string]: any;
    children: React.Node;
}

export const FormPropTypes = FormProviderPropTypes;
