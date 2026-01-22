
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../core/location"

export namespace Message_ {
    
    export namespace lines {
        
        export type L = string
        
    }
    
    export type lines = _pi.List<lines.L>
    
    export type raw = string
    
}

export type Message_ = {
    readonly 'lines': Message_.lines
    readonly 'raw': Message_.raw
}

export { 
    Message_ as Message, 
}
