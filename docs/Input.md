# Input

User-interactive component.

*`Input` should be wrapped into `FormGroup`*

## Public interface

### Props

`Input` contains [TextInput](https://facebook.github.io/react-native/docs/textinput) component from [react-native](https://github.com/facebook/react-native) lib. All props for `TextInput` are valid for `Input`.

*`Input` provide a value to `TextInput` by itself, you can't set it manually*

*`Input` provide user events to `TextInput` by itself, you can intercept this events, but you can't take control on the value*

Also `Input` represents [FormGroupProvider context](https://github.com/MAKARD/react-formawesome-core/blob/master/docs/FormGroupProvider.md#context) from [react-formawesome-core](https://github.com/MAKARD/react-formawesome-core) package.

Provide own props:
 - `onErrorStyles` - styles that applies after failed validation. `Optional`.
 - `onFocusStyles` - styles that applies when input have focus. `Optional`.
 - `nativeRef` - same as React `ref` prop. `Optional`.

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" validateOn="blur">
        <Input 
            onErrorStyles={{ borderColor: "red" }}
            onFocusStyles={{ borderColor: "blue" }}
        />
    </FormGroup>
</Form>
```
