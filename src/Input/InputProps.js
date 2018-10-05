// @flow
import PropTypes from "prop-types";
import type { ViewStyle, TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
    onFocusStyles?: ?ViewStyle;
    onErrorStyles?: ?ViewStyle;
}

export const InputPropTypes = {
    onFocusStyles: PropTypes.any,
    onErrorStyles: PropTypes.any
};

export const InputDefaultProps = {
    onErrorStyles: {},
    onFocusStyles: {},
    style: {}
};
