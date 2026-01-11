import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/path/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Up_Steps: _i_signatures._T_Up_Steps = ($, $p) => ['text', ({
    'delimiter': ['backtick', null],
    'value': $p['value serializers']['default number'](
        $,
        null
    ),
})]
export const Start: _i_signatures._T_Start = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'absolute': return _p.ss($, ($) => ({
            'state': "absolute",
            'value': ['nothing', null],
        }))
        case 'relative': return _p.ss($, ($) => ({
            'state': "relative",
            'value': ['verbose group', _p.dictionary.literal({
                'up steps': _p.deprecated_cc($['up steps'], ($) => Up_Steps(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        default: return _p.au($[0])
    }
})]
export const Context_Subpath: _i_signatures._T_Context_Subpath = ($, $p) => ['list', $.__l_map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
export const Context_Path: _i_signatures._T_Context_Path = ($, $p) => ['verbose group', _p.dictionary.literal({
    'start': _p.deprecated_cc($['start'], ($) => Start(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'subpath': _p.deprecated_cc($['subpath'], ($) => Context_Subpath(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Node_Path: _i_signatures._T_Node_Path = ($, $p) => ['verbose group', _p.dictionary.literal({
    'context': _p.deprecated_cc($['context'], ($) => Context_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'node': _p.deprecated_cc($['node'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Non_Normalized_Path: _i_signatures._T_Non_Normalized_Path = ($, $p) => ['verbose group', _p.dictionary.literal({
    'leading slash': _p.deprecated_cc($['leading slash'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'segments': _p.deprecated_cc($['segments'], ($) => ['list', $.__l_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'parent': return _p.ss($, ($) => ({
                'state': "parent",
                'value': ['nothing', null],
            }))
            case 'child': return _p.ss($, ($) => ({
                'state': "child",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'current': return _p.ss($, ($) => ({
                'state': "current",
                'value': ['nothing', null],
            }))
            case 'nothing': return _p.ss($, ($) => ({
                'state': "nothing",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })])]),
    'trailing slash': _p.deprecated_cc($['trailing slash'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
