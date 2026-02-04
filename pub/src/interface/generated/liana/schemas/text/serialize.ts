
import * as _pi from "pareto-core/dist/interface"

import * as i_in from "./data"

export namespace Text_ {
    
    export type I = i_in.Text
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Text_ = (
    context: Text_.I,
) => Text_.O

export { 
    Text_ as Text, 
}
