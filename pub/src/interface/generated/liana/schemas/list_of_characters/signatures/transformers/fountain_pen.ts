
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "../../data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace List_of_Characters_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type List_of_Characters_ = (
    context: List_of_Characters_.I,
) => List_of_Characters_.O

export { 
    List_of_Characters_ as List_of_Characters, 
}
