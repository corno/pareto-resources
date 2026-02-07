
import * as _p from 'pareto-core/dist/expression'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/read_directory/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort, $p) => v_unmarshall.Parameters(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Error: t_signatures.Error = ($, abort, $p) => v_unmarshall.Error(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Result: t_signatures.Result = ($, abort, $p) => v_unmarshall.Result(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)

export const Node_Type: t_signatures.Node_Type = ($, abort, $p) => v_unmarshall.Node_Type(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse error', $],
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshall error', $],
    ),
)
