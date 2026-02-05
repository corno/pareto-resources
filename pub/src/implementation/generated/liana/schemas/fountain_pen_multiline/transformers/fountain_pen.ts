    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen_multiline/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const Directory: t_signatures.Directory = ($) => v_serialize.Document(
        v_marshall.Directory(
            $,
        ),
    )
    
    export const Node: t_signatures.Node = ($) => v_serialize.Document(
        v_marshall.Node(
            $,
        ),
    )
    
    export const Paragraph: t_signatures.Paragraph = ($) => v_serialize.Document(
        v_marshall.Paragraph(
            $,
        ),
    )
    
    export const Phrase: t_signatures.Phrase = ($) => v_serialize.Document(
        v_marshall.Phrase(
            $,
        ),
    )
    
    export const Single_Line: t_signatures.Single_Line = ($) => v_serialize.Document(
        v_marshall.Single_Line(
            $,
        ),
    )
    
    export const List_of_Characters: t_signatures.List_of_Characters = ($) => v_serialize.Document(
        v_marshall.List_of_Characters(
            $,
        ),
    )
