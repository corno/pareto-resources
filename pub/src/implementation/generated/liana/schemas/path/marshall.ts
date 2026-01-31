
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/path/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Node_Path: t_signatures.Node_Path = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'context': _p_cc(
            $['context'],
            ($) => Context_Path(
                $
            )
        ),
        'node': _p_cc(
            $['node'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
    }
)]]

export const Context_Path: t_signatures.Context_Path = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'start': _p_cc(
            $['start'],
            ($) => Start(
                $
            )
        ),
        'subpath': _p_cc(
            $['subpath'],
            ($) => Context_Subpath(
                $
            )
        ),
    }
)]]

export const Context_Subpath: t_signatures.Context_Subpath = ($) => ['list', _p.list.map(
    $,
    ($) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }]
)]

export const Start: t_signatures.Start = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'absolute':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'absolute',
                        'value': ['nothing', null],
                    })
                )
            case 'relative':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'relative',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'up steps': _p_cc(
                                    $['up steps'],
                                    ($) => Up_Steps(
                                        $
                                    )
                                ),
                            }
                        )]],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]

export const Up_Steps: t_signatures.Up_Steps = ($) => ['text', {
    'delimiter': ['none', null],
    'value': v_serialize_number.serialize(
        $
    ),
}]

export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'leading slash': _p_cc(
            $['leading slash'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_serialize_boolean.serialize(
                    $
                ),
            }]
        ),
        'segments': _p_cc(
            $['segments'],
            ($) => ['list', _p.list.map(
                $,
                ($) => ['state', _p.decide.state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'parent':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'parent',
                                        'value': ['nothing', null],
                                    })
                                )
                            case 'child':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'child',
                                        'value': ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    })
                                )
                            case 'current':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'current',
                                        'value': ['nothing', null],
                                    })
                                )
                            case 'nothing':
                                return _p.ss(
                                    $,
                                    ($) => ({
                                        'option': 'nothing',
                                        'value': ['nothing', null],
                                    })
                                )
                            default:
                                return _p.au(
                                    $[0]
                                )
                        }
                    }
                )]
            )]
        ),
        'trailing slash': _p_cc(
            $['trailing slash'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_serialize_boolean.serialize(
                    $
                ),
            }]
        ),
    }
)]]
