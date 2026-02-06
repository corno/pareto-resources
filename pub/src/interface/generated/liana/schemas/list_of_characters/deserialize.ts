    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
    
    import * as i_out from "./data"
    
    export namespace List_of_Characters_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.List_of_Characters
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type List_of_Characters_ = (
        context: List_of_Characters_.I,
        abort: _pi.Abort<List_of_Characters_.E>,
        parameters: {
            readonly 'document resource identifier': List_of_Characters_.P.document_resource_identifier
            readonly 'tab size': List_of_Characters_.P.tab_size
        },
    ) => List_of_Characters_.O
    
    export { 
        List_of_Characters_ as List_of_Characters, 
    }
