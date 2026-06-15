
import * as p_i from 'pareto-core/dist/interface/__internal/Abort'

import * as i_in from "../../data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace Non_Normalized_Path_ {
    
    export type I = i_in.Non_Normalized_Path
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Non_Normalized_Path_ = (
    context: Non_Normalized_Path_.I,
) => Non_Normalized_Path_.O

export { 
    Non_Normalized_Path_ as Non_Normalized_Path, 
}
