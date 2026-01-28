
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Parameters_ {
    
    export type I = string
    
    export type O = i_out.Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Parameters_ = (
    context: Parameters_.I,
    abort: _pi.Abort<Parameters_.E>,
    parameters: {
        readonly 'document resource identifier': Parameters_.P.document_resource_identifier
        readonly 'indentation': Parameters_.P.indentation
    },
) => Parameters_.O

export namespace Error_ {
    
    export type I = string
    
    export type O = i_out.Error
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Error_ = (
    context: Error_.I,
    abort: _pi.Abort<Error_.E>,
    parameters: {
        readonly 'document resource identifier': Error_.P.document_resource_identifier
        readonly 'indentation': Error_.P.indentation
    },
) => Error_.O

export namespace Node_Type_ {
    
    export type I = string
    
    export type O = i_out.Node_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Node_Type_ = (
    context: Node_Type_.I,
    abort: _pi.Abort<Node_Type_.E>,
    parameters: {
        readonly 'document resource identifier': Node_Type_.P.document_resource_identifier
        readonly 'indentation': Node_Type_.P.indentation
    },
) => Node_Type_.O

export namespace Result_ {
    
    export type I = string
    
    export type O = i_out.Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Result_ = (
    context: Result_.I,
    abort: _pi.Abort<Result_.E>,
    parameters: {
        readonly 'document resource identifier': Result_.P.document_resource_identifier
        readonly 'indentation': Result_.P.indentation
    },
) => Result_.O

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Node_Type_ as Node_Type, 
    Result_ as Result, 
}
