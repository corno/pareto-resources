
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/execute_any_command_executable/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/execute_any_command_executable/data"

import * as v_terminal_output from "../../terminal_output/transformers/boilerplate_for_migrate"

export const Parameters: t_signatures.Parameters = ($) => ({
    'program': _p_change_context(
        $['program'],
        ($) => $,
    ),
    'args': _p_change_context(
        $['args'],
        ($) => _p.list.map(
            $,
            ($) => $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => _p.decide.state(
    $,
    ($): t_out.Error => {
        switch ($[0]) {
            case 'failed to spawn':
                return _p.ss(
                    $,
                    ($) => ['failed to spawn', {
                        'message': _p_change_context(
                            $['message'],
                            ($) => v_terminal_output.Message(
                                $,
                            ),
                        ),
                    }],
                )
            case 'non zero exit code':
                return _p.ss(
                    $,
                    ($) => ['non zero exit code', {
                        'exit code': _p_change_context(
                            $['exit code'],
                            ($) => _p.optional.map(
                                $,
                                ($) => $,
                            ),
                        ),
                        'stderr': _p_change_context(
                            $['stderr'],
                            ($) => v_terminal_output.Message(
                                $,
                            ),
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
