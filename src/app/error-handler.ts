import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn: 'root'
})
export class SnackBarErrorHandler implements ErrorHandler {

    constructor(private snackBar: MatSnackBar,
                private readonly zone: NgZone) {}

    handleError(error: any) {
        console.error(error);
        this.zone.run(() => {
            this.snackBar.open(error, "OK");
        })
    }
}