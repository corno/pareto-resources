
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Text_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_ = (
    context: Text_.I,
    abort: _pi.Abort<Text_.E>,
) => Text_.O

export { 
    Text_ as Text, 
}
