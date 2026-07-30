
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/schema'

import * as i_imports_path from "../fs_unrestricted_path/schema.js"

import * as i_imports_terminal_output from "../terminal_output/schema.js"

export namespace Parameters_ {
    
    export namespace args {
        
        export type L = string
        
    }
    
    export type args = p_di.List<args.L>
    
    export namespace working_directory {
        
        export type O = i_imports_path.Context_Path
        
    }
    
    export type working_directory = p_di.Optional_Value<working_directory.O>
    
}

export type Parameters_ = {
    readonly 'args': Parameters_.args
    readonly 'working directory': Parameters_.working_directory
}

export namespace Error_ {
    
    export namespace failed_to_spawn {
        
        export type message = i_imports_terminal_output.Message
        
    }
    
    export type failed_to_spawn = {
        readonly 'message': failed_to_spawn.message
    }
    
    export namespace non_zero_exit_code {
        
        export namespace exit_code {
            
            export type O = number
            
        }
        
        export type exit_code = p_di.Optional_Value<exit_code.O>
        
        export type stderr = i_imports_terminal_output.Message
        
    }
    
    export type non_zero_exit_code = {
        readonly 'exit code': non_zero_exit_code.exit_code
        readonly 'stderr': non_zero_exit_code.stderr
    }
    
}

export type Error_ = 
    | readonly ['failed to spawn', Error_.failed_to_spawn]
    | readonly ['non zero exit code', Error_.non_zero_exit_code]

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
