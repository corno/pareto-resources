
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen_multiline/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Directory: t_signatures.Directory = ($) => ['dictionary', _p.dictionary.map(
    $,
    ($, id) => Node(
        $,
    ),
)]

export const Node: t_signatures.Node = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'file':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'file',
                        'value': Paragraph(
                            $,
                        ),
                    }),
                )
            case 'directory':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'directory',
                        'value': Directory(
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
)]

export const Paragraph: t_signatures.Paragraph = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'composed':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'composed',
                        'value': ['list', _p.list.map(
                            $,
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
                        'value': ['list', _p.list.map(
                            $,
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
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "items": _p_change_context(
                                    $['items'],
                                    ($) => ['list', _p.list.map(
                                        $,
                                        ($) => Sentence(
                                            $,
                                        ),
                                    )],
                                ),
                                "if empty": _p_change_context(
                                    $['if empty'],
                                    ($) => Sentence(
                                        $,
                                    ),
                                ),
                                "if not empty": _p_change_context(
                                    $['if not empty'],
                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "indent": _p_change_context(
                                                $['indent'],
                                                ($) => ['text', {
                                                    'delimiter': ['none', null],
                                                    'value': _p_text_from_list(
                                                        v_serialize_boolean.serialize(
                                                            $,
                                                        ),
                                                        ($) => $,
                                                    ),
                                                }],
                                            ),
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

export const Sentence: t_signatures.Sentence = ($) => Phrase(
    $,
)

export const Phrase: t_signatures.Phrase = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'single line':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'single line',
                        'value': Single_Line(
                            $,
                        ),
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
                        'value': ['list', _p.list.map(
                            $,
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
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                "items": _p_change_context(
                                    $['items'],
                                    ($) => ['list', _p.list.map(
                                        $,
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
                                    ($) => ['group', ['verbose', _p.dictionary.literal(
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

export const Single_Line: t_signatures.Single_Line = ($) => ['list', _p.list.map(
    $,
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'snippet':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'snippet',
                            'value': ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        }),
                    )
                case 'serialize':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'serialize',
                            'value': List_of_Characters(
                                $,
                            ),
                        }),
                    )
                case 'rich list':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'rich list',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "items": _p_change_context(
                                        $['items'],
                                        ($) => ['list', _p.list.map(
                                            $,
                                            ($) => Single_Line(
                                                $,
                                            ),
                                        )],
                                    ),
                                    "if empty": _p_change_context(
                                        $['if empty'],
                                        ($) => Single_Line(
                                            $,
                                        ),
                                    ),
                                    "if not empty": _p_change_context(
                                        $['if not empty'],
                                        ($) => ['group', ['verbose', _p.dictionary.literal(
                                            {
                                                "before": _p_change_context(
                                                    $['before'],
                                                    ($) => Single_Line(
                                                        $,
                                                    ),
                                                ),
                                                "separator": _p_change_context(
                                                    $['separator'],
                                                    ($) => Single_Line(
                                                        $,
                                                    ),
                                                ),
                                                "after": _p_change_context(
                                                    $['after'],
                                                    ($) => Single_Line(
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
    )],
)]

export const List_of_Characters: t_signatures.List_of_Characters = ($) => ['list', _p.list.map(
    $,
    ($) => ['text', {
        'delimiter': ['none', null],
        'value': _p_text_from_list(
            v_serialize_number.serialize(
                $,
            ),
            ($) => $,
        ),
    }],
)]
