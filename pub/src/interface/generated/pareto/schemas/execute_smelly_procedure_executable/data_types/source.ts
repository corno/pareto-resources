import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Parameters = {
    readonly 'args': _i_core._T_List<null, string>
}

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['failed to spawn', {
        readonly 'message': string
    }]
    | readonly ['non zero exit code', {
        readonly 'exit code': _et.Optional_Value<number>
        readonly 'stderr': string
        readonly 'stdout': string
    }]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parameters = _T_Parameters

export type Error = _T_Error

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parameters {
    
    export namespace args {
        export type L = string
    }
    export type args = _i_core._T_List<null, string>
}

export namespace _T_Error {
    
    export namespace SG {
        
        export namespace failed_to_spawn {
            export type message = string
        }
        export type failed_to_spawn = {
            readonly 'message': string
        }
        
        export namespace non_zero_exit_code {
            
            export namespace exit_code {
                export type O = number
            }
            export type exit_code = _et.Optional_Value<number>
            export type stderr = string
            export type stdout = string
        }
        export type non_zero_exit_code = {
            readonly 'exit code': _et.Optional_Value<number>
            readonly 'stderr': string
            readonly 'stdout': string
        }
    }
    export type SG = 
        | readonly ['failed to spawn', {
            readonly 'message': string
        }]
        | readonly ['non zero exit code', {
            readonly 'exit code': _et.Optional_Value<number>
            readonly 'stderr': string
            readonly 'stdout': string
        }]
}

// *** ALIASES FOR NESTED TYPES

export namespace Parameters {
    
    export namespace args {
        export type L = string
    }
    export type args = _i_core._T_List<null, string>
}

export namespace Error {
    
    export namespace SG {
        
        export namespace failed_to_spawn {
            export type message = string
        }
        export type failed_to_spawn = {
            readonly 'message': string
        }
        
        export namespace non_zero_exit_code {
            
            export namespace exit_code {
                export type O = number
            }
            export type exit_code = _et.Optional_Value<number>
            export type stderr = string
            export type stdout = string
        }
        export type non_zero_exit_code = {
            readonly 'exit code': _et.Optional_Value<number>
            readonly 'stderr': string
            readonly 'stdout': string
        }
    }
    export type SG = 
        | readonly ['failed to spawn', {
            readonly 'message': string
        }]
        | readonly ['non zero exit code', {
            readonly 'exit code': _et.Optional_Value<number>
            readonly 'stderr': string
            readonly 'stdout': string
        }]
}
