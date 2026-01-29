
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/copy/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/copy/data"

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
        'source': _p_cc(
            $.__get_entry(
                'source',
                ($) => abort(
                    ['no such entry', "source"]
                )
            ),
            ($) => v_external_path.Node_Path(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'target': _p_cc(
            $.__get_entry(
                'target',
                ($) => abort(
                    ['no such entry', "target"]
                )
            ),
            ($) => v_external_path.Node_Path(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'options': _p_cc(
            $.__get_entry(
                'options',
                ($) => abort(
                    ['no such entry', "options"]
                )
            ),
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'recursive': _p_cc(
                        $.__get_entry(
                            'recursive',
                            ($) => abort(
                                ['no such entry', "recursive"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                ['expected an optional', null]
                            )
                        ).__o_map(
                            ($) => v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )
                        )
                    ),
                    'force': _p_cc(
                        $.__get_entry(
                            'force',
                            ($) => abort(
                                ['no such entry', "force"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                ['expected an optional', null]
                            )
                        ).__o_map(
                            ($) => v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )
                        )
                    ),
                    'errorOnExist': _p_cc(
                        $.__get_entry(
                            'errorOnExist',
                            ($) => abort(
                                ['no such entry', "errorOnExist"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                ['expected an optional', null]
                            )
                        ).__o_map(
                            ($) => v_deserialize_boolean.deserialize(
                                v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                ),
                                ($) => abort(
                                    ['not a valid boolean', null]
                                )
                            )
                        )
                    ),
                })
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
                case 'source does not exist':
                    return _p_cc(
                        $['value'],
                        ($) => ['source does not exist', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )]
                    )
                case 'node is not a file':
                    return _p_cc(
                        $['value'],
                        ($) => ['node is not a file', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )]
                    )
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
                case 'file too large':
                    return _p_cc(
                        $['value'],
                        ($) => ['file too large', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )]
                    )
                case 'device not ready':
                    return _p_cc(
                        $['value'],
                        ($) => ['device not ready', v_unmarshalled_from_parse_tree.Nothing(
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
