
import * as p_i from 'pareto-core/dist/__internals/Abort'
import * as p_di from 'pareto-core/dist/data/interface'

export namespace Message_ {
    
    export namespace lines {
        
        export type L = string
        
    }
    
    export type lines = p_di.List<lines.L>
    
    export type raw = string
    
}

export type Message_ = {
    readonly 'lines': Message_.lines
    readonly 'raw': Message_.raw
}

export { 
    Message_ as Message, 
}
