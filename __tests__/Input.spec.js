/* eslint-disable no-undef */
import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input } from "../src";

class Model {
    name = undefined;
}

describe("Input", () => {

    test("Should render correctly", () => {
    const tree = renderer.create(
        <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
            <FormGroup attribute="name">
                <Input />
            </FormGroup>
        </Form>
    ).toJSON();

    expect(tree).toMatchSnapshot();
    });

    test("Should call props events if they passed", () => {
        let onChangeTriggered = false;
        let onBlurTriggered = false;
        let onFocusTriggered = false;
    
        const tree = renderer.create(
            <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
                <FormGroup attribute="name">
                    <Input 
                        onChangeText={() => onChangeTriggered = true}
                        onFocus={() => onFocusTriggered = true}
                        onBlur={() => onBlurTriggered = true}
                    />
                </FormGroup>
            </Form>
        );
    
        tree.root.findByType(Input).instance.getHandleFocus({onFocus: () => {}})();
        expect(onFocusTriggered).toBeTruthy();

        tree.root.findByType(Input).instance.getHandleBlur({onBlur: () => {}})();
        expect(onBlurTriggered).toBeTruthy();

        tree.root.findByType(Input).instance.getHandleChange({onChange: () => {}})();
        expect(onChangeTriggered).toBeTruthy();
    });

    test("Should apply styles according to attribute state", () => {
        const tree = renderer.create(
            <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
                <FormGroup attribute="name">
                    <Input
                        style={{paddingLeft: 0}}
                        onFocusStyles={{flex: 1}}
                        onErrorStyles={{backgroundColor: "#fff"}}
                    />
                </FormGroup>
            </Form>
        );

        expect(tree.root.findByType(Input).instance.getStyle({isFocused: true}))
            .toContainEqual({ paddingLeft: 0 });

        expect(tree.root.findByType(Input).instance.getStyle({isFocused: true}))
            .toContainEqual({ flex: 1 });

        expect(tree.root.findByType(Input).instance.getStyle({isFocused: true, error: "error"}))
            .toContainEqual({ backgroundColor: "#fff" });

        expect(tree.root.findByType(Input).instance.getStyle({isFocused: true, error: "error"}))
            .toContainEqual({ paddingLeft: 0 });

        expect(tree.root.findByType(Input).instance.getStyle({isFocused: true, error: "error"}))
            .toContainEqual({ flex: 1 });
    });

});