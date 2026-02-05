    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_any_smelly_command_executable/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const Parameters: t_signatures.Parameters = ($, abort, $p) => v_unmarshall.Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
    
    export const Error: t_signatures.Error = ($, abort, $p) => v_unmarshall.Error(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['tbd', null],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['tbd', null],
        ),
    )
