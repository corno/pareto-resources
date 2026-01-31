
import * as _pi from "pareto-core/dist/interface"

import * as i__imports_path from "../path/data"

export type Parameters_ = i__imports_path.Node_Path

export namespace Error_ {
    
    export type node_does_not_exist = null
    
}

export type Error_ = 
    | readonly ['node does not exist', Error_.node_does_not_exist]

export type Result_ = Node_Type_

export namespace Node_Type_ {
    
    export type file = null
    
    export type directory = null
    
}

export type Node_Type_ = 
    | readonly ['file', Node_Type_.file]
    | readonly ['directory', Node_Type_.directory]

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
}
