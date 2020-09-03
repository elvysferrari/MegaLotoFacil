import { NumeroModel } from './numero-model';
export class JogoModel {
    id: string;
    user: string;
    numeros: NumeroModel[]
    dataJogo: Date;
    conferido: boolean;
    nrConferido: number;
    totalValorAcertado: number;
}
export class UltimoSorteioModel{
    id: string;
    nroConcurso: number;
    dataSorteio: Date;
    numeros: number[];
}
