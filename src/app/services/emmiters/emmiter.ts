import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

export class EmmiterService {
    public eventEmmited$: EventEmitter<any>;

    constructor() {
        this.eventEmmited$ = new EventEmitter();
    }

    public emit(data) {
        this.eventEmmited$.emit(data);
    }
}
