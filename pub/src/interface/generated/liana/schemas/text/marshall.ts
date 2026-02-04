
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "./data"

export namespace Text_ {
    
    export type I = i_in.Text
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Text_ = (
    context: Text_.I,
) => Text_.O

export { 
    Text_ as Text, 
}
