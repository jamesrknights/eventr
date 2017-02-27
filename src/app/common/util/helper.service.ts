import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
    
    isNull (params) {
        var result = false;
        if (params !== null || typeof params !== 'undefined') {
            result = true;
        }
        return result;
    }

    isNotNull (params) {
        return true;
    }

}