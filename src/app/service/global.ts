import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {

    isAuthorized: boolean = false;
    subject: BehaviorSubject<boolean>;

    constructor() {
        this.subject = new BehaviorSubject(false);
    }

    checkAuthorization() {
        return this.subject;
    }
    
    setAuthorization(value: boolean) {
        this.isAuthorized = value;
        this.subject.next(this.isAuthorized);
    }

}
