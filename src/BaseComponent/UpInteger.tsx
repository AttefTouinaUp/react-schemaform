﻿import * as React from "react";
import {UpFormControl} from "../UpForm/UpFormControl"
import TypeNumberControl from "../ControlError/TypeNumberControl"

export default class UpInteger extends UpFormControl<number> {
    constructor(p, c) {
        this._ControlErrorCentral.addControl(new TypeNumberControl(true, this.props.schema.minimum, this.props.schema.maximum));
    }
        return <input
            readOnly={this.props.schema.readonly === true}
            ref={(input) => { this.inputElement = input; } }
            style={this.state.hasError === true ? { borderColor: "red" } : null}
            type="text"
            className="form-control"
            onKeyDown={this.onKeyDown}
            onChange={this.handleChangeJsEventGlobal}
            />
    }

    onKeyDown = (e) => {
        if (e.keyCode == 38) { // up
            var newValue = Number(e.target.value) + 1;
            this.inputElement.value = newValue.toString();
            this.handleChangeEventGlobal(newValue);
        } else if (e.keyCode == 40) { // down
            var newValue = Number(e.target.value) - 1;
            this.inputElement.value = (newValue).toString();
            this.handleChangeEventGlobal(newValue);
        }
    }

        return event.target.value;
    }

    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

}