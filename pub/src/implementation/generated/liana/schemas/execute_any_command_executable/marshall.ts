
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/execute_any_command_executable/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_terminal_output from "../terminal_output/marshall"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'program': _p_cc(
            $['program'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
        'args': _p_cc(
            $['args'],
            ($) => ['list', $.__l_map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]
            )]
        ),
    }
)]]

export const Error: t_signatures.Error = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'failed to spawn':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'failed to spawn',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'message': _p_cc(
                                    $['message'],
                                    ($) => v_external_terminal_output.Message(
                                        $
                                    )
                                ),
                            }
                        )]],
                    })
                )
            case 'non zero exit code':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'non zero exit code',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'exit code': _p_cc(
                                    $['exit code'],
                                    ($) => ['optional', $.__decide(
                                        ($): t_out.Value.optional => ['set', ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_serialize_number.serialize(
                                                $
                                            ),
                                        }]],
                                        () => ['not set', null]
                                    )]
                                ),
                                'stderr': _p_cc(
                                    $['stderr'],
                                    ($) => v_external_terminal_output.Message(
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
