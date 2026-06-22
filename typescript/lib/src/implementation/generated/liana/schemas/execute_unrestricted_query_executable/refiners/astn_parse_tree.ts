
import * as p_ from 'pareto-core/dist/implementation/refiner'

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_unrestricted_query_executable/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/execute_unrestricted_query_executable/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_path from "../../fs_unrestricted_path/refiners/astn_parse_tree"

import * as v_external_terminal_output from "../../terminal_output/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "program": null,
                    "args": null,
                    "working directory": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'program': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'program',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'args': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'args',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        )['items'],
                    ).map(
                        ($) => p_change_context(
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
                'working directory': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'working directory',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['optional'],
                    ).map(
                        ($) => v_external_path.Context_Path(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Error: t_signatures.Error = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_.from.text(
        $['option']['token']['value'],
    ).to_state($, 
        ($, $t):t_out.Error => {
            switch ($t) {
                case 'failed to spawn':
                    return p_change_context(
                        $['value'],
                        ($) => ['failed to spawn', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "message": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'message': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'message',
                                                    'subdocument context': p_.literal.not_set(),
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
                    return p_change_context(
                        $['value'],
                        ($) => ['non zero exit code', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "exit code": null,
                                            "stderr": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'exit code': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'exit code',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        ),
                                        'stderr': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'stderr',
                                                    'subdocument context': p_.literal.not_set(),
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
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Result: t_signatures.Result = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "stdout": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'stdout': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'stdout',
                            'subdocument context': p_.literal.not_set(),
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
)
