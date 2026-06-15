
import * as p_i from 'pareto-core/dist/__internals/Abort'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "../../data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace List_of_Characters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.List_of_Characters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type List_of_Characters_ = (
    context: List_of_Characters_.I,
    abort: p_i.Abort<List_of_Characters_.E>,
) => List_of_Characters_.O

export { 
    List_of_Characters_ as List_of_Characters, 
}
