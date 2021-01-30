import { Component, OnInit } from '@angular/core';
import { NasapiService } from '../../services/nasapi.service';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html'
})
export class RoversComponent implements OnInit{
  aa; bb; cc; dd;
  mostrar = true;
  constructor(private nasapi: NasapiService ){
  }

  getPicture(){
    this.nasapi.getapi()
        .subscribe( (data: any) => {
            this.aa = data.title;
            this.bb = data.url;
            this.cc = data.explanation;
            this.dd = data.date;
            console.log(this.aa, this.bb, this.cc);
    });
}
ngOnInit(){
  this.getPicture();
}
// for (let index = 0; index < this.bb.length; index++) {
//     const element = this.bb[index];
//     console.log(index);
// }
}
