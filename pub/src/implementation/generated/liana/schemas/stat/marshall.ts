
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/stat/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_path from "../path/marshall"

export const Parameters: t_signatures.Parameters = ($) => v_external_path.Node_Path(
    $
)

export const Error: t_signatures.Error = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'node does not exist':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'node does not exist',
                        'value': ['nothing', null],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]

export const Result: t_signatures.Result = ($) => Node_Type(
    $
)

export const Node_Type: t_signatures.Node_Type = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'file':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'file',
                        'value': ['nothing', null],
                    })
                )
            case 'directory':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'directory',
                        'value': ['nothing', null],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]
