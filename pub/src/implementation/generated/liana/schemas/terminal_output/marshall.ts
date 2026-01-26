
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/terminal_output/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Message: t_signatures.Message = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'lines': _p.deprecated_cc($['lines'], ($,) => ['list', $.__l_map(($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'raw': _p.deprecated_cc($['raw'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]
