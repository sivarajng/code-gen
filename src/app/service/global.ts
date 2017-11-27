import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    isAuthorized: boolean = false;

    constructor() { }

    checkAuthorization() {
        return this.isAuthorized;
    }
    setAuthorization(value: boolean) {
        this.isAuthorized = value;
    }

}
