
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_sandboxed_query_executable/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target"

import * as v_external_terminal_output from "../../terminal_output/transformers/astn_sealed_target"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "args": _p_change_context(
            $['args'],
            ($) => ['list', _p.list.from.list(
                $,
            ).map(
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "working directory": _p_change_context(
            $['working directory'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', v_external_path.Context_Path(
                    $,
                )],
                () => ['not set', null],
            )],
        ),
    },
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
                        'value': ['group', ['verbose', _p.literal.dictionary(
                            {
                                "message": _p_change_context(
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
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'non zero exit code',
                        'value': ['group', ['verbose', _p.literal.dictionary(
                            {
                                "exit code": _p_change_context(
                                    $['exit code'],
                                    ($) => ['optional', _p.decide.optional(
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
                                "stderr": _p_change_context(
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
                return _p.au(
                    $[0],
                )
        }
    },
)]

export const Result: t_signatures.Result = ($) => ['group', ['verbose', _p.literal.dictionary(
    {
        "stdout": _p_change_context(
            $['stdout'],
            ($) => v_external_terminal_output.Message(
                $,
            ),
        ),
    },
)]]
