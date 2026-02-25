
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/remove/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/remove/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

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
                    "path": null,
                    "error if not exists": null,
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
                'error if not exists': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'error if not exists',
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
                                    case 'node does not exist':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['node does not exist', v_unmarshalled_from_parse_tree.Nothing(
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
