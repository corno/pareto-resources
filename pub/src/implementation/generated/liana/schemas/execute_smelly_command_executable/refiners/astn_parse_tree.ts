
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_smelly_command_executable/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/execute_smelly_command_executable/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_terminal_output from "../../terminal_output/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "args": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'args': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'args',
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['items'],
                    ).map(
                        ($) => _p_change_context(
                            $['value'],
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Error: t_signatures.Error = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
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
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "message": null,
                                        },
                                    ),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                    )
                                    return {
                                        'message': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'message',
                                                },
                                            ),
                                            ($) => v_external_terminal_output.Message(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'non zero exit code':
                    return _p_change_context(
                        $['value'],
                        ($) => ['non zero exit code', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "exit code": null,
                                            "stderr": null,
                                            "stdout": null,
                                        },
                                    ),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                    )
                                    return {
                                        'exit code': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'exit code',
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Number(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['decimal', null],
                                                    },
                                                ),
                                            ),
                                        ),
                                        'stderr': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'stderr',
                                                },
                                            ),
                                            ($) => v_external_terminal_output.Message(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'stdout': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'stdout',
                                                },
                                            ),
                                            ($) => v_external_terminal_output.Message(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)
