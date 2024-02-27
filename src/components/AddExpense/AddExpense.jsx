import { Dialog, DialogTitle } from "@mui/material";

export function AddExpense({open, onClose}) {
    function handleClose() {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add Expense</DialogTitle>
        </Dialog>
    )
}