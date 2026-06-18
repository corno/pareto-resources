
import * as p_ from 'pareto-core/dist/implementation/refiner'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/signatures/refiners/list_of_characters"

import * as v_deserialize from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree"

export const List_of_Characters: t_signatures.List_of_Characters = ($, abort, $p) => v_unmarshall.List_of_Characters(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)
