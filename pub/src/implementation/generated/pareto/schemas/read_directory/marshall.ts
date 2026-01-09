import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/read_directory/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_path from "../path/marshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _p.dictionary.literal({
    'path': _p.deprecated_cc($['path'], ($) => _i_r_path.Node_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory does not exist': return _p.ss($, ($) => ({
            'state': "directory does not exist",
            'value': ['nothing', null],
        }))
        case 'node is not a directory': return _p.ss($, ($) => ({
            'state': "node is not a directory",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ({
            'state': "file",
            'value': ['nothing', null],
        }))
        case 'directory': return _p.ss($, ($) => ({
            'state': "directory",
            'value': ['nothing', null],
        }))
        case 'other': return _p.ss($, ($) => ({
            'state': "other",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Result: _i_signatures._T_Result = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _p.dictionary.literal({
    'node type': _p.deprecated_cc($['node type'], ($) => Node_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'context directory': _p.deprecated_cc($['context directory'], ($) => _i_r_path.Context_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'path': _p.deprecated_cc($['path'], ($) => _i_r_path.Node_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
