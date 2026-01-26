
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/remove/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external__path from "../path/marshall"
export const Parameters: t_signatures.Parameters = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'path': _p.deprecated_cc($['path'], ($,) => v_external_path.Node_Path($)),
    'error if not exists': _p.deprecated_cc($['error if not exists'], ($,) => ['text', ({
        'delimiter': ['backtick', null],
        'value': v_serialize_boolean.serialize($),
    })]),
}))]]
export const Error: t_signatures.Error = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'node does not exist':
            return _p.ss($, ($,) => ({
                'option': "node does not exist",
                'value': ['nothing', null],
            }))
        case 'permission denied':
            return _p.ss($, ($,) => ({
                'option': "permission denied",
                'value': ['nothing', null],
            }))
        default:
            return _p.au($[0])
    }
})]
