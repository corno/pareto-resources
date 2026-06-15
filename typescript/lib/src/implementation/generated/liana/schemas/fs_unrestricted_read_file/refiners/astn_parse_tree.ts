
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/specials/change_context'

import _p_list_from_text from 'pareto-core/dist/specials/list_from_text'

import _p_variables from 'pareto-core/dist/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_file/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_file/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_path from "../../fs_unrestricted_path/refiners/astn_parse_tree"

import * as v_external_list_of_characters from "../../list_of_characters/refiners/astn_parse_tree"

export const Parameters: t_signatures.Parameters = ($, abort) => v_external_path.Node_Path(
    $,
    ($) => abort(
        $,
    ),
)

export const Error: t_signatures.Error = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.literal.dictionary(
                {
                    "path": null,
                    "type": null,
                },
            ),
            'subdocument context': _p.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.literal.not_set(),
                },
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
                            'subdocument context': _p.literal.not_set(),
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
                            'subdocument context': _p.literal.not_set(),
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
                            $['option']['token']['value'],
                            ($t): t_out.Error.type_ => {
                                switch ($t) {
                                    case 'file does not exist':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['file does not exist', v_unmarshalled_from_parse_tree.Nothing(
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
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
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

export const Result: t_signatures.Result = ($, abort) => v_external_list_of_characters.List_of_Characters(
    $,
    ($) => abort(
        $,
    ),
)
