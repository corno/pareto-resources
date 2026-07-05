
import * as p_ from 'pareto-core/implementation/transformer'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_sandboxed_command_executable/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target.js"

import * as v_external_terminal_output from "../../terminal_output/transformers/astn_sealed_target.js"

import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)


export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "args": p_change_context(
            $['args'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "working directory": p_change_context(
            $['working directory'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', v_external_path.Context_Path(
                    $,
                )],
                () => ['not set', null],
            )],
        ),
    },
)]]

export const Error: t_signatures.Error = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'failed to spawn':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'failed to spawn',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "message": p_change_context(
                                    $['message'],
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'non zero exit code':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'non zero exit code',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "exit code": p_change_context(
                                    $['exit code'],
                                    ($) => ['optional', p_decide_optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.decimal(
                                                $,
                                            ),
                                        }]],
                                        () => ['not set', null],
                                    )],
                                ),
                                "stderr": p_change_context(
                                    $['stderr'],
                                    ($) => v_external_terminal_output.Message(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]
