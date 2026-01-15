
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

export namespace Parameters_ {
    
    export namespace lines {
        
        export type L = string
        
    }
    
    export type lines = _pi.List<lines.L>
    
}

export type Parameters_ = {
    readonly 'lines': Parameters_.lines
}

export { 
    Parameters_ as Parameters, 
}
