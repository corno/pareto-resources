    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as i_in from "./data"
    
    export namespace Message_ {
        
        export type I = i_in.Message
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Message_ = (
        context: Message_.I,
    ) => Message_.O
    
    export { 
        Message_ as Message, 
    }
