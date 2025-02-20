import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {
  constructor(private route: ActivatedRoute){}

  dados = {
    veiculo: '',
    valorCombustivel: null,
    distancia: null,
    kmlitro:null

  };

  result = 0;
  calcular() {
    const { valorCombustivel, distancia, kmlitro } = this.dados;
    if (valorCombustivel !== null && distancia !== null && kmlitro !== null) {
      this.result = (distancia / kmlitro) * valorCombustivel;
    }else{
      
    }
  }

  ngOnInit(): void{
    this.route.queryParams.subscribe((params)=>{
      if(params['veiculo'] == 'veicule01'){
          this.dados.veiculo ='Nissan Tiida';
      }
    }
    );
  }
}
