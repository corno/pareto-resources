
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/remove/unmarshall"

import * as t_external_path from "../path/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_external_path from "../path/unmarshall"
export const Parameters: t_signatures.Parameters = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'path': _p_cc(
            $.__get_entry(
                'path', 
                ($) => abort(
                    ['no such entry', "path"]
                )
            ), 
            ($) => v_external_path.Node_Path(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'error if not exists': _p_cc(
            $.__get_entry(
                'error if not exists', 
                ($) => abort(
                    ['no such entry', "error if not exists"]
                )
            ), 
            ($) => v_deserialize_boolean.deserialize(
                v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                ), 
                ($) => abort(
                    ['not a valid boolean', null]
                )
            )
        ),
    })
)
export const Error: t_signatures.Error = ($,abort) => _p_unreachable_code_path(
)
