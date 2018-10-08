/* eslint-disable no-undef */
import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, ErrorTip } from "../src";

class Model {
    name = undefined;
}

validator = new ModelValidator(Model);

describe("ErrorTip", () => {

    test("Should render correctly", () => {
        const tree = renderer.create(
            <Form onSubmit={() => undefined} validator={validator}>
                <FormGroup attribute="name">
                    <ErrorTip />
                </FormGroup>
            </Form>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test("Should render error text if error exist", () => {
        validator.addErrors([{
            attribute: "name",
            details: "test"
        }]);

        const tree = renderer.create(
            <Form onSubmit={() => undefined} validator={validator}>
                <FormGroup attribute="name">
                    <ErrorTip />
                </FormGroup>
            </Form>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

});
