// @flow
declare module "react-formawesome-core" {
    declare export type UncertainObject = {
        [key: string]: any
    }

    declare export interface Schema {
        name: string;
        properties: UncertainObject;
    }

    declare export interface Validator {
        modelName: string;
        modelValues: UncertainObject;
        modelErrors: UncertainObject;
        modelAttributes: Array<string>;

        dropToDefaults: () => void;
        setDefaults: (defaults: UncertainObject) => void;
        validate: (groups?: ?Array<string>) => Promise<void>;
        setModelValue: (attribute: string, value: any) => void;
        addErrors: (errors: Array<{attribute: string; details: string}>) => void; 
    }

    declare export interface InstantiableValidator<P> {
        constructor(target: P, defaults?: ?UncertainObject): Validator;
    }

    declare export interface FormProviderProps {
        validator: Validator;
        onSubmit: () => Promise<any>;
        errorParser?: ?(error: any) => Array<{details: string, attribute: string}> | any;
        handleUnparsedErrors?: ?boolean;
    }

    declare export type Event = "change" | "focus" | "blur";

    declare export interface FormGroupProviderProps {
        attribute: string;
        validateOn?: ?Event | ?(values: UncertainObject, errors: UncertainObject) => boolean;
    }

    declare export interface FormContextInterface {
        modelErrors: UncertainObject;
        modelValues: UncertainObject;

        loading: boolean;
        unparsedError?: ?any;
        hasErrors: boolean;

        onSubmit: () => Promise<void>;
        onValidate: (groups?: ?Array<string>) => Promise<void>;
        setModelValue: (attribute: string, value: any) => void;

        unregisterElement: (attribute: string) => void;
        registerElement: (attribute: string, element: any) => void;
    }

    declare export interface FormGroupContextInterface {
        error?: ?string;
        value: any;
    
        isFocused: boolean;
    
        onChange: (value: any) => void | Promise<void>;
        onFocus: () => void | Promise<void>;
        onBlur: () => void | Promise<void>;

        registerElement: (element: any) => void;
        unregisterElement: () => void;
    }

    declare export interface UnparsedErrorProviderProps {
        children: (error?: any) => React$Node;
    }

    declare export var FormContext: React$Context<FormContextInterface>;
    declare export var FormGroupContext: React$Context<FormGroupContextInterface>;

    declare export var FormProviderPropTypes: $Subtype<{[_: $Keys<FormProviderProps>]: any}>;
    declare export var FormGroupProviderPropTypes: $Subtype<{[_: $Keys<FormGroupProviderProps>]: any}>;

    declare export var ModelValidator: Class<InstantiableValidator<Class<UncertainObject>>>;
    declare export var SchemaValidator: Class<InstantiableValidator<Schema>>;

    declare export var FormProvider: Class<React$Component<FormProviderProps>>;
    declare export var FormGroupProvider: Class<React$Component<FormGroupProviderProps>>;
    declare export var UnparsedErrorProvider: Class<React$Component<UnparsedErrorProviderProps>>;
}
