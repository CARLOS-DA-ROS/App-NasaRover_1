
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NasapiService } from '../../services/nasapi.service';
// import { map } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html' })
export class SearchComponent {
    mostrar = false;
    rr; ff; gg; jj: number;
    fecha: Date = new Date();
    arreglo2: any [];
    carta: FormGroup = new FormGroup({});

    constructor( private router: Router, private nasapi: NasapiService,
        private  http: HttpClient, private fb: FormBuilder){
            this.carta = fb.group({
                numsol: [ '', [ Validators.pattern("^[0-9]*$"), Validators.min(100), Validators.max(2890)]],
                tiempo: [ '' ],
                lente: [ '' ],
                gender: [ '' ]
            });
        }

    get k(){ return this.carta.controls; }

    fechar(l){
        this.gg = l.target.value;
        console.log(this.gg);
        return this.gg;
    }
    guardar(l){
        l = this.carta.status;
        if ( l === 'INVALID' ) {
            alert('Dia NO Valido !');
                } else {
            this.jj = this.carta.value.numsol;
            }
            console.log(this.jj);
            console.log(this.carta);
        }
    vehiculo(e){
        this.rr = e.target.value;
        this.router.navigate(['search', this.rr]);
        console.log(e.target.value);
        return this.rr;
    }

    comboCam(k){
        this.ff = k.target.value;
        console.log(k.target.value);
        return this.ff;
    }

    getMision0(){
        this.nasapi.getapi0(this.rr, this.jj)
        .subscribe( (data: any) => {
            this.arreglo2 = data;
            console.log(this.arreglo2);
        });
    }
    
    getMision1(){
        this.nasapi.getapi1(this.rr, this.jj, this.ff)
            .subscribe( (data: any) => {
                this.arreglo2 = data;
                console.log(this.arreglo2);
        });
    }

    getMision2(){
        this.nasapi.getapi2(this.rr, this.gg, this.ff)
            .subscribe( (data: any) => {
                this.arreglo2 = data;
                console.log(this.arreglo2);
                console.log(data);
        });
    }
}
