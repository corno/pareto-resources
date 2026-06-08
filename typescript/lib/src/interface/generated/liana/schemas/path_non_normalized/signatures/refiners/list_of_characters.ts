
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

export namespace Non_Normalized_Path_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Non_Normalized_Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Non_Normalized_Path_ = (
    context: Non_Normalized_Path_.I,
    abort: _pi.Abort<Non_Normalized_Path_.E>,
    parameters: {
        readonly 'tab size': Non_Normalized_Path_.P.tab_size
    },
) => Non_Normalized_Path_.O

export { 
    Non_Normalized_Path_ as Non_Normalized_Path, 
}
