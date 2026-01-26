
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/read_file/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external__path from "../path/marshall"
export const Parameters: t_signatures.Parameters = ($,) => v_external_path.Node_Path($)
export const Error: t_signatures.Error = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'file does not exist':
            return _p.ss($, ($,) => ({
                'option': "file does not exist",
                'value': ['nothing', null],
            }))
        case 'node is not a file':
            return _p.ss($, ($,) => ({
                'option': "node is not a file",
                'value': ['nothing', null],
            }))
        case 'permission denied':
            return _p.ss($, ($,) => ({
                'option': "permission denied",
                'value': ['nothing', null],
            }))
        case 'file too large':
            return _p.ss($, ($,) => ({
                'option': "file too large",
                'value': ['nothing', null],
            }))
        case 'device not ready':
            return _p.ss($, ($,) => ({
                'option': "device not ready",
                'value': ['nothing', null],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Result: t_signatures.Result = ($,) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
