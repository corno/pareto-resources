import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/execute_smelly_procedure_executable/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'args': _pa.deprecated_cc($['args'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'failed to spawn': return _pa.ss($, ($) => ({
            'state': "failed to spawn",
            'value': ['verbose group', _pa.dictionary.literal({
                'message': _pa.deprecated_cc($['message'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'non zero exit code': return _pa.ss($, ($) => ({
            'state': "non zero exit code",
            'value': ['verbose group', _pa.dictionary.literal({
                'exit code': _pa.deprecated_cc($['exit code'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]],
                    () => ['not set', null]
                )]),
                'stderr': _pa.deprecated_cc($['stderr'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'stdout': _pa.deprecated_cc($['stdout'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
