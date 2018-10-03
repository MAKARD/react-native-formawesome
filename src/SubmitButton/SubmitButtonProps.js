// @flow
import * as React from "react";
import type { TouchableOpacityProps } from "react-native";
import PropTypes from "prop-types";

export interface SubmitButtonProps extends TouchableOpacityProps {
    loadingComponent?: ?React.Node;
    children: React.Node;
}

export const SubmitButtonPropTypes = {
    children: PropTypes.node.isRequired,
    loadingComponent: PropTypes.node
};
