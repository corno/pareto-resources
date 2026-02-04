
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Text_ {
    
    export type I = string
    
    export type O = i_out.Text
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Text_ = (
    context: Text_.I,
    abort: _pi.Abort<Text_.E>,
    parameters: {
        readonly 'document resource identifier': Text_.P.document_resource_identifier
        readonly 'tab size': Text_.P.tab_size
    },
) => Text_.O

export { 
    Text_ as Text, 
}
