import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BattleService } from './battle.service';

@Component({
   selector: 'app-battle',
   templateUrl: './battle.component.html',
   styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit { 
   //Component properties
   allKings = [];
   //Create constructor to get service instance
   constructor(private battleService: BattleService) {
   }
   //Create ngOnInit() and and load articles
   ngOnInit(): void {
     this.getAllKingData();
   }   
   //Fetch all kings
   getAllKingData() {
    this.battleService.getAllKingData()
  .subscribe(
            data => this.allKings = data);   
    console.log(this.allKings);
} 
}
    