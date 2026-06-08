
import * as _pi from 'pareto-core/dist/interface'

import * as i_imports_path from "../fs_sandboxed_path/data"

import * as i_imports_unrestricted from "../fs_unrestricted_chmod/data"

export namespace Parameters_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace mode {
        
        export type owner = Permissions_
        
        export type group = Permissions_
        
        export type others = Permissions_
        
        export namespace special_bits {
            
            export namespace O {
                
                export type setuid = boolean
                
                export type setgid = boolean
                
                export type sticky = boolean
                
            }
            
            export type O = {
                readonly 'setuid': O.setuid
                readonly 'setgid': O.setgid
                readonly 'sticky': O.sticky
            }
            
        }
        
        export type special_bits = _pi.Optional_Value<special_bits.O>
        
    }
    
    export type mode = {
        readonly 'owner': mode.owner
        readonly 'group': mode.group
        readonly 'others': mode.others
        readonly 'special bits': mode.special_bits
    }
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'mode': Parameters_.mode
}

export namespace Permissions_ {
    
    export type read = boolean
    
    export type write = boolean
    
    export type execute = boolean
    
}

export type Permissions_ = {
    readonly 'read': Permissions_.read
    readonly 'write': Permissions_.write
    readonly 'execute': Permissions_.execute
}

export type Error_ = i_imports_unrestricted.Error

export { 
    Parameters_ as Parameters, 
    Permissions_ as Permissions, 
    Error_ as Error, 
}
