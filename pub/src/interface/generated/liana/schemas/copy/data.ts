    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i__imports_path from "../path/data"
    
    export namespace Parameters_ {
        
        export type source = i__imports_path.Node_Path
        
        export type target = i__imports_path.Node_Path
        
        export namespace options {
            
            export type recursive = boolean
            
            export type force = boolean
            
            export type errorOnExist = boolean
            
        }
        
        export type options = {
            readonly 'recursive': options.recursive
            readonly 'force': options.force
            readonly 'errorOnExist': options.errorOnExist
        }
        
    }
    
    export type Parameters_ = {
        readonly 'source': Parameters_.source
        readonly 'target': Parameters_.target
        readonly 'options': Parameters_.options
    }
    
    export namespace Error_ {
        
        export type source_does_not_exist = null
        
        export type node_is_not_a_file = null
        
        export type permission_denied = null
        
        export type file_too_large = null
        
        export type device_not_ready = null
        
    }
    
    export type Error_ = 
        | readonly ['source does not exist', Error_.source_does_not_exist]
        | readonly ['node is not a file', Error_.node_is_not_a_file]
        | readonly ['permission denied', Error_.permission_denied]
        | readonly ['file too large', Error_.file_too_large]
        | readonly ['device not ready', Error_.device_not_ready]
    
    export { 
        Parameters_ as Parameters, 
        Error_ as Error, 
    }
