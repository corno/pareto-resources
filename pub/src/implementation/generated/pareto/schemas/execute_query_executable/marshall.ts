import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/execute_query_executable/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
    'args': _p.deprecated_cc($['args'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'failed to spawn': return _p.ss($, ($) => ({
            'state': "failed to spawn",
            'value': ['verbose group', _p.dictionary.literal({
                'message': _p.deprecated_cc($['message'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'non zero exit code': return _p.ss($, ($) => ({
            'state': "non zero exit code",
            'value': ['verbose group', _p.dictionary.literal({
                'exit code': _p.deprecated_cc($['exit code'], ($) => ['optional', $.__decide(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'stderr': _p.deprecated_cc($['stderr'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _p.au($[0])
    }
})]
export const Result: _i_signatures._T_Result = ($, $p) => ['verbose group', _p.dictionary.literal({
    'stdout': _p.deprecated_cc($['stdout'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
