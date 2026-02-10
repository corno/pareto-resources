
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/read_file/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/read_file/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_path from "../../path/refiners/astn_parse_tree"

import * as v_external_list_of_characters from "../../list_of_characters/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => v_external_path.Node_Path(
    $,
    ($) => abort(
        $,
    ),
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
                case 'file does not exist':
                    return _p_change_context(
                        $['value'],
                        ($) => ['file does not exist', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'node is not a file':
                    return _p_change_context(
                        $['value'],
                        ($) => ['node is not a file', v_unmarshalled_from_parse_tree.Nothing(
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
                case 'file too large':
                    return _p_change_context(
                        $['value'],
                        ($) => ['file too large', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'device not ready':
                    return _p_change_context(
                        $['value'],
                        ($) => ['device not ready', v_unmarshalled_from_parse_tree.Nothing(
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

export const Result: t_signatures.Result = ($, abort) => v_external_list_of_characters.List_of_Characters(
    $,
    ($) => abort(
        $,
    ),
)
