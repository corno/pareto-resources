
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/copy/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/copy/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_path from "../../path/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "source": null,
                    "target": null,
                    "options": null,
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
                'source': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'source',
                        },
                    ),
                    ($) => v_external_path.Node_Path(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'target': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'target',
                        },
                    ),
                    ($) => v_external_path.Node_Path(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'options': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'options',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.dictionary.literal(
                                    {
                                        "recursive": null,
                                        "force": null,
                                        "errorOnExist": null,
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
                                    'recursive': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'recursive',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'force': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'force',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                    'errorOnExist': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'errorOnExist',
                                            },
                                        ),
                                        ($) => v_unmarshalled_from_parse_tree.Boolean(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'type': ['true/false', null],
                                            },
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Error: t_signatures.Error = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "path": null,
                    "type": null,
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
                'path': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'path',
                        },
                    ),
                    ($) => v_external_path.Node_Path(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['value'],
                            ($t): t_out.Error.type_ => {
                                switch ($t) {
                                    case 'source does not exist':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['source does not exist', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'node is not a file':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['node is not a file', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'permission denied':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['permission denied', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'file too large':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['file too large', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'device not ready':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['device not ready', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
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
                    ),
                ),
            }
        },
    ),
)
