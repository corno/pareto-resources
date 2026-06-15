
import * as p_i from 'pareto-core/dist/__internals/Abort'

import * as i_out from "../../data"

import * as i_in from "../../data"

export namespace Parameters_ {
    
    export type I = i_in.Parameters
    
    export type O = i_out.Parameters
    
    export namespace P {
        
    }
    
}

export type Parameters_ = (
    context: Parameters_.I,
) => Parameters_.O

export namespace Error_ {
    
    export type I = i_in.Error
    
    export type O = i_out.Error
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    context: Error_.I,
) => Error_.O

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
