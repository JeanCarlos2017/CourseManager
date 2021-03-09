import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    //torno elegível para receber alguma informação de um componente externo 
    @Input()
    rating: number= 0;
    starWidth: number;

    //no momento de mudança do componente
    ngOnChanges(): void{
        this.starWidth = this.rating* 74/5;
    }

}