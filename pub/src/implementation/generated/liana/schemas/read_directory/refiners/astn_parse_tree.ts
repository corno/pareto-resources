
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/read_directory/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/read_directory/data"

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
                case 'directory does not exist':
                    return _p_change_context(
                        $['value'],
                        ($) => ['directory does not exist', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'node is not a directory':
                    return _p_change_context(
                        $['value'],
                        ($) => ['node is not a directory', v_unmarshalled_from_parse_tree.Nothing(
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

export const Result: t_signatures.Result = ($, abort) => _p.dictionary.from.dictionary(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null],
        ),
    ),
).map(
    ($, id) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'node type': _p_change_context(
                $.__get_entry_deprecated(
                    'node type',
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "node type"],
                        ),
                    },
                ),
                ($) => Node_Type(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
            'context directory': _p_change_context(
                $.__get_entry_deprecated(
                    'context directory',
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "context directory"],
                        ),
                    },
                ),
                ($) => v_external_path.Context_Path(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
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
        }),
    ),
)

export const Node_Type: t_signatures.Node_Type = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Node_Type => {
            switch ($t) {
                case 'file':
                    return _p_change_context(
                        $['value'],
                        ($) => ['file', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'directory':
                    return _p_change_context(
                        $['value'],
                        ($) => ['directory', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'other':
                    return _p_change_context(
                        $['value'],
                        ($) => ['other', v_unmarshalled_from_parse_tree.Nothing(
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
