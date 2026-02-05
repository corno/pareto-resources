    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_out from "./data"
    
    export namespace Parameters_ {
        
        export type I = string
        
        export type O = i_out.Parameters
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Parameters_ = (
        context: Parameters_.I,
        abort: _pi.Abort<Parameters_.E>,
        parameters: {
            readonly 'document resource identifier': Parameters_.P.document_resource_identifier
            readonly 'tab size': Parameters_.P.tab_size
        },
    ) => Parameters_.O
    
    export namespace Error_ {
        
        export type I = string
        
        export type O = i_out.Error
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Error_ = (
        context: Error_.I,
        abort: _pi.Abort<Error_.E>,
        parameters: {
            readonly 'document resource identifier': Error_.P.document_resource_identifier
            readonly 'tab size': Error_.P.tab_size
        },
    ) => Error_.O
    
    export { 
        Parameters_ as Parameters, 
        Error_ as Error, 
    }
