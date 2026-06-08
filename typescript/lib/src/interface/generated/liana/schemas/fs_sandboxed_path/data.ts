
import * as _pi from 'pareto-core/dist/interface'

export namespace Node_Path_ {
    
    export type context = Context_Path_
    
    export type node = string
    
}

export type Node_Path_ = {
    readonly 'context': Node_Path_.context
    readonly 'node': Node_Path_.node
}

export namespace Context_Path_ {
    
    export type subpath = Context_Subpath_
    
}

export type Context_Path_ = {
    readonly 'subpath': Context_Path_.subpath
}

export namespace Context_Subpath_ {
    
    export type L = string
    
}

export type Context_Subpath_ = _pi.List<Context_Subpath_.L>

export { 
    Node_Path_ as Node_Path, 
    Context_Path_ as Context_Path, 
    Context_Subpath_ as Context_Subpath, 
}
