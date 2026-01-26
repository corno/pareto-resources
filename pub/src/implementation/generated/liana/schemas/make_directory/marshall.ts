
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/make_directory/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external__path from "../path/marshall"
export const Parameters: t_signatures.Parameters = ($,) => v_external_path.Node_Path($)
export const Error: t_signatures.Error = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'directory already exists':
            return _p.ss($, ($,) => ({
                'option': "directory already exists",
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
