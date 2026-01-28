
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Message_ {
    
    export type I = string
    
    export type O = i_out.Message
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Message_ = (
    context: Message_.I,
    abort: _pi.Abort<Message_.E>,
    parameters: {
        readonly 'document resource identifier': Message_.P.document_resource_identifier
        readonly 'indentation': Message_.P.indentation
    },
) => Message_.O

export { 
    Message_ as Message, 
}
