/* eslint-disable no-undef */
import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import { ModelValidator } from "react-formawesome-core";

import { Form, SubmitButton } from "../src";

class Model {
    name = undefined;
}

test("Should render correctly", () => {
  const tree = renderer.create(
    <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
        <SubmitButton>
            <Text>Submit</Text>
        </SubmitButton>
    </Form>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test("Should render loading component if it passed on loading", () => {
    let loadingRendered = false;

    const LoadingComponent = () => {
        loadingRendered = true;
        return <Text>Loading</Text>
    }

    const tree = renderer.create(
        <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
            <SubmitButton loadingComponent={<LoadingComponent />}>
                <Text>Submit</Text>
            </SubmitButton>
        </Form>
    );

    renderer.create(tree.root.findByType(SubmitButton).instance.renderChildren({loading: true}))

    expect(loadingRendered).toBeTruthy();
});

test("Should call onPress prop if it passed", () => {
    let onPressTriggered = false;
  
    const tree = renderer.create(
        <Form onSubmit={() => undefined} validator={new ModelValidator(Model)}>
            <SubmitButton onPress={() => onPressTriggered = true}>
                <Text>Test</Text>
            </SubmitButton>
        </Form>
    );
  
    tree.root.findByType(SubmitButton).instance.getHandleSubmit({onSubmit: () => {}})();
    expect(onPressTriggered).toBeTruthy();
});