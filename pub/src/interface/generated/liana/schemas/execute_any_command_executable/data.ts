    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i__imports_terminal_output from "../terminal_output/data"
    
    export namespace Parameters_ {
        
        export type program = string
        
        export namespace args {
            
            export type L = string
            
        }
        
        export type args = _pi.List<args.L>
        
    }
    
    export type Parameters_ = {
        readonly 'program': Parameters_.program
        readonly 'args': Parameters_.args
    }
    
    export namespace Error_ {
        
        export namespace failed_to_spawn {
            
            export type message = i__imports_terminal_output.Message
            
        }
        
        export type failed_to_spawn = {
            readonly 'message': failed_to_spawn.message
        }
        
        export namespace non_zero_exit_code {
            
            export namespace exit_code {
                
                export type O = number
                
            }
            
            export type exit_code = _pi.Optional_Value<exit_code.O>
            
            export type stderr = i__imports_terminal_output.Message
            
        }
        
        export type non_zero_exit_code = {
            readonly 'exit code': non_zero_exit_code.exit_code
            readonly 'stderr': non_zero_exit_code.stderr
        }
        
    }
    
    export type Error_ = 
        | readonly ['failed to spawn', Error_.failed_to_spawn]
        | readonly ['non zero exit code', Error_.non_zero_exit_code]
    
    export { 
        Parameters_ as Parameters, 
        Error_ as Error, 
    }
