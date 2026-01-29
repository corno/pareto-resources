
import * as _pi from "pareto-core/dist/interface"

export namespace Parameters_ {
    
    export namespace lines {
        
        export type L = string
        
    }
    
    export type lines = _pi.List<lines.L>
    
}

export type Parameters_ = {
    readonly 'lines': Parameters_.lines
}

export type Error_ = null

export { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
