// @flow
import PropTypes from "prop-types";
import type { ViewStyle, TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
    onFocusStyles?: ?ViewStyle;
    onErrorStyles?: ?ViewStyle;

    nativeRef?: ?(element?: ?any) => void;
}

export const InputPropTypes = {
    onFocusStyles: PropTypes.any,
    onErrorStyles: PropTypes.any,

    nativeRef: PropTypes.func
};

export const InputDefaultProps = {
    onErrorStyles: {},
    onFocusStyles: {},
    style: {}
};
