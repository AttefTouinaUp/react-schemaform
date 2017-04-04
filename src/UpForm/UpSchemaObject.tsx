﻿
import * as React from "react";
import UpSchemaFormComponentSelector from "./UpSchemaFormComponentSelector"

interface UpSchemaObjectProps {
    withHR: boolean;
    SchemaArg: JsonSchema;
    node: string;
    onFormChange: (newValue: any, node: string) => void;
    onFormError: (node: string) => void;
    isRequired: boolean;
}

export default class UpSchemaObject extends React.Component<UpSchemaObjectProps, {}>  {

    constructor(p, c) {
    }

    render() {
        var properties = [];
        var propertiesName = [];

            if (this.props.SchemaArg.properties.hasOwnProperty(index)) {
                properties.push(this.props.SchemaArg.properties[index]);
                propertiesName.push(index);
            }
        }

            return (<UpSchemaFormComponentSelector
                isRequired={this.isRequired(propertiesName[index]) }
                key={index}
                schema={property}
                node={this.props.node + '.' + propertiesName[index]}
                onFormChange={this.props.onFormChange}
                onFormError={this.props.onFormError}
                />)
        });

            {this.props.withHR ? <hr/> : null}
            {this.props.SchemaArg.title == null || this.props.node === "" ? "" : <h4>{this.props.SchemaArg.title}</h4>}
            <div className="row">{elements}</div>
        </div>

