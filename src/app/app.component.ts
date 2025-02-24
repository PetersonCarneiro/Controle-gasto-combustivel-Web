import * as M from 'materialize-css';

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mobile') sideNav?: ElementRef;
  
  title = 'controle-gasto-combustivel';
  

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sideNav?.nativeElement);
    
  }
}


