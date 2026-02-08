
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/remove/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/remove/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_path from "../../path/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'path': _p_change_context(
            $.__get_entry_deprecated(
                'path',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "path"],
                    ),
                },
            ),
            ($) => v_external_path.Node_Path(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'error if not exists': _p_change_context(
            $.__get_entry_deprecated(
                'error if not exists',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "error if not exists"],
                    ),
                },
            ),
            ($) => v_deserialize_boolean.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid boolean', null],
                ),
            ),
        ),
    }),
)

export const Error: t_signatures.Error = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Error => {
            switch ($t) {
                case 'node does not exist':
                    return _p_change_context(
                        $['value'],
                        ($) => ['node does not exist', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'permission denied':
                    return _p_change_context(
                        $['value'],
                        ($) => ['permission denied', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']],
                    )
            }
        },
    ),
)
