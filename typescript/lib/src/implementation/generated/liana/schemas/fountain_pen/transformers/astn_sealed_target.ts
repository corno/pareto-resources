
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_list_of_characters from "../../list_of_characters/transformers/astn_sealed_target"

export const Paragraph: t_signatures.Paragraph = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'composed':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'composed',
                        'value': ['list', _p.list.from.list(
                            $,
                        ).map(
                            ($) => Paragraph(
                                $,
                            ),
                        )],
                    }),
                )
            case 'sentences':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'sentences',
                        'value': ['list', _p.list.from.list(
                            $,
                        ).map(
                            ($) => Sentence(
                                $,
                            ),
                        )],
                    }),
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': ['optional', _p.decide.optional(
                            $,
                            ($): t_out.Value.optional => ['set', Paragraph(
                                $,
                            )],
                            () => ['not set', null],
                        )],
                    }),
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    }),
                )
            case 'rich list':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'rich list',
                        'value': ['group', ['verbose', _p.literal.dictionary(
                            {
                                "items": _p_change_context(
                                    $['items'],
                                    ($) => ['list', _p.list.from.list(
                                        $,
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                        ),
                                    )],
                                ),
                                "if empty": _p_change_context(
                                    $['if empty'],
                                    ($) => ['optional', _p.decide.optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Sentence(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "if not empty": _p_change_context(
                                    $['if not empty'],
                                    ($) => ['group', ['verbose', _p.literal.dictionary(
                                        {
                                            "before": _p_change_context(
                                                $['before'],
                                                ($) => ['optional', _p.decide.optional(
                                                    $,
                                                    ($): t_out.Value.optional => ['set', Sentence(
                                                        $,
                                                    )],
                                                    () => ['not set', null],
                                                )],
                                            ),
                                            "indent": _p_change_context(
                                                $['indent'],
                                                ($) => ['text', {
                                                    'delimiter': ['none', null],
                                                    'value': v_primitives_to_text.true_false(
                                                        $,
                                                    ),
                                                }],
                                            ),
                                            "separator": _p_change_context(
                                                $['separator'],
                                                ($) => ['optional', _p.decide.optional(
                                                    $,
                                                    ($): t_out.Value.optional => ['set', Phrase(
                                                        $,
                                                    )],
                                                    () => ['not set', null],
                                                )],
                                            ),
                                            "after": _p_change_context(
                                                $['after'],
                                                ($) => ['optional', _p.decide.optional(
                                                    $,
                                                    ($): t_out.Value.optional => ['set', Sentence(
                                                        $,
                                                    )],
                                                    () => ['not set', null],
                                                )],
                                            ),
                                        },
                                    )]],
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Sentence: t_signatures.Sentence = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => Phrase(
        $,
    ),
)]

export const Phrase: t_signatures.Phrase = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'value':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'value',
                        'value': ['state', _p.decide.state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'text':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'text',
                                                'value': ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }],
                                            }),
                                        )
                                    case 'list of characters':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'list of characters',
                                                'value': v_external_list_of_characters.List_of_Characters(
                                                    $,
                                                ),
                                            }),
                                        )
                                    default:
                                        return _p.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            case 'indent':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'indent',
                        'value': Paragraph(
                            $,
                        ),
                    }),
                )
            case 'composed':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'composed',
                        'value': ['list', _p.list.from.list(
                            $,
                        ).map(
                            ($) => Phrase(
                                $,
                            ),
                        )],
                    }),
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': ['optional', _p.decide.optional(
                            $,
                            ($): t_out.Value.optional => ['set', Phrase(
                                $,
                            )],
                            () => ['not set', null],
                        )],
                    }),
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    }),
                )
            case 'rich list':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'rich list',
                        'value': ['group', ['verbose', _p.literal.dictionary(
                            {
                                "items": _p_change_context(
                                    $['items'],
                                    ($) => ['list', _p.list.from.list(
                                        $,
                                    ).map(
                                        ($) => Phrase(
                                            $,
                                        ),
                                    )],
                                ),
                                "if empty": _p_change_context(
                                    $['if empty'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                                "if not empty": _p_change_context(
                                    $['if not empty'],
                                    ($) => ['group', ['verbose', _p.literal.dictionary(
                                        {
                                            "before": _p_change_context(
                                                $['before'],
                                                ($) => Phrase(
                                                    $,
                                                ),
                                            ),
                                            "separator": _p_change_context(
                                                $['separator'],
                                                ($) => Phrase(
                                                    $,
                                                ),
                                            ),
                                            "after": _p_change_context(
                                                $['after'],
                                                ($) => Phrase(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)]
