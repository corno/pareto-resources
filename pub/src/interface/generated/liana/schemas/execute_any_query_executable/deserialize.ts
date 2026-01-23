
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

export namespace Parameters_ {
    
    export type I = string
    
    export type O = i_out.Parameters
    
    export namespace P {
        
    }
    
}

export type Parameters_ = (
    context: Parameters_.I,
) => Parameters_.O

export namespace Error_ {
    
    export type I = string
    
    export type O = i_out.Error
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    context: Error_.I,
) => Error_.O

export namespace Result_ {
    
    export type I = string
    
    export type O = i_out.Result
    
    export namespace P {
        
    }
    
}

export type Result_ = (
    context: Result_.I,
) => Result_.O

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
}
