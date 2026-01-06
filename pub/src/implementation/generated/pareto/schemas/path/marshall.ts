import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/path/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Up_Steps: _i_signatures._T_Up_Steps = ($, $p) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $p['value serializers']['default number'](
        $,
        null
    ),
})]
export const Start: _i_signatures._T_Start = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'absolute': return _pa.ss($, ($) => ({
            'state': "absolute",
            'value': ['nothing', null],
        }))
        case 'relative': return _pa.ss($, ($) => ({
            'state': "relative",
            'value': ['verbose group', _pa.dictionary.literal({
                'up steps': _pa.deprecated_cc($['up steps'], ($) => Up_Steps(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Context_Subpath: _i_signatures._T_Context_Subpath = ($, $p) => ['list', $.map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
export const Context_Path: _i_signatures._T_Context_Path = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'start': _pa.deprecated_cc($['start'], ($) => Start(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'subpath': _pa.deprecated_cc($['subpath'], ($) => Context_Subpath(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Node_Path: _i_signatures._T_Node_Path = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'context': _pa.deprecated_cc($['context'], ($) => Context_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'node': _pa.deprecated_cc($['node'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Non_Normalized_Path: _i_signatures._T_Non_Normalized_Path = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'leading slash': _pa.deprecated_cc($['leading slash'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'segments': _pa.deprecated_cc($['segments'], ($) => ['list', $.map(($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'parent': return _pa.ss($, ($) => ({
                'state': "parent",
                'value': ['nothing', null],
            }))
            case 'child': return _pa.ss($, ($) => ({
                'state': "child",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'current': return _pa.ss($, ($) => ({
                'state': "current",
                'value': ['nothing', null],
            }))
            case 'nothing': return _pa.ss($, ($) => ({
                'state': "nothing",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })])]),
    'trailing slash': _pa.deprecated_cc($['trailing slash'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
