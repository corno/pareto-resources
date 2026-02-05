    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/copy/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const Parameters: t_signatures.Parameters = ($) => v_serialize.Document(
        v_marshall.Parameters(
            $,
        ),
    )
    
    export const Error: t_signatures.Error = ($) => v_serialize.Document(
        v_marshall.Error(
            $,
        ),
    )
