
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fountain_pen/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

import * as v_external_list_of_characters from "../../list_of_characters/refiners/astn_parse_tree"

export const Paragraph: t_signatures.Paragraph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Paragraph => {
            switch ($t) {
                case 'composed':
                    return _p_change_context(
                        $['value'],
                        ($) => ['composed', _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    ['expected a list', null],
                                ),
                            ),
                        ).map(
                            ($) => Paragraph(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        )],
                    )
                case 'sentences':
                    return _p_change_context(
                        $['value'],
                        ($) => ['sentences', _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    ['expected a list', null],
                                ),
                            ),
                        ).map(
                            ($) => Sentence(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        )],
                    )
                case 'optional':
                    return _p_change_context(
                        $['value'],
                        ($) => ['optional', _p.optional.from.optional(
                            v_unmarshalled_from_parse_tree.Optional(
                                $,
                                ($) => abort(
                                    ['expected an optional', null],
                                ),
                            ),
                        ).map(
                            ($) => Paragraph(
                                $,
                                ($) => abort(
                                    $,
                                ),
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
                case 'rich list':
                    return _p_change_context(
                        $['value'],
                        ($) => ['rich list', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'items': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'items',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "items"],
                                            ),
                                        },
                                    ),
                                    ($) => _p.list.from.list(
                                        v_unmarshalled_from_parse_tree.List(
                                            $,
                                            ($) => abort(
                                                ['expected a list', null],
                                            ),
                                        ),
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                ),
                                'if empty': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'if empty',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "if empty"],
                                            ),
                                        },
                                    ),
                                    ($) => _p.optional.from.optional(
                                        v_unmarshalled_from_parse_tree.Optional(
                                            $,
                                            ($) => abort(
                                                ['expected an optional', null],
                                            ),
                                        ),
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                ),
                                'if not empty': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'if not empty',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "if not empty"],
                                            ),
                                        },
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'before': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'before',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "before"],
                                                        ),
                                                    },
                                                ),
                                                ($) => _p.optional.from.optional(
                                                    v_unmarshalled_from_parse_tree.Optional(
                                                        $,
                                                        ($) => abort(
                                                            ['expected an optional', null],
                                                        ),
                                                    ),
                                                ).map(
                                                    ($) => Sentence(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'indent': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'indent',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "indent"],
                                                        ),
                                                    },
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
                                            'separator': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'separator',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "separator"],
                                                        ),
                                                    },
                                                ),
                                                ($) => _p.optional.from.optional(
                                                    v_unmarshalled_from_parse_tree.Optional(
                                                        $,
                                                        ($) => abort(
                                                            ['expected an optional', null],
                                                        ),
                                                    ),
                                                ).map(
                                                    ($) => Phrase(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            'after': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'after',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "after"],
                                                        ),
                                                    },
                                                ),
                                                ($) => _p.optional.from.optional(
                                                    v_unmarshalled_from_parse_tree.Optional(
                                                        $,
                                                        ($) => abort(
                                                            ['expected an optional', null],
                                                        ),
                                                    ),
                                                ).map(
                                                    ($) => Sentence(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        }),
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

export const Sentence: t_signatures.Sentence = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => Phrase(
        $,
        ($) => abort(
            $,
        ),
    ),
)

export const Phrase: t_signatures.Phrase = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null],
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Phrase => {
            switch ($t) {
                case 'value':
                    return _p_change_context(
                        $['value'],
                        ($) => ['value', _p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    ['expected a state', null],
                                ),
                            ),
                            ($) => _p.decide.text(
                                $['option']['value'],
                                ($t): t_out.Phrase.value => {
                                    switch ($t) {
                                        case 'text':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ['text', v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                )],
                                            )
                                        case 'list of characters':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ['list of characters', v_external_list_of_characters.List_of_Characters(
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
                        )],
                    )
                case 'indent':
                    return _p_change_context(
                        $['value'],
                        ($) => ['indent', Paragraph(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'composed':
                    return _p_change_context(
                        $['value'],
                        ($) => ['composed', _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    ['expected a list', null],
                                ),
                            ),
                        ).map(
                            ($) => Phrase(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        )],
                    )
                case 'optional':
                    return _p_change_context(
                        $['value'],
                        ($) => ['optional', _p.optional.from.optional(
                            v_unmarshalled_from_parse_tree.Optional(
                                $,
                                ($) => abort(
                                    ['expected an optional', null],
                                ),
                            ),
                        ).map(
                            ($) => Phrase(
                                $,
                                ($) => abort(
                                    $,
                                ),
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
                case 'rich list':
                    return _p_change_context(
                        $['value'],
                        ($) => ['rich list', _p_change_context(
                            v_unmarshalled_from_parse_tree.Group(
                                $,
                                ($) => abort(
                                    ['expected a group', null],
                                ),
                            ),
                            ($) => ({
                                'items': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'items',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "items"],
                                            ),
                                        },
                                    ),
                                    ($) => _p.list.from.list(
                                        v_unmarshalled_from_parse_tree.List(
                                            $,
                                            ($) => abort(
                                                ['expected a list', null],
                                            ),
                                        ),
                                    ).map(
                                        ($) => Phrase(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                ),
                                'if empty': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'if empty',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "if empty"],
                                            ),
                                        },
                                    ),
                                    ($) => Phrase(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                ),
                                'if not empty': _p_change_context(
                                    $.__get_entry_deprecated(
                                        'if not empty',
                                        {
                                            no_such_entry: ($) => abort(
                                                ['no such entry', "if not empty"],
                                            ),
                                        },
                                    ),
                                    ($) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'before': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'before',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "before"],
                                                        ),
                                                    },
                                                ),
                                                ($) => Phrase(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'separator': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'separator',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "separator"],
                                                        ),
                                                    },
                                                ),
                                                ($) => Phrase(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'after': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'after',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "after"],
                                                        ),
                                                    },
                                                ),
                                                ($) => Phrase(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }),
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
