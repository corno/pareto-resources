
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/read_directory/unmarshall"

import * as t_external_path from "../path/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_path from "../path/unmarshall"

export const Parameters: t_signatures.Parameters = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'path': _p_cc(
            $.__get_entry(
                'path',
                ($) => abort(
                    ['no such entry', "path"]
                )
            ),
            ($) => v_external_path.Node_Path(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Error: t_signatures.Error = ($, abort) => _p_unreachable_code_path(
)

export const Node_Type: t_signatures.Node_Type = ($, abort) => _p_unreachable_code_path(
)

export const Result: t_signatures.Result = ($, abort) => v_unmarshalled_from_parse_tree.Dictionary(
    $,
    ($) => abort(
        ['expected a dictionary', null]
    )
).__d_map(
    ($, id) => _p_cc(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null]
            )
        ),
        ($) => ({
            'node type': _p_cc(
                $.__get_entry(
                    'node type',
                    ($) => abort(
                        ['no such entry', "node type"]
                    )
                ),
                ($) => Node_Type(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
            'context directory': _p_cc(
                $.__get_entry(
                    'context directory',
                    ($) => abort(
                        ['no such entry', "context directory"]
                    )
                ),
                ($) => v_external_path.Context_Path(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
            'path': _p_cc(
                $.__get_entry(
                    'path',
                    ($) => abort(
                        ['no such entry', "path"]
                    )
                ),
                ($) => v_external_path.Node_Path(
                    $,
                    ($) => abort(
                        $
                    )
                )
            ),
        })
    )
)
