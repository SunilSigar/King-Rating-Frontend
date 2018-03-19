import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BattleService {
    //URLs for CRUD operations
    allKingsDataUrl = "http://localhost:8080/user/all-kings";
	//Create constructor to get Http instance
	constructor(private http:Http) { 
	}
	//Fetch all king data
    getAllKingData() {
        return this.http.get(this.allKingsDataUrl)
		   		.map(this.extractData)
		        .catch(this.handleError);

    }		
	private extractData(res: Response) {
		let body = res.json();
		console.log(body);
        return body;
    }
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
}