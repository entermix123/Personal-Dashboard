/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function ConfirmDialog({message, callback, open, setOpen}) {
    const handleOpen = () => setOpen(!open);
 
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Confirmation Required</DialogHeader>
            <DialogBody>
                {message}
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={callback}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}