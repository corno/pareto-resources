
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fountain_pen/data"

import * as v_list_of_characters from "../../list_of_characters/transformers/boilerplate_for_migrate"

export const Paragraph: t_signatures.Paragraph = ($) => _p.decide.state(
    $,
    ($): t_out.Paragraph => {
        switch ($[0]) {
            case 'composed':
                return _p.ss(
                    $,
                    ($) => ['composed', _p.list.from.list(
                        $,
                    ).map(
                        ($) => Paragraph(
                            $,
                        ),
                    )],
                )
            case 'sentences':
                return _p.ss(
                    $,
                    ($) => ['sentences', _p.list.from.list(
                        $,
                    ).map(
                        ($) => Sentence(
                            $,
                        ),
                    )],
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ['optional', _p.optional.from.optional(
                        $,
                    ).map(
                        ($) => Paragraph(
                            $,
                        ),
                    )],
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ['nothing', null],
                )
            case 'rich list':
                return _p.ss(
                    $,
                    ($) => ['rich list', {
                        'items': _p_change_context(
                            $['items'],
                            ($) => _p.list.from.list(
                                $,
                            ).map(
                                ($) => Sentence(
                                    $,
                                ),
                            ),
                        ),
                        'if empty': _p_change_context(
                            $['if empty'],
                            ($) => _p.optional.from.optional(
                                $,
                            ).map(
                                ($) => Sentence(
                                    $,
                                ),
                            ),
                        ),
                        'if not empty': _p_change_context(
                            $['if not empty'],
                            ($) => ({
                                'before': _p_change_context(
                                    $['before'],
                                    ($) => _p.optional.from.optional(
                                        $,
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                        ),
                                    ),
                                ),
                                'indent': _p_change_context(
                                    $['indent'],
                                    ($) => $,
                                ),
                                'separator': _p_change_context(
                                    $['separator'],
                                    ($) => _p.optional.from.optional(
                                        $,
                                    ).map(
                                        ($) => Phrase(
                                            $,
                                        ),
                                    ),
                                ),
                                'after': _p_change_context(
                                    $['after'],
                                    ($) => _p.optional.from.optional(
                                        $,
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)

export const Sentence: t_signatures.Sentence = ($) => _p.list.from.list(
    $,
).map(
    ($) => Phrase(
        $,
    ),
)

export const Phrase: t_signatures.Phrase = ($) => _p.decide.state(
    $,
    ($): t_out.Phrase => {
        switch ($[0]) {
            case 'value':
                return _p.ss(
                    $,
                    ($) => ['value', _p.decide.state(
                        $,
                        ($): t_out.Phrase.value => {
                            switch ($[0]) {
                                case 'text':
                                    return _p.ss(
                                        $,
                                        ($) => ['text', $],
                                    )
                                case 'list of characters':
                                    return _p.ss(
                                        $,
                                        ($) => ['list of characters', v_list_of_characters.List_of_Characters(
                                            $,
                                        )],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                )
            case 'indent':
                return _p.ss(
                    $,
                    ($) => ['indent', Paragraph(
                        $,
                    )],
                )
            case 'composed':
                return _p.ss(
                    $,
                    ($) => ['composed', _p.list.from.list(
                        $,
                    ).map(
                        ($) => Phrase(
                            $,
                        ),
                    )],
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ['optional', _p.optional.from.optional(
                        $,
                    ).map(
                        ($) => Phrase(
                            $,
                        ),
                    )],
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ['nothing', null],
                )
            case 'rich list':
                return _p.ss(
                    $,
                    ($) => ['rich list', {
                        'items': _p_change_context(
                            $['items'],
                            ($) => _p.list.from.list(
                                $,
                            ).map(
                                ($) => Phrase(
                                    $,
                                ),
                            ),
                        ),
                        'if empty': _p_change_context(
                            $['if empty'],
                            ($) => Phrase(
                                $,
                            ),
                        ),
                        'if not empty': _p_change_context(
                            $['if not empty'],
                            ($) => ({
                                'before': _p_change_context(
                                    $['before'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                                'separator': _p_change_context(
                                    $['separator'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                                'after': _p_change_context(
                                    $['after'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                            }),
                        ),
                    }],
                )
            default:
                return _p.au(
                    $[0],
                )
        }
    },
)
