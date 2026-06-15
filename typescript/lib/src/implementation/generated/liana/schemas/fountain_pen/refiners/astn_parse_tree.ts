
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

import _p_variables from 'pareto-core/dist/implementation/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fountain_pen/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_list_of_characters from "../../list_of_characters/refiners/astn_parse_tree"

export const Paragraph: t_signatures.Paragraph = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Paragraph => {
            switch ($t) {
                case 'composed':
                    return _p_change_context(
                        $['value'],
                        ($) => ['composed', _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => Paragraph(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
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
                                    $,
                                ),
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => Sentence(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
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
                                    $,
                                ),
                            )['optional'],
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
                                $,
                            ),
                        )],
                    )
                case 'rich list':
                    return _p_change_context(
                        $['value'],
                        ($) => ['rich list', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.literal.dictionary(
                                        {
                                            "items": null,
                                            "if empty": null,
                                            "if not empty": null,
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
                                        'items': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'items',
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )['items'],
                                            ).map(
                                                ($) => _p_change_context(
                                                    $['value'],
                                                    ($) => Sentence(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'if empty': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if empty',
                                                    'subdocument context': _p.literal.not_set(),
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
                                                ($) => Sentence(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'if not empty': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if not empty',
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.literal.dictionary(
                                                            {
                                                                "before": null,
                                                                "indent": null,
                                                                "separator": null,
                                                                "after": null,
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
                                                            'before': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'before',
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                    ($) => Sentence(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                            'indent': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'indent',
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'type': ['true/false', null],
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                            ),
                                                            'separator': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'separator',
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                    ($) => Phrase(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                            'after': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'after',
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                    ($) => Sentence(
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
                                    'subdocument context': _p.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Sentence: t_signatures.Sentence = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.literal.not_set(),
        },
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => Phrase(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Phrase: t_signatures.Phrase = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Phrase => {
            switch ($t) {
                case 'value':
                    return _p_change_context(
                        $['value'],
                        ($) => ['value', _p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                            ($) => _p.decide.text(
                                $['option']['token']['value'],
                                ($t): t_out.Phrase.value => {
                                    switch ($t) {
                                        case 'text':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ['text', v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
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
                                    $,
                                ),
                                {
                                    'subdocument context': _p.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => _p_change_context(
                                $['value'],
                                ($) => Phrase(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
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
                                    $,
                                ),
                            )['optional'],
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
                                $,
                            ),
                        )],
                    )
                case 'rich list':
                    return _p_change_context(
                        $['value'],
                        ($) => ['rich list', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.literal.dictionary(
                                        {
                                            "items": null,
                                            "if empty": null,
                                            "if not empty": null,
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
                                        'items': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'items',
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'subdocument context': _p.literal.not_set(),
                                                    },
                                                )['items'],
                                            ).map(
                                                ($) => _p_change_context(
                                                    $['value'],
                                                    ($) => Phrase(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'if empty': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if empty',
                                                    'subdocument context': _p.literal.not_set(),
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
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if not empty',
                                                    'subdocument context': _p.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.literal.dictionary(
                                                            {
                                                                "before": null,
                                                                "separator": null,
                                                                "after": null,
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
                                                            'before': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'before',
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'separator',
                                                                        'subdocument context': _p.literal.not_set(),
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
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'after',
                                                                        'subdocument context': _p.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Phrase(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
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
)
