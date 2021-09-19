import { Dialog, DialogTitle } from "@mui/material";
import * as React from "react";

export default class AddExpense extends React.Component {
    constructor(props) {
        super();
        this.open = props.open;
        this.onClose = props.onClose;
        console.log(this.open);
    }

    handleClose() {
        this.onClose();
    }

    render() {
        return (
            <Dialog onClose={this.handleClose} open={this.open}>
                <DialogTitle>Add Expense</DialogTitle>
            </Dialog>
        )
    }
}