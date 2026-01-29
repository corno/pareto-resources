
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/execute_smelly_command_executable/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/execute_smelly_command_executable/data"

import * as t_external_terminal_output from "../terminal_output/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_terminal_output from "../terminal_output/unmarshall"

export const Parameters: t_signatures.Parameters = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'args': _p_cc(
            $.__get_entry(
                'args',
                ($) => abort(
                    ['no such entry', "args"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.List(
                $,
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
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
                case 'failed to spawn':
                    return _p_cc(
                        $['value'],
                        ($) => ['failed to spawn', _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'message': _p_cc(
                                    $.__get_entry(
                                        'message',
                                        ($) => abort(
                                            ['no such entry', "message"]
                                        )
                                    ),
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                            })
                        )]
                    )
                case 'non zero exit code':
                    return _p_cc(
                        $['value'],
                        ($) => ['non zero exit code', _p_cc(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null]
                                )
                            ),
                            ($) => ({
                                'exit code': _p_cc(
                                    $.__get_entry(
                                        'exit code',
                                        ($) => abort(
                                            ['no such entry', "exit code"]
                                        )
                                    ),
                                    ($) => v_unmarshalled_from_parse_tree.Optional(
                                        $,
                                        ($) => abort(
                                            ['expected an optional', null]
                                        )
                                    ).__o_map(
                                        ($) => v_deserialize_number.deserialize(
                                            v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null]
                                                )
                                            ),
                                            ($) => abort(
                                                ['not a valid number', null]
                                            )
                                        )
                                    )
                                ),
                                'stderr': _p_cc(
                                    $.__get_entry(
                                        'stderr',
                                        ($) => abort(
                                            ['no such entry', "stderr"]
                                        )
                                    ),
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                                'stdout': _p_cc(
                                    $.__get_entry(
                                        'stdout',
                                        ($) => abort(
                                            ['no such entry', "stdout"]
                                        )
                                    ),
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                        ($) => abort(
                                            $
                                        )
                                    )
                                ),
                            })
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
