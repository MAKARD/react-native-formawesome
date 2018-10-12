# UnparsedErrorContainer

Component for notify user about errors that cannot be applied to model.

*`UnparsedErrorContainer` should be wrapped into `Form`*

## Public interface

### Props

`UnparsedErrorContainer` contains [View](https://facebook.github.io/react-native/docs/view) component from [react-native](https://github.com/facebook/react-native) lib. All props for `View` are valid for `UnparsedErrorContainer`.

Own props:
 - `children` - should be a function that return valid component. `Required`

*If error not exist, `UnparsedErrorContainer` will not render `children`*

*If `Form` prop `handleUnparsedErrors` is falsy, `UnparsedErrorContainer` will not render `children`*

## Example

```jsx
<Form 
    onSubmit={async (values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
    handleUnparsedErrors
>
    <UnparsedErrorContainer>
        {(error) => <Text>{error.message}</Text>}
    </UnparsedErrorContainer>
</Form>
```
