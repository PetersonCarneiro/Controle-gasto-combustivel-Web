import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('mobile') sideNav?: ElementRef;
  
  title = 'controle-gasto-combustivel';
  

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sideNav?.nativeElement);
    
  }

}
