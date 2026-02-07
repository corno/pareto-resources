
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_query_executable_and_catch/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/execute_query_executable_and_catch/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_terminal_output from "../../terminal_output/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'program': _p_change_context(
            $.__get_entry_deprecated(
                'program',
                ($) => abort(
                    ['no such entry', "program"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'args': _p_change_context(
            $.__get_entry_deprecated(
                'args',
                ($) => abort(
                    ['no such entry', "args"],
                ),
            ),
            ($) => _p.list.from.list(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null],
                    ),
                ),
            ).map(
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
        ),
    }),
)

export const Result: t_signatures.Result = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Result => {
            switch ($t) {
                case 'success':
                    return _p_change_context(
                        $['value'],
                        ($) => ['success', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'stdout': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'stdout',
                                        ($) => abort(
                                            ['no such entry', "stdout"],
                                        ),
                                    ),
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                case 'error':
                    return _p_change_context(
                        $['value'],
                        ($) => ['error', Error(
                            $,
                            ($) => abort(
                                $,
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
                case 'failed to spawn':
                    return _p_change_context(
                        $['value'],
                        ($) => ['failed to spawn', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'message': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'message',
                                        ($) => abort(
                                            ['no such entry', "message"],
                                        ),
                                    ),
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        )],
                    )
                case 'non zero exit code':
                    return _p_change_context(
                        $['value'],
                        ($) => ['non zero exit code', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'exit code': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'exit code',
                                        ($) => abort(
                                            ['no such entry', "exit code"],
                                        ),
                                    ),
                                    ($) => _p.optional.from.optional(
                                        v_unmarshalled_from_parse_tree.Optional(
                                            $,
                                            ($) => abort(
                                                ['expected an optional', null],
                                            ),
                                        ),
                                    ).map(
                                        ($) => v_deserialize_number.deserialize(
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
                                                ['not a valid number', null],
                                            ),
                                        ),
                                    ),
                                ),
                                'stderr': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'stderr',
                                        ($) => abort(
                                            ['no such entry', "stderr"],
                                        ),
                                    ),
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
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
