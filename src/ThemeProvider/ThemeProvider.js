// @flow
import * as React from "react";

import { ThemeProviderPropTypes, ThemeContext } from "./ThemeProviderProps";
import type { ThemeProviderProps, ThemeSchema } from "./ThemeProviderProps";

export class ThemeProvider extends React.Component<ThemeProviderProps> {
    render(): React.Node {
        return (
            <ThemeContext.Provider value={this.childContext}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }

    get childContext(): ThemeSchema {
        return this.props.theme;
    }
}
