
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../core/location"

import * as i__imports_path from "../path/data"

export namespace Parameters_ {
    
    export type path = i__imports_path.Node_Path
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
}

export namespace Error_ {
    
    export type directory_does_not_exist = null
    
    export type node_is_not_a_directory = null
    
}

export type Error_ = 
    | readonly ['directory does not exist', Error_.directory_does_not_exist]
    | readonly ['node is not a directory', Error_.node_is_not_a_directory]

export namespace Node_Type_ {
    
    export type file = null
    
    export type directory = null
    
    export type other = null
    
}

export type Node_Type_ = 
    | readonly ['file', Node_Type_.file]
    | readonly ['directory', Node_Type_.directory]
    | readonly ['other', Node_Type_.other]

export namespace Result_ {
    
    export namespace D {
        
        export type node_type = Node_Type_
        
        export type context_directory = i__imports_path.Context_Path
        
        export type path = i__imports_path.Node_Path
        
    }
    
    export type D = {
        readonly 'node type': D.node_type
        readonly 'context directory': D.context_directory
        readonly 'path': D.path
    }
    
}

export type Result_ = _pi.Dictionary<Result_.D>

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Node_Type_ as Node_Type, 
    Result_ as Result, 
}
