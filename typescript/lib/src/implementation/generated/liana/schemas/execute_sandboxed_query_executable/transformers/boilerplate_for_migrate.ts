
import * as p_ from 'pareto-core/implementation/transformer'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_sandboxed_query_executable/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/execute_sandboxed_query_executable/data.js"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate.js"

import * as v_terminal_output from "../../terminal_output/transformers/boilerplate_for_migrate.js"

export const Parameters: t_signatures.Parameters = ($) => ({
    'args': p_change_context(
        $['args'],
        ($) => p_.from.list($,
        ).map(
            ($) => $,
        ),
    ),
    'working directory': p_change_context(
        $['working directory'],
        ($) => p_.from.optional($,
        ).map(
            ($) => v_path.Context_Path(
                $,
            ),
        ),
    ),
})

export const Error: t_signatures.Error = ($) => p_decide_state(
    $,
    ($): t_out.Error => {
        switch ($[0]) {
            case 'failed to spawn':
                return p_.option(
                    $,
                    ($) => ['failed to spawn', {
                        'message': p_change_context(
                            $['message'],
                            ($) => v_terminal_output.Message(
                                $,
                            ),
                        ),
                    }],
                )
            case 'non zero exit code':
                return p_.option(
                    $,
                    ($) => ['non zero exit code', {
                        'exit code': p_change_context(
                            $['exit code'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => $,
                            ),
                        ),
                        'stderr': p_change_context(
                            $['stderr'],
                            ($) => v_terminal_output.Message(
                                $,
                            ),
                        ),
                    }],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Result: t_signatures.Result = ($) => ({
    'stdout': p_change_context(
        $['stdout'],
        ($) => v_terminal_output.Message(
            $,
        ),
    ),
})
