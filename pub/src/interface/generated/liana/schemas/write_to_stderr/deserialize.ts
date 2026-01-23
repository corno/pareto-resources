
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

export { 
    Parameters_ as Parameters, 
}
