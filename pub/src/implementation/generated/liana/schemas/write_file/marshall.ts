
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/write_file/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_path from "../path/marshall"
export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'path': _p.deprecated_cc(
            $['path'], 
            ($) => v_external_path.Node_Path(
                $
            )
        ),
        'data': _p.deprecated_cc(
            $['data'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
    })
)]]
export const Error: t_signatures.Error = ($) => ['state', _p.decide.state(
    $, 
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'permission denied':
                return _p.ss(
                    $, 
                    ($) => ({
                        'option': 'permission denied',
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
