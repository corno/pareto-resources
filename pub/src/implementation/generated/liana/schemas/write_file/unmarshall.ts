
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/write_file/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/write_file/data"

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
        'data': _p_cc(
            $.__get_entry(
                'data',
                ($) => abort(
                    ['no such entry', "data"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
    })
)

export const Error: t_signatures.Error = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Error => {
            switch ($t) {
                case 'permission denied':
                    return _p_cc(
                        $['value'],
                        ($) => ['permission denied', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )]
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
)
