
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../fs_sandboxed_path/data"

import * as i_imports_unrestricted from "../fs_unrestricted_read_directory/data"

export namespace Parameters_ {
    
    export type path = i_imports_path.Context_Path
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
}

export namespace Result_ {
    
    export namespace D {
        
        export type node_type = Node_Type_
        
        export type context_directory = i_imports_path.Context_Path
        
        export type path = i_imports_path.Node_Path
        
    }
    
    export type D = {
        readonly 'node type': D.node_type
        readonly 'context directory': D.context_directory
        readonly 'path': D.path
    }
    
}

export type Result_ = _pi.Dictionary<Result_.D>

export namespace Node_Type_ {
    
    export type file = null
    
    export type directory = null
    
    export type other = null
    
}

export type Node_Type_ = 
    | readonly ['file', Node_Type_.file]
    | readonly ['directory', Node_Type_.directory]
    | readonly ['other', Node_Type_.other]

export type Error_ = i_imports_unrestricted.Error

export { 
    Parameters_ as Parameters, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
    Error_ as Error, 
}
