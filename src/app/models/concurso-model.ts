import { Premio } from "./premio-model";

export class Concurso{
    acumulou: boolean;
    concurso_proximo: number;
    data_concurso: string;
    data_concurso_milliseconds: number;
    dezenas: string[];
    numero_concurso: number;
    premiacao: Premio[];
}