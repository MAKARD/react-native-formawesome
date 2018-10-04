# FormGroup

Wrapper component for user-interactive elements (input / select ..ets). 

*`FormGroup` should be wrapped into `Form`*

## Public interface

### Props

`FormGroup` contains [View](https://facebook.github.io/react-native/docs/view.html) component from [react-native](https://github.com/facebook/react-native) lib. All props for `View` are valid for `Form`.

Also `FormGroup` represents [FormGroupProvider](https://github.com/MAKARD/react-formawesome-core/blob/master/docs/FormGroupProvider.md) from [react-formawesome-core](https://github.com/MAKARD/react-formawesome-core) package. All props for `FormGroupProvider` are valid for `FormGroup`.

## Example

```jsx
<Form 
    onSubmit={(values) => await someRequest(values)}
    validator={new SchemaValidator(ExampleSchema)}
    errorParser={(error) => myCustomParser(error)}
>
    <FormGroup attribute="surname" validateOn="blur">
        ...
    </FormGroup>
    <FormGroup attribute="name" validateOn="focus">
        ...
    </FormGroup>
    <FormGroup attribute="phone" validateOn="change">
        ...
    </FormGroup>
    <FormGroup attribute="address" validateOn={(values, errors) => values.address.length === 3}>
        ...
    </FormGroup>
</Form>
```