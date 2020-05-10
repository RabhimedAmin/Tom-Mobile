import { DistributionPrincipale } from './DistributionPrincipale';
import { DistributionSecondaire } from './DistributionSecondaire';

export class SousRegion {

    name: string;
    transports:Transport[];
    dPrincipales:DistributionPrincipale[];
    dSecondaires:DistributionSecondaire[];


}