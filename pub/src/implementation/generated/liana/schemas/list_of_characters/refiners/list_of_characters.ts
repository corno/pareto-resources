    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const List_of_Characters: t_signatures.List_of_Characters = ($, abort, $p) => v_unmarshall.List_of_Characters(
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
