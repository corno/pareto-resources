import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/copy/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_path from "../path/marshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'source': _pa.cc($['source'], ($) => _i_r_path.Node_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'target': _pa.cc($['target'], ($) => _i_r_path.Node_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'options': _pa.cc($['options'], ($) => ['verbose group', _pa.dictionary_literal({
        'recursive': _pa.cc($['recursive'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })]],
            () => ['not set', null]
        )]),
        'force': _pa.cc($['force'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })]],
            () => ['not set', null]
        )]),
        'errorOnExist': _pa.cc($['errorOnExist'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })]],
            () => ['not set', null]
        )]),
    })]),
})]
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'source does not exist': return _pa.ss($, ($) => ({
            'state': "source does not exist",
            'value': ['nothing', null],
        }))
        case 'node is not a file': return _pa.ss($, ($) => ({
            'state': "node is not a file",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        case 'file too large': return _pa.ss($, ($) => ({
            'state': "file too large",
            'value': ['nothing', null],
        }))
        case 'device not ready': return _pa.ss($, ($) => ({
            'state': "device not ready",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
