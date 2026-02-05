    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "../../generic/unmarshall"
    
    import * as i_out from "./data"
    
    import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
    
    export namespace Directory_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Directory
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Directory_ = (
        context: Directory_.I,
        abort: _pi.Abort<Directory_.E>,
    ) => Directory_.O
    
    export namespace Node_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Node
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Node_ = (
        context: Node_.I,
        abort: _pi.Abort<Node_.E>,
    ) => Node_.O
    
    export namespace Paragraph_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Paragraph
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Paragraph_ = (
        context: Paragraph_.I,
        abort: _pi.Abort<Paragraph_.E>,
    ) => Paragraph_.O
    
    export namespace Phrase_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Phrase
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Phrase_ = (
        context: Phrase_.I,
        abort: _pi.Abort<Phrase_.E>,
    ) => Phrase_.O
    
    export namespace Single_Line_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Single_Line
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Single_Line_ = (
        context: Single_Line_.I,
        abort: _pi.Abort<Single_Line_.E>,
    ) => Single_Line_.O
    
    export namespace List_of_Characters_ {
        
        export type I = i_in.Value
        
        export type O = i_out.List_of_Characters
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type List_of_Characters_ = (
        context: List_of_Characters_.I,
        abort: _pi.Abort<List_of_Characters_.E>,
    ) => List_of_Characters_.O
    
    export { 
        Directory_ as Directory, 
        Node_ as Node, 
        Paragraph_ as Paragraph, 
        Phrase_ as Phrase, 
        Single_Line_ as Single_Line, 
        List_of_Characters_ as List_of_Characters, 
    }
