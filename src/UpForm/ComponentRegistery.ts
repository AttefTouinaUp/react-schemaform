﻿import * as React from "react";
import JsonSchemaHelper from "../helper/JsonSchemaHelper";

interface ComponentRegisteryEntry {
    key: string;
    ComponentClass: React.ComponentClass<any>;//UpFormControl
    type: string;
    format: string;
    array: boolean
}

export default class ComponentRegistery {
    private static _instance: ComponentRegistery = new ComponentRegistery();
    private static Component: { [key: string]: ComponentRegisteryEntry } = {};

    constructor() {
        if (ComponentRegistery._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
        ComponentRegistery._instance = this;
    }

    public static getInstance(): ComponentRegistery {
        return ComponentRegistery._instance;
    }




    private static GetComponentByType(type: string) {
            if (!this.Component.hasOwnProperty(ComponentKey)) { continue; }
            if (this.Component[ComponentKey].type === type) {
                return this.Component[ComponentKey];
            }
        }

    private static GetComponentByFormat(format: string) {
            if (!this.Component.hasOwnProperty(ComponentKey)) { continue; }
            if (this.Component[ComponentKey].format === format) {
                return this.Component[ComponentKey];
            }
        }

    public static GetComponentBySchema(schema: JsonSchema) {
        var comp = ComponentRegistery.GetComponentByFormat(((schema.items as JsonSchema) || schema).format);
        return comp;
    }

    public static GetComponentInstanceByKey(key: string, onError: () => void, onChange: (arg) => void, isRequired: boolean, schema: JsonSchema) {

    public static GetComponentInstance(onError: () => void, onChange: (arg) => void, isRequired: boolean, schema: JsonSchema) {

}




//************************************************  CONGFIG
import UpDate  from "../BaseComponent/UpDate"
import UpDateTime  from "../BaseComponent/UpDateTime"
import UpTime  from "../BaseComponent/UpTime"
import UpEntity  from "../BaseComponent/UpEntity"
import UpString  from "../BaseComponent/UpString"
import UpNumber  from "../BaseComponent/UpNumber"
import UpInteger  from "../BaseComponent/UpInteger"
import UpBoolean  from "../BaseComponent/UpBoolean"
import UpEnum  from "../BaseComponent/UpEnum"
import UpUpload  from "../BaseComponent/UpUpload"
import UpMonth  from "../BaseComponent/UpMonth"

ComponentRegistery.Register("UpNumber", "number", null, UpNumber);
ComponentRegistery.Register("UpString", "string", null, UpString);
ComponentRegistery.Register("UpDate", null, "date", UpDate);
ComponentRegistery.Register("UpDateTime", null, "date-time", UpDateTime);
ComponentRegistery.Register("UpTime", null, "time", UpTime);
ComponentRegistery.Register("UpInteger", "integer", null, UpInteger);
ComponentRegistery.Register("UpBoolean", "boolean", null, UpBoolean);


ComponentRegistery.Register("UpEntity", null, "entityKey", UpEntity, true);
ComponentRegistery.Register("UpEnum", null, "enum", UpEnum, true);
ComponentRegistery.Register("UpUpload", null, "upload", UpUpload, false);
ComponentRegistery.Register("UpMonth", null, "month", UpMonth, false);