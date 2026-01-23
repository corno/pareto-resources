
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Message_ {
    
    export type I = i_in.Value
    
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
