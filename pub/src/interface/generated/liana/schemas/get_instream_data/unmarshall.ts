
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Parameters
    
    export namespace P {
        
    }
    
}

export type Parameters_ = (
    context: Parameters_.I,
) => Parameters_.O

export namespace Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Result
    
    export namespace P {
        
    }
    
}

export type Result_ = (
    context: Result_.I,
) => Result_.O

export { 
    Parameters_ as Parameters, 
    Result_ as Result, 
}
