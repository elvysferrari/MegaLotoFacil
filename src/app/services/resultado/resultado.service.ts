import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  
  constructor(private httpClient: HttpClient) { }

  public getResultado(nroConcurso: number){   
    let url = "https://apiloterias.com.br/app/resultado.php?loteria=lotofacil&token=t4rU4blf4NeggkN&concurso=" + nroConcurso;    
    return this.httpClient.get(url);
  }
}
