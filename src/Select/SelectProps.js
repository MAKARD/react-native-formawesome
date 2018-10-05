// @flow
import PropTypes from "prop-types";
import { PickerProps } from "react-native";
import type { ViewStyle } from "react-native";

export interface SelectProps extends PickerProps {
    options: Array<{
        value: string | number | boolean;
        label: string;
    }>;

    onErrorStyles?: ?ViewStyle;
}

export const SelectPropTypes = {
    onErrorStyles: PropTypes.any,

    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
        label: PropTypes.string.isRequired  
    })).isRequired,
};

export const SelectDefaultProps = {
    onErrorStyles: {},
    styles: {}
};
