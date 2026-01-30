
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/copy/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_path from "../path/marshall"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'source': _p_cc(
            $['source'],
            ($) => v_external_path.Node_Path(
                $
            )
        ),
        'target': _p_cc(
            $['target'],
            ($) => v_external_path.Node_Path(
                $
            )
        ),
        'options': _p_cc(
            $['options'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    'recursive': _p_cc(
                        $['recursive'],
                        ($) => ['optional', _p.decide.optional(
                            $,
                            ($): t_out.Value.optional => ['set', ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_boolean.serialize(
                                    $
                                ),
                            }]],
                            () => ['not set', null]
                        )]
                    ),
                    'force': _p_cc(
                        $['force'],
                        ($) => ['optional', _p.decide.optional(
                            $,
                            ($): t_out.Value.optional => ['set', ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_boolean.serialize(
                                    $
                                ),
                            }]],
                            () => ['not set', null]
                        )]
                    ),
                    'errorOnExist': _p_cc(
                        $['errorOnExist'],
                        ($) => ['optional', _p.decide.optional(
                            $,
                            ($): t_out.Value.optional => ['set', ['text', {
                                'delimiter': ['none', null],
                                'value': v_serialize_boolean.serialize(
                                    $
                                ),
                            }]],
                            () => ['not set', null]
                        )]
                    ),
                }
            )]]
        ),
    }
)]]

export const Error: t_signatures.Error = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'source does not exist':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'source does not exist',
                        'value': ['nothing', null],
                    })
                )
            case 'node is not a file':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'node is not a file',
                        'value': ['nothing', null],
                    })
                )
            case 'permission denied':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'permission denied',
                        'value': ['nothing', null],
                    })
                )
            case 'file too large':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'file too large',
                        'value': ['nothing', null],
                    })
                )
            case 'device not ready':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'device not ready',
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
