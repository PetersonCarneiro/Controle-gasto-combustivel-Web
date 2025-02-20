import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges {
  @Input() resultValue: number =0;
  message: string = "Vamos ver quanto vai sair essa brincadeira";
  messages: string[] = [
    "Vamos ver quanto vai sair essa brincadeira",
    "Vixe, essa viagem vai sair caro!",
    "Outra mensagem cômica para valores menores.",
    "E o prêmio de gastador do mês vai para você!",
    "Se o combustível fosse café, a viagem estaria paga!",
    "A gasolina está mais cara do que meu café da manhã!",
    "Você está financiando a crise do petróleo!",
    "Na próxima, leve o carro para passear e não para viajar!",
    "O combustível está mais caro que uma passagem de avião!",
    "Seu carro está comendo dinheiro e arrotando CO2!"
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['resultValue']) {
      this.updateMessage();
    }
  }

  private updateMessage() {
    if (this.resultValue !== 0) {
      if (this.resultValue < 100) {
        this.message = "Acho que vai dar boa esse role";
      } else {
        const randomIndex = Math.floor(Math.random() * this.messages.length);
        this.message = this.messages[randomIndex];
      }
    }
  }
}
