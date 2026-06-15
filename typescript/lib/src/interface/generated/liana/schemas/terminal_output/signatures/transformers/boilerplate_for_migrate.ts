
import * as p_i from 'pareto-core/dist/__internals/Abort'

import * as i_out from "../../data"

import * as i_in from "../../data"

export namespace Message_ {
    
    export type I = i_in.Message
    
    export type O = i_out.Message
    
    export namespace P {
        
    }
    
}

export type Message_ = (
    context: Message_.I,
) => Message_.O

export { 
    Message_ as Message, 
}
