
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/path/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/path/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Node_Path: t_signatures.Node_Path = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'context': _p_change_context(
            $.__get_entry(
                'context',
                ($) => abort(
                    ['no such entry', "context"],
                ),
            ),
            ($) => Context_Path(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'node': _p_change_context(
            $.__get_entry(
                'node',
                ($) => abort(
                    ['no such entry', "node"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
    }),
)

export const Context_Path: t_signatures.Context_Path = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry(
                'start',
                ($) => abort(
                    ['no such entry', "start"],
                ),
            ),
            ($) => Start(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'subpath': _p_change_context(
            $.__get_entry(
                'subpath',
                ($) => abort(
                    ['no such entry', "subpath"],
                ),
            ),
            ($) => Context_Subpath(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Context_Subpath: t_signatures.Context_Subpath = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
    ($) => v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    ),
)

export const Start: t_signatures.Start = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Start => {
            switch ($t) {
                case 'absolute':
                    return _p_change_context(
                        $['value'],
                        ($) => ['absolute', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null],
                            ),
                        )],
                    )
                case 'relative':
                    return _p_change_context(
                        $['value'],
                        ($) => ['relative', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'up steps': _p_change_context(
                                    $.__get_entry(
                                        'up steps',
                                        ($) => abort(
                                            ['no such entry', "up steps"],
                                        ),
                                    ),
                                    ($) => Up_Steps(
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

export const Up_Steps: t_signatures.Up_Steps = ($, abort) => v_deserialize_number.deserialize(
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
)

export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'leading slash': _p_change_context(
            $.__get_entry(
                'leading slash',
                ($) => abort(
                    ['no such entry', "leading slash"],
                ),
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
        'segments': _p_change_context(
            $.__get_entry(
                'segments',
                ($) => abort(
                    ['no such entry', "segments"],
                ),
            ),
            ($) => _p.list.map(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null],
                    ),
                ),
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.State(
                        $,
                        ($) => abort(
                            ['expected a state', null],
                        ),
                    ),
                    ($) => _p.decide.text(
                        $['option']['value'],
                        ($t): t_out.Non_Normalized_Path.segments.L => {
                            switch ($t) {
                                case 'parent':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['parent', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        )],
                                    )
                                case 'child':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['child', v_unmarshalled_from_parse_tree.Text(
                                            $,
                                            ($) => abort(
                                                ['expected a text', null],
                                            ),
                                        )],
                                    )
                                case 'current':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['current', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null],
                                            ),
                                        )],
                                    )
                                case 'nothing':
                                    return _p_change_context(
                                        $['value'],
                                        ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
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
                ),
            ),
        ),
        'trailing slash': _p_change_context(
            $.__get_entry(
                'trailing slash',
                ($) => abort(
                    ['no such entry', "trailing slash"],
                ),
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
